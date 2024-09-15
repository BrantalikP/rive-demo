import { QueryClient } from '@tanstack/react-query'
import Toast from 'react-native-root-toast'

import { theme } from '~/features/ui/theme/theme'
import { isApiError } from '~/types/api'

const DEFAULT_STALE_TIME = 600000 // 10 minutes

let toast: typeof Toast | null = null

export const queryErrorHandler = (error: unknown) => {
  const { colors, borderRadii, spacing, textVariants } = theme
  const errorMessage = isApiError(error) ? error.message : 'Network error'

  // prevent duplicate toasts
  if (toast) {
    Toast.hide(toast)
    toast = null
  }

  toast = Toast.show(errorMessage, {
    duration: Toast.durations.LONG,
    position: Toast.positions.TOP,
    shadow: true,
    animation: true,
    shadowColor: colors.danger,
    hideOnPress: true,
    backgroundColor: colors.error,
    containerStyle: {
      borderRadius: borderRadii.m,
      padding: spacing.m,
    },
    textStyle: {
      fontSize: textVariants.labelSmallBold.fontSize,
      fontFamily: textVariants.labelSmallBold.fontFamily,
    },
    delay: 0,
  })
}

export const generateQueryClient = (): QueryClient => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: DEFAULT_STALE_TIME,
      },
      mutations: {
        onError: queryErrorHandler,
      },
    },
  })
}

export const queryClient = generateQueryClient()
