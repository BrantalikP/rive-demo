import { type Meta, type StoryObj } from '@storybook/react'

import { CrateDetail } from '.'
import { mocks } from '../../mocks/sections'

const CrateMeta: Meta<typeof CrateDetail> = {
  title: 'CrateOverview/CrateDetail',
  component: CrateDetail,
  args: {
    id: mocks[0].id,
    crateName: 'PINBALL MACHINE',
    crateImage: mocks[0].crateImage,
  },
}

export default CrateMeta

export const Default: StoryObj<typeof CrateDetail> = {}
