// import './LeftPanel.css'
// import { Button, Card, Field, Input, Stack, ColorSwatch } from '@chakra-ui/react'

// import { ActiveColorPicker } from './ActiveColorPicker'
// import { datass } from 'datass'
// import { ColorSquareSection } from './ColorSquareSection'
// import { Heading, Separator, HStack } from '@chakra-ui/react'
// import { CaretIcon } from './CaretIcon'
// import { $colors } from '@/stores/colors'
// import { $tools } from '@/stores/tools'

// // Leave these global.
// const $isPlaceSectionOpen = datass.boolean(true)
// const $isColorSectionOpen = datass.boolean(true)

// const $isColorPaletteOpen = datass.boolean(true)
// const $isColorHistoryOpen = datass.boolean(true)

// export const LeftPanel = () => {
//   return (
//     <>
//       <Card.Root maxW="sm" className="LeftPanel">
//         <Card.Body className="LeftPanelBody">
//           <PlaceToolSection />

//           <ColorSection />
//         </Card.Body>
//       </Card.Root>
//     </>
//   )
// }

// const ColorSection = () => {
//   const colorPalette = $colors.palette.use()
//   const colorHistory = $colors.history.use()
//   const isColorSectionOpen = $isColorSectionOpen.use()
//   const isColorPaletteOpen = $isColorPaletteOpen.use()
//   const isColorHistoryOpen = $isColorHistoryOpen.use()

//   return (
//     <Stack gap="4" w="full">
//       <SectionHeader title="Color" isOpen={isColorSectionOpen} toggleOpen={() => $isColorSectionOpen.set.toggle()} />

//       {isColorSectionOpen && (
//         <>
//           <ActiveColorPicker />
//           <ColorSquareSection
//             label="Palette"
//             colors={colorPalette}
//             isOpen={isColorPaletteOpen}
//             toggleOpen={() => $isColorPaletteOpen.set.toggle()}
//             onAddButtonClick={() => $colors.addColorToPalette($colors.active.state)}
//             shouldShowAddButton
//           />

//           <ColorSquareSection
//             label="History"
//             colors={colorHistory}
//             isOpen={isColorHistoryOpen}
//             toggleOpen={() => $isColorHistoryOpen.set.toggle()}
//           />
//         </>
//       )}
//     </Stack>
//   )
// }

// type SectionHeaderPropsT = {}

// const SectionHeader = (props: SectionHeaderPropsT) => {
//   return (
//     <HStack>
//       <Heading>{props.title}</Heading>
//       <CaretIcon size={24} isOpen={props.isOpen} onClick={props.toggleOpen} />
//       <Separator flex="1" />
//     </HStack>
//   )
// }

// // No props needed. Read from $tools store.
// const PlaceToolSection = () => {
//   const isPlaceSectionOpen = $isPlaceSectionOpen.use()

//   return (
//     <Stack gap="4" w="full">
//       <SectionHeader title="Place Tool" isOpen={isPlaceSectionOpen} toggleOpen={() => $isPlaceSectionOpen.set.toggle()} />
//     </Stack>
//   )
// }

import './LeftPanel.css'
import {
  Button,
  Card,
  Field,
  Stack,
  Heading,
  Separator,
  HStack,
  VStack,
  Text,
  Slider,
  RadioGroup,
  Select,
  Grid,
  Switch,
  IconButton,
  Wrap
} from '@chakra-ui/react'

import { ActiveColorPicker } from './ActiveColorPicker'
import { datass } from 'datass'
import { ColorSquareSection } from './ColorSquareSection'
import { CaretIcon } from './CaretIcon'
import { $colors } from '@/stores/colors'
import { $tools } from '@/stores/tools'
import { Icon } from '@iconify/react/dist/iconify.js'
import { CuteIcon } from './CuteIcon'
import { SheSpacer } from './SheSpacer'

// Leave these global.
const $isPlaceSectionOpen = datass.boolean(true)
const $isColorSectionOpen = datass.boolean(true)
const $isColorPaletteOpen = datass.boolean(true)
const $isColorHistoryOpen = datass.boolean(true)
const $isToolsOpen = datass.boolean(true)
const $isViewSettingsOpen = datass.boolean(false)
const $isMaterialSettingsOpen = datass.boolean(false)

