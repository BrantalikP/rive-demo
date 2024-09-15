import { Stack } from 'expo-router'

export const ScreenStack = () => {
  return (
    <Stack.Screen
      options={{
        headerShown: false,
      }}
    />
  )
}
