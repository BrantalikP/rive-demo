import React from 'react'

import { QuestionMarkImage } from './components/QuestionMarkImage'

import { useAuth } from '~/features/auth/hooks/useAuth'
import { Box } from '~/features/ui/components/Box'
import { Button } from '~/features/ui/components/Button'
import { Text } from '~/features/ui/components/Text'

export const LostPasscodeScreen = () => {
  const { signOut } = useAuth()

  return (
    <>
      <Box alignItems="center">
        <QuestionMarkImage />
        <Text variant="hlg" textAlign="center" marginBottom="m">
          Do you need help recovering your PIN code?
        </Text>
        <Text variant="label" color="black60" textAlign="center">
          To set a new PIN code, log out of your account and then log back in.
        </Text>
        <Text mt="m" variant="label" color="black60" textAlign="center">
          Your account data will remain unchanged.
        </Text>
      </Box>
      <Button variant="default" label="Log out" width="100%" onPress={signOut} />
    </>
  )
}