export const LeftPanel = () => {
  return (
    <>
      <Card.Root maxW="sm" className="LeftPanel">
        <Card.Body className="LeftPanelBody">
          {/* <ToolsSection /> */}
          {/* <PlaceToolSection /> */}
          {/* <ToolModeSelector /> */}
          <ColorSection />
          {/* <ViewSettingsSection /> */}
          {/* <MaterialSettingsSection /> */}
        </Card.Body>
      </Card.Root>
    </>
  )
}

const ColorSection = () => {
  const isColorSectionOpen = $isColorSectionOpen.use()

  return (
    <Stack gap="4" w="full">
      <SectionHeader title="Color" isOpen={isColorSectionOpen} toggleOpen={() => $isColorSectionOpen.set.toggle()} />

      {isColorSectionOpen && (
        <>
          <ActiveColorPicker />
          <PaletteSection />
          <HistorySection />
        </>
      )}
    </Stack>
  )
}

const hiddenButtonStyle = {
  pointerEvents: 'none',
  visibility: 'hidden'
}

const HistorySection = () => {
  const colorHistory = $colors.history.use()
  const isColorHistoryOpen = $isColorHistoryOpen.use()

  const buttonStyle = isColorHistoryOpen ? {} : hiddenButtonStyle

  return (
    <ColorSquareSection
      label="History"
      colors={colorHistory}
      isOpen={isColorHistoryOpen}
      toggleOpen={() => $isColorHistoryOpen.set.toggle()}
    >
      <Button variant="ghost" size="xs" style={buttonStyle}>
        Clear
      </Button>
    </ColorSquareSection>
  )
}

const PaletteSection = () => {
  const colorPalette = $colors.palette.use()
  const isColorPaletteOpen = $isColorPaletteOpen.use()

  const buttonStyle = isColorPaletteOpen ? {} : hiddenButtonStyle

  return (
    <ColorSquareSection
      label="Palette"
      colors={colorPalette}
      isOpen={isColorPaletteOpen}
      toggleOpen={() => $isColorPaletteOpen.set.toggle()}
      onAddButtonClick={() => $colors.addColorToPalette($colors.active.state)}
      shouldShowAddButton
    >
      <Button variant="ghost" size="xs" style={buttonStyle}>
        Import
      </Button>
    </ColorSquareSection>
  )
}

type SectionHeaderPropsT = {
  title: string
  isOpen: boolean
  toggleOpen: () => void
}

const SectionHeader = (props: SectionHeaderPropsT) => {
  return (
    <HStack>
      <Heading>{props.title}</Heading>
      <CaretIcon size={24} isOpen={props.isOpen} onClick={props.toggleOpen} />
      <Separator flex="1" />
    </HStack>
  )
}

const ToolsSection = () => {
  const isToolsOpen = $isToolsOpen.use()
  const activeToolType = $tools.active.use()

  const toolButtons = [
    { value: 'place', label: 'Place' },
    { value: 'erase', label: 'Erase' },
    { value: 'paint', label: 'Paint' },
    { value: 'select', label: 'Select' },
    { value: 'move', label: 'Move' },
    { value: 'rotate', label: 'Rotate' },
    { value: 'scale', label: 'Scale' },
    { value: 'clone', label: 'Clone' }
  ]

  return (
    <Stack gap="4" w="full" mb="4">
      <SectionHeader title="Tools" isOpen={isToolsOpen} toggleOpen={() => $isToolsOpen.set.toggle()} />
      {isToolsOpen && (
        <Grid templateColumns="repeat(4, 1fr)" gap="2">
          {toolButtons.map((tool) => (
            <Button
              key={tool.value}
              size="sm"
              colorScheme={activeToolType === tool.value ? 'blue' : 'gray'}
              onClick={() => $tools.switchToTool(tool.value as any)}
            >
              {tool.label}
            </Button>
          ))}
        </Grid>
      )}
    </Stack>
  )
}

