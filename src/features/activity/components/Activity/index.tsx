import dayjs from 'dayjs'

import { ActivityMessage } from '~/features/activity/components/Activity/parts/ActivityMessage'
import { EventName, MIN_HEIGHT } from '~/features/activity/components/Activity/presets'
import { activityIcon } from '~/features/activity/utils/getIcon'
import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'
import { UnderlineButton } from '~/features/ui/components/UnderlineButton'
import { ms } from '~/utils/scale'

interface IActivity {
  eventType?: EventName
  name?: string
  crateName?: string
  badgeName?: string
  createdAt: string
}

export const Activity = ({
  eventType = 'crate_unboxed',
  name = 'John',
  crateName = 'Pinball Machine',
  badgeName = 'Scientist',
  createdAt = '2021-09-01T00:00:00.000Z',
}: IActivity) => {
  const Icon = activityIcon[eventType]
  const parsedDate = dayjs(createdAt)?.fromNow()
  return (
    <Box
      borderRadius="m"
      p="ml"
      borderWidth={ms(2)}
      borderColor="beigeDarker"
      width="100%"
      backgroundColor="secondaryBackground"
      mb="m"
      flexDirection="row"
      minHeight={MIN_HEIGHT}
      alignItems="flex-start"
    >
      <Icon />
      <Box ml="sm" flex={1}>
        <ActivityMessage
          event={eventType}
          kidName={name}
          crateName={crateName}
          badgeName={badgeName}
        />
        <Text mt="2xs" color="black60" variant="labelSmall">
          {parsedDate}
        </Text>
        {eventType === 'crate_feedback_given' && (
          <UnderlineButton
            mt="s"
            alignSelf="flex-start"
            onPress={() => {}}
            label="Share Your rating"
          />
        )}
      </Box>
    </Box>
  )
}
