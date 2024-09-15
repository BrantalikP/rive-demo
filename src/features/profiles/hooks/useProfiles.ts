import { router } from 'expo-router'

import { useMeControllerMe } from '~/api/generated/apiComponents'
import { useRootStore } from '~/store/useRootStore'

export const useProfiles = () => {
  const passcode = useRootStore((state) => state.passcode)
  const { data, isLoading } = useMeControllerMe({})
  const profiles = data?.data.children

  const handleNavigation = () => {
    const route = passcode ? 'enter' : 'setup'
    router.navigate(`/${route}-passcode`)
  }
  return { profiles, handleNavigation, isLoading }
}
