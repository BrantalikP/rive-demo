import React from 'react'
import { useWindowDimensions } from 'react-native'
import PagerView from 'react-native-pager-view'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { BUTTON_MARGIN, MARGIN_TOP } from './presets'
import { TutorialIllustration } from '../components/illustrations/TutorialIllustration'

import { Box } from '~/features/ui/components/Box'
import { Button } from '~/features/ui/components/Button'
import { ms } from '~/utils/scale'

export const TutorialPagerView = ({
  imageUrl,
  refPagerView,
  page,
}: {
  imageUrl?: string
  refPagerView: React.RefObject<PagerView>
  page: number
}) => {
  const insets = useSafeAreaInsets()
  const { width } = useWindowDimensions()
  return (
    <Box
      style={{
        paddingTop: insets.top + MARGIN_TOP,
      }}
      flex={1}
    >
      <TutorialIllustration imageUrl={imageUrl} />
      <Button
        position="absolute"
        width={width - BUTTON_MARGIN * 2}
        left={BUTTON_MARGIN}
        bottom={insets.bottom || BUTTON_MARGIN}
        label="Start building"
        onPress={() => {
          refPagerView.current?.setPage(page + 1)
        }}
      />
    </Box>
  )
}
