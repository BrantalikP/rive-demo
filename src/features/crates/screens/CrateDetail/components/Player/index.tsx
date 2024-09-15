import { ResizeMode, Video as _Video } from 'expo-av'
import { useRef } from 'react'

import { CONTAINER_HEIGHT, CONTAINER_WIDTH } from './presets'

import { Poster } from '~/features/crates/screens/CrateDetail/components/Player/parts/Poster'
import { Video } from '~/features/ui/components/Video'
import { ms } from '~/utils/scale'

export const Player = () => {
  const video = useRef<_Video>(null)

  const onPlay = async () => {
    if (!video.current) return
    await video.current.presentFullscreenPlayer()
    void video.current.playAsync()
  }
  return (
    <Video
      ref={video}
      borderRadius="m"
      mt="l"
      mb="m"
      borderWidth={ms(2)}
      width={CONTAINER_WIDTH}
      borderColor="beigeDarker"
      height={CONTAINER_HEIGHT}
      source={{
        uri: 'https://icdn.kiwico.com/site/tinker/tinker-hero.mp4',
      }}
      usePoster
      useNativeControls
      PosterComponent={() => <Poster onPlay={onPlay} />}
      resizeMode={ResizeMode.COVER}
    />
  )
}
