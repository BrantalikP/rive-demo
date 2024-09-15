import React from 'react'
import Animated, { useAnimatedStyle, interpolate, SharedValue } from 'react-native-reanimated'

import { PasscodeDot } from './parts/PasscodeDot'

import { Theme } from '~/features/ui/theme/theme'
import { ms } from '~/utils/scale'

interface PasscodeInputProps {
  passcode: string[]
  length: number
  shakeAnimation?: SharedValue<number>
  // null means that the passcode is not yet validated
  // true means that the passcode is valid
  // false means that the passcode is invalid
  isValid: boolean | null
}

export const PasscodeInput: React.FC<PasscodeInputProps> = ({
  passcode,
  length,
  shakeAnimation,
  isValid,
}) => {
  const shakeStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: shakeAnimation
            ? interpolate(shakeAnimation.value, [0, 0.5, 1], [0, 5, -5])
            : 0,
        },
      ],
    }
  }, [shakeAnimation])

  const getDotColor = (): keyof Theme['colors'] => {
    if (passcode.length === length && isValid !== null) {
      return isValid ? 'green' : 'red'
    }
    return 'green'
  }

  return (
    <Animated.View
      style={[
        {
          flexDirection: 'row',
          gap: ms(25),
        },
        shakeStyle,
      ]}
      testID="passcode-input"
    >
      {[...Array(length).keys()].map((i) => (
        <PasscodeDot
          key={`passcode-${i}`}
          filled={Boolean(passcode[i])}
          color={getDotColor()}
          size={ms(16)}
        />
      ))}
    </Animated.View>
  )
}
