import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useEffect, useRef } from 'react'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import { DOT_DURATION, DOT_SIZE } from '../presets'

interface Props {
  state: BottomTabBarProps['state']
}
export const useTabBarStyles = ({ state }: Props) => {
  const dotPosition = useSharedValue(0)
  const tabPositions = useRef<number[]>([])
  const isInitialRender = useRef(true)

  const measureTab = (index: number, event: any) => {
    const { x, width } = event.nativeEvent.layout
    const centerPosition = x + width / 2 - DOT_SIZE / 2
    tabPositions.current[index] = centerPosition

    // Set initial position if this is the focused tab on first render
    if (isInitialRender.current && index === state.index) {
      dotPosition.value = centerPosition
      isInitialRender.current = false
    }
  }

  useEffect(() => {
    if (tabPositions.current[state.index] !== undefined) {
      dotPosition.value = withTiming(tabPositions.current[state.index], {
        duration: DOT_DURATION,
      })
    }
  }, [state.index])

  const animatedDotStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dotPosition.value }],
    }
  })

  return {
    measureTab,
    animatedDotStyle,
  }
}
