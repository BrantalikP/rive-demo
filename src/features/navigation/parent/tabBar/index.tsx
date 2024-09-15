import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React from 'react'

import { CurvedShape } from './parts/CurveShape'
import { TabBarButton } from './parts/TabBarButton'

import {
  BOTTOM_PADDING,
  DOT_BOTTOM_PADDING,
  DOT_SIZE,
  HORIZONTAL_PADDING,
  TAB_BAR_HEIGHT,
} from '~/features/navigation/parent/presets'
import { useTabBarStyles } from '~/features/navigation/parent/tabBar/styles'
import { AnimatedBox, Box } from '~/features/ui/components/Box'

export const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const { animatedDotStyle, measureTab } = useTabBarStyles({ state })
  return (
    <Box backgroundColor="primaryBackground">
      <CurvedShape />
      <Box
        height={TAB_BAR_HEIGHT}
        flexDirection="row"
        style={{
          paddingHorizontal: HORIZONTAL_PADDING,
          paddingBottom: BOTTOM_PADDING,
        }}
        alignItems="flex-end"
        justifyContent="space-between"
      >
        {state.routes.map((route, index) => {
          const isFocused = state.index === index

          return (
            <TabBarButton
              navigation={navigation}
              key={route.name}
              onLayout={(event) => measureTab(index, event)}
              route={route}
              isFocused={isFocused}
            />
          )
        })}
      </Box>
      <AnimatedBox
        position="absolute"
        width={DOT_SIZE}
        height={DOT_SIZE}
        borderRadius="round"
        backgroundColor="primary"
        bottom={DOT_BOTTOM_PADDING}
        left={0}
        style={animatedDotStyle}
      />
    </Box>
  )
}
