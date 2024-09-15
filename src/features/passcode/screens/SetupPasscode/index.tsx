import { router } from 'expo-router'
import React from 'react'

import { RobotImage } from './components/RobotImage'

import { Box } from '~/features/ui/components/Box'
import { Button } from '~/features/ui/components/Button'
import { Text } from '~/features/ui/components/Text'

export const SetupPasscodeScreen = () => {
  return (
    <>
      <Box alignItems="center">
        <RobotImage />
        <Text color="primary" variant="hsm" textAlign="center" marginBottom="xl">
          Hello, parent
        </Text>
        <Text variant="hlg" textAlign="center" marginBottom="m">
          Before the kids take over, create a passcode to keep control of your account.
        </Text>
        <Text variant="label" color="black60" textAlign="center">
          You need it to access account management, create and edit profiles, and more.
        </Text>
      </Box>
      <Button
        variant="default"
        label="Got It"
        width="100%"
        onPress={() => router.navigate('/create-passcode')}
      />
    </>
  )
}
