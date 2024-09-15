import { router } from 'expo-router'
import React from 'react'

import { Lock } from './parts/Lock'

import { Button } from '~/features/ui/components/Button'

export const BackButton = () => {
  return (
    <Button
      marginLeft="xl"
      variant="backButton"
      label={<Lock />}
      onPress={() => router.dismissAll()}
    />
  )
}
