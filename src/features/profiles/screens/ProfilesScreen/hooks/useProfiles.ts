import { router } from 'expo-router'

import { useMeControllerMe } from '~/api/generated/apiComponents'
import { useRootStore } from '~/store/useRootStore'

export const useProfiles = () => {
  const isEditing = useRootStore((state) => state.isEditing)
  const { data } = useMeControllerMe({})
  const profiles = data?.data.children

  const handleNavigation = (id: number) => {
    if (!isEditing) return
    router.navigate({
      pathname: '/edit-profile',
      params: {
        id,
      },
    })
  }

  return { profiles, isEditing, handleNavigation }
}
