import { type Meta, type StoryObj } from '@storybook/react'

import { ColorizedTitle } from '.'

const ColorizedTitleMeta: Meta<typeof ColorizedTitle> = {
  title: 'UI/ColorizedTitle',
  component: ColorizedTitle,
  args: {
    children: 'KiwiCo',
  },
}

export default ColorizedTitleMeta

export const Default: StoryObj<typeof ColorizedTitle> = {}
