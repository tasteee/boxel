import { datass } from 'datass'
import { v4 as uuid } from 'uuid'
import { CubeT, PositionsT } from './global'
import { MaterialT } from './global'
import * as THREE from 'three'
import { arrayHelpers } from './modules/array'

const undoRedoMiddleware = datass.middleware.undoRedo({ maxHistory: 50 })
const datassWithHistory = datass.withMiddleware(undoRedoMiddleware)

const $activeToolMode = datass.string('Build')
const $hoveredCubeId = datass.string('')
const $cubes = datassWithHistory.array<CubeT>([])
const $materials = datass.array<MaterialT>([])
const $activeMaterialId = datass.string('')
const $recentMaterialIds = datass.array<string>([])
const $highlightedCubeIds = datass.array<string>([])
const threeMaterials = {} as any

const addMaterialToRecent = (id: string) => {
  const newRecentMaterialIds = [...$recentMaterialIds.state, id]
  const uniqueRecentMaterialIds = Array.from(new Set(newRecentMaterialIds))
  uniqueRecentMaterialIds.length = 14
  $recentMaterialIds.set(uniqueRecentMaterialIds)
}

const createCube = (positions: PositionsT) => {
  return {
    id: uuid(),
    material: $activeMaterialId.state,
    positionX: positions.positionX,
    positionY: positions.positionY,
    positionZ: positions.positionZ
  }
}

const forceAddCube = (positions: PositionsT) => {
  const newCube = createCube(positions)
  const occupyingCube = getCubeAtPosition(positions)
  const newCubes = arrayHelpers.withoutItems($cubes.state, occupyingCube)
  $cubes.set([...newCubes, newCube])
  console.log('addCube', newCube)
}

const addCube = (positions: PositionsT) => {
  const isPositionOccupied = checkPositionForCube(positions)
  if (isPositionOccupied) return

  const newCube = createCube(positions)
  $cubes.set([...$cubes.state, newCube])
}

const removeCube = (id: string) => {
  const newCubes = $cubes.state.filter((cube: CubeT) => cube.id !== id)
  $cubes.set(newCubes)
}

const useCube = (id: string) => {
  return $cubes.use.find((cube: CubeT) => cube.id === id)
}

const setCubeMaterial = (id: string, materialId: string) => {
  const newCubes = $cubes.state.map((cube: CubeT) => {
    if (cube.id !== id) return cube
    const updatedCube = { ...cube, material: materialId }
    return updatedCube
  })

  $cubes.set(newCubes)
}

const createMaterial = (color: string) => {
  const id = uuid()

  const stateMaterial = {
    id,
    name: 'New Material',
    color: color,
    roughness: 0.5,
    metalness: 1,
    opacity: 1,
    isTransparent: false,
    isEmissive: false,
    emissiveColor: '#ffffff',
    emissiveIntensity: 0
  }

  const threeMaterial = new THREE.MeshStandardMaterial({
    color: stateMaterial.color,
    roughness: stateMaterial.roughness,
    metalness: stateMaterial.metalness,
    opacity: stateMaterial.opacity,
    transparent: stateMaterial.isTransparent,
    emissive: stateMaterial.emissiveColor,
    emissiveIntensity: stateMaterial.emissiveIntensity
  })

  threeMaterials[id] = threeMaterial
  return stateMaterial
}

const getActiveMaterial = () => {
  return $materials.state.find((material: MaterialT) => material.id === $activeMaterialId.state)
}

const getActiveMaterialColor = () => {
  const activeMaterial = getActiveMaterial()
  return activeMaterial ? activeMaterial.color : '#ffffff'
}

const addMaterial = (color: string) => {
  const newMaterial = createMaterial(color)
  const newMaterials = [...$materials.state, newMaterial]
  $materials.set(newMaterials)
  return newMaterial.id
}

const selectMaterial = (id: string) => {
  $activeMaterialId.set(id)
  addMaterialToRecent(id)
}

const useMaterial = (id: string) => {
  const material = $materials.use.find((material: MaterialT) => material.id === id)
  const threeMaterial = threeMaterials[id]
  console.log('useMaterial', material, threeMaterial)
  return [material, threeMaterial]
}

const updateMaterial = (id: string, key: string, value: any) => {
  const newMaterials = $materials.state.map((material: MaterialT) => {
    if (material.id !== id) return material
    const updatedMaterial = { ...material, [key]: value }
    const threeMaterial = threeMaterials[id]
    threeMaterial[key] = value
    return updatedMaterial
  })

  $materials.set(newMaterials)
}

