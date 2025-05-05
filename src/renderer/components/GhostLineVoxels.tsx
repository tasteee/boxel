import { PositionsT } from '@/global'
import { $tools } from '@/stores/tools'
import * as THREE from 'three'

export const GhostLineVoxels = () => {
  const isDrawingLine = $tools.isDrawingLine.use()
  const lineStartPosition = $tools.lineStartPosition.use() as PositionsT
  const linePositions = $tools.linePositions.use() as PositionsT[]
  const ghostVoxelPositions = [lineStartPosition, ...linePositions]
  if (!isDrawingLine) return null
  return ghostVoxelPositions.map((position, index) => <GhostVoxel key={index} position={position} />)
}

type GhostVoxelPropsT = {
  position: PositionsT
}

const GhostVoxel = (props: GhostVoxelPropsT) => {
  const positionArray = [props.position.x, props.position.y, props.position.z]
  console.log(positionArray)

  return (
    <mesh position={positionArray}>
      <boxGeometry args={voxelDimensions} />
      <meshStandardMaterial
        color="#ffffff"
        transparent={true}
        opacity={0.5}
        depthWrite={false} // Prevents depth buffer artifacts
      />
    </mesh>
  )
}

const voxelDimensions = [1, 1, 1]
