import * as React from 'react'
import { ComponentProps } from 'react'

import { Svg, G, Rect, Path, Defs } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

interface ISpeechBubble extends ComponentProps<typeof Svg> {
  fillColor?: string
}
export const SpeechBubble = ({ fillColor = '#fff', ...restProps }: ISpeechBubble) => (
  <Svg width={ms(270)} height={ms(88)} fill="none" viewBox="0 0 270 88" {...restProps}>
    <G filter="url(#a)">
      <Rect width={268} height={70} x={2} fill={fillColor} rx={20} />
      <Path
        fill={fillColor}
        d="M153.5 70s.922 14.191 15 14.997c-4.468-6.543-2.569-11.424 0-14.997"
      />
    </G>
    <Defs />
  </Svg>
)