// Dynamic tool options section based on active tool
const PlaceToolSection = () => {
  const isPlaceSectionOpen = $isPlaceSectionOpen.use()
  const activeToolType = $tools.active.use()
  const activeMode = $tools.activeToolMode.use()
  const brushSize = $tools.brushSize.use()
  const brushShape = $tools.brushShape.use()
  const fillEnabled = $tools.isFillEnabled.use()
  const sameColorOnly = $tools.isSameColorModifierActive.use()
  const selectionModifier = $tools.selectionModifier.use()
  const connectionMode = $tools.connectionMode.use()
  const mirrorX = $tools.mirrorX.use()
  const mirrorY = $tools.mirrorY.use()
  const mirrorZ = $tools.mirrorZ.use()
  const stretchX = $tools.stretchX.use()
  const stretchY = $tools.stretchY.use()
  const stretchZ = $tools.stretchZ.use()

  // Get available modes for current tool

  const supportsBrush = $tools.supportsBrush()
  const supportsFill = $tools.supportsFill()
  const supportsSameColorOnly = $tools.supportsSameColorOnly()
  const supportsConnectionMode = $tools.checkConnectionModeSupport()
  const supportsSelectionModifier = $tools.checkSelectionModifierSupport()

  return (
    <Stack gap="4" w="full" mb="4">
      <SectionHeader
        title={`${activeToolType.charAt(0).toUpperCase() + activeToolType.slice(1)} Tool Options`}
        isOpen={isPlaceSectionOpen}
        toggleOpen={() => $isPlaceSectionOpen.set.toggle()}
      />

      {/* <ToolModeSelector /> */}
      {isPlaceSectionOpen && (
        <VStack align="stretch" spacing="3">
          {/* Brush Settings */}
          {supportsBrush && (
            <>
              <Field.Root>
                <Field.Label>Brush Shape</Field.Label>
                <RadioGroup.Root value={brushShape} onChange={(value) => $tools.brushShape.set(value as any)}>
                  <HStack>
                    <RadioGroup.Item value="cube">
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>Cube</RadioGroup.ItemText>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="sphere">
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>Sphere</RadioGroup.ItemText>
                    </RadioGroup.Item>
                  </HStack>
                </RadioGroup.Root>
              </Field.Root>

              <Slider.Root
                width="200px"
                min={1}
                max={32}
                step={1}
                defaultValue={[brushSize]}
                onChange={(value) => $tools.setBrushSize(value)}
              >
                <Slider.Label>Brush Size: {brushSize}</Slider.Label>
                <Slider.Control>
                  <Slider.Track>
                    <Slider.Range />
                  </Slider.Track>
                  <Slider.Thumbs />
                </Slider.Control>
              </Slider.Root>
            </>
          )}

          {/* Fill Option */}
          {supportsFill && (
            <Field.Root>
              <Field.Label>Fill</Field.Label>
              <Switch isChecked={fillEnabled} onChange={() => $tools.isFillEnabled.toggle()} />
            </Field.Root>
          )}

          {/* Same Color Option */}
          {supportsSameColorOnly && (
            <Field.Root>
              <Field.Label>Same Color Only</Field.Label>
              <Switch isChecked={sameColorOnly} onChange={() => $tools.isSameColorModifierActive.toggle()} />
            </Field.Root>
          )}

          {/* Connection Mode */}
          {supportsConnectionMode && (
            <Field.Root>
              <Field.Label>Connection Mode</Field.Label>
              <Button size="sm" onClick={() => $tools.toggleConnectionMode()}>
                {connectionMode === 'four-neighbor' ? '4-Neighbor' : '8-Neighbor'}
              </Button>
            </Field.Root>
          )}

          {/* Selection Modifier */}
          {supportsSelectionModifier && (
            <Field.Root>
              <Field.Label>Selection Modifier</Field.Label>
              <RadioGroup.Root value={selectionModifier} onChange={(value) => $tools.selectionModifier.set(value as any)}>
                <HStack>
                  <RadioGroup.Item value="replace">
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText>Reolace</RadioGroup.ItemText>
                  </RadioGroup.Item>

                  <RadioGroup.Item value="add">
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText>Add</RadioGroup.ItemText>
                  </RadioGroup.Item>

                  <RadioGroup.Item value="remove">
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText>Remove</RadioGroup.ItemText>
                  </RadioGroup.Item>
                </HStack>
              </RadioGroup.Root>
            </Field.Root>
          )}

          {/* Selection Tools */}
          {activeToolType === 'select' && (
            <Field.Root>
              <Field.Label>Selection Actions</Field.Label>
              <Grid templateColumns="repeat(2, 1fr)" gap="2">
                <Button size="sm" onClick={() => $tools.selectionTools.expandSelection()}>
                  Expand
                </Button>
                <Button size="sm" onClick={() => $tools.selectionTools.contractSelection()}>
                  Contract
                </Button>
                <Button size="sm" onClick={() => $tools.selectionTools.invertSelection()}>
                  Invert
                </Button>
                <Button size="sm" onClick={() => $tools.selectionTools.selectAll()}>
                  Select All
                </Button>
                <Button size="sm" onClick={() => $tools.selectionTools.deselectAll()}>
                  Deselect
                </Button>
              </Grid>
            </Field.Root>
          )}

          {/* Mirror Options */}
          <Field.Root>
            <Field.Label>Mirror</Field.Label>
            <HStack>
              <Field.Root>
                <Switch.Root checked={mirrorX} onCheckedChange={() => $tools.mirrorX.toggle()}>
                  <Switch.HiddenInput />
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                  <Switch.Label>X</Switch.Label>
                </Switch.Root>
              </Field.Root>
              <Field.Root>
                <Switch.Root checked={mirrorY} onCheckedChange={() => $tools.mirrorY.toggle()}>
                  <Switch.HiddenInput />
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                  <Switch.Label>Y</Switch.Label>
                </Switch.Root>
              </Field.Root>
              <Field.Root>
                <Switch.Root checked={mirrorZ} onCheckedChange={() => $tools.mirrorZ.toggle()}>
                  <Switch.HiddenInput />
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                  <Switch.Label>Z</Switch.Label>
                </Switch.Root>
              </Field.Root>
            </HStack>
          </Field.Root>

          {/* Stretch Options */}
          {/* <Field.Root>
            <Field.Label>Stretch Factors</Field.Label>
            <Grid templateColumns="repeat(3, 1fr)" gap="2">
              <VStack>
                <Text fontSize="sm">X: {stretchX}</Text>
                <Slider.Root
                  min={0.25}
                  max={4}
                  step={0.25}
                  defaultValue={[stretchX]}
                  onChange={(value) => $tools.setBrushSize.set(value)}
                >
                  <Slider.Control>
                    <Slider.Track>
                      <Slider.Range />
                    </Slider.Track>
                    <Slider.Thumbs />
                  </Slider.Control>
                </Slider.Root>
              </VStack>
              <VStack>
                <Text fontSize="sm">Y: {stretchY}</Text>
                <Slider.Root
                  min={0.25}
                  max={4}
                  step={0.25}
                  defaultValue={[stretchY]}
                  onChange={(value) => $tools.stretchY.set(value)}
                >
                  <Slider.Control>
                    <Slider.Track>
                      <Slider.Range />
                    </Slider.Track>
                    <Slider.Thumbs />
                  </Slider.Control>
                </Slider.Root>
              </VStack>
              <VStack>
                <Text fontSize="sm">Z: {stretchZ}</Text>
                <Slider.Root
                  min={0.25}
                  max={4}
                  step={0.25}
                  defaultValue={[stretchZ]}
                  onChange={(value) => $tools.stretchZ.set(value)}
                >
                  <Slider.Control>
                    <Slider.Track>
                      <Slider.Range />
                    </Slider.Track>
                    <Slider.Thumbs />
                  </Slider.Control>
                </Slider.Root>
              </VStack>
            </Grid>
          </Field.Root> */}
        </VStack>
      )}
    </Stack>
  )
}

