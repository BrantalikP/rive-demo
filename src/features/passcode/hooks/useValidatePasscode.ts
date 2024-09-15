import * as Haptics from 'expo-haptics'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import { Easing, runOnJS, useSharedValue, withSequence, withTiming } from 'react-native-reanimated'

import { PASSCODE_LENGTH } from '~/features/passcode/components/PasscodeInput/presets'
import { parsePasscode } from '~/features/passcode/utils/passcode'
import { useRootStore } from '~/store/useRootStore'

interface Props {
  initialPasscode: string
}
export const useValidatePasscode = ({ initialPasscode }: Props) => {
  const [passcode, setPasscode] = useState<string[]>([])
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const shakeAnimation = useSharedValue(0)
  const savePasscode = useRootStore((state) => state.setPasscode)

  const triggerHapticFeedback = () => {
    // Trigger a stronger and longer haptic feedback
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
    setTimeout(() => {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
    }, 100)
  }

  const startShakeAnimation = () => {
    triggerHapticFeedback()

    shakeAnimation.value = withSequence(
      withTiming(1, { duration: 100, easing: Easing.linear }),
      withTiming(0, { duration: 200, easing: Easing.linear }, () => {
        runOnJS(setPasscode)([])
        runOnJS(setIsValid)(null)
      }),
    )
  }

  useEffect(() => {
    const joinedPasscode = parsePasscode(passcode)
    const isPasscodeComplete = joinedPasscode.length === initialPasscode.length
    const isPasscodeMatched = joinedPasscode === initialPasscode
    const isMatchingPasscode = isPasscodeComplete && isPasscodeMatched

    if (!isPasscodeComplete) {
      return
    }

    setIsValid(isPasscodeMatched)

    // If the passcode is valid, it navigates to the root path ('/'),
    // passing the passcode as a parameter.

    if (isMatchingPasscode) {
      savePasscode(parsePasscode(passcode))
      router.navigate({
        pathname: '/(parent)',
      })
    }
    // If the passcode is invalid and its length equals the required passcode length,
    // it triggers a shake animation to indicate an error and then clears the passcode after a timeout.
    else {
      startShakeAnimation()
    }
  }, [initialPasscode, passcode])

  const handleButtonPress = (char: string) => {
    if (passcode.length < PASSCODE_LENGTH) {
      setPasscode((prev) => [...prev, char])
    }
  }

  return {
    passcode,
    shakeAnimation,
    isValid,
    handleButtonPress,
  }
}
