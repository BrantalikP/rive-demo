import React from 'react'
import PagerView from 'react-native-pager-view'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useDIYDetail } from './hooks/useDIYDetail'
import { useDIYPagerView } from './hooks/useDIYPagerView'
import { CloseButton } from '../CrateDetail/components/Header/parts/CloseButton'

import { Box } from '~/features/ui/components/Box'
import { Loader } from '~/features/ui/components/Loader'
import { StepperIndicator } from '~/features/ui/components/StepperIndicator'

export const DIYDetail = () => {
  const insets = useSafeAreaInsets()
  const { data, isLoading } = useDIYDetail()
  const { page, setPage, pagerViews, refPagerView } = useDIYPagerView({ data })

  if (isLoading) return <Loader />

  return (
    <>
      <Box
        style={{ paddingTop: insets.top }}
        paddingHorizontal="xl"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        zIndex={10000}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <CloseButton zIndex={10000} />
        <StepperIndicator steps={pagerViews.length} activeStep={page} />
      </Box>
      <PagerView
        style={{ flex: 1 }}
        initialPage={page}
        onPageScroll={(event) => {
          setPage(event.nativeEvent.position)
        }}
        ref={refPagerView}
      >
        {pagerViews.map((pagerView, index) => (
          <Box key={index} backgroundColor="beigeSubdued">
            {pagerView}
          </Box>
        ))}
      </PagerView>
    </>
  )
}
