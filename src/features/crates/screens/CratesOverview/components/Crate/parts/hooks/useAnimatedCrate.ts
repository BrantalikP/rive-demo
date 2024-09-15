import { useEffect } from 'react'
import { runOnJS, useSharedValue, withDelay, withTiming } from 'react-native-reanimated'

import { LINE_ANIMATIONS } from '~/features/crates/screens/CratesOverview/components/Crate/parts/hooks/presets'
import { SECOND_SEQUENCE_DELAY } from '~/features/crates/screens/CratesOverview/presets'

interface Props {
  isAnimating: boolean
  isLast: boolean
  stopAnimatedSequence: () => void
}

export const useAnimatedCrate = ({ isAnimating, isLast, stopAnimatedSequence }: Props) => {
  const endLineLength = useSharedValue(0.4)
  const lineLength = useSharedValue(isLast ? 1 : 0)
  useEffect(() => {
    if (isAnimating) {
      endLineLength.value = withTiming(0, { duration: LINE_ANIMATIONS })
      lineLength.value = withDelay(
        SECOND_SEQUENCE_DELAY,
        withTiming(0, { duration: LINE_ANIMATIONS }, () => runOnJS(stopAnimatedSequence)()),
      )
    }
  }, [isAnimating])
  return { endLineLength, lineLength }
}
