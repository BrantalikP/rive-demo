import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { CloseButton } from './parts/CloseButton'

import { Box } from '~/features/ui/components/Box'

export const Header = () => {
  const { top } = useSafeAreaInsets()
  return (
    <Box
      style={{ paddingTop: top }}
      paddingHorizontal="l"
      position="absolute"
      top={0}
      left={0}
      width="100%"
      zIndex={10000}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <CloseButton />
    </Box>
  )
}
