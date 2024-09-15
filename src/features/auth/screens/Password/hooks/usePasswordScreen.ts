import { zodResolver } from '@hookform/resolvers/zod'
import { router, useLocalSearchParams } from 'expo-router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { passwordScreenSchema } from './password-screen-schema'

import {
  useAuthControllerLoginWithCredentials,
  useAuthControllerRequestMagicCode,
} from '~/api/generated/apiComponents'
import { useAuth } from '~/features/auth/hooks/useAuth'
import { useRootStore } from '~/store/useRootStore'
import { handleErrorWithException } from '~/utils/handleErrorWithException'

type FormData = z.infer<typeof passwordScreenSchema>

export const usePasswordScreen = () => {
  const { email: initialEmail } = useLocalSearchParams() as { email: string }
  const { signIn } = useAuth()
  const setUser = useRootStore((state) => state.setUser)

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
          form.setError('password', {
            type: 'manual',
            message: 'Invalid email or password',
          })
        },
        errorCodes: [401],
      }),
  })

  const { mutate: requestMagicCode, isPending: isRequestMagicCodePending } =
    useAuthControllerRequestMagicCode({
      onSuccess: () => {
        router.navigate({ pathname: '/otp', params: { email: form.getValues('email') } })
      },
      onError: (error) =>
        handleErrorWithException({
          error,
          errorHandler: () => {
            form.setError('email', {
              type: 'manual',
              message: 'There was an error sending the magic code',
            })
          },
          errorCodes: [401],
        }),
    })

  useEffect(() => {
    if (!initialEmail) {
      router.back()
    }
  }, [initialEmail])

  const form = useForm<FormData>({
    resolver: zodResolver(passwordScreenSchema),
    defaultValues: { email: initialEmail },
  })
  const onSubmit = ({ email, password }: FormData) => {
    return login({
      body: {
        email,
        password,
      },
    })
  }

  const onRequestMagicCode = () => {
    requestMagicCode({
      body: {
        email: form.getValues('email'),
      },
    })
  }

  // TODO: handle network errors
  const isError = Object.keys(form.formState.errors).length > 0

  return {
    form,
    onSubmit,
    isLoginPending,
    isRequestMagicCodePending,
    isError,
    onRequestMagicCode,
  }
}
