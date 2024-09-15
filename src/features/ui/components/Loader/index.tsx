import { FadeIn, FadeOut } from 'react-native-reanimated'

import { AnimatedLoader } from './parts/AnimatedLoader'
import { AnimatedBox } from '../Box'

export const Loader = () => {
  return (
    <AnimatedBox
      bg="beigeSubdued"
      flex={1}
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={1000}
      justifyContent="center"
      alignItems="center"
      entering={FadeIn}
      exiting={FadeOut}
    >
      <AnimatedLoader />
    </AnimatedBox>
  )
}
