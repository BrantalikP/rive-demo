import { useTheme } from '@shopify/restyle'
import { Stack } from 'expo-router'

export const ScreenStack = () => {
  const theme = useTheme()
  return (
    <Stack.Screen
      options={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.beigeSubdued,
        },
      }}
    />
  )
}
