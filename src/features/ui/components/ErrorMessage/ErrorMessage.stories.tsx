import { type Meta, type StoryObj } from '@storybook/react'

import { ErrorMessage } from '.'

const ErrorMessageMeta: Meta<typeof ErrorMessage> = {
  title: 'UI/ErrorMessage',
  component: ErrorMessage,
  args: {
    message: 'Please enter the email you used with KiwiCo',
  },
}

export default ErrorMessageMeta

export const Default: StoryObj<typeof ErrorMessage> = {}
