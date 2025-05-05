import * as React from 'react'
import classcat from 'classcat'
import './SheFlex.css'

type SheFlexPropsT = {
  // Base props
  className?: string
  id?: string
  children?: React.ReactNode

  // Flex properties
  isColumn?: boolean
  isRow?: boolean
  xAlign?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly'
  yAlign?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly'
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  gap?: string | number

  // Dimension props
  width?: string | number
  height?: string | number
  minWidth?: string | number
  maxWidth?: string | number
  minHeight?: string | number
  maxHeight?: string | number

  // Position props
  position?: 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static'
  top?: string | number
  right?: string | number
  bottom?: string | number
  left?: string | number
  zIndex?: string | number

  // Spacing props
  padding?: string | number
  paddingTop?: string | number
  paddingRight?: string | number
  paddingBottom?: string | number
  paddingLeft?: string | number
  margin?: string | number
  marginTop?: string | number
  marginRight?: string | number
  marginBottom?: string | number
  marginLeft?: string | number

  // Visual props
  background?: string
  backgroundSize?: string
  backgroundPosition?: string
  backgroundRepeat?: string
  border?: string
  borderRadius?: string | number
  boxShadow?: string
  opacity?: string | number
  scale?: string | number
  animation?: string

  // Additional props will be spread to the div
  [key: string]: any
}

export const SheFlex = (props: SheFlexPropsT) => {
  const getFlexClasses = () => {
    const classes = []

    // Base flex class
    classes.push('sheFlex')

    // Direction classes
    if (props.isColumn) {
      classes.push('sheFlexColumn')
    } else {
      classes.push('sheFlexRow')
    }

    // Alignment classes
    if (props.xAlign) {
      classes.push(`sheAlignX-${props.xAlign}`)
    }

    if (props.yAlign) {
      classes.push(`sheAlignY-${props.yAlign}`)
    }

    // Wrap class
    if (props.wrap) {
      classes.push('sheFlexWrap')
    }

    // Position classes
    if (props.position) {
      classes.push(`shePosition${props.position.charAt(0).toUpperCase() + props.position.slice(1)}`)
    }

    // Add custom className if provided
    if (props.className) {
      classes.push(props.className)
    }

    return classes
  }

  const getStyleObject = () => {
    const styleObject: React.CSSProperties = {}

    // Process dimension props
    if (props.width !== undefined) styleObject.width = props.width
    if (props.height !== undefined) styleObject.height = props.height
    if (props.minWidth !== undefined) styleObject.minWidth = props.minWidth
    if (props.maxWidth !== undefined) styleObject.maxWidth = props.maxWidth
    if (props.minHeight !== undefined) styleObject.minHeight = props.minHeight
    if (props.maxHeight !== undefined) styleObject.maxHeight = props.maxHeight

    // Process position props
    if (props.position !== undefined) styleObject.position = props.position
    if (props.top !== undefined) styleObject.top = props.top
    if (props.right !== undefined) styleObject.right = props.right
    if (props.bottom !== undefined) styleObject.bottom = props.bottom
    if (props.left !== undefined) styleObject.left = props.left
    if (props.zIndex !== undefined) styleObject.zIndex = props.zIndex

    // Process spacing props
    if (props.padding !== undefined) styleObject.padding = props.padding
    if (props.paddingTop !== undefined) styleObject.paddingTop = props.paddingTop
    if (props.paddingRight !== undefined) styleObject.paddingRight = props.paddingRight
    if (props.paddingBottom !== undefined) styleObject.paddingBottom = props.paddingBottom
    if (props.paddingLeft !== undefined) styleObject.paddingLeft = props.paddingLeft
    if (props.margin !== undefined) styleObject.margin = props.margin
    if (props.marginTop !== undefined) styleObject.marginTop = props.marginTop
    if (props.marginRight !== undefined) styleObject.marginRight = props.marginRight
    if (props.marginBottom !== undefined) styleObject.marginBottom = props.marginBottom
    if (props.marginLeft !== undefined) styleObject.marginLeft = props.marginLeft

    // Process gap
    if (props.gap !== undefined) styleObject.gap = props.gap

    // Process visual props
    if (props.background !== undefined) styleObject.background = props.background
    if (props.backgroundSize !== undefined) styleObject.backgroundSize = props.backgroundSize
    if (props.backgroundPosition !== undefined) styleObject.backgroundPosition = props.backgroundPosition
    if (props.backgroundRepeat !== undefined) styleObject.backgroundRepeat = props.backgroundRepeat
    if (props.border !== undefined) styleObject.border = props.border
    if (props.borderRadius !== undefined) styleObject.borderRadius = props.borderRadius
    if (props.boxShadow !== undefined) styleObject.boxShadow = props.boxShadow
    if (props.opacity !== undefined) styleObject.opacity = props.opacity
    if (props.scale !== undefined) styleObject.transform = `scale(${props.scale})`
    if (props.animation !== undefined) styleObject.animation = props.animation

    return styleObject
  }

  // Remove our custom props to avoid DOM warnings
  const getSpreadProps = () => {
    const {
      className,
      id,
      children,
      isColumn,
      isRow,
      xAlign,
      yAlign,
      wrap,
      gap,
      width,
      height,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      position,
      top,
      right,
      bottom,
      left,
      zIndex,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      margin,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      background,
      backgroundSize,
      backgroundPosition,
      backgroundRepeat,
      border,
      borderRadius,
      boxShadow,
      opacity,
      scale,
      animation,
      ...restProps
    } = props

    return restProps
  }

  return (
    <div id={props.id} className={classcat(getFlexClasses())} style={getStyleObject()} {...getSpreadProps()}>
      {props.children}
    </div>
  )
}

SheFlex.withStyles = (styles: React.CSSProperties) => {
  return (props: SheFlexPropsT) => {
    const combinedStyles = { ...styles, ...props.style }

    return <SheFlex {...props} style={combinedStyles} />
  }
}
