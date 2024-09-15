import { Stack } from 'expo-router'

import { useTheme } from '~/features/ui/theme/useTheme'

export const ScreenStack = () => {
  const theme = useTheme()

  return (
    <Stack.Screen
      options={{
        contentStyle: {
          backgroundColor: theme.colors.beigeSubdued,
        },
      }}
    />
  )
}
