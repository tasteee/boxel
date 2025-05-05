import './ToolBar.css'
import { $tools } from '@/stores/tools'
import { Tooltip } from '@/components/ui/tooltip'
import { Card, IconButton, Stack, Separator } from '@chakra-ui/react'
import { TOOL_CONFIGS, TOOL_MODE_CONFIGS } from './ToolBarConfigs'

export const ToolBar = () => {
  return (
    <Card.Root maxW="64px" className="ToolBar">
      <Card.Body className="ToolBarBody">
        <Stack gap="5" w="full">
          <Stack gap="2" w="full">
            {TOOL_CONFIGS.map((tool) => (
              <ToolIconButton key={tool.id} {...tool} />
            ))}
          </Stack>
          <Separator />
          <ToolModeOptions />
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}

type ToolIconButtonPropsT = {
  id: string
  icon: React.ReactNode
  label: string
  hotKey: any
}

const ToolIconButton = (props: ToolIconButtonPropsT) => {
  const activeTool = $tools.active.use()
  const isSelected = activeTool === props.id
  const variant = isSelected ? 'solid' : 'outline'
  const colorPalette = isSelected ? 'blue' : 'gray'
  const tipText = `[${props.hotKey}] ${props.label}`

  return (
    <Tooltip content={tipText} openDelay={200} positioning={{ placement: 'right-end' }}>
      <IconButton
        variant={variant}
        colorPalette={colorPalette}
        key={props.id}
        onClick={() => $tools.switchToTool(props.id as any)}
      >
        {props.icon}
      </IconButton>
    </Tooltip>
  )
}

type ToolIModeconButtonPropsT = {
  id: string
  icon: React.ReactNode
  label: string
}

const ToolModeIconButton = (props: ToolIModeconButtonPropsT) => {
  const activeMode = $tools.activeToolMode.use()
  const isSelected = activeMode === props.id
  const variant = isSelected ? 'surface' : 'outline'
  const colorPalette = isSelected ? 'blue' : 'gray'
  const tipText = props.label

  return (
    <Tooltip content={tipText} openDelay={200} positioning={{ placement: 'right-end' }}>
      <IconButton
        variant={variant}
        colorPalette={colorPalette}
        key={props.id}
        onClick={() => $tools.activeToolMode.set(props.id)}
      >
        {props.icon}
      </IconButton>
    </Tooltip>
  )
}

const ToolModeOptions = () => {
  const availableModes = $tools.useAvailableToolModes()

  const filteredToolModes = TOOL_MODE_CONFIGS.filter((config) => {
    return availableModes.includes(config.id)
  })

  return (
    <Stack gap="2" w="full" className="ToolModeOptions">
      {filteredToolModes.map((tool) => (
        <ToolModeIconButton key={tool.id} {...tool} />
      ))}
    </Stack>
  )
}
