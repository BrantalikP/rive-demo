import { zodResolver } from '@hookform/resolvers/zod'
import { router } from 'expo-router'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { emailScreenSchema } from './email-screen-schema'

type FormData = z.infer<typeof emailScreenSchema>

export const useEmailScreen = () => {
  const form = useForm<FormData>({ resolver: zodResolver(emailScreenSchema) })
  const onSubmit = (data: FormData) => {
    router.navigate({
      pathname: '/password',
      params: { email: data.email },
    })
  }

  return {
    form,
    onSubmit,
  }
}
