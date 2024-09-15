import { ComponentProps, ReactNode } from 'react'

import { ActionProps } from '../../types'
import { ArrowRightIcon } from '../ArrowRightIcon'
import { BUTTON_HEIGHT } from '../presets'

import { Text } from '~/features/ui/components/Text'
import { TouchableOpacity } from '~/features/ui/components/TouchableOpacity'

interface IAction extends ComponentProps<typeof TouchableOpacity>, Omit<ActionProps, 'Icon'> {
  icon: ReactNode
}
export const ActionButton = ({ label, icon, action, ...restProps }: IAction) => {
  return (
    <TouchableOpacity
      onPress={action}
      height={BUTTON_HEIGHT}
      alignItems="center"
      flexDirection="row"
      {...restProps}
    >
      {icon}
      <Text mr="auto" ml="sm" variant="label">
        {label}
      </Text>
      <ArrowRightIcon />
    </TouchableOpacity>
  )
}
