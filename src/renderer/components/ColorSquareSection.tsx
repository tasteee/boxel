import { $colors } from '@/stores/colors'
import { IconButton, HStack, Group, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { ColorSquare } from './ColorSquare'
import { CuteIcon } from './CuteIcon'
import { Wrap, Separator } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'

import { CaretIcon } from './CaretIcon'
import './ColorSquareSection.css'

type PropsT = {
  colors: string[]
  toggleOpen: any
  isOpen: boolean
  label: string
  shouldShowAddButton?: boolean
  onAddButtonClick?: any
  children?: any
}

export const ColorSquareSection = (props: PropsT) => {
  const activeColor = $colors.active.use()

  return (
    <Stack gap="4">
      <Flex direction="row" justify="space-between">
        <HStack direction="row" gap="1">
          <Text className="Label">{props.label}</Text>
          <CaretIcon isOpen={props.isOpen} onClick={props.toggleOpen} />
        </HStack>
        {props.children}
      </Flex>

      {props.isOpen && (
        <Wrap gap="8px" align="center">
          {props.shouldShowAddButton && (
            <IconButton
              className="AddSquare"
              aria-label="add color"
              variant="solid"
              size="xs"
              onClick={props.onAddButtonClick}
            >
              <CuteIcon name="add" kind="fill" color="#ffffff" />
            </IconButton>
          )}

          {props.colors.map((color) => (
            <ColorSquare key={color} color={color} isActive={color === activeColor} />
          ))}
        </Wrap>
      )}
    </Stack>
  )
}
