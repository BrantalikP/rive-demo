import * as React from 'react'

import { Ellipse, Path, Svg } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

export const KiwiAvatar = () => (
  <Svg width={ms(64)} height={ms(72)} fill="none" viewBox="0 0 64 72">
    <Path
      fill="#000"
      d="M19 72c-1 0-2-7-2-16h4c0 9-1 16-2 16ZM29 72c-1 0-2-7-2-16h4c0 9-1 16-2 16Z"
    />
    <Path
      fill="#00B261"
      d="M24 60c-9.94 0-18-8.06-18-18 0-7.08 3-13 7-20s6.316-10 11-10c4.456 0 6.768 2.714 10.425 9.003 7.083.083 12.463 2.224 15.311 3.676.492.251.233.913-.312.828A42.668 42.668 0 0 0 42.999 25c-2.61 0-4.676.273-6.054.534C39.935 31.217 42 36.619 42 42c0 9.94-8.06 18-18 18Z"
    />
    <Ellipse cx={27} cy={22.5} fill="#000" rx={2} ry={2.5} />
  </Svg>
)
