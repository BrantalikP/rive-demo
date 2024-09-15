import { router } from 'expo-router'
import { LayoutChangeEvent } from 'react-native'

import { CONTAINER_HEIGHT, OFFSET, TOP } from './presets'

import { CrateOrder } from '~/api/generated/apiSchemas'
import { useAnimatedCrate } from '~/features/crates/screens/CratesOverview/components/CrateDetail/hooks/useAnimatedCrate'
import { Achievement } from '~/features/crates/screens/CratesOverview/components/CrateDetail/parts/Achievement'
import { Divider } from '~/features/crates/screens/CratesOverview/components/CrateDetail/parts/Divider'
import { CrateProgress } from '~/features/crates/screens/CratesOverview/components/CrateProgress'
import { IMAGE_SIZE } from '~/features/crates/screens/CratesOverview/components/CrateProgress/presets'
import { AnimatedBox, Box } from '~/features/ui/components/Box'
import { Button } from '~/features/ui/components/Button'
import { Image } from '~/features/ui/components/Image'
import { Text } from '~/features/ui/components/Text'
import { useTheme } from '~/features/ui/theme/useTheme'
import { ms } from '~/utils/scale'

interface ICrateDetail extends CrateOrder {
  isAnimating: boolean
}
// FIXME: replace the mocked data
export const CrateDetail = ({ crateName, id, isAnimating }: ICrateDetail) => {
  const { containerAnimatedStyle, innerContainerAnimatedStyle, progressAnimatedStyle } =
    useAnimatedCrate(isAnimating)
  const { spacing } = useTheme()
  return (
    <Box alignItems="center" justifyContent="flex-start" height={CONTAINER_HEIGHT + TOP}>
      <AnimatedBox
        backgroundColor="labs"
        position="absolute"
        top={TOP + OFFSET}
        height={CONTAINER_HEIGHT}
        style={containerAnimatedStyle}
        pb="l"
      />
      <AnimatedBox
        style={[{ paddingTop: IMAGE_SIZE / 2 + spacing.m }, containerAnimatedStyle]}
        backgroundColor="secondaryBackground"
        borderWidth={4}
        borderColor="labs"
        position="absolute"
        top={TOP}
        height={CONTAINER_HEIGHT}
      >
        <AnimatedBox style={innerContainerAnimatedStyle} flex={1} alignItems="center">
          <Text variant="hmd" color="labs">
            {crateName}
          </Text>
          {/* FIXME: use the real data when possible*/}
          <Text variant="labelXSmallBold" color="black60" mt="s">
            1 OF 4 PARTS COMPLETE
          </Text>
          <Box flexDirection="row" gap="s" mt="m" mb="l">
            <Achievement name="crate" isCompleted />
            <Achievement name="wrench" />
            <Achievement name="play" isCompleted />
            <Achievement name="complete" />
          </Box>
          <Divider width="90%" />
          <Box flexDirection="row" width="90%" alignItems="center" my="sm">
            <Image
              source={require('./assets/activitySample.png')}
              height={ms(64)}
              width={ms(114)}
            />
            <Text variant="labelSmall" ml="m" style={{ flex: 1 }}>
              Check out more activity ideas
            </Text>
          </Box>
          <Divider width="90%" />
          <Button
            onPress={() =>
              router.push({
                pathname: '/crate-detail',
                params: { theme: 'labs', crateOrderId: id },
              })
            }
            mt="l"
            label="Dive in!"
          />
        </AnimatedBox>
      </AnimatedBox>
      <AnimatedBox style={progressAnimatedStyle}>
        <CrateProgress progress={75} crateImage={null} completionDate={null} />
      </AnimatedBox>
    </Box>
  )
}