const ViewSettingsSection = () => {
  const isViewSettingsOpen = $isViewSettingsOpen.use()
  const showGrid = $tools.viewSettings.showGrid.use()
  const showFrame = $tools.viewSettings.showFrame.use()
  const showAxisLines = $tools.viewSettings.showAxisLines.use()
  const arMode = $tools.viewSettings.arMode.use()

  return (
    <Stack gap="4" w="full" mb="4">
      <SectionHeader title="View Settings" isOpen={isViewSettingsOpen} toggleOpen={() => $isViewSettingsOpen.set.toggle()} />
      {isViewSettingsOpen && (
        <VStack align="stretch" spacing="3">
          <Field.Root>
            <Field.Label>Show Grid</Field.Label>
            <Switch isChecked={showGrid} onChange={() => $tools.viewSettings.showGrid.toggle()} />
          </Field.Root>
          <Field.Root>
            <Field.Label>Show Frame</Field.Label>
            <Switch isChecked={showFrame} onChange={() => $tools.viewSettings.showFrame.toggle()} />
          </Field.Root>
          <Field.Root>
            <Field.Label>Show Axis Lines</Field.Label>
            <Switch isChecked={showAxisLines} onChange={() => $tools.viewSettings.showAxisLines.toggle()} />
          </Field.Root>
          <Field.Root>
            <Field.Label>AR Mode</Field.Label>
            <Switch isChecked={arMode} onChange={() => $tools.viewSettings.arMode.toggle()} />
          </Field.Root>
        </VStack>
      )}
    </Stack>
  )
}

