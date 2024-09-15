import { type Meta, type StoryObj } from '@storybook/react'

import { StepperIndicator } from '.'

const StepperIndicatorMeta: Meta<typeof StepperIndicator> = {
  title: 'UI/StepperIndicator',
  component: StepperIndicator,
  argTypes: {},
  args: {
    steps: 10,
    activeStep: 3,
  },
}

export default StepperIndicatorMeta

export const Basic: StoryObj<typeof StepperIndicator> = {}
