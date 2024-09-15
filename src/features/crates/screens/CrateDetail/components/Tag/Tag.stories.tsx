import { type Meta, type StoryObj } from '@storybook/react'

import { Tag } from '.'

import { BulbIcon } from '~/features/crates/screens/CrateDetail/components/BulbIcon'

const TagMeta: Meta<typeof Tag> = {
  title: 'CrateDetail/Tag',
  component: Tag,
  args: {
    label: 'Engineering',
  },
}

export default TagMeta

export const Default: StoryObj<typeof Tag> = {
  render: (args) => <Tag {...args} icon={<BulbIcon />} />,
}
