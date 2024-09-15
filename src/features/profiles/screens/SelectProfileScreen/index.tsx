import { router } from 'expo-router'

import { ScreenStack } from './components/ScreenStack'
import { ProfileButton } from '../../components/ProfileButton'
import { Title } from '../../components/Title'
import { useProfileStyles } from '../../hooks/useProfileStyles'
import { useProfiles } from '../../hooks/useProfiles'

import { TicTacToeLayout } from '~/features/tic-tac-toe/components/TicTacToeLayout'
import { Box } from '~/features/ui/components/Box'
import { Button } from '~/features/ui/components/Button'
import { Loader } from '~/features/ui/components/Loader'
import { ms } from '~/utils/scale'

export const SelectProfile = () => {
  const { profiles, handleNavigation, isLoading } = useProfiles()
  const { buttonMarginTop, titleMarginTop } = useProfileStyles()

  if (isLoading) return <Loader />

  return (
    <>
      <ScreenStack />
      <TicTacToeLayout>
        <Title style={{ marginTop: titleMarginTop }} />
        <Box
          flex={1}
          height="100%"
          flexDirection="row"
          style={{
            marginTop: buttonMarginTop,
          }}
          flexWrap="wrap"
          justifyContent="center"
          alignItems="flex-start"
        >
          {profiles?.map(({ id, firstName, lastName }, index) => {
            const imageId = `${index + 1}`
            return (
              <ProfileButton
                shared
                onPress={() =>
                  router.navigate({
                    pathname: '/crates-overview',
                    params: { imageId, id },
                  })
                }
                id={id}
                imageId={imageId}
                name={`${firstName} ${lastName}`}
                key={id}
              />
            )
          })}
        </Box>
        <Box
          backgroundColor="primaryBackground"
          paddingHorizontal="l"
          height={ms(137)}
          justifyContent="center"
        >
          <Button onPress={handleNavigation} variant="striped" label="Grown-ups Only" />
        </Box>
      </TicTacToeLayout>
    </>
  )
}
