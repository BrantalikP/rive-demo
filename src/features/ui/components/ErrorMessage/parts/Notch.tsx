import { Box } from '~/features/ui/components/Box'
import { ms } from '~/utils/scale'

export const Notch = () => {
  return (
    <Box
      width={ms(12)}
      height={ms(12)}
      backgroundColor="red"
      position="absolute"
      borderColor="redDarker"
      borderTopWidth={ms(2)}
      borderLeftWidth={ms(2)}
      left={ms(30)}
      top={-ms(7)}
      style={{
        transform: [{ rotate: '45deg' }],
        borderTopLeftRadius: ms(2),
      }}
    />
  )
}
