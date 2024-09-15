import React from 'react'

import { EventName } from '~/features/activity/components/Activity/presets'
import { Text } from '~/features/ui/components/Text'

const wrapWithBold = (text: string) => {
  return <Text variant="labelBold">{text}</Text>
}

export const getActivityMessage = ({
  event,
  kidName = '',
  crateName = '',
  badgeName = '',
}: {
  event: EventName
  crateName?: string
  kidName?: string
  badgeName?: string
}) => {
  switch (event) {
    case 'crate_dispatched':
      return <>Your {wrapWithBold(crateName)} is heading your way!</>
    case 'crate_delivered':
      return <>Your {wrapWithBold(crateName)} has arrived and it's ready to be unboxed!</>
    case 'crate_unboxed':
      return (
        <>
          {wrapWithBold(kidName)} unboxed {wrapWithBold(crateName)} 🎉
        </>
      )
    case 'crate_build_video_watched':
      return (
        <>
          {wrapWithBold(kidName)} watched {wrapWithBold(crateName)} video 👏
        </>
      )
    case 'crate_instruction_videos_watched':
      return (
        <>
          {wrapWithBold(kidName)} watched {wrapWithBold(crateName)} instruction video 👏
        </>
      )
    case 'crate_instruction_pngs_watched':
      return (
        <>
          {wrapWithBold(kidName)} saw {wrapWithBold(crateName)} photo 👀
        </>
      )
    case 'crate_diy_watched':
      return (
        <>
          {wrapWithBold(kidName)} saw {wrapWithBold(crateName)} photo 👀
        </>
      )
    case 'crate_marked_completed':
      return (
        <>
          {wrapWithBold(kidName)} completed {wrapWithBold(crateName)} 🚀
        </>
      )
    case 'crate_feedback_given':
      return (
        <>
          {wrapWithBold(kidName)} rated {wrapWithBold(crateName)} 💬
        </>
      )
    case 'badge_earned':
      return (
        <>
          {wrapWithBold(kidName)} earned {wrapWithBold(badgeName)} 🏅
        </>
      )
    default:
      return null
  }
}
