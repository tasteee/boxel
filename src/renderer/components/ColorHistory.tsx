import { store } from '@/store'
import { $colors } from '@/stores/colors'
import { ColorSwatch, Group, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { ColorSquare } from './ColorSquare'

export const ColorHistory = () => {
  const colors = $colors.history.use() as string[]
  const activeColor = $colors.active.use()

  return (
    <Stack>
      <Text className="Label">History</Text>
      <Stack direction="row" gap="2" w="full">
        {colors.map((color) => (
          <ColorSquare key={color} color={color} isActive={color === activeColor} />
        ))}
      </Stack>
    </Stack>
  )
}
