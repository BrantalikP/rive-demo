import { Stack } from 'expo-router'

import { CloseButton } from '~/features/profiles/screens/EditProfile/components/CloseButton'
import { useTheme } from '~/features/ui/theme/useTheme'

export const ScreenStack = () => {
  const { colors } = useTheme()
  return (
    <Stack.Screen
      options={{
        headerShown: true,
        headerShadowVisible: false,
        headerLeft: () => <CloseButton />,
        title: '',
        headerStyle: {
          backgroundColor: colors.primaryBackground,
        },
      }}
    />
  )
}
