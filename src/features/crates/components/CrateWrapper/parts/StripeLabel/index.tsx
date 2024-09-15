import { Canvas, Mask, Rect, Text, useFont } from '@shopify/react-native-skia'
import React from 'react'
import { SharedValue } from 'react-native-reanimated'

import { STRIPE_HEIGHT, STRIPE_WIDTH } from '~/features/crates/components/CrateWrapper/parts/Stripe'
import { useTheme } from '~/features/ui/theme/useTheme'

const CENTER_Y = 23
interface IStripeLabel {
  maskY: SharedValue<number>
}
export const StripeLabel = ({ maskY }: IStripeLabel) => {
  const { textVariants } = useTheme()
  const font = useFont(
    require('../../../../../../../assets/fonts/CentraNo2-Bold.otf'),
    textVariants.stripeLabel.fontSize,
  )

  return (
    <Canvas
      style={{
        zIndex: 10000,
        flex: 1,
        position: 'absolute',
        width: STRIPE_WIDTH,
        height: '100%',
      }}
      pointerEvents="none" // FIXME: does not work on Android
    >
      <Mask
        mode="luminance"
        mask={<Rect x={0} y={maskY} width={STRIPE_WIDTH} height={STRIPE_HEIGHT} color="white" />}
      >
        <Text
          transform={[{ rotate: Math.PI / 2 }]}
          origin={{ x: 0, y: CENTER_Y }}
          color="white"
          x={0}
          y={0}
          text="PULL TO OPEN"
          font={font}
        />
      </Mask>
    </Canvas>
  )
}
