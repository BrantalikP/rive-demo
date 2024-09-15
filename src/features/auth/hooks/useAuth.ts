import { router } from 'expo-router'

import { deleteAccessToken, getAccessToken, setAccessToken } from '../store/secureStore'

import { useRootStore } from '~/store/useRootStore'

export const useAuth = () => {
  const isSignedIn = Boolean(getAccessToken())
  const setUser = useRootStore((state) => state.setUser)
  const removePasscode = useRootStore((state) => state.removePasscode)

  const signOut = async () => {
    await deleteAccessToken()
    removePasscode()
    setUser(undefined)
    router.replace('/welcome')
  }

  const signIn = (accessToken: string) => {
    setAccessToken(accessToken)
    router.replace('/')
  }

  return {
    isSignedIn,
    signOut,
    signIn,
  }
}
