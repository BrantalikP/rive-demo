import { type Meta, type StoryObj } from '@storybook/react'

import { ActionList } from '.'

import { DocumentIcon } from '~/features/settings/screens/SettingsScreen/components/ActionList/parts/DocumentIcon'
import { LogOutIcon } from '~/features/settings/screens/SettingsScreen/components/ActionList/parts/LogOutIcon'
import { StorybookIcon } from '~/features/settings/screens/SettingsScreen/components/ActionList/parts/StorybookIcon'
import { TrashIcon } from '~/features/settings/screens/SettingsScreen/components/ActionList/parts/TrashIcon'
import { ActionProps } from '~/features/settings/screens/SettingsScreen/components/ActionList/types'

const deleteActions: ActionProps[] = [
  {
    label: 'Delete account',
    action: () => console.log('delete account'),
    Icon: TrashIcon,
  },
]

const mainActions: ActionProps[] = [
  {
    label: 'Terms and Conditions',
    action: () => console.log('open terms and conditions'),
    Icon: DocumentIcon,
  },
  {
    label: 'Log out',
    action: () => console.log('log out'),
    Icon: LogOutIcon,
  },
  {
    label: 'Storybook',
    action: () => console.log('open storybook'),
    Icon: StorybookIcon,
  },
]

const ActionListMeta: Meta<typeof ActionList> = {
  title: 'Settings/ActionList',
  component: ActionList,
  argTypes: {},
  args: {
    actions: mainActions,
  },
}

export default ActionListMeta

export const Default: StoryObj<typeof ActionList> = {}
export const Single: StoryObj<typeof ActionList> = {
  args: {
    actions: deleteActions,
  },
}
