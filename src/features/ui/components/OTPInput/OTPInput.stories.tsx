import { Meta, type StoryObj } from '@storybook/react'

import { OTPInput } from '.'

const OTPInputMeta: Meta<typeof OTPInput> = {
  title: 'UI/OTPInput',
  component: OTPInput,
}

export default OTPInputMeta

export const Default: StoryObj<typeof OTPInput> = {}
