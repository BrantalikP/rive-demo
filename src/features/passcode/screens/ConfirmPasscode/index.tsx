import { useLocalSearchParams } from 'expo-router'
import React from 'react'

import { Keyboard } from '../../components/Keyboard'
import { PasscodeInput } from '../../components/PasscodeInput'
import { PASSCODE_LENGTH } from '../../components/PasscodeInput/presets'

import { useValidatePasscode } from '~/features/passcode/hooks/useValidatePasscode'
import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'

export const ConfirmPasscodeScreen = () => {
  const { passcode: initialPasscode } = useLocalSearchParams() as { passcode: string }

  const { passcode, shakeAnimation, isValid, handleButtonPress } = useValidatePasscode({
    initialPasscode,
  })

  return (
    <>
      <Box alignItems="center">
        <Text variant="hlg" textAlign="center" marginBottom="m">
          Confirm your passcode code.
        </Text>
        <Text variant="label" color="black60" textAlign="center">
          You will use this to access parent zone and manage your account.
        </Text>
      </Box>
      <PasscodeInput
        passcode={passcode}
        length={PASSCODE_LENGTH}
        shakeAnimation={shakeAnimation}
        isValid={isValid}
      />
      <Keyboard onPress={handleButtonPress} />
    </>
  )
}
