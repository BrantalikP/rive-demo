import { ComponentProps } from 'react'

import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'
import { TouchableOpacity } from '~/features/ui/components/TouchableOpacity'
import { ms } from '~/utils/scale'

interface IUnderlineButton extends ComponentProps<typeof TouchableOpacity> {
  onPress: () => void
  label: string
}

export const UnderlineButton = ({ onPress, label, ...restProps }: IUnderlineButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      height={ms(35)}
      justifyContent="space-between"
      onPress={onPress}
      {...restProps}
    >
      <Text color="lostButton" variant="labelBold">
        {label}
      </Text>
      <Box backgroundColor="lostButtonBorder" height={ms(2)} />
    </TouchableOpacity>
  )
}
