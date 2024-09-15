import { type Meta, type StoryObj } from '@storybook/react'

import { Badge } from '.'

const BadgeMeta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  argTypes: {},
  args: {
    label: 'Step 1',
  },
}

export default BadgeMeta

export const Basic: StoryObj<typeof Badge> = {}
