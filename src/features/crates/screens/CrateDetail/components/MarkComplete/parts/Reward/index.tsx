import { AnimatedStyle } from 'react-native-reanimated'

import { ProfileIcon } from '../../../ProfileIcon'

import { Box } from '~/features/ui/components/Box'
import { AnimatedText, Text } from '~/features/ui/components/Text'
import { ms } from '~/utils/scale'

interface IReward {
  animatedStyles: AnimatedStyle
}
export const Reward = ({ animatedStyles }: IReward) => {
  return (
    <Box flexDirection="row" alignItems="center" height="100%" justifyContent="center">
      <Text variant="button" color="white">
        I'm done!
      </Text>
      <Box
        flexDirection="row"
        py="xs"
        borderColor="primary"
        ml="sm"
        backgroundColor="primaryBackground"
        borderRadius="sm"
        px="s"
        pr="sm"
        borderWidth={ms(2)}
      >
        <ProfileIcon />
        <AnimatedText color="labs" style={animatedStyles} variant="labelSmallBold">
          +1
        </AnimatedText>
      </Box>
    </Box>
  )
}
