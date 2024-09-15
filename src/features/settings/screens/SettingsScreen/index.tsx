import { ActionList } from './components/ActionList'
import { AvatarContainer } from './components/AvatarContainer'
import { useActions } from './hooks/useActions'

import { runtimeVersion } from '~/constants/platform'
import { ScrollView } from '~/features/ui/components/ScrollView'
import { Text } from '~/features/ui/components/Text'

export const Settings = () => {
  const { deleteActions, mainActions } = useActions()

  return (
    <ScrollView
      px="m"
      flex={1}
      contentContainerStyle={{
        alignItems: 'center',
      }}
      pt="m"
      showsVerticalScrollIndicator={false}
      backgroundColor="primaryBackground"
    >
      <Text variant="hlg">Settings</Text>
      <AvatarContainer />
      <ActionList actions={deleteActions} />

      <ActionList actions={mainActions} />
      <Text mb="xl" mt="s" variant="labelSmall">
        Version: {runtimeVersion}
      </Text>
    </ScrollView>
  )
}
