import { useLocalSearchParams } from 'expo-router'
import { Keyboard } from 'react-native'

import { ScreenStack } from './components/ScreenStack'

import { DayOfBirthSection } from '~/features/profiles/screens/EditProfile/components/DayOfBirthSection'
import { NameSection } from '~/features/profiles/screens/EditProfile/components/NameSection'
import { useEditing } from '~/features/profiles/screens/EditProfile/hooks/useEditing'
import { Box } from '~/features/ui/components/Box'
import { Button } from '~/features/ui/components/Button'
import { Pressable } from '~/features/ui/components/Pressable'
import { Text } from '~/features/ui/components/Text'

export const EditProfileScreen = () => {
  const { id } = useLocalSearchParams()
  const { form, onSave, isError } = useEditing(Number(id))
  return (
    <>
      <ScreenStack />
      <Pressable
        flex={1}
        onPress={Keyboard.dismiss}
        alignItems="center"
        backgroundColor="primaryBackground"
        pt="m"
        px="xl"
      >
        <NameSection form={form} />
        <Text variant="hsm">Date of birth</Text>
        <Box justifyContent="space-between" flex={1} width="100%" mb="3xl">
          <DayOfBirthSection form={form} />
          <Button
            width="100%"
            label="Save"
            onPress={form.handleSubmit(onSave)}
            disabled={isError}
          />
        </Box>
      </Pressable>
    </>
  )
}
