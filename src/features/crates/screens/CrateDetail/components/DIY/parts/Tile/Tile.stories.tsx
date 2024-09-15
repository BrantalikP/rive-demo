import { type Meta, type StoryObj } from '@storybook/react'

import { Tile } from '.'

const DIYTileMeta: Meta<typeof Tile> = {
  title: 'CrateDetail/DIY/Tile',
  component: Tile,
  args: {
    id: 1,
    title: 'Forced Perspective',
    image: require('../../../../mocks/assets/diy-1.png'),
  },
}

export default DIYTileMeta

export const Default: StoryObj<typeof Tile> = {}
