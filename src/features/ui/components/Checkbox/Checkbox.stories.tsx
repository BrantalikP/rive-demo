import { type Meta, type StoryObj } from '@storybook/react'

import { Checkbox } from '.'

const CheckboxMeta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  argTypes: {},
  args: {
    label: 'Checkbox',
  },
}

export default CheckboxMeta

export const Basic: StoryObj<typeof Checkbox> = {}
