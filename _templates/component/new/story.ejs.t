---
to: "<%= componentType === 'primitives' ? `src/features/ui/components/${name}/${name}.stories.tsx` : `src/components/${name}/${name}.stories.tsx` %>"
---
import { type Meta, type StoryObj } from '@storybook/react'

import { <%= name %> } from '.'

const <%= name %>Meta: Meta<typeof <%= name %>> = {
  title: '<%= componentType === 'primitives' ? `UI/${name}` : name %>',
  component: <%= name %>,
  argTypes: {},
}

export default <%= name %>Meta

export const Basic: StoryObj<typeof <%= name %>> = {}
