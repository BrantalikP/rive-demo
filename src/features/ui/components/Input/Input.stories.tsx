import { Meta } from '@storybook/react'
import React, { ComponentProps, useState } from 'react'

import { Input } from '.'

const InputMeta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    onChangeText: { action: 'text changed' },
  },
  args: {
    label: 'Label',
  },
}

export default InputMeta

export const Default = ({ onChangeText, ...args }: ComponentProps<typeof Input>) => {
  const [value, setValue] = useState<string | undefined>('')

  return (
    <Input
      {...args}
      value={value}
      onChangeText={(text) => {
        setValue(text)
        onChangeText && onChangeText(text)
      }}
    />
  )
}

export const Rounded = ({ onChangeText, ...args }: ComponentProps<typeof Input>) => {
  const [value, setValue] = useState<string | undefined>('')

  return (
    <Input
      {...args}
      variant="rounded"
      value={value}
      onChangeText={(text) => {
        setValue(text)
        onChangeText && onChangeText(text)
      }}
    />
  )
}

export const WithoutLabel = ({ onChangeText, ...args }: ComponentProps<typeof Input>) => {
  const [value, setValue] = useState<string | undefined>('')

  return (
    <Input
      {...args}
      label={undefined}
      value={value}
      onChangeText={(text) => {
        setValue(text)
        onChangeText && onChangeText(text)
      }}
    />
  )
}
