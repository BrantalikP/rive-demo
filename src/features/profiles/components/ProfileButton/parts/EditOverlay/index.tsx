import { PenIcon } from '~/features/profiles/components/ProfileButton/parts/PenIcon'
import { Box } from '~/features/ui/components/Box'

export const EditOverlay = () => {
  return (
    <Box
      position="absolute"
      zIndex={1000}
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
      backgroundColor="white80"
      borderRadius="round"
    >
      <PenIcon />
    </Box>
  )
}
