import type { Preview } from '@storybook/react'
import React from 'react'
import { Box } from '../src/features/ui/components/Box'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box flex={1} justifyContent="center" m="xl">
        <Story />
      </Box>
    ),
  ],
}

export default preview
