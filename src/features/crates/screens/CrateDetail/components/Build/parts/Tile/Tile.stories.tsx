import { type Meta, type StoryObj } from '@storybook/react'

import { Tile } from '.'

const BuildTileMeta: Meta<typeof Tile> = {
  title: 'CrateDetail/Build/Tile',
  component: Tile,
  args: {
    title: 'Behind the design of Combination Vault',
    id: 1,
    isVideo: true,
    image: require('../../../../mocks/assets/build-1.png'),
  },
}

export default BuildTileMeta

export const Default: StoryObj<typeof Tile> = {}
