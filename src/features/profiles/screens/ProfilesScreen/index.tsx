import { useProfiles } from './hooks/useProfiles'
import { ProfileButton } from '../../components/ProfileButton'

import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'
import { useRootStore } from '~/store/useRootStore'

export const Profiles = () => {
  const { profiles, isEditing, handleNavigation } = useProfiles()
  const { user } = useRootStore((state) => ({ user: state.user }))

  return (
    <Box flex={1} backgroundColor="primaryBackground" pt="m">
      <Text mb="4xl" variant="hlg" textAlign="center">
        {isEditing ? 'Manage profiles' : `${user?.lastName} Family`}
      </Text>
      <Box
        flex={1}
        height="100%"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="flex-start"
      >
        {profiles?.map(({ id, firstName, lastName }, index) => {
          const imageId = `${index + 1}`
          return (
            <ProfileButton
              isEditing={isEditing}
              onPress={() => handleNavigation(id)}
              id={id}
              name={`${firstName} ${lastName}`}
              imageId={imageId}
              key={id}
            />
          )
        })}
      </Box>
    </Box>
  )
}
