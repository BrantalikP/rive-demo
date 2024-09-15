import { useLocalSearchParams } from 'expo-router'

import { useMeControllerMe } from '~/api/generated/apiComponents'

export const useCratesData = () => {
  const { id } = useLocalSearchParams()

  const { data: sections, isLoading } = useMeControllerMe(
    {},
    {
      select: (data) => data.data.children.find((child) => child.id === Number(id))?.subscriptions,
    },
  )

  return { sections, isLoading }
}
