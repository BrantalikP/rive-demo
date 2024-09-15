import { Stack, useLocalSearchParams } from 'expo-router'

import { Header } from '~/features/crates/navigation/Header'

export const ScreenStack = () => {
  const navigationProps: { id: string; imageId: string } = useLocalSearchParams()
  return (
    <Stack.Screen
      options={{
        animation: 'fade',
        headerShown: true,
        header: (props) => <Header {...props} {...navigationProps} />,
      }}
    />
  )
}
