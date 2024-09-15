import { useWindowDimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ScreenStack } from './components/ScreenStack'
import { html } from './parts/html-content'
import { Box } from '../ui/components/Box'
import { RenderHtml } from '../ui/components/RenderHtml'
import { ScrollView } from '../ui/components/ScrollView'

export const TermScreen = () => {
  const insets = useSafeAreaInsets()
  const { width } = useWindowDimensions()

  return (
    <>
      <ScreenStack />
      <Box flex={1} style={{ marginBottom: insets.bottom }} marginTop="m" marginHorizontal="xl">
        <ScrollView showsVerticalScrollIndicator={false}>
          <RenderHtml source={{ html }} contentWidth={width} />
        </ScrollView>
      </Box>
    </>
  )
}
