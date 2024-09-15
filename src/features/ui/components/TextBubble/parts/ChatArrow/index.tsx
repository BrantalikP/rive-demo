import { Box } from '~/features/ui/components/Box'
import { ms } from '~/utils/scale'
// TODO: make it dynamic
interface IChatArrow {}
export const ChatArrow = (props: IChatArrow) => {
  return (
    <Box
      borderColor="beigeDarker"
      position="absolute"
      alignSelf="center"
      left={ms(-6)}
      zIndex={-8}
      style={{
        transform: [{ rotate: '45deg' }],
      }}
      backgroundColor="secondaryBackground"
      borderWidth={ms(2)}
      height={ms(24)}
      width={ms(24)}
    />
  )
}