const removeMaterial = (id: string) => {
  const newMaterials = $materials.state.filter((material: MaterialT) => material.id !== id)
  delete threeMaterials[id]
  $materials.set(newMaterials)
}

const useCubeIds = () => {
  return $cubes.use((cubes: CubeT[]) => cubes.map((cube: CubeT) => cube.id))
}

const getCubeAtPosition = (positions: PositionsT) => {
  return $cubes.state.find((cube: CubeT) => {
    return (
      cube.positionX === positions.positionX &&
      cube.positionY === positions.positionY &&
      cube.positionZ === positions.positionZ
    )
  })
}

const checkPositionForCube = (positions: PositionsT) => {
  return $cubes.state.some((cube: CubeT) => {
    return (
      cube.positionX === positions.positionX &&
      cube.positionY === positions.positionY &&
      cube.positionZ === positions.positionZ
    )
  })
}

const getImmediateConnectedCubes = (positions: PositionsT) => {
  return $cubes.state.filter((cube: CubeT) => {
    return (
      Math.abs(cube.positionX - positions.positionX) <= 1 &&
      Math.abs(cube.positionY - positions.positionY) <= 1 &&
      Math.abs(cube.positionZ - positions.positionZ) <= 1
    )
  })
}

const getImmediateConnectedCubesOfSameMaterial = (positions: PositionsT, material: string) => {
  return $cubes.state.filter((cube: CubeT) => {
    return (
      cube.material === material &&
      Math.abs(cube.positionX - positions.positionX) <= 1 &&
      Math.abs(cube.positionY - positions.positionY) <= 1 &&
      Math.abs(cube.positionZ - positions.positionZ) <= 1
    )
  })
}

const getCubePositions = (cube: CubeT) => {
  return {
    positionX: cube.positionX,
    positionY: cube.positionY,
    positionZ: cube.positionZ
  }
}

const getConnectedSameMaterialCubes = (id: string) => {
  const startCube = $cubes.state.find((cube: CubeT) => cube.id === id) as CubeT
  const visitedIds = [startCube.id]
  const finalCubes = [startCube]

  const getConnectedCubesOfSameMaterial = (cube: CubeT) => {
    const positions = getCubePositions(cube)
    const connectedCubes = getImmediateConnectedCubesOfSameMaterial(positions, startCube.material)

    connectedCubes.forEach((connectedCube: CubeT) => {
      if (!visitedIds.includes(connectedCube.id)) {
        visitedIds.push(connectedCube.id)
        finalCubes.push(connectedCube)
        getConnectedCubesOfSameMaterial(connectedCube)
      }
    })
  }

  getConnectedCubesOfSameMaterial(startCube)
  return finalCubes
}

const highlightCubes = (ids: string[]) => {
  $highlightedCubeIds.set(ids)
}

const useIsCubeHighlighted = (id: string) => {
  return $highlightedCubeIds.use((ids: string[]) => ids.includes(id))
}

const useIsCubeHovered = (id: string) => {
  return $hoveredCubeId.use((hoveredId: string) => hoveredId === id)
}

export const store = {
  cubes: $cubes,
  materials: $materials,
  hoveredCubeId: $hoveredCubeId,
  highlightedCubeIds: $highlightedCubeIds,
  activeMaterialId: $activeMaterialId,
  activeToolMode: $activeToolMode,
  recentMaterialIds: $recentMaterialIds,
  threeMaterials,
  useIsCubeHovered,
  useIsCubeHighlighted,
  checkPositionForCube,
  addMaterialToRecent,
  highlightCubes,
  getCubeAtPosition,
  getConnectedSameMaterialCubes,
  getCubePositions,
  getImmediateConnectedCubes,
  getImmediateConnectedCubesOfSameMaterial,
  useCubeIds,
  createMaterial,
  forceAddCube,
  setCubeMaterial,
  addMaterial,
  updateMaterial,
  removeMaterial,
  useCube,
  addCube,
  removeCube,
  createCube,
  selectMaterial,
  useMaterial,
  getActiveMaterial,
  getActiveMaterialColor
}

addMaterial('#ff0000')
const materialId = addMaterial('#ffffff')
store.selectMaterial(materialId)
