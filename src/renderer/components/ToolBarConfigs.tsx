import { CuteIcon } from './CuteIcon'

export const TOOL_CONFIGS = [
  { id: 'place', label: 'Place', keyCode: 'Digit1', hotKey: 1, icon: <CuteIcon name="hammer" size={48} color="white" /> },
  { id: 'erase', label: 'Erase', keyCode: 'Digit2', hotKey: 2, icon: <CuteIcon name="eraser" size={48} color="white" /> },
  { id: 'paint', label: 'Paint', keyCode: 'Digit3', hotKey: 3, icon: <CuteIcon name="brush-2" size={48} color="white" /> },
  {
    id: 'select',
    label: 'Select',
    keyCode: 'Digit4',
    hotKey: 4,
    icon: <CuteIcon name="hand-grab" size={48} color="white" />
  },
  {
    id: 'move',
    label: 'Move',
    keyCode: 'Digit5',
    hotKey: 5,
    icon: <CuteIcon name="move" size={48} color="white" />
  },
  {
    id: 'rotate',
    label: 'Rotate',
    keyCode: 'Digit6',
    hotKey: 6,
    icon: <CuteIcon customIcon="tabler:rotate-2" size={48} color="white" />
  },
  {
    id: 'scale',
    label: 'Scale',
    keyCode: 'Digit7',
    hotKey: 7,
    icon: <CuteIcon customIcon="icon-park-outline:scale" size={48} color="white" />
  },
  {
    id: 'clone',
    label: 'Clone',
    keyCode: 'Digit8',
    hotKey: 8,
    icon: <CuteIcon customIcon="grommet-icons:clone" size={48} color="white" />
  }
]

const SingleToolModeIcon = () => <CuteIcon name="square" size={24} />
const LineToolModeIcon = () => <CuteIcon name="line" />
const FreehandToolModeIcon = () => <CuteIcon name="pencil" />
const BoxToolModeIcon = () => <CuteIcon customIcon="mdi:selection" />
const FaceToolModeIcon = () => <CuteIcon customIcon="solar:sidebar-minimalistic-bold" />
const ColorToolModeIcon = () => <CuteIcon customIcon="mdi:color" />
const RegionToolModeIcon = () => <CuteIcon customIcon="pixelarticons:section-x" />
const RectangleToolModeIcon = () => <CuteIcon customIcon="iconoir:3d-rect-three-pts" />

export const TOOL_MODE_CONFIGS = [
  { id: 'single', label: 'Single', icon: <SingleToolModeIcon /> },
  { id: 'linear', label: 'Linear', icon: <LineToolModeIcon /> },
  { id: 'freehand', label: 'Freehand', icon: <FreehandToolModeIcon /> },
  { id: 'box', label: 'Box', icon: <BoxToolModeIcon /> },
  { id: 'face', label: 'Face', icon: <FaceToolModeIcon /> },
  { id: 'color', label: 'Color', icon: <ColorToolModeIcon /> },
  { id: 'region', label: 'Region', icon: <RegionToolModeIcon /> },
  { id: 'rectangle', label: 'Rectangle', icon: <RectangleToolModeIcon /> }
]
