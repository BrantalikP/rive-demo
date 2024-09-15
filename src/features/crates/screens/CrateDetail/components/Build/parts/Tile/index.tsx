import { router } from 'expo-router'

import { IMAGE_HEIGHT, IMAGE_WIDTH, TILE_HEIGHT, TILE_WIDTH } from './presets'
import { PlayIcon } from '../PlayIcon'

import { Box } from '~/features/ui/components/Box'
import { Image } from '~/features/ui/components/Image'
import { Pressable } from '~/features/ui/components/Pressable'
import { Text } from '~/features/ui/components/Text'
import { ms } from '~/utils/scale'

interface ITile {
  image: string
  title: string
  id: string | number
  isVideo: boolean
}

export const Tile = ({ id, image, title, isVideo }: ITile) => {
  return (
    <Pressable
      onPress={() => router.navigate({ pathname: '/build-detail', params: { id, title } })}
      width="49%"
      maxWidth={TILE_WIDTH}
      alignItems="center"
      borderColor="beigeDarker"
      pt="xl"
      backgroundColor="primaryBackground"
      borderWidth={ms(2)}
      height={TILE_HEIGHT}
      borderRadius="m"
      mb="sm"
    >
      <Box position="relative" width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
        {isVideo && <PlayIcon />}
        <Image borderRadius="s" width="100%" height="100%" source={image} />
      </Box>
      <Text marginTop="sm" variant="labelSmall">
        {title}
      </Text>
    </Pressable>
  )
}
