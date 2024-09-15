import { useLocalSearchParams } from 'expo-router'
import { Dimensions } from 'react-native'
import { GestureDetector } from 'react-native-gesture-handler'
import { SharedValue } from 'react-native-reanimated'

import { useWrapperStyles } from './hook/useWrapperStyles'
import { LeftSide } from './parts/LeftSide'
import { RightSide } from './parts/RightSide'
import { Stripe, STRIPE_WIDTH } from './parts/Stripe'
import { StripeLabel } from './parts/StripeLabel'
import { Tip } from './parts/Tip'

import { AnimatedBox } from '~/features/ui/components/Box'
import { CrateThemeKeys, crateThemes } from '~/features/ui/theme/crateThemes'

interface ICrateWrapper {
  zoom: SharedValue<number>
}

const { width } = Dimensions.get('window')

const CENTER = width / 2 - STRIPE_WIDTH / 2
export const CrateWrapper = ({ zoom }: ICrateWrapper) => {
  const {
    tipGesture,
    tipAnimatedStyle,
    tipProgress,
    containerAnimatedStyle,
    leftTranslateX,
    rightTranslateX,
    stripeAnimatedStyle,
    stripeLabelMaskY,
  } = useWrapperStyles({
    zoom,
  })
  const { theme } = useLocalSearchParams()

  const crateTheme = crateThemes[(theme as CrateThemeKeys) || 'labs']
  return (
    <AnimatedBox
      zIndex={2}
      height="100%"
      width="100%"
      style={containerAnimatedStyle}
      flexDirection="row"
      position="absolute"
    >
      <LeftSide
        style={{
          transform: [{ translateX: leftTranslateX }],
        }}
        height="100%"
        width="50%"
        palette={crateTheme}
      />
      <AnimatedBox
        bottom={0}
        position="absolute"
        zIndex={1}
        left={CENTER}
        style={stripeAnimatedStyle}
      >
        <GestureDetector gesture={tipGesture}>
          <Tip zIndex={100} style={tipAnimatedStyle} palette={crateTheme} />
        </GestureDetector>
        <Stripe palette={crateTheme} tipProgress={tipProgress} />
        <StripeLabel maskY={stripeLabelMaskY} />
      </AnimatedBox>
      <RightSide
        palette={crateTheme}
        style={{
          transform: [{ translateX: rightTranslateX }],
        }}
        height="100%"
        width="50%"
      />
    </AnimatedBox>
  )
}
