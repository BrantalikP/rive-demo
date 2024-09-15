import { Stack } from 'expo-router'

import { useNavigationStyles } from '~/features/auth/navigation/styles'
import { BackButton } from '~/features/navigation/components/BackButton'
import { useTheme } from '~/features/ui/theme/useTheme'

const PasscodeLayout = () => {
  const { styles } = useNavigationStyles()
  const { colors } = useTheme()
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: '',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.primaryBackground,
        },
        headerLeft: () => <BackButton />,
        contentStyle: styles.contentStyle,
      }}
    />
  )
}

export default PasscodeLayout
