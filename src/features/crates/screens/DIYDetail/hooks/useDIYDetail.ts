import { useLocalSearchParams } from 'expo-router'

import { useDiyControllerDiy } from '~/api/generated/apiComponents'

export const useDIYDetail = () => {
  const { uid } = useLocalSearchParams()
  const { data, isLoading } = useDiyControllerDiy({ pathParams: { uid: uid as string } })

  return { data, isLoading }
}
