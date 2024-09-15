import { CurvedShape } from './parts/CurveShape'
import { IMAGE_HEIGHT } from './presets'

import { Box } from '~/features/ui/components/Box'
import { ColorizedTitle } from '~/features/ui/components/ColorizedTitle'
import { Image } from '~/features/ui/components/Image'
import { ms } from '~/utils/scale'

export const HeaderSection = ({
  children,
  image,
  title,
  hasBottomBorder = true,
}: {
  children: React.ReactNode
  image: string
  title: string
  hasBottomBorder?: boolean
}) => {
  return (
    <Box
      alignItems="center"
      style={{ paddingTop: IMAGE_HEIGHT }}
      borderBottomColor="beigeDarker"
      borderBottomWidth={hasBottomBorder ? ms(2) : 0}
      pb="xl"
    >
      <Image width="100%" position="absolute" height={IMAGE_HEIGHT} zIndex={-1} source={image} />
      <Box alignItems="center" justifyContent="center">
        <CurvedShape />
        <ColorizedTitle mt="l">{title}</ColorizedTitle>
      </Box>
      {children}
    </Box>
  )
}
