const withoutItems = (array: any[], ...items: any[]) => {
  const clonedArray = [...array]

  items.forEach((item) => {
    if (!array.includes(item)) return
    const index = clonedArray.indexOf(item)
    if (index > -1) array.splice(index, 1)
  })

  return clonedArray
}

const withoutItemsById = (array: any[], ...ids: any[]) => {
  const clonedArray = [...array]
  const matchId = (id: any) => id.id === ids

  ids.forEach((id: string) => {
    if (!array.some(matchId)) return
    const index = clonedArray.findIndex(matchId)
    if (index > -1) array.splice(index, 1)
  })

  return clonedArray
}

const withoutDuplicates = (array: any[]) => {
  return [...new Set(array)]
}

const withMaxLength = (array: any[], maxLength: number) => {
  if (array.length <= maxLength) return array
  return array.slice(0, maxLength)
}

export const arrayHelpers = {
  withoutItems,
  withoutItemsById,
  withoutDuplicates,
  withMaxLength
}
