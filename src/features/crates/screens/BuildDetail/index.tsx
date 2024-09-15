import { useLocalSearchParams } from 'expo-router'

import { ScreenStack } from './components/ScreenStack'

import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'

export const BuildDetail = () => {
  const { id, title } = useLocalSearchParams()
  return (
    <>
      <ScreenStack />
      <Box flex={1} alignItems="center" justifyContent="center">
        <Text variant="hxl">Build Detail</Text>
        <Text>id: {id}</Text>
        <Text>title: {title}</Text>
      </Box>
    </>
  )
}
