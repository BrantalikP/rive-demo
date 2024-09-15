import { Stack } from 'expo-router'
import React from 'react'

import { Box } from '~/features/ui/components/Box'
import { enableMocking } from '~/mocks/enable-mocking'
import { Provider } from '~/provider'

// void enableMocking()

const RootStack = () => {
  return (
    <Box flex={1}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(app)" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen
          name="storybook"
          options={{
            headerShown: true,
          }}
        />
      </Stack>
    </Box>
  )
}

export default function Root() {
  return (
    <Provider>
      <RootStack />
    </Provider>
  )
}
