import React from 'react'

import { Keyboard } from '../../components/Keyboard'
import { PasscodeInput } from '../../components/PasscodeInput'
import { PASSCODE_LENGTH } from '../../components/PasscodeInput/presets'
import { useValidatePasscode } from '../../hooks/useValidatePasscode'

import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'
import { useRootStore } from '~/store/useRootStore'

export const EnterPasscodeScreen = () => {
  const initialPasscode = useRootStore((state) => state.passcode) ?? ''
  const { passcode, shakeAnimation, isValid, handleButtonPress } = useValidatePasscode({
    initialPasscode,
  })
  const { user } = useRootStore((state) => ({ user: state.user }))

  return (
    <>
      <Box alignItems="center">
        <Text variant="hlg" textAlign="center" marginBottom="m">
          Hello, {user?.firstName}
        </Text>
        <Text variant="label" color="black60" textAlign="center">
          Please enter your passcode to access the parent zone.
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
