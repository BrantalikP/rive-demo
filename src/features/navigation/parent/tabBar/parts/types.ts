import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { ComponentProps } from 'react'
import { PressableProps } from 'react-native'
import { AnimatedProps } from 'react-native-reanimated'

import { Svg } from '~/features/ui/components/Svg'
import { ThemeColorKeys } from '~/features/ui/theme/types'

export type IconProps = ComponentProps<typeof Svg> & {
  fillColor?: ThemeColorKeys
  strokeColor?: ThemeColorKeys
  animatedProps: AnimatedProps<any>
}

export interface ITabBarButton extends Omit<PressableProps, 'onPress' | 'onLongPress'> {
  route: BottomTabBarProps['state']['routes'][number]
  isFocused: boolean
  navigation: BottomTabBarProps['navigation']
}
