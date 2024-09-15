import { Tabs } from 'expo-router'
import React from 'react'

import { BackButton } from '~/features/navigation/parent/BackButton'
import { EditButton } from '~/features/navigation/parent/EditButton'
import { TabBar } from '~/features/navigation/parent/tabBar'
import { useTheme } from '~/features/ui/theme/useTheme'

export default function TabLayout() {
  // FIXME: WIP - PLACEHOLDER
  const { colors } = useTheme()

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: true,
        title: '',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.primaryBackground,
        },
        headerRight: () => <EditButton />,
        headerLeft: () => <BackButton />,
      }}
    />
  )
}
