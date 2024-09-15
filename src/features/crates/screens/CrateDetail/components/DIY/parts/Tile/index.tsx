import { router } from 'expo-router'

import { IMAGE_HEIGHT, TILE_HEIGHT, TILE_WIDTH } from './presets'

import { Image } from '~/features/ui/components/Image'
import { Pressable } from '~/features/ui/components/Pressable'
import { Text } from '~/features/ui/components/Text'
import { ms } from '~/utils/scale'

interface ITile {
  image: string
  title: string
  id: string | number
}
export const Tile = ({ id, image, title }: ITile) => {
  return (
    <Pressable
      onPress={() =>
        router.navigate({
          pathname: '/diy-detail',
          params: {
            // TODO: get uid from data
            uid: 'blt3c5e40256944d676',
            title,
          },
        })
      }
      width="49%"
      alignItems="flex-start"
      borderColor="beigeDarker"
      padding="s"
      maxWidth={TILE_WIDTH}
      borderWidth={ms(2)}
      height={TILE_HEIGHT}
      borderRadius="m"
      marginBottom="sm"
    >
      <Image width="100%" height={IMAGE_HEIGHT} source={image} />
      <Text marginTop="sm" variant="tileLabel">
        {title}
      </Text>
    </Pressable>
  )
}
