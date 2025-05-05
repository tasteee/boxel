import { datass } from 'datass'
import { arrayHelpers } from '@/modules/array'
import { VoxelT } from '@/global'
import { $colors } from './colors'

const undoRedoMiddleware = datass.middleware.undoRedo({ maxHistory: 50 })
const datassWithHistory = datass.withMiddleware(undoRedoMiddleware)

type VoxelOptionsT = {
  x: number
  y: number
  z: number
  color?: string
}

class Voxels {
  data = datassWithHistory.object({})
  hoveredId = datass.string('')
  highlightedIds = datass.array<string>([])

  useIsVoxelHovered = (id: string) => {
    return this.hoveredId.use() === id
  }

  createId = (x: any, y: any, z: any) => {
    return `${x},${y},${z}`
  }

  createVoxel = (options: VoxelOptionsT) => {
    const id = this.createId(options.x, options.y, options.z)
    const color = options.color || $colors.active.state

    return {
      id,
      x: options.x,
      y: options.y,
      z: options.z,
      color
    }
  }

  addVoxel = (options: VoxelOptionsT) => {
    const newVoxel = this.createVoxel(options)
    const newData = { ...this.data.state, [newVoxel.id]: newVoxel }
    this.data.set(newData)
    $colors.addColorToHistory(newVoxel.color)
  }

  useVoxel = (id: string) => {
    return this.data.use((data) => data[id] as VoxelT)
  }

  setHoveredId = (id: string) => {
    this.hoveredId.set(id)
  }

  unsetHoveredId = (id: string) => {
    if (this.hoveredId.state !== id) return
    this.hoveredId.set('')
  }

  highlightVoxels = (ids: string[]) => {
    this.highlightedIds.set(ids)
  }

  unhighlightVoxels = (ids: string[]) => {
    const newHighlightedIds = arrayHelpers.withoutItems(this.highlightedIds.state, ...ids)
    this.highlightedIds.set(newHighlightedIds)
  }

  getVoxelsOfColor = (color: string) => {
    return Object.values(this.data.state).filter((voxel: VoxelT) => voxel.color === color)
  }

  paintVoxel = (id: string, color: string = $colors.active.state) => {
    const updatedVoxel = { ...this.data.state[id], color }
    const newData = { ...this.data.state, [id]: updatedVoxel }
    this.data.set(newData)
  }

  updateVoxelsColor = (oldColor: string, newColor: string) => {
    const voxels = this.getVoxelsOfColor(oldColor)

    const updatedVoxelEntries = voxels.map((voxel: VoxelT) => {
      const updatedVoxel = { ...voxel, color: newColor }
      return [voxel.id, updatedVoxel]
    })

    const updatedVoxels = Object.fromEntries(updatedVoxelEntries)
    const newData = { ...this.data.state, ...updatedVoxels }
    this.data.set(newData)
  }

  removeVoxel = (id: string) => {
    const data = this.data.state
    delete data[id]
    this.data.set({ ...data })
    console.log('removed cube ', id)
  }

  checkPositionOccupation = (positions: any) => {
    const id = this.createId(positions.x, positions.y, positions.z)
    return !!this.data.state[id]
  }

  useVoxelIds = () => {
    return this.data.use((data) => Object.keys(data))
  }
}

const $voxels = new Voxels()
export type ColorsT = typeof $voxels
export { $voxels }

globalThis.$voxels = $voxels

window.addEventListener('keypress', (event) => {
  const isCtrlOrCmd = event.ctrlKey || event.metaKey
  const isZ = event.code === 'KeyZ'
  const isShift = event.shiftKey

  if (isCtrlOrCmd && isZ) {
    if (isShift) {
      $voxels.data.set.redo()
    } else {
      $voxels.data.set.undo()
    }
  }
})
