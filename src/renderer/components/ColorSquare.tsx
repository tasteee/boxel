import { store } from '@/store'
import React from 'react'
import { ColorSwatch } from '@chakra-ui/react'
import { $colors } from '@/stores/colors'
import './ColorSquare.css'

type ColorSquarePropsT = {
  isActive: boolean
  color: string
}

export const ColorSquare = (props: ColorSquarePropsT) => {
  const className = props.isActive ? 'activeColorSwatch' : ''
  const activeClassName = props.isActive ? 'isActive' : ''
  const size = props.isActive ? 'lg' : 'xl'

  const activateColor = () => {
    $colors.active.set(props.color)
  }

  return (
    <div className={`ColorSquare ${activeClassName}`}>
      <ColorSwatch size={size} value={props.color} className={className} onClick={activateColor} />
    </div>
  )
}
