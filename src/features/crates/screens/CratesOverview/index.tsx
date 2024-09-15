import { useTheme } from '@shopify/restyle'

import { ScreenStack } from './components/ScreenStack'

import { CrateOrder, Subscription } from '~/api/generated/apiSchemas'
import { Crate } from '~/features/crates/screens/CratesOverview/components/Crate'
import { CrateDetail } from '~/features/crates/screens/CratesOverview/components/CrateDetail'
import { SectionHeader } from '~/features/crates/screens/CratesOverview/components/SectionHeader'
import { TimeLine } from '~/features/crates/screens/CratesOverview/components/TimeLine'
import { useCratesData } from '~/features/crates/screens/CratesOverview/hooks/useCratesData'
import { useOverviewLayout } from '~/features/crates/screens/CratesOverview/hooks/useOverviewLayout'
import { DATA } from '~/features/crates/screens/CratesOverview/mocks/sections'
import { TIMELINE_HEIGHT } from '~/features/crates/screens/CratesOverview/presets'
import { crateOrder, getIndex } from '~/features/crates/screens/CratesOverview/utils/crateOrder'
import { Box } from '~/features/ui/components/Box'
import { Loader } from '~/features/ui/components/Loader'
import { SectionList } from '~/features/ui/components/SectionList'

export const CratesOverviewScreen = () => {
  const { sections, isLoading } = useCratesData()
  const { scrollRef, isAnimating, startAnimatedSequence, stopAnimatedSequence } =
    useOverviewLayout()
  const { spacing } = useTheme()

  if (sections?.length === 0 && isLoading) return <Loader />

  return (
    <>
      <ScreenStack />
      <Box flex={1}>
        <SectionList
          pointerEvents={isAnimating ? 'none' : 'auto'}
          keyExtractor={(item, index) => {
            return String((item as CrateOrder)?.id)
          }}
          ref={scrollRef}
          inverted
          stickySectionHeadersEnabled={false}
          sections={DATA} // FIXME: use the real data once the API is implemented completely
          renderItem={({ item, index, section }) => {
            const lastItemIndex = section.data.length - 1
            if (index === lastItemIndex) {
              return <CrateDetail isAnimating={isAnimating} {...(item as CrateOrder)} />
            }

            return (
              <Crate
                stopAnimatedSequence={stopAnimatedSequence}
                isAnimating={isAnimating}
                isLast={lastItemIndex - 1 === index} // last item before the CrateDetail
                isFirst={index === 0}
                isOdd={index % 2 === 0}
                {...(item as CrateOrder)}
              />
            )
          }}
          showsVerticalScrollIndicator={false}
          px="xl"
          backgroundColor="primaryBackground"
          renderSectionHeader={({ section }) => {
            if (!crateOrder(section as Subscription, DATA as unknown as Subscription[])) return null
            return (
              <SectionHeader
                description="Learn Science Basics" // FIXME: use the real data once the API is implemented correctly
                title={(section as Subscription)?.subscriptionName}
                style={{
                  marginBottom: spacing.xl,
                }}
              />
            )
          }}
          renderSectionFooter={({ section }) => (
            <Box flex={1} height={TIMELINE_HEIGHT}>
              <SectionHeader
                description="Learn Science Basics" // FIXME: use the real data once the API is implemented correctly
                title={(section as Subscription)?.subscriptionName}
              />
              <TimeLine
                id={String(getIndex(section as Subscription, DATA as unknown as Subscription[]))}
              />
            </Box>
          )}
        />
      </Box>
    </>
  )
}
