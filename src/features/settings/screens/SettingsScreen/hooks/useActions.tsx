import { router } from 'expo-router'
import { useMemo } from 'react'
import { Alert } from 'react-native'

import { DocumentIcon } from '../components/ActionList/parts/DocumentIcon'
import { LogOutIcon } from '../components/ActionList/parts/LogOutIcon'
import { StorybookIcon } from '../components/ActionList/parts/StorybookIcon'
import { TrashIcon } from '../components/ActionList/parts/TrashIcon'
import { ActionProps } from '../components/ActionList/types'

import { isDev } from '~/constants/isDev'
import { useAuth } from '~/features/auth/hooks/useAuth'

const openTermsAndConditionScreen = () => {
  router.push({ pathname: '/terms' })
}

export const useActions = () => {
  const { signOut } = useAuth()

  const deleteActions: ActionProps[] = useMemo(
    () => [
      {
        label: 'Delete account',
        action: () => Alert.alert('not implemented yet', 'Delete account action'),
        Icon: TrashIcon,
      },
    ],
    [],
  )

  const mainActions: ActionProps[] = useMemo(
    () => [
      {
        label: 'Terms and Conditions',
        action: openTermsAndConditionScreen,
        Icon: DocumentIcon,
      },
      {
        label: 'Log out',
        action: signOut,
        Icon: LogOutIcon,
      },
      ...(isDev
        ? [
            {
              label: 'Storybook',
              action: () => router.navigate('/storybook'),
              Icon: StorybookIcon,
            },
          ]
        : []),
    ],
    [signOut],
  )

  return {
    deleteActions,
    mainActions,
  }
}
