import * as React from 'react'

import { Path, Svg } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

export const ArrowRightIcon = (props: React.ComponentProps<typeof Svg>) => (
  <Svg width={ms(24)} height={ms(24)} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8.44 5.94a1.5 1.5 0 0 1 2.12 0l5 5a1.5 1.5 0 0 1 0 2.12l-5 5a1.5 1.5 0 0 1-2.12-2.12L12.378 12l-3.94-3.94a1.5 1.5 0 0 1 0-2.12Z"
      clipRule="evenodd"
    />
  </Svg>
)
