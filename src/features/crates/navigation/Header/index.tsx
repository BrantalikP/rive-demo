import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ProfileButton } from './parts/ProfileButton'

import { Box } from '~/features/ui/components/Box'

interface IHeader extends NativeStackHeaderProps {
  id: string
  imageId: string
}

export const Header = ({ id, imageId, ...restProps }: IHeader) => {
  const { top } = useSafeAreaInsets()
  return (
    <Box
      style={{ paddingTop: top }}
      paddingHorizontal="l"
      backgroundColor="beigeSubdued"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      {...restProps}
    >
      <ProfileButton id={id} imageId={imageId} onPress={() => router.back()} />
    </Box>
  )
}
