import { createBox } from '@shopify/restyle'
import ReAnimated from 'react-native-reanimated'
import _Svg, * as ReactNativeSvg from 'react-native-svg'

import { Theme } from '../../theme/theme'

export * from 'react-native-svg'

export const Svg = createBox<Theme, React.ComponentProps<typeof _Svg>>(_Svg)
export const AnimatedSvg = ReAnimated.createAnimatedComponent(Svg)

export const Path = ReactNativeSvg.Path
export const AnimatedPath = ReAnimated.createAnimatedComponent(Path)
