import { Grid } from '@react-three/drei'
import { ThreeEvent, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { $voxels } from '@/stores/voxels'
import { $tools } from '@/stores/tools'
import { ThreeMouseEventT } from '@/global'

const gridPosition = [0, 0, 0] as any
const gridSize = [50, 50] as any

const gridConfig = {
  cellSize: 1,
  cellThickness: 1,
  cellColor: '#6f6f6f',
  sectionSize: 8,
  sectionThickness: 1.5,
  sectionColor: '#5f5f5f',
  fadeDistance: 200,
  fadeStrength: 0.8,
  followCamera: false,
  infiniteGrid: true
}

const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
const intersectionPoint = new THREE.Vector3()
const raycaster = new THREE.Raycaster()
const coords = new THREE.Vector2(0, 0)

const dragThreshold = 5
let mouseDownPosition = { x: 0, y: 0 }
let mouseUpPosition = { x: 0, y: 0 }
let isDragging = false

// Track what was clicked first
let clickedObject = null as any

const handleMouseMove = (event: ThreeMouseEventT, camera: any, size: any) => {
  const isNowDragging = mouseDownPosition.x !== 0 || mouseDownPosition.y !== 0
  isDragging = isNowDragging

  if ($tools.isDrawingLine.state) return handleUpdateLine(event, camera, size)
}

const handleMouseDown = (event: ThreeEvent<MouseEvent>) => {
  // Track which object was clicked
  clickedObject = event.object
  mouseDownPosition = { x: event.clientX, y: event.clientY }
  isDragging = false
}

export const VoxelCanvasGrid = () => {
  const gridRef = useRef<THREE.Group>(null!)
  const planeRef = useRef<THREE.Mesh>(null!)
  const { camera, size } = useThree()

  const handleMouseUp = (event: ThreeEvent<MouseEvent>) => {
    mouseUpPosition = { x: event.clientX, y: event.clientY }
    const isRightClick = event.button === 2

    if (isRightClick) {
      clickedObject = null
      return
    }

    // Check if this is the grid plane and if a voxel was clicked first
    if (event.object === planeRef.current && clickedObject !== planeRef.current) {
      // We clicked on something else first, don't handle this click
      clickedObject = null
      return
    }

    // Calculate distance between mousedown and mouseup
    const dx = Math.abs(mouseDownPosition.x - event.clientX)
    const dy = Math.abs(mouseDownPosition.y - event.clientY)
    const distance = Math.sqrt(dx * dx + dy * dy)

    // Reset
    mouseDownPosition = { x: 0, y: 0 }
    isDragging = false
    clickedObject = null

    // If not dragging and distance is less than threshold, it's a clean click
    if (isDragging || distance > dragThreshold) return
    if ($tools.isDrawingLine.state) return $tools.commitLineVoxels()
    if ($tools.active.state === 'place' && $tools.activeToolMode.state === 'linear') return beginPlacingLine(event)
    if ($tools.active.state === 'place') return handlePlaneClick(event)
  }

  const beginPlacingLine = (event: ThreeMouseEventT) => {
    const x = (event.clientX / size.width) * 2 - 1
    const y = -(event.clientY / size.height) * 2 + 1
    coords.set(x, y)

    raycaster.setFromCamera(coords, camera)

    if (raycaster.ray.intersectPlane(plane, intersectionPoint)) {
      console.log('starting line')
      const snappedX = Math.floor(intersectionPoint.x) + 0.5
      const snappedZ = Math.floor(intersectionPoint.z) + 0.5
      const positions = { x: snappedX, y: 0.5, z: snappedZ }
      $tools.isDrawingLine.set(true)
      $tools.lineStartPosition.set(positions)
    }
  }

  const handlePlaneClick = (event: ThreeEvent<MouseEvent>) => {
    // Check if the event has already been handled by a voxel
    if (event.stopPropagation?.called) return

    const x = (event.clientX / size.width) * 2 - 1
    const y = -(event.clientY / size.height) * 2 + 1
    coords.set(x, y)

    raycaster.setFromCamera(coords, camera)

    if (raycaster.ray.intersectPlane(plane, intersectionPoint)) {
      const snappedX = Math.floor(intersectionPoint.x) + 0.5
      const snappedZ = Math.floor(intersectionPoint.z) + 0.5
      const positions = { x: snappedX, y: 0.5, z: snappedZ }
      const isPositionOccupied = $voxels.checkPositionOccupation(positions)
      if (isPositionOccupied) return
      $voxels.addVoxel(positions)
    }
  }

  return (
    <group ref={gridRef} position={gridPosition}>
      <mesh
        ref={planeRef}
        rotation={[-Math.PI / 2, 0, 0]}
        visible={false}
        onPointerEnter={(event) => handleMouseEnter(event, camera, size)}
        onPointerDown={handleMouseDown}
        onPointerMove={(event) => handleMouseMove(event, camera, size)}
        onPointerUp={handleMouseUp}
      >
        <planeGeometry args={gridSize} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      <Grid args={gridSize} {...gridConfig} renderOrder={1} />
    </group>
  )
}

const handleMouseEnter = (event: ThreeMouseEventT, camera: any, size: any) => {
  event.stopPropagation()
  if ($tools.isDrawingLine.state) return handleUpdateLine(event, camera, size)
}

const handleUpdateLine = (event: ThreeMouseEventT, camera: any, size: any) => {
  const x = (event.clientX / size.width) * 2 - 1
  const y = -(event.clientY / size.height) * 2 + 1
  coords.set(x, y)
  raycaster.setFromCamera(coords, camera)

  if (raycaster.ray.intersectPlane(plane, intersectionPoint)) {
    const snappedX = Math.floor(intersectionPoint.x) + 0.5
    const snappedZ = Math.floor(intersectionPoint.z) + 0.5
    const position = { x: snappedX, y: 0.5, z: snappedZ }
    $tools.updateLinePositions(position)
  }
}
