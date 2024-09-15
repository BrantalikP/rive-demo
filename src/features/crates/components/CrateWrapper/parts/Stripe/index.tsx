import { Canvas, Group, Path, Mask, Rect } from '@shopify/react-native-skia'
import React from 'react'
import { Dimensions } from 'react-native'
import { SharedValue, useDerivedValue } from 'react-native-reanimated'

import { ThemedSvg } from '../types'

import { ms } from '~/utils/scale'

const { height } = Dimensions.get('window')
export const STRIPE_HEIGHT = height * 0.85

export const STRIPE_WIDTH = ms(56.5) //  Maybe we should use percent as well

// substitute for preserveAspectRatio="none"
const scaleX = STRIPE_WIDTH / 65
const scaleY = STRIPE_HEIGHT / 707

interface StripeProps {
  tipProgress: SharedValue<number>
  palette: ThemedSvg['palette']
}

export const Stripe: React.FC<StripeProps> = ({ tipProgress, palette }) => {
  const maskY = useDerivedValue(() => {
    return STRIPE_HEIGHT * tipProgress.value
  }, [tipProgress])

  return (
    <Canvas style={{ width: STRIPE_WIDTH, height: STRIPE_HEIGHT }}>
      <Mask
        mode="luminance"
        mask={<Rect x={0} y={maskY} width={STRIPE_WIDTH} height={STRIPE_HEIGHT} color="white" />}
      >
        <Group transform={[{ scaleX }, { scaleY }]}>
          <Path path="M0 0h65v707H0V0Z" color={palette[3]} />
          <Path
            path="M0 707h.5v-6c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v6h.5v-11.755C62.278 679.763 48.763 668 32.5 668 16.238 668 2.723 679.763 0 695.245V707Z"
            color={palette[5]}
          />
          <Path
            path="M0 707h.5v-7c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v7h.5v-12.755C62.278 678.763 48.763 667 32.5 667 16.238 667 2.723 678.763 0 694.245V707Z"
            color={palette[1]}
          />
          <Path
            path="M0 663h.5v-6c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v6h.5v-11.755C62.278 635.763 48.763 624 32.5 624 16.238 624 2.723 635.763 0 651.245V663Z"
            color={palette[5]}
          />
          <Path
            path="M0 663h.5v-7c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v7h.5v-12.755C62.278 634.763 48.763 623 32.5 623 16.238 623 2.723 634.763 0 650.245V663Z"
            color={palette[1]}
          />
          <Path
            path="M0 619h.5v-6c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v6h.5v-11.755C62.278 591.763 48.763 580 32.5 580 16.238 580 2.723 591.763 0 607.245V619Z"
            color={palette[5]}
          />
          <Path
            path="M0 619h.5v-7c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v7h.5v-12.755C62.278 590.763 48.763 579 32.5 579 16.238 579 2.723 590.763 0 606.245V619Z"
            color={palette[1]}
          />
          <Path
            path="M0 575h.5v-6c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v6h.5v-11.755C62.278 547.763 48.763 536 32.5 536 16.238 536 2.723 547.763 0 563.245V575Z"
            color={palette[5]}
          />
          <Path
            path="M0 575h.5v-7c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v7h.5v-12.755C62.278 546.763 48.763 535 32.5 535 16.238 535 2.723 546.763 0 562.245V575Z"
            color={palette[1]}
          />
          <Path
            path="M0 531h.5v-6c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v6h.5v-11.755C62.278 503.763 48.763 492 32.5 492 16.238 492 2.723 503.763 0 519.245V531Z"
            color={palette[5]}
          />
          <Path
            path="M0 531h.5v-7c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v7h.5v-12.755C62.278 502.763 48.763 491 32.5 491 16.238 491 2.723 502.763 0 518.245V531Z"
            color={palette[1]}
          />
          <Path
            path="M0 487h.5v-6c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v6h.5v-11.755C62.278 459.763 48.763 448 32.5 448 16.238 448 2.723 459.763 0 475.245V487Z"
            color={palette[5]}
          />
          <Path
            path="M0 487h.5v-7c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v7h.5v-12.755C62.278 458.763 48.763 447 32.5 447 16.238 447 2.723 458.763 0 474.245V487Z"
            color={palette[1]}
          />
          <Path
            path="M0 443h.5v-6c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v6h.5v-11.755C62.278 415.763 48.763 404 32.5 404 16.238 404 2.723 415.763 0 431.245V443Z"
            color={palette[5]}
          />
          <Path
            path="M0 443h.5v-7c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v7h.5v-12.755C62.278 414.763 48.763 403 32.5 403 16.238 403 2.723 414.763 0 430.245V443Z"
            color={palette[1]}
          />
          <Path
            path="M0 399h.5v-6c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v6h.5v-11.755C62.278 371.763 48.763 360 32.5 360 16.238 360 2.723 371.763 0 387.245V399Z"
            color={palette[5]}
          />
          <Path
            path="M0 399h.5v-7c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v7h.5v-12.755C62.278 370.763 48.763 359 32.5 359 16.238 359 2.723 370.763 0 386.245V399Z"
            color={palette[1]}
          />
          <Path
            path="M0 355h.5v-6c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v6h.5v-11.755C62.278 327.763 48.763 316 32.5 316 16.238 316 2.723 327.763 0 343.245V355Z"
            color={palette[5]}
          />
          <Path
            path="M0 355h.5v-7c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v7h.5v-12.755C62.278 326.763 48.763 315 32.5 315 16.238 315 2.723 326.763 0 342.245V355Z"
            color={palette[1]}
          />
          <Path
            path="M0 311h.5v-6c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v6h.5v-11.755C62.278 283.763 48.763 272 32.5 272 16.238 272 2.723 283.763 0 299.245V311Z"
            color={palette[5]}
          />
          <Path
            path="M0 311h.5v-7c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v7h.5v-12.755C62.278 282.763 48.763 271 32.5 271 16.238 271 2.723 282.763 0 298.245V311Z"
            color={palette[1]}
          />
          <Path
            path="M0 267h.5v-6c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v6h.5v-11.755C62.278 239.763 48.763 228 32.5 228 16.238 228 2.723 239.763 0 255.245V267Z"
            color={palette[5]}
          />
          <Path
            path="M0 267h.5v-7c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v7h.5v-12.755C62.278 238.763 48.763 227 32.5 227 16.238 227 2.723 238.763 0 254.245V267Z"
            color={palette[1]}
          />
          <Path
            path="M0 223h.5v-6c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v6h.5v-11.755C62.278 195.763 48.763 184 32.5 184 16.238 184 2.723 195.763 0 211.245V223Z"
            color={palette[5]}
          />
          <Path
            path="M0 223h.5v-7c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v7h.5v-12.755C62.278 194.763 48.763 183 32.5 183 16.238 183 2.723 194.763 0 210.245V223Z"
            color={palette[1]}
          />
          <Path
            path="M0 179h.5v-6c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v6h.5v-11.755C62.278 151.763 48.763 140 32.5 140 16.238 140 2.723 151.763 0 167.245V179Z"
            color={palette[5]}
          />
          <Path
            path="M0 179h.5v-7c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v7h.5v-12.755C62.278 150.763 48.763 139 32.5 139 16.238 139 2.723 150.763 0 166.245V179ZM64.5 0h.5v136h-.5zM0 0h.5v136H0z"
            color={palette[1]}
          />
        </Group>
      </Mask>
    </Canvas>
  )
}
