import { useEffect } from 'react'
import {
  interpolateColor,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { ITabBarButton } from '../../types'

import { DOT_DURATION } from '~/features/navigation/parent/presets'
import { useTheme } from '~/features/ui/theme/useTheme'

type Props = Pick<ITabBarButton, 'isFocused' | 'route' | 'navigation'>
export const useTabButton = ({ navigation, route, isFocused }: Props) => {
  const { colors } = useTheme()
  const strokeColor = isFocused ? colors.primary : colors.black

  const progress = useSharedValue(isFocused ? 1 : 0)

  useEffect(() => {
    if (isFocused) {
      progress.value = withTiming(1, { duration: DOT_DURATION })
    } else {
      progress.value = 0
    }
  }, [isFocused])

  const fillColor = useDerivedValue(
    () =>
      interpolateColor(
        progress.value,
        [0, 1],
        [colors.primaryBackground, colors.primary],
      ) as string,
  )

  const animatedProps = useAnimatedProps(() => ({
    fill: fillColor.value,
    fillOpacity: 0.25,
  }))

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    })
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params)
    }
  }
  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    })
  }
  return {
    onPress,
    animatedProps,
    strokeColor,
    onLongPress,
  }
}
