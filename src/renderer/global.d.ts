import { ThreeEvent } from '@react-three/fiber'

export type ThreeMouseEventT = ThreeEvent<MouseEvent>

export type PositionT = {
  x: number
  y: number
  z: number
}

export type PositionsT = PositionT

export type CubeT = {
  id: string
  positionX: number
  positionY: number
  positionZ: number
  material: string
}

export type VoxelT = {
  id: string
  x: number
  y: number
  z: number
  color: string
}

export type MaterialT = {
  id: string
  name: string
  color: string
  texture: string
  roughness: number
  metalness: number
  opacity: number
  isTransparent: boolean
  isEmissive: boolean
  emissiveColor: string
  emissiveIntensity: number
}
