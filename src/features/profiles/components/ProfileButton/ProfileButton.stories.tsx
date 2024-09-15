import { type Meta, type StoryObj } from '@storybook/react'

import { ProfileButton } from '.'

const ButtonMeta: Meta<typeof ProfileButton> = {
  title: 'Profiles/ProfileButton',
  component: ProfileButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    name: 'Pete',
    id: 4,
    imageId: '4',
  },
}

export default ButtonMeta

export const Default: StoryObj<typeof ProfileButton> = {}
