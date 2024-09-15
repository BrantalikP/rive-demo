import { type Meta, type StoryObj } from '@storybook/react'

import { ProfileButton } from '.'

const ButtonMeta: Meta<typeof ProfileButton> = {
  title: 'Crates/ProfileButton',
  component: ProfileButton,
  argTypes: {},
  args: {
    id: '1',
    imageId: '1',
  },
}

export default ButtonMeta

export const Default: StoryObj<typeof ProfileButton> = {}
