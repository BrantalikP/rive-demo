import { GestureDetector } from 'react-native-gesture-handler'

import { PROFILE_BUTTON_SIZE } from './presets'
import { BUTTON_MARGIN } from '../../screens/SelectProfileScreen/presets'
import { useProfileReaction } from '../hooks/useProfileReaction'

import { EditOverlay } from '~/features/profiles/components/ProfileButton/parts/EditOverlay'
import { getAvatarImageSource } from '~/features/profiles/utils/getAvatarImageSource'
import { AnimatedBox } from '~/features/ui/components/Box'
import { AnimatedImage } from '~/features/ui/components/Image'
import { Text } from '~/features/ui/components/Text'
import { ms } from '~/utils/scale'

interface IProfileButton {
  onPress: () => void
  name: string
  id: number
  shared?: boolean
  isEditing?: boolean
  imageId: string
}
export const ProfileButton = ({
  onPress,
  name,
  id,
  imageId,
  shared = false,
  isEditing = false,
}: IProfileButton) => {
  const { tap, animatedStyle } = useProfileReaction({ onPress })
  return (
    <GestureDetector gesture={tap}>
      <AnimatedBox
        marginHorizontal="l"
        width={PROFILE_BUTTON_SIZE}
        height={PROFILE_BUTTON_SIZE}
        alignItems="center"
        style={{
          marginBottom: BUTTON_MARGIN,
        }}
      >
        <AnimatedBox
          width={PROFILE_BUTTON_SIZE}
          height={PROFILE_BUTTON_SIZE}
          borderRadius="round"
          borderColor="white"
          shadowColor="black"
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={0.2}
          borderWidth={ms(4)}
          shadowRadius={4}
          backgroundColor="primaryBackground"
          elevation={5}
          alignItems="center"
          justifyContent="center"
          style={animatedStyle}
        >
          {isEditing && <EditOverlay />}
          <AnimatedImage
            sharedTransitionTag={shared ? `profileButton-${imageId}` : undefined}
            contentFit="cover"
            borderRadius="round"
            backgroundColor="white"
            width="100%"
            height="100%"
            source={getAvatarImageSource(imageId)}
          />
        </AnimatedBox>
        <Text mt="m" variant="hsm">
          {name}
        </Text>
      </AnimatedBox>
    </GestureDetector>
  )
}
