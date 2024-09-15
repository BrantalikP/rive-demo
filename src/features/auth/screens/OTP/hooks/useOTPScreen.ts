import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState, useRef } from 'react'
import { AppState, AppStateStatus } from 'react-native'

import { OTA_TIMEOUT } from './presets'

import {
  useAuthControllerLoginWithCredentials,
  useAuthControllerRequestMagicCode,
} from '~/api/generated/apiComponents'
import { useAuth } from '~/features/auth/hooks/useAuth'
import { useRootStore } from '~/store/useRootStore'
import { handleErrorWithException } from '~/utils/handleErrorWithException'

export const useOTPScreen = () => {
  const [timeLeft, setTimeLeft] = useState(OTA_TIMEOUT)
  const [error, setError] = useState('')
  const { email } = useLocalSearchParams() as { email: string }
  const { signIn } = useAuth()
  const setUser = useRootStore((state) => state.setUser)
  const endTimeRef = useRef<number | null>(null)

  const { mutate: login, isPending: isLoginPending } = useAuthControllerLoginWithCredentials({
    onSuccess: (response) => {
      // @ts-ignore - TS doesn't know about the token property
      const { token, ...user } = response
      setUser(user)
      signIn(token)
    },
    onError: (error) =>
      handleErrorWithException({
        error,
        errorHandler: () => {
          setError('Invalid OTP code')
        },
        errorCodes: [401],
      }),
  })

  const { mutate: _requestMagicCode, isPending: isRequestMagicCodePending } =
    useAuthControllerRequestMagicCode({
      onSuccess: () => {
        endTimeRef.current = Date.now() + OTA_TIMEOUT * 1000
        setTimeLeft(OTA_TIMEOUT)
      },
      onError: (error) =>
        handleErrorWithException({
          error,
          errorHandler: () => {
            setError('There was an error sending the magic code')
          },
          errorCodes: [401],
        }),
    })

  useEffect(() => {
    if (!email) {
      router.navigate('/sign-in')
    }
  }, [email])

  const onSubmit = (otp: string[]) => {
    const code = otp.join('')
    login({
      body: {
        email,
        temporaryCode: code,
      },
    })
  }

  const updateCountdown = () => {
    if (endTimeRef.current) {
      const now = Date.now()
      const remaining = Math.max(0, Math.ceil((endTimeRef.current - now) / 1000))
      setTimeLeft(remaining)

      if (remaining === 0) {
        endTimeRef.current = null
      }
    }
  }

  useEffect(() => {
    endTimeRef.current = Date.now() + OTA_TIMEOUT * 1000

    const interval = setInterval(updateCountdown, 1000)

    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active') {
        updateCountdown()
      }
    }

    const appStateSubscription = AppState.addEventListener('change', handleAppStateChange)

    return () => {
      clearInterval(interval)
      appStateSubscription.remove()
    }
  }, [])

  const requestMagicCode = () => {
    _requestMagicCode({
      body: { email },
    })
  }

  return {
    onSubmit,
    timeLeft,
    requestMagicCode,
    email,
    error,
    isLoginPending,
    isRequestMagicCodePending,
  }
}
