import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { WelcomeIllustration } from './parts/WelcomeIllustration'

import { Box } from '~/features/ui/components/Box'
import { Button } from '~/features/ui/components/Button'

export const Welcome = () => {
  const insets = useSafeAreaInsets()
  return (
    <Box
      flex={1}
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
      justifyContent="flex-end"
      gap="2sm"
    >
      <WelcomeIllustration />
      <Button
        label="Sign in with email"
        marginHorizontal="auto"
        width="90%"
        onPress={() => router.navigate('/sign-in')}
      />
    </Box>
  )
}
