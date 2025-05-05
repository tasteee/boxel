import React from 'react'
import { Canvas } from '@react-three/fiber'
import { VoxelCanvasGrid } from './VoxelCanvasGrid'
import {
  OrbitControls,
  Environment,
  GizmoHelper,
  GizmoViewport,
  AccumulativeShadows,
  RandomizedLight
} from '@react-three/drei'

import { Voxels } from './Voxels'
import { MOUSE } from 'three' // <-- Import MOUSE
import { GhostLineVoxels } from './GhostLineVoxels'

const MOUSE_CONFIG = {
  LEFT: MOUSE.ROTATE,
  MIDDLE: MOUSE.DOLLY,
  RIGHT: MOUSE.PAN
}

const CAMERA_CONFIG = { position: [10, 12, 12], fov: 25 } as any

export const VoxelCanvas = () => {
  return (
    <Canvas shadows camera={CAMERA_CONFIG}>
      <group>
        <VoxelCanvasGrid />
        <Voxels />
        <GhostLineVoxels />
        <Shadows />
      </group>
      <OrbitControls makeDefault mouseButtons={MOUSE_CONFIG} />
      <Environment preset="city" />
      <CustomGizmo />
    </Canvas>
  )
}

const CustomGizmo = React.memo(() => (
  <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
    <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white" />
  </GizmoHelper>
))

const Shadows = React.memo(() => (
  <AccumulativeShadows temporal frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={50}>
    <RandomizedLight amount={8} radius={4} position={[5, 10, -10]} />
  </AccumulativeShadows>
))
