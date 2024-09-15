import { FlashList } from '@shopify/flash-list'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Activity } from '~/features/activity/components/Activity'
import { MIN_HEIGHT } from '~/features/activity/components/Activity/presets'
import { activities } from '~/features/activity/screens/ActivityScreen/mocks/activities'
import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'

export const ActivityScreen = () => {
  const { bottom } = useSafeAreaInsets()

  return (
    <Box backgroundColor="primaryBackground" flex={1} width="100%" paddingHorizontal="m">
      <FlashList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottom }}
        ListHeaderComponent={() => (
          <Text mb="xl" variant="hlg" textAlign="center">
            Activity
          </Text>
        )}
        data={activities}
        renderItem={({ item }) => <Activity {...item} />}
        estimatedItemSize={MIN_HEIGHT}
      />
    </Box>
  )
}
