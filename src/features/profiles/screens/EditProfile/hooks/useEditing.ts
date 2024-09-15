import { zodResolver } from '@hookform/resolvers/zod'
import { router } from 'expo-router'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { useMeControllerMe } from '~/api/generated/apiComponents'
import { editingSchema } from '~/features/profiles/screens/EditProfile/hooks/schema'
import { useRootStore } from '~/store/useRootStore'

export type FormData = z.infer<typeof editingSchema>

export const useEditing = (id?: number) => {
  const setIsEditing = useRootStore((state) => state.setIsEditing)
  const handleNavigationBack = () => {
    setIsEditing(false)
    router.back()
  }

  const onSave = (data: FormData) => {}

  const { data } = useMeControllerMe({})

  const profile = data?.data.children.find((child) => child.id === id)

  const [year, month, day] = profile?.birthday.split('-') ?? []

  const form = useForm<FormData>({
    resolver: zodResolver(editingSchema),
    defaultValues: {
      first_name: profile?.firstName,
      last_name: profile?.lastName,
      day,
      month,
      year,
    },
  })

  // TODO: handle network errors
  const isError = Object.keys(form.formState.errors).length > 0

  return { handleNavigationBack, form, onSave, isError }
}
