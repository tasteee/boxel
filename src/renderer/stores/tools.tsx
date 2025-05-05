import { PositionT } from '@/global'
import { getLinePositions } from '@/modules/getLinePositions'
import { datass } from 'datass'
import { $voxels } from './voxels'

export type ToolType = 'place' | 'erase' | 'paint' | 'select' | 'move' | 'rotate' | 'scale' | 'clone'
export type ToolMode = 'single' | 'freehand' | 'linear' | 'box' | 'face' | 'color' | 'region' | 'rectangle'
export type BrushShape = 'cube' | 'sphere'
export type SelectionModifier = 'replace' | 'add' | 'remove'
export type ConnectionMode = 'four-neighbor' | 'eight-neighbor'

class ToolStore {
  active = datass.string('place')
  activeToolMode = datass.string<ToolMode>('single')
  brushShape = datass.string<BrushShape>('cube')
  brushSize = datass.number(1)
  isFillEnabled = datass.boolean(false)
  isSameColorModifierActive = datass.boolean(false)

  isDrawingLine = datass.boolean(false)
  lineStartPosition = datass.object({ x: 0, y: 0, z: 0 })
  linePositions = datass.array<PositionT>([])

  updateLinePositions = (endPosition: PositionT) => {
    const start = this.lineStartPosition.state
    const startPositions = [start.x, start.y, start.z]
    const endPositions = [endPosition.x, endPosition.y, endPosition.z]
    const inputPositions = [...startPositions, ...endPositions]
    const positions = getLinePositions(...inputPositions)
    this.linePositions.set(positions)
  }

  commitLineVoxels = () => {
    const newVoxelPositions = [this.lineStartPosition.state, ...this.linePositions.state]
    newVoxelPositions.forEach($voxels.addVoxel)
    this.isDrawingLine.set(false)
    this.lineStartPosition.set({ x: 0, y: 0, z: 0 })
    this.linePositions.set([])
  }

  /** How selection operations modify the current selection set */
  selectionModifier = datass.string<SelectionModifier>('replace')

  /** Connection mode for face operations */
  connectionMode = datass.string<ConnectionMode>('four-neighbor')

  mirrorX = datass.boolean(false)

  mirrorY = datass.boolean(false)

  mirrorZ = datass.boolean(false)

  stretchX = datass.number(1)
  stretchY = datass.number(1)
  stretchZ = datass.number(1)
  materialLayer = datass.number(1)

  /** Available tool modes for each tool type */
  availableToolsModes = {
    place: ['single', 'freehand', 'linear', 'box', 'face'],
    erase: ['single', 'freehand', 'linear', 'box', 'face'],
    paint: ['single', 'freehand', 'linear', 'box', 'face', 'color'],
    select: ['region', 'box', 'face', 'color', 'rectangle'],
    move: ['single'],
    rotate: ['single'],
    scale: ['single'],
    clone: ['single']
  } as any

  /**
   * Tools that support brush shape and size settings
   */
  brushCompatibleTools = ['place', 'erase', 'paint', 'select']

  /**
   * Modes that support fill operations
   */
  fillCompatibleModes = ['box', 'face']

  /**
   * Selection manipulation options
   */
  selectionTools = {
    expandSelection: () => {
      // Implementation to be provided in UI layer
      console.log('Expand selection')
    },
    contractSelection: () => {
      // Implementation to be provided in UI layer
      console.log('Contract selection')
    },
    invertSelection: () => {
      // Implementation to be provided in UI layer
      console.log('Invert selection')
    },
    selectAll: () => {
      // Implementation to be provided in UI layer
      console.log('Select all')
    },
    deselectAll: () => {
      // Implementation to be provided in UI layer
      console.log('Deselect all')
    }
  }

  /**
   * Material editing options
   */
  materialSettings = {
    roughness: datass.number(0.5),
    metallic: datass.number(0),
    emissive: datass.number(0),
    castShadows: datass.boolean(true)
  }

  /**
   * View options
   */
  viewSettings = {
    showGrid: datass.boolean(true),
    showFrame: datass.boolean(true),
    showAxisLines: datass.boolean(true),
    arMode: datass.boolean(false)
  }

  /**
   * Helper to check if the current tool supports brush settings
   */
  supportsBrush(): boolean {
    return this.brushCompatibleTools.includes(this.active.state)
  }

  /**
   * Helper to check if the current tool/mode supports fill operations
   */
  supportsFill(): boolean {
    return this.fillCompatibleModes.includes(this.activeToolMode.state)
  }

