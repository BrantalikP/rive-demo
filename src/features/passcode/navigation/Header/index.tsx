import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { router, usePathname } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { BackButton } from '~/features/navigation/components/BackButton'
import { Box } from '~/features/ui/components/Box'
import { UnderlineButton } from '~/features/ui/components/UnderlineButton'

export const Header = (props: NativeStackHeaderProps) => {
  const { top } = useSafeAreaInsets()
  const pathname = usePathname()
  return (
    <Box
      {...props}
      style={{ paddingTop: top }}
      paddingHorizontal="l"
      backgroundColor="beigeSubdued"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <BackButton />
      {pathname === '/enter-passcode' && (
        <UnderlineButton onPress={() => router.navigate('/lost-passcode')} label="Lost passcode" />
      )}
    </Box>
  )
}
