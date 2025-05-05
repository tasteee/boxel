import { $colors } from '@/stores/colors'
import { ColorPicker, HStack, Portal, parseColor } from '@chakra-ui/react'
import { LuCheck } from 'react-icons/lu'
import Color from 'color'
import throttle from 'just-throttle'
import memoize from 'memoize'

const memoParseColor = memoize(parseColor)

const getHexColor = (color: any) => {
  const hsl = color.toHSL()
  const parsed = Color.hsl(hsl.hue, hsl.saturation, hsl.lightness, hsl.alpha)
  return parsed.hex()
}

const handleChange = throttle((event: any) => {
  const newHexColor = getHexColor(event.value)
  $colors.active.set(newHexColor)
}, 25)

export const ActiveColorPicker = () => {
  const activeColor = $colors.active.use()
  const colorPalette = $colors.palette.use() as string[]
  const value = memoParseColor(activeColor)

  return (
    <ColorPicker.Root value={value} width="full" onValueChange={handleChange}>
      <ColorPicker.HiddenInput />
      <ColorPicker.Control>
        <ColorPicker.Input />
        <ColorPicker.Trigger />
      </ColorPicker.Control>
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area />
            <HStack>
              <ColorPicker.EyeDropper size="xs" variant="outline" />
              <ColorPicker.Sliders />
            </HStack>
            <ColorPicker.SwatchGroup>
              {colorPalette.map((color) => (
                <ColorPicker.SwatchTrigger key={color} value={color} onClick={() => $colors.active.set(color)}>
                  <ColorPicker.Swatch boxSize="4.5" value={color}>
                    <ColorPicker.SwatchIndicator>
                      <LuCheck />
                    </ColorPicker.SwatchIndicator>
                  </ColorPicker.Swatch>
                </ColorPicker.SwatchTrigger>
              ))}
            </ColorPicker.SwatchGroup>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  )
}
