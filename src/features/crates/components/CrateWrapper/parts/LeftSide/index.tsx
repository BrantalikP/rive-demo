import * as React from 'react'

import { ThemedSvg } from '../types'

import { AnimatedSvg, ClipPath, Defs, G, Path } from '~/features/ui/components/Svg'

export const LeftSide = ({ palette, key, ...props }: ThemedSvg) => (
  <AnimatedSvg preserveAspectRatio="none" fill="none" viewBox="0 0 191 852" {...props}>
    <G clipPath="url(#a)">
      <Path fill={palette[3]} d="M0 0h164v852H0z" />
      <Path fill={palette[2]} d="M164 0h27v852h-27z" />
      <Path
        fill={palette[1]}
        d="M164 0h1v852h-1zM164 132.245a33.176 33.176 0 0 0-.5 5.755v143h.5V132.245ZM164 311.245a33.176 33.176 0 0 0-.5 5.755v7h.5v-12.755ZM163.5 361c0-1.963.171-3.886.5-5.755V368h-.5v-7ZM163.5 405c0-1.963.171-3.886.5-5.755V412h-.5v-7ZM163.5 449c0-1.963.171-3.886.5-5.755V456h-.5v-7ZM163.5 493c0-1.963.171-3.886.5-5.755V500h-.5v-7ZM163.5 537c0-1.963.171-3.886.5-5.755V544h-.5v-7ZM163.5 581c0-1.963.171-3.886.5-5.755V588h-.5v-7ZM163.5 625c0-1.963.171-3.886.5-5.755V632h-.5v-7ZM163.5 669c0-1.963.171-3.886.5-5.755V676h-.5v-7ZM163.5 713c0-1.963.171-3.886.5-5.755V720h-.5v-7ZM163.5 757c0-1.963.171-3.886.5-5.755V764h-.5v-7ZM163.5 801c0-1.963.171-3.886.5-5.755V808h-.5v-7ZM163.5 845c0-1.963.171-3.886.5-5.755V852h-.5v-7Z"
      />
      <Path
        fill={palette[4]}
        fillRule="evenodd"
        d="M0 0v2.828l54 54v738.344l-54 54V852h2.828l54-54H144v-4h-26V58h26v-4H56.828l-54-54H0Zm58 58v736h56V58H58Z"
        clipRule="evenodd"
      />
      <Path
        fill={palette[4]}
        d="M68 32a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM28 788a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM36 64a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM60 820a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h191v852H0z" />
      </ClipPath>
    </Defs>
  </AnimatedSvg>
)
