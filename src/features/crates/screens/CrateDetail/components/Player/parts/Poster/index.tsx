import { Image } from '~/features/ui/components/Image'
import { Pressable } from '~/features/ui/components/Pressable'

interface IPoster {
  onPlay: () => void
}
export const Poster = ({ onPlay }: IPoster) => {
  return (
    <Pressable onPress={onPlay}>
      <Image
        borderRadius="sm"
        height="100%"
        width="100%"
        source={require('../../../../mocks/assets/video.png')}
      />
    </Pressable>
  )
}
