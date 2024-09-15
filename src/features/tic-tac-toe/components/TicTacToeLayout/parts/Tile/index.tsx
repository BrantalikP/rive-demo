import { Pressable } from '~/features/ui/components/Pressable'

interface ITile {
  tileSize: number
  onPress: () => void
}
export const Tile = ({ tileSize, onPress, ...restProps }: ITile) => {
  return (
    <Pressable
      onPress={onPress}
      disabled // TODO: remove this line after implementing the logic
      borderWidth={0.25}
      borderColor="tileBorder"
      width={tileSize}
      height={tileSize}
      backgroundColor="primaryBackground"
      {...restProps}
    />
  )
}
