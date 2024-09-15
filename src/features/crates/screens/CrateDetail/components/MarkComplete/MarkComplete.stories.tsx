import { type Meta, type StoryObj } from '@storybook/react'

import { MarkComplete } from '.'

import { Box } from '~/features/ui/components/Box'

const MarkCompleteMeta: Meta<typeof MarkComplete> = {
  title: 'CrateDetail/MarkComplete',
  component: MarkComplete,
  argTypes: {},
  decorators: [
    (Story) => (
      <Box flex={1} mt="4xl">
        <Story />
      </Box>
    ),
  ],
}

export default MarkCompleteMeta

export const Default: StoryObj<typeof MarkComplete> = {}