const MaterialSettingsSection = () => {
  const isMaterialSettingsOpen = $isMaterialSettingsOpen.use()
  const materialLayer = $tools.materialLayer.use()
  const roughness = $tools.materialSettings.roughness.use()
  const metallic = $tools.materialSettings.metallic.use()
  const emissive = $tools.materialSettings.emissive.use()
  const castShadows = $tools.materialSettings.castShadows.use()

  // Create array of material layers for selection
  const materialLayers = Array.from({ length: 8 }, (_, i) => i + 1)

  return (
    <Stack gap="4" w="full">
      <SectionHeader
        title="Material Settings"
        isOpen={isMaterialSettingsOpen}
        toggleOpen={() => $isMaterialSettingsOpen.set.toggle()}
      />
      {isMaterialSettingsOpen && (
        <VStack align="stretch" spacing="3">
          <Field.Root>
            <Field.Label>Material Layer</Field.Label>
            <Select value={materialLayer} onChange={(e) => $tools.materialLayer.set(Number(e.target.value))}>
              {materialLayers.map((layer) => (
                <option key={layer} value={layer}>
                  Layer {layer}
                </option>
              ))}
            </Select>
          </Field.Root>

          {/* <Field.Root> */}
          <Slider.Root
            min={0}
            max={1}
            step={0.01}
            defaultValue={[roughness]}
            onChange={(value) => $tools.updateMaterialSettings({ roughness: value })}
          >
            <Slider.Label>Roughness: {roughness.toFixed(2)}</Slider.Label>
            <Slider.Control>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumbs />
            </Slider.Control>
          </Slider.Root>
          {/* </Field.Root> */}

          {/* <Field.Root> */}
          <Slider.Root
            min={0}
            max={1}
            step={0.01}
            defaultValue={[metallic]}
            onChange={(value) => $tools.updateMaterialSettings({ metallic: value })}
          >
            <Slider.Label>Metallic: {metallic.toFixed(2)}</Slider.Label>
            <Slider.Control>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumbs />
            </Slider.Control>
          </Slider.Root>
          {/* </Field.Root> */}

          {/* <Field.Root> */}
          <Slider.Root
            min={0}
            max={1}
            step={0.01}
            defaultValue={[emissive]}
            onChange={(value) => $tools.updateMaterialSettings({ emissive: value })}
          >
            <Slider.Label>Emissive: {emissive.toFixed(2)}</Slider.Label>
            <Slider.Control>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumbs />
            </Slider.Control>
          </Slider.Root>
          {/* </Field.Root> */}

          <Field.Root>
            <Field.Label>Cast Shadows</Field.Label>
            <Switch isChecked={castShadows} onChange={() => $tools.updateMaterialSettings({ castShadows: !castShadows })} />
          </Field.Root>
        </VStack>
      )}
    </Stack>
  )
}
