import * as React from 'react'

import { Svg, Path } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

export const BadgeIcon = () => (
  <Svg width={ms(48)} height={ms(48)} fill="none" viewBox="0 0 48 48">
    <Path
      fill="#5F1466"
      stroke="#924799"
      strokeWidth={4.042}
      d="M20.962 3.835a6.078 6.078 0 0 1 6.079 0l12.9 7.45a6.08 6.08 0 0 1 3.04 5.265v14.9a6.08 6.08 0 0 1-3.04 5.265l-12.9 7.45a6.078 6.078 0 0 1-6.08 0l-12.9-7.45a6.08 6.08 0 0 1-3.04-5.266V16.55a6.08 6.08 0 0 1 3.04-5.265l12.9-7.45Z"
    />
  </Svg>
)
