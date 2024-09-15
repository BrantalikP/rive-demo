import { Svg, G, Path, Circle, Defs, ClipPath } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

export const CheckIcon = () => (
  <Svg
    position="absolute"
    right={ms(-4)}
    width={ms(19)}
    height={ms(18)}
    fill="none"
    viewBox="0 0 19 18"
  >
    <G clipPath="url(#a)">
      <Path fill="#00B261" d="M.5 9a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z" />
      <Circle cx={9.5} cy={9} r={9} fill="#00B261" />
      <Path
        fill="#fff"
        d="M13.768 7.168c.245.256.245.506 0 .75-.426.426-.878.884-1.357 1.373-.479.48-1.016 1.011-1.612 1.596l-1.357 1.357c-.255.256-.51.256-.766 0l-.782-.782c-.266-.277-.57-.58-.91-.91l-.782-.782c-.255-.255-.255-.51 0-.766.277-.277.49-.484.638-.623.245-.255.49-.26.735-.015L9.059 9.85l3.32-3.32a.497.497 0 0 1 .367-.144.471.471 0 0 1 .383.144c.224.202.437.415.639.638Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 9a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z" />
      </ClipPath>
    </Defs>
  </Svg>
)
