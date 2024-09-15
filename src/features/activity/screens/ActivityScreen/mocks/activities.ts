import dayjs from 'dayjs'

import { EventName } from '~/features/activity/components/Activity/presets'

export const activities: {
  name: string
  badgeName?: string
  crateName?: string
  eventType: EventName
  createdAt: string
}[] = [
  {
    name: 'David',
    badgeName: 'Scientist',
    eventType: 'badge_earned',
    createdAt: dayjs().subtract(1, 'minute').toISOString(),
  },
  {
    name: 'David',
    crateName: 'Pinball Machine',
    eventType: 'crate_feedback_given',
    createdAt: dayjs().subtract(1, 'minute').toISOString(),
  },
  {
    name: 'David',
    crateName: 'Pinball Machine',
    eventType: 'crate_marked_completed',
    createdAt: dayjs().subtract(5, 'minutes').toISOString(),
  },
  {
    name: 'David',
    crateName: 'The Design Behind Pinball Machine',
    eventType: 'crate_build_video_watched',
    createdAt: dayjs().subtract(1, 'hour').toISOString(),
  },
  {
    name: 'David',
    crateName: 'Pinball Machine',
    eventType: 'crate_instruction_videos_watched',
    createdAt: dayjs().subtract(1, 'hour').toISOString(),
  },
  {
    name: 'David',
    crateName: 'Pinball Machine',
    eventType: 'crate_unboxed',
    createdAt: dayjs().subtract(2, 'hours').toISOString(),
  },
  {
    name: 'David',
    crateName: 'Pinball Machine',
    eventType: 'crate_delivered',
    createdAt: dayjs().subtract(23, 'hours').toISOString(),
  },
  {
    name: 'David',
    crateName: 'Pinball Machine',
    eventType: 'crate_dispatched',
    createdAt: dayjs().subtract(1, 'day').toISOString(),
  },
]
