import { Redirect, Stack } from 'expo-router'
import React from 'react'

import { useAuth } from '~/features/auth/hooks/useAuth'

export default function HomeLayout() {
  const { isSignedIn } = useAuth()

  if (!isSignedIn) {
    return <Redirect href="/welcome" />
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(passcode)" />
      <Stack.Screen name="(parent)" />
    </Stack>
  )
}
