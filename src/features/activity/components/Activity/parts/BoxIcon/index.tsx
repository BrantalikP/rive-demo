import * as React from 'react'

import { Svg, Path, Rect } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

export const BoxIcon = () => (
  <Svg width={ms(48)} height={ms(48)} fill="none" viewBox="0 0 48 48">
    <Rect width={ms(40)} height={ms(36)} x={4} y={6} fill="#F05824" rx={6} />
    <Path stroke="#fff" strokeWidth={1.5} d="M12 34V14h24v20H12ZM12 20h24M12 28h24" />
    <Path fill="#F05824" stroke="#fff" strokeWidth={1.5} d="m39 18-4-6L9 30l4 6 26-18Z" />
  </Svg>
)
