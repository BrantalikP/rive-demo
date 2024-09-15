import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from '.'

const ButtonMeta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    label: 'Continue',
  },
}

export default ButtonMeta

export const Default: StoryObj<typeof Button> = {}

export const Light: StoryObj<typeof Button> = {
  args: {
    variant: 'light',
  },
}

export const Rounded: StoryObj<typeof Button> = {
  args: {
    variant: 'rounded',
    label: '1',
  },
}

export const Squared: StoryObj<typeof Button> = {
  args: {
    variant: 'square',
    label: '1',
  },
}

export const Striped: StoryObj<typeof Button> = {
  args: {
    variant: 'striped',
    label: 'Grown-ups Only',
  },
}
