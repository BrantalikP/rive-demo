import { useMMKVDevTools } from '@dev-plugins/react-native-mmkv'
import { ThemeProvider } from '@shopify/restyle'
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, { PropsWithChildren, useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { RootSiblingParent } from 'react-native-root-siblings'

import { ForcedUpdate } from '~/components/ForcedUpdate'
import { OfflineMessage } from '~/components/OfflineMessage'
// We need to import the theme from the theme file directly
import { theme } from '~/features/ui/theme/theme'
import { useIsOnline } from '~/hooks/useIsOnline'
import { useOTAUpdates } from '~/hooks/useOTAUpdate'
import { useStoreUpdate } from '~/hooks/useStoreUpdate'
import { setFontScaling } from '~/utils/setFontScaling'

void SplashScreen.preventAutoHideAsync()
setFontScaling()
dayjs.extend(relativeTime)

export const Provider = ({ children }: PropsWithChildren) => {
  const isAppOutdated = useStoreUpdate('forced')
  const { isOnline } = useIsOnline()
  const [loaded, error] = useFonts({
    'ContraNo2-Bold': require('../../assets/fonts/CentraNo2-Bold.otf'),
    'ContraNo2-Book': require('../../assets/fonts/CentraNo2-Book.otf'),
    'ContraNo2-BookItalic': require('../../assets/fonts/CentraNo2-BookItalic.otf'),
  })

  useMMKVDevTools()
  useOTAUpdates()

  useEffect(() => {
    // isAppOutdated is null until logic runs
    if (isAppOutdated !== null && (loaded || error)) {
      void SplashScreen.hideAsync()
    }
  }, [isAppOutdated, loaded, error])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <RootSiblingParent>
          {children}
          {isAppOutdated && <ForcedUpdate />}
          {isOnline === false && <OfflineMessage />}
        </RootSiblingParent>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
