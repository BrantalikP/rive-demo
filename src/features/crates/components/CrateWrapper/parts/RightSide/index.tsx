import * as React from 'react'

import { ThemedSvg } from '../types'

import { AnimatedSvg, ClipPath, Defs, G, Path } from '~/features/ui/components/Svg'

export const RightSide = ({ palette, key, ...props }: ThemedSvg) => (
  <AnimatedSvg preserveAspectRatio="none" fill="none" viewBox="0 0 191 852" {...props}>
    <G clipPath="url(#a)">
      <Path fill={palette[3]} d="M27 0h164v852H27z" />
      <Path fill={palette[2]} d="M0 0h27v852H0z" />
      <Path
        fill={palette[1]}
        d="M26 0h1v852h-1zM27.5 138c0-1.963-.171-3.886-.5-5.755V281h.5V138ZM27.5 317c0-1.963-.171-3.886-.5-5.755V324h.5v-7ZM27.5 361c0-1.963-.171-3.886-.5-5.755V368h.5v-7ZM27 399.245c.329 1.869.5 3.792.5 5.755v7H27v-12.755ZM27.5 449c0-1.963-.171-3.886-.5-5.755V456h.5v-7ZM27 487.245c.329 1.869.5 3.792.5 5.755v7H27v-12.755ZM27.5 537c0-1.963-.171-3.886-.5-5.755V544h.5v-7ZM27 575.245c.329 1.869.5 3.792.5 5.755v7H27v-12.755ZM27.5 625c0-1.963-.171-3.886-.5-5.755V632h.5v-7ZM27 663.245c.329 1.869.5 3.792.5 5.755v7H27v-12.755ZM27.5 713c0-1.963-.171-3.886-.5-5.755V720h.5v-7ZM27 751.245c.329 1.869.5 3.792.5 5.755v7H27v-12.755ZM27.5 801c0-1.963-.171-3.886-.5-5.755V808h.5v-7ZM27 839.245c.329 1.869.5 3.792.5 5.755v7H27v-12.755Z"
      />
      <Path
        fill={palette[4]}
        fillRule="evenodd"
        d="M191 0v2.828l-54 54v738.344l54 54V852h-2.828l-54-54H47v-4h26V58H47v-4h87.172l54-54H191Zm-58 58v736H77V58h56Z"
        clipRule="evenodd"
      />
      <Path
        fill={palette[4]}
        d="M123 32a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM163 788a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM155 64a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM131 820a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h191v852H0z" />
      </ClipPath>
    </Defs>
  </AnimatedSvg>
)
