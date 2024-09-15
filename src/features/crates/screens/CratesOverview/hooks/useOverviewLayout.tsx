import { useEffect, useRef, useState } from 'react'
import { SectionList } from 'react-native'

import { DATA } from '~/features/crates/screens/CratesOverview/mocks/sections'

export const useOverviewLayout = () => {
  const scrollRef = useRef<SectionList>()
  const [isAnimating, setStartAnimation] = useState(false)
  const scrollToActiveCrate = () => {
    if (scrollRef.current) {
      startAnimatedSequence()
      scrollRef.current.scrollToLocation({
        sectionIndex: 0,
        itemIndex: DATA[0].data.length - 1,
        animated: true,
        viewOffset: 0,
        viewPosition: 0,
      })
    }
    // FIXME: check the crate status
    // START ANIMATION SEQUENCE
  }

  const startAnimatedSequence = () => {
    setStartAnimation(true)
  }

  const stopAnimatedSequence = () => {
    setStartAnimation(false)
  }

  useEffect(() => {
    setTimeout(() => {
      scrollToActiveCrate()
    }, 100)
  }, [])

  return { scrollRef, isAnimating, startAnimatedSequence, stopAnimatedSequence }
}