  /**
   * Helper to check if the current tool/mode supports same color filtering
   */
  supportsSameColorOnly(): boolean {
    const toolType = this.active.state
    const toolMode = this.activeToolMode.state

    // Color selection mode always uses same color logic
    if (toolMode === 'color') return true

    // Erase and paint tools can work with same color only
    if (toolType === 'erase' || toolType === 'paint') return true

    // Face mode can work with same color only (for connected faces)
    if (toolMode === 'face') return true

    return false
  }

  checkConnectionModeSupport = (): boolean => {
    return this.activeToolMode.state === 'face'
  }

  checkSelectionModifierSupport = (): boolean => {
    return this.active.state === 'select'
  }

  useAvailableToolModes = () => {
    const activeTool = this.active.use()
    return this.availableToolsModes[activeTool] as string[]
  }

  /**
   * Switch to a tool type and automatically select a valid mode
   */
  switchToTool = (toolId: any) => {
    const availableModes = this.availableToolsModes[toolId] || []
    console.log({ toolId, availableModes })
    this.active.set(toolId)

    // Make sure the current mode is valid for the new tool
    if (!availableModes.includes(this.activeToolMode.state)) {
      // Default to the first available mode if current is invalid
      this.activeToolMode.set(availableModes[0])
    }
  }

  /**
   * Set brush size with validation
   */
  setBrushSize(size: number): void {
    // Ensure size is between 1 and 32
    const validSize = Math.max(1, Math.min(32, Math.floor(size)))
    this.brushSize.set(validSize)
  }

  /**
   * Toggle connection mode between 4-neighbor and 8-neighbor
   */
  toggleConnectionMode(): void {
    if (this.connectionMode.state === 'four-neighbor') {
      this.connectionMode.set('eight-neighbor')
    } else {
      this.connectionMode.set('four-neighbor')
    }
  }

  /**
   * Update material settings for current layer
   */
  updateMaterialSettings(settings: {
    roughness?: number
    metallic?: number
    emissive?: number
    castShadows?: boolean
  }): void {
    if (settings.roughness !== undefined) {
      this.materialSettings.roughness.set(Math.max(0, Math.min(1, settings.roughness)))
    }

    if (settings.metallic !== undefined) {
      this.materialSettings.metallic.set(Math.max(0, Math.min(1, settings.metallic)))
    }

    if (settings.emissive !== undefined) {
      this.materialSettings.emissive.set(Math.max(0, Math.min(1, settings.emissive)))
    }

    if (settings.castShadows !== undefined) {
      this.materialSettings.castShadows.set(settings.castShadows)
    }
  }

  /**
   * Reset all tool settings to defaults
   */
  resetAllSettings(): void {
    // Reset core tool settings
    this.active.set.reset()
    this.activeToolMode.set.reset()
    this.brushShape.set.reset()
    this.brushSize.set.reset()
    this.isFillEnabled.set.reset()
    this.isSameColorModifierActive.set.reset()
    this.selectionModifier.set.reset()
    this.connectionMode.set.reset()

    // Reset mirror and stretch settings
    this.mirrorX.set.reset()
    this.mirrorY.set.reset()
    this.mirrorZ.set.reset()
    this.stretchX.set.reset()
    this.stretchY.set.reset()
    this.stretchZ.set.reset()

    // Reset material layer
    this.materialLayer.set.reset()

    // Reset material settings
    this.materialSettings.roughness.set.reset()
    this.materialSettings.metallic.set.reset()
    this.materialSettings.emissive.set.reset()
    this.materialSettings.castShadows.set.reset()

    // Reset view settings
    this.viewSettings.showGrid.set.reset()
    this.viewSettings.showFrame.set.reset()
    this.viewSettings.showAxisLines.set.reset()
    this.viewSettings.arMode.set.reset()
  }
}

// Create and export the singleton instance
const $tools = new ToolStore()
export type ToolStoreType = typeof $tools
export { $tools }

// Make the store globally available
globalThis.$tools = $tools

window.addEventListener('keypress', (event) => {
  if (event.ctrlKey) return
  if (event.altKey) return
  if (event.shiftKey) return

  const tag = document.activeElement.tagName
  const isEditable = document.activeElement.isContentEditable
  const isInput = tag === 'INPUT' || tag === 'TEXTAREA'
  if (isInput || isEditable) return

  if (event.code === 'Digit1') return $tools.active.set('place')
  if (event.code === 'Digit2') return $tools.active.set('erase')
  if (event.code === 'Digit3') return $tools.active.set('paint')
  if (event.code === 'Digit4') return $tools.active.set('select')
  if (event.code === 'Digit5') return $tools.active.set('move')
  if (event.code === 'Digit6') return $tools.active.set('rotate')
  if (event.code === 'Digit7') return $tools.active.set('scale')
  if (event.code === 'Digit8') return $tools.active.set('clone')
})
