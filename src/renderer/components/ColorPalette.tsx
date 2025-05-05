import { store } from '@/store'
import { $colors } from '@/stores/colors'
import { ColorSwatch, HStack, Group, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { ColorSquare } from './ColorSquare'
import { CuteIcon } from './CuteIcon'
import { SheSpacer } from './SheSpacer'
import { datass } from 'datass'
import Color from 'color'

const $isExpanded = datass.boolean(true)
const white75 = Color('#ffffff').alpha(0.75).hexa()

export const ColorPalette = () => {
  const colors = $colors.palette.use() as string[]
  const activeColor = $colors.active.use()
  const isExpanded = $isExpanded.use()
  const caretRotation = isExpanded ? 135 : 90

  return (
    <Stack>
      <HStack direction="row" gap="2">
        <HStack direction="row" gap="1">
          <Text className="Label">Palette</Text>
          <CuteIcon
            name="left"
            kind="fill"
            size={18}
            rotate={caretRotation}
            color={white75}
            onClick={() => $isExpanded.set.toggle()}
          />
        </HStack>
      </HStack>

      {isExpanded && (
        <Stack direction="row" gap="2" w="full">
          {colors.map((color) => (
            <ColorSquare key={color} color={color} isActive={color === activeColor} />
          ))}
        </Stack>
      )}
    </Stack>
  )
}
