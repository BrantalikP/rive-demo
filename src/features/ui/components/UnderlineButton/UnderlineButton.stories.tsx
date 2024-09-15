import { type Meta, type StoryObj } from '@storybook/react'

import { UnderlineButton } from '.'

const UnderlineButtonMeta: Meta<typeof UnderlineButton> = {
  title: 'UI/UnderlineButton',
  component: UnderlineButton,
  args: {
    label: 'Click me',
  },
}

export default UnderlineButtonMeta

export const Default: StoryObj<typeof UnderlineButton> = {}
