import { ReactNode } from 'react'

import { BadgeIcon } from '~/features/activity/components/Activity/parts/BadgeIcon'
import { BoxIcon } from '~/features/activity/components/Activity/parts/BoxIcon'
import { DeliveryIcon } from '~/features/activity/components/Activity/parts/DeliveryIcon'
import { KiwiIcon } from '~/features/activity/components/Activity/parts/KiwiIcon'
import { PlayIcon } from '~/features/activity/components/Activity/parts/PlayIcon'
import { RateIcon } from '~/features/activity/components/Activity/parts/RateIcon'
import { EventName } from '~/features/activity/components/Activity/presets'

export const activityIcon: Record<EventName, () => ReactNode> = {
  crate_dispatched: DeliveryIcon,
  crate_delivered: DeliveryIcon,
  crate_unboxed: BoxIcon,
  crate_build_video_watched: PlayIcon,
  crate_instruction_videos_watched: PlayIcon,
  crate_instruction_pngs_watched: PlayIcon,
  crate_diy_watched: PlayIcon,
  crate_marked_completed: KiwiIcon,
  crate_feedback_given: RateIcon,
  badge_earned: BadgeIcon,
}
