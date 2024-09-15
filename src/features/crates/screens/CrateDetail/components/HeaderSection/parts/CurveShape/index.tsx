import { Dimensions } from 'react-native'

import { Path, Svg } from '~/features/ui/components/Svg'
import { useTheme } from '~/features/ui/theme/useTheme'
import { ms } from '~/utils/scale'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
export const CurvedShape = () => {
  const height = ms(30)
  const width = SCREEN_WIDTH
  const curveHeight = ms(28)
  const borderWidth = ms(2)
  const extraWidth = ms(20)

  const { colors } = useTheme()
  return (
    <Svg
      width={width + extraWidth * 2}
      height={height}
      style={{ position: 'absolute', top: -height + 1, zIndex: 1000 }}
    >
      <Path
        d={`M0 ${height}
           Q ${(width + extraWidth * 2) / 2} ${height - curveHeight * 2}, ${width + extraWidth * 2} ${height}
           L${width + extraWidth * 2} ${height + curveHeight}
           L0 ${height + curveHeight}
           Z`}
        fill={colors.primaryBackground}
      />
      <Path
        d={`M0 ${height}
           Q ${(width + extraWidth * 2) / 2} ${height - curveHeight * 2}, ${width + extraWidth * 2} ${height}`}
        stroke={colors.beigeDarker}
        strokeWidth={borderWidth}
        fill="none"
      />
    </Svg>
  )
}
