import React, { useMemo } from 'react'

import { EventName } from '~/features/activity/components/Activity/presets'
import { getActivityMessage } from '~/features/activity/utils/getActivityMessage'
import { Text } from '~/features/ui/components/Text'

interface IActivityMessage {
  event: EventName
  kidName?: string
  crateName?: string
  badgeName?: string
}

export const ActivityMessage = ({ event, kidName, crateName, badgeName }: IActivityMessage) => {
  const message = useMemo(
    () => getActivityMessage({ event, kidName, crateName, badgeName }),
    [event, kidName, crateName, badgeName],
  )

  return <Text variant="label">{message}</Text>
}
