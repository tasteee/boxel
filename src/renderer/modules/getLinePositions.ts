type PositionT = { x: number; y: number; z: number }

/**
 * Implementation of 3D Bresenham algorithm for voxel line traversal
 * Returns all positions along the line from start to end (excluding start position)
 *
 * @param inputPositions x0, y0, z0, x1, y1, z1 coordinates
 * @returns Array of positions along the line, excluding start position
 */
export const getLinePositions = (...inputPositions: number[]): PositionT[] => {
  const [x0, y0, z0, x1, y1, z1] = inputPositions
  console.log('start: ', [x0, y0, z0], ' end: ', [x1, y1, z1])

  // Create result array (excluding start position)
  const positions: PositionT[] = []

  // Calculate deltas (always positive)
  const dx = Math.abs(x1 - x0)
  const dy = Math.abs(y1 - y0)
  const dz = Math.abs(z1 - z0)

  // Calculate step directions
  const sx = x0 < x1 ? 1 : -1
  const sy = y0 < y1 ? 1 : -1
  const sz = z0 < z1 ? 1 : -1

  // Copy the starting point
  let x = x0
  let y = y0
  let z = z0

  // Determine longest axis to use as driving axis
  const maxDelta = Math.max(dx, dy, dz)
  let err1, err2

  if (maxDelta === dx) {
    // X is the driving axis
    err1 = dy * 2 - dx
    err2 = dz * 2 - dx

    for (let i = 0; i < dx; i++) {
      x += sx

      if (err1 > 0) {
        y += sy
        err1 -= dx * 2
      }

      if (err2 > 0) {
        z += sz
        err2 -= dx * 2
      }

      err1 += dy * 2
      err2 += dz * 2

      positions.push({ x, y, z })
    }
  } else if (maxDelta === dy) {
    // Y is the driving axis
    err1 = dx * 2 - dy
    err2 = dz * 2 - dy

    for (let i = 0; i < dy; i++) {
      y += sy

      if (err1 > 0) {
        x += sx
        err1 -= dy * 2
      }

      if (err2 > 0) {
        z += sz
        err2 -= dy * 2
      }

      err1 += dx * 2
      err2 += dz * 2

      positions.push({ x, y, z })
    }
  } else {
    // Z is the driving axis
    err1 = dx * 2 - dz
    err2 = dy * 2 - dz

    for (let i = 0; i < dz; i++) {
      z += sz

      if (err1 > 0) {
        x += sx
        err1 -= dz * 2
      }

      if (err2 > 0) {
        y += sy
        err2 -= dz * 2
      }

      err1 += dx * 2
      err2 += dy * 2

      positions.push({ x, y, z })
    }
  }

  // Check if we've reached the endpoint
  const lastPos = positions.length > 0 ? positions[positions.length - 1] : { x: x0, y: y0, z: z0 }
  if (lastPos.x !== x1 || lastPos.y !== y1 || lastPos.z !== z1) {
    console.warn('3D Bresenham algorithm did not reach endpoint exactly')
  }

  console.log('final positions: ', positions)
  return positions
}
