import { type Meta, type StoryObj } from '@storybook/react'

import { Crate } from '.'
import { mocks } from '../../mocks/sections'

const CrateMeta: Meta<typeof Crate> = {
  title: 'CrateOverview/Crate',
  component: Crate,
  argTypes: {
    review: {
      options: [null, 'POSITIVE', 'NEUTRAL', 'NEGATIVE'],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    id: mocks[0].id,
    isFirst: true,
    isLast: false,
    crateName: 'PINBALL MACHINE',
    completedAt: mocks[0].completedAt,
    crateImage: mocks[0].crateImage,
    isOdd: true,
    review: null,
  },
}

export default CrateMeta

export const Default: StoryObj<typeof Crate> = {}
