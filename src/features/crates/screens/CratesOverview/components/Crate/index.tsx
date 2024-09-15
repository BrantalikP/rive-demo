import { router } from 'expo-router'

import { CrateOrder } from '~/api/generated/apiSchemas'
import { Badge } from '~/features/crates/screens/CratesOverview/components/Crate/mocks/Badge'
import { ConnectorEndLeft } from '~/features/crates/screens/CratesOverview/components/Crate/parts/ConnectorEndLeft'
import { ConnectorEndRight } from '~/features/crates/screens/CratesOverview/components/Crate/parts/ConnectorEndRight'
import { ConnectorLeft } from '~/features/crates/screens/CratesOverview/components/Crate/parts/ConnectorLeft'
import { ConnectorRight } from '~/features/crates/screens/CratesOverview/components/Crate/parts/ConnectorRight'
import { ConnectorStart } from '~/features/crates/screens/CratesOverview/components/Crate/parts/ConnectorStart'
import { KiwiCoReminder } from '~/features/crates/screens/CratesOverview/components/Crate/parts/KiwiCoReminder'
import { RatingBadge } from '~/features/crates/screens/CratesOverview/components/Crate/parts/RatingBadge'
import { useAnimatedCrate } from '~/features/crates/screens/CratesOverview/components/Crate/parts/hooks/useAnimatedCrate'
import {
  CRATE_HEIGHT,
  CRATE_SPACING,
} from '~/features/crates/screens/CratesOverview/components/Crate/presets'
import { CrateProgress } from '~/features/crates/screens/CratesOverview/components/CrateProgress'
import { Box } from '~/features/ui/components/Box'
import { Pressable } from '~/features/ui/components/Pressable'
import { Text } from '~/features/ui/components/Text'

interface ICrate extends CrateOrder {
  isOdd: boolean
  isLast: boolean
  isAnimating: boolean
  isFirst: boolean
  stopAnimatedSequence: () => void
}

export const Crate = ({
  isLast,
  isFirst,
  review,
  crateName,
  id,
  completedAt,
  crateImage,
  isOdd,
  isAnimating,
  stopAnimatedSequence,
}: ICrate) => {
  const { endLineLength, lineLength } = useAnimatedCrate({
    stopAnimatedSequence,
    isAnimating,
    isLast,
  })
  return (
    <Box
      width="100%"
      alignItems="center"
      style={{
        right: isOdd ? 0 : CRATE_SPACING,
        marginLeft: isOdd ? CRATE_SPACING : 0,
        paddingTop: CRATE_HEIGHT,
      }}
    >
      <Pressable
        alignItems="center"
        justifyContent="center"
        onPress={() =>
          router.push({
            pathname: '/crate-detail',
            params: { theme: 'labs', crateOrderId: id },
          })
        }
      >
        {!review && <KiwiCoReminder left={isOdd} crateOrderId={id} />}
        <CrateProgress completionDate={completedAt} crateImage={crateImage} />
        <RatingBadge rating={review?.rating} />
        <Text mb="s" variant="labelBold" color="labs">
          {crateName}
        </Text>
        <Badge />
      </Pressable>

      {/* Render the connector lines based on the position of the crate*/}
      {isFirst && <ConnectorStart />}
      {!isOdd && isLast && <ConnectorEndLeft lineLength={endLineLength} />}
      {isOdd && isLast && <ConnectorEndRight lineLength={endLineLength} />}
      {!isOdd && <ConnectorLeft lineLength={lineLength} />}
      {isOdd && <ConnectorRight lineLength={lineLength} />}
    </Box>
  )
}
