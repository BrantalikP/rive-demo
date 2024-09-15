import * as React from 'react'

import { ThemedSvg } from '../types'

import { STRIPE_WIDTH } from '~/features/crates/components/CrateWrapper/parts/Stripe'
import { AnimatedSvg, Path } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

export const TIP_HEIGHT = ms(40)
export const Tip = ({ palette, key, ...props }: ThemedSvg) => (
  <AnimatedSvg
    width={STRIPE_WIDTH}
    preserveAspectRatio="none"
    height={TIP_HEIGHT}
    fill="none"
    viewBox="0 0 65 40"
    {...props}
  >
    <Path fill={palette[3]} d="M65 33C65 15.05 50.45.5 32.5.5S0 15.05 0 33v7h65v-7Z" />
    <Path
      fill={palette[5]}
      d="M0 40h.5v-6c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v6h.5V28.245C62.278 12.764 48.763 1 32.5 1 16.238 1 2.723 12.764 0 28.245V40Z"
    />
    <Path
      fill={palette[1]}
      d="M0 40h.5v-7c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v7h.5V27.245C62.278 11.764 48.763 0 32.5 0 16.238 0 2.723 11.764 0 27.245V40Z"
    />
  </AnimatedSvg>
)
