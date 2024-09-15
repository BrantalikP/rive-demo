import { Box } from '~/features/ui/components/Box'
import { useTheme } from '~/features/ui/theme/useTheme'
import { ms } from '~/utils/scale'

export const Stripes = () => {
  const theme = useTheme()

  const stripes = []
  for (let i = 0; i < 8; i++) {
    // Adjust the range to ensure full coverage
    stripes.push(
      <Box
        key={i}
        style={[
          {
            position: 'absolute',
            bottom: ms(0),
            width: ms(20),
            backgroundColor: theme.colors.beigeDarker,
            opacity: 0.4,
            transform: [{ rotate: '45deg' }],
            zIndex: -1,
            left: ms(i * 60),
            height: ms(200),
            top: ms(-50),
            marginLeft: ms(-100),
          },
        ]}
      />,
    )
  }
  return stripes
}
