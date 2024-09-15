import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useTheme } from '~/features/ui/theme/useTheme'

export const useNavigationStyles = () => {
  const { colors, spacing } = useTheme()
  const { bottom } = useSafeAreaInsets()

  const styles = StyleSheet.create({
    contentStyle: {
      backgroundColor: colors.beigeSubdued,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: spacing.xl,
      paddingBottom: spacing.m + bottom,
    },
  })
  return { colors, styles }
}
