import { ComponentProps } from 'react'

import { Rect, Circle, Svg } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

export const MehRating = (props: ComponentProps<typeof Svg>) => (
  <Svg width={ms(40)} height={ms(40)} fill="none" viewBox="0 0 40 40" {...props}>
    <Circle cx={20} cy={20} r={20} fill="#F8CE1D" />
    <Rect width={13.333} height={2.667} x={13.333} y={26.668} fill="#000" rx={1.333} />
    <Circle cx={26.667} cy={18.668} r={2.667} fill="#000" />
    <Circle cx={13.333} cy={18.668} r={2.667} fill="#000" />
  </Svg>
)
