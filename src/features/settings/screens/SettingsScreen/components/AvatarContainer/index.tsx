import { Avatar } from './parts/Avatar'

import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'
import { useRootStore } from '~/store/useRootStore'
import { ms } from '~/utils/scale'

export const AvatarContainer = () => {
  const { user } = useRootStore((state) => ({ user: state.user }))

  return (
    <Box
      borderRadius="m"
      borderColor="beigeDarker"
      mt="xl"
      width="100%"
      height={ms(200)}
      backgroundColor="white"
      alignItems="center"
      borderWidth={ms(2)}
      justifyContent="flex-end"
      paddingBottom="xl"
    >
      <Avatar />
      <Text variant="hmd">
        {user?.firstName} {user?.lastName}
      </Text>
      <Text variant="label" color="black60">
        {user?.email}
      </Text>
    </Box>
  )
}
