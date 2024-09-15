import { Meta } from '@storybook/react'
import React, { ComponentProps, useState } from 'react'

import { EyeButton } from '.'

const EyeButtonMeta: Meta<typeof EyeButton> = {
  title: 'Auth/EyeButton',
  component: EyeButton,
  argTypes: {
    onPress: { action: 'changed state' },
  },
}

export default EyeButtonMeta

export const Default = ({ ...args }: ComponentProps<typeof EyeButton>) => {
  const [hidePassword, setHidePassword] = useState(true)

  return (
    <EyeButton {...args} opened={!hidePassword} onPress={() => setHidePassword((prev) => !prev)} />
  )
}
