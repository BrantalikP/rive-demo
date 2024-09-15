import { PROFILE_BUTTON_SIZE } from './presets'

import { getAvatarImageSource } from '~/features/profiles/utils/getAvatarImageSource'
import { AnimatedImage } from '~/features/ui/components/Image'
import { AnimatedPressable } from '~/features/ui/components/Pressable'

interface IProfileButton {
  onPress: () => void
  id: string
  imageId?: string
}
export const ProfileButton = ({ onPress, id = '1', imageId = '1' }: IProfileButton) => {
  return (
    <AnimatedPressable
      onPress={onPress}
      width={PROFILE_BUTTON_SIZE}
      height={PROFILE_BUTTON_SIZE}
      borderRadius="round"
    >
      <AnimatedImage
        // FIXME: There is known issue on android during reverse transition, will be fixed later
        sharedTransitionTag={`profileButton-${imageId}`}
        backgroundColor="white"
        height={PROFILE_BUTTON_SIZE}
        width={PROFILE_BUTTON_SIZE}
        style={{
          borderRadius: PROFILE_BUTTON_SIZE / 2,
        }}
        source={getAvatarImageSource(imageId)}
      />
    </AnimatedPressable>
  )
}
