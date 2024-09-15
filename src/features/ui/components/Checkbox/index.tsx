import { ComponentProps } from 'react'

import { useCheckbox } from './hooks/useCheckbox'
import { CheckIcon } from './parts/CheckIcon'
import { useCheckboxStyles } from './styles'
import { AnimatedBox } from '../Box'
import { Pressable } from '../Pressable'
import { AnimatedText } from '../Text'

import { ms } from '~/utils/scale'

interface Props extends ComponentProps<typeof Pressable> {
  label: string
}

export const Checkbox = ({ label, ...props }: Props) => {
  const { handlePress, checked, animatedValue } = useCheckbox()
  const { animatedStyle, animatedBoxStyle, animatedTextStyle } = useCheckboxStyles({
    animatedValue,
  })

  return (
    <Pressable onPress={handlePress} flexDirection="row" alignItems="center" {...props}>
      <AnimatedBox
        width={ms(28)}
        height={ms(28)}
        borderRadius="round"
        borderWidth={2}
        justifyContent="center"
        alignItems="center"
        style={animatedBoxStyle}
      >
        {checked && (
          <AnimatedBox style={animatedStyle}>
            <CheckIcon />
          </AnimatedBox>
        )}
      </AnimatedBox>
      <AnimatedText marginLeft="sm" variant="pBold" style={animatedTextStyle}>
        {label}
      </AnimatedText>
    </Pressable>
  )
}
