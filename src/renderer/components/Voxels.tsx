import React, { useRef } from 'react'
import { PositionsT, ThreeMouseEventT, VoxelT } from '../global'
import * as THREE from 'three'
import { Edges } from '@react-three/drei'
import { $voxels } from '@/stores/voxels'
import { $tools } from '@/stores/tools'

let isDragging = false
const dragThreshold = 5
const zeroPositio2D = { x: 0, y: 0 }
const mousePosition = { up: zeroPositio2D, down: zeroPositio2D }

const handleMouseMove = () => {
  const isNowDragging = mousePosition.down.x !== 0 || mousePosition.down.y !== 0
  isDragging = isNowDragging
}

const handleMouseDown = (event: ThreeMouseEventT) => {
  mousePosition.down = { x: event.clientX, y: event.clientY }
  isDragging = false
}

// Calculate distance between mousedown and mouseup
// If not dragging and distance is less than threshold, it's a clean click
const checkDidDragExceedThreshold = (event: ThreeMouseEventT) => {
  mousePosition.down = { x: event.clientX, y: event.clientY }
  const dx = Math.abs(mousePosition.down.x - event.clientX)
  const dy = Math.abs(mousePosition.down.y - event.clientY)
  const distance = Math.sqrt(dx * dx + dy * dy)
  return distance > dragThreshold
}

const checkShouldHandleClick = (event: ThreeMouseEventT) => {
  const isRightClick = event.button === 2
  if (isRightClick) return false
  if (isDragging) return false

  const didDragExceedThreshold = checkDidDragExceedThreshold(event)
  if (didDragExceedThreshold) return false
  return true
}

const beginPlacingLine = (position: PositionsT) => {
  $tools.isDrawingLine.set(true)
  $tools.lineStartPosition.set(position)
}

const placeSingleVoxel = (position: PositionsT) => {
  const isPositionOccupied = $voxels.checkPositionOccupation(position)
  if (isPositionOccupied) return
  $voxels.addVoxel(position)
}

const handleClick = (event: ThreeMouseEventT, voxel: VoxelT, meshRef: any) => {
  event.stopPropagation()

  const shouldHandleClick = checkShouldHandleClick(event)
  if (!shouldHandleClick) return

  if ($tools.isDrawingLine.state) return $tools.commitLineVoxels()
  if ($tools.active.state === 'paint') return paintCube(voxel)
  if ($tools.active.state === 'erase') return eraseCube(voxel)
  if ($tools.active.state === 'place') return placeVoxel(event, voxel, meshRef)
}

const eraseCube = (voxel: VoxelT) => {
  $voxels.removeVoxel(voxel.id)
}

const paintCube = (voxel: VoxelT) => {
  $voxels.paintVoxel(voxel.id)
}

const placeVoxel = (event: ThreeMouseEventT, voxel: VoxelT, meshRef: any) => {
  mousePosition.down = { x: 0, y: 0 }
  isDragging = false

  const localPoint = meshRef.current.worldToLocal(event.point.clone())
  const absX = Math.abs(localPoint.x)
  const absY = Math.abs(localPoint.y)
  const absZ = Math.abs(localPoint.z)

  const newPosition = {
    x: voxel.x,
    y: voxel.y,
    z: voxel.z
  }

  const wasFaceClickedX = absX >= absY && absX >= absZ
  const wasFaceClickedY = absY >= absX && absY >= absZ
  const wasFaceClickedZ = !wasFaceClickedX && !wasFaceClickedY

  if (wasFaceClickedX) newPosition.x += localPoint.x > 0 ? 1 : -1
  if (wasFaceClickedY) newPosition.y += localPoint.y > 0 ? 1 : -1
  if (wasFaceClickedZ) newPosition.z += localPoint.z > 0 ? 1 : -1

  if ($tools.activeToolMode.state === 'single') return placeSingleVoxel(newPosition)
  if ($tools.activeToolMode.state === 'linear') return beginPlacingLine(newPosition)
}

const handleMouseEnter = (event: ThreeMouseEventT, voxel: VoxelT) => {
  event.stopPropagation()

  if ($tools.isDrawingLine.state) return $tools.updateLinePositions({ ...voxel })
  $voxels.hoveredId.set(voxel.id)
}

const handleMouseLeave = (event: ThreeMouseEventT, voxel: VoxelT) => {
  event.stopPropagation()

  if ($tools.isDrawingLine.state) return
  if ($voxels.hoveredId.state !== voxel.id) return
  $voxels.hoveredId.set('')
}

type VoxelPropsT = { id: string }

const Voxel = React.memo((props: VoxelPropsT) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const voxel = $voxels.useVoxel(props.id) as VoxelT
  const isHovered = $voxels.useIsVoxelHovered(props.id)
  const position = [voxel.x, voxel.y, voxel.z] as any

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerUp={(event) => handleClick(event, voxel, meshRef)}
      onPointerDown={handleMouseDown}
      onPointerMove={handleMouseMove}
      onPointerOver={(event) => handleMouseEnter(event, voxel)}
      onPointerOut={(event) => handleMouseLeave(event, voxel)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={voxel.color} />
      {isHovered && <Edges linewidth={1.5} scale={1.01} threshold={15} color="white" />}
    </mesh>
  )
})

export const Voxels = React.memo(() => {
  const ids = $voxels.useVoxelIds()
  return ids.map((id: string) => <Voxel key={id} id={id} />)
})
