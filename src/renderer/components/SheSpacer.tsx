export const SheSpacer = (props) => {
  const width = props.width || props.size || 12
  const height = props.height || props.width || props.size || 12
  return <span style={{ width, height }} />
}
