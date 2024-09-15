import { type Meta, type StoryObj } from '@storybook/react'

import { ActionButton } from '.'

const ActionButtonMeta: Meta<typeof ActionButton> = {
  title: 'Settings/ActionButton',
  component: ActionButton,
  argTypes: {},
  args: {
    label: 'Log out',
    action: () => console.log('log out'),
    icon: null, // The app does not want to start in dev mode if the Icon is provided
  },
}

export default ActionButtonMeta

export const Default: StoryObj<typeof ActionButton> = {}
