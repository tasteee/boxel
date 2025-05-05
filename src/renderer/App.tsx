import { SheFlex } from './components/SheFlex'
import { VoxelCanvas } from './components/VoxelCanvas'
import { LeftPanel } from './components/LeftPanel'
import { ToolBar } from './components/ToollBar'

export function App() {
  return (
    <SheFlex className="App" gap="12px">
      <VoxelCanvas />
      <ToolBar />
      <LeftPanel />
    </SheFlex>
  )
}
