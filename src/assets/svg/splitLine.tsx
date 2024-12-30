import { ISvgProps } from "./SvgType"
export function SplitLineSvg(props: ISvgProps) {
  const { width, height } = props
  return (
    <svg width={width} height={height} viewBox="0 0 32 32">
      <path d="M22 5L9 28" stroke="#eaeaea"></path>
    </svg>
  )
}
export default SplitLineSvg
