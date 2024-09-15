import React from 'react'

import { useCreatePasscode } from './hooks/useCreatePasscode'
import { Keyboard } from '../../components/Keyboard'
import { PasscodeInput } from '../../components/PasscodeInput'
import { PASSCODE_LENGTH } from '../../components/PasscodeInput/presets'

import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'

export const CreatePasscodeScreen = () => {
  const { handleButtonPress, passcode } = useCreatePasscode()

  return (
    <>
      <Box alignItems="center">
        <Text variant="hlg" textAlign="center" marginBottom="m">
          Create a passcode
        </Text>
        <Text variant="label" color="black60" textAlign="center">
          You will use this to access parent zone and manage your account.
        </Text>
      </Box>
      <PasscodeInput passcode={passcode} length={PASSCODE_LENGTH} isValid={null} />
      <Keyboard onPress={handleButtonPress} />
    </>
  )
}
