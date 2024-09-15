import { CONTAINER_SIZE } from './presets'
import { getInitials } from './utils'

import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'
import { useRootStore } from '~/store/useRootStore'

export const Avatar = () => {
  const { user } = useRootStore((state) => ({ user: state.user }))
  const initials = getInitials(user?.firstName, user?.lastName)

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      mb="m"
      borderRadius="round"
      height={CONTAINER_SIZE}
      width={CONTAINER_SIZE}
      backgroundColor="primary"
    >
      <Text variant="hxl" color="white">
        {initials}
      </Text>
    </Box>
  )
}
