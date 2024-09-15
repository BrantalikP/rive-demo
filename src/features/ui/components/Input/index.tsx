import React, { ComponentProps, forwardRef, ReactNode, useImperativeHandle, useRef } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { AnimatedView, useInputStyles } from './styles'
import { AnimatedText } from '../Text'

import { Box } from '~/features/ui/components/Box'
import { TouchableWithoutFeedback } from '~/features/ui/components/TouchableWithoutFeedback'
import { useTheme } from '~/features/ui/theme/useTheme'
import { ms } from '~/utils/scale'

interface Props extends Omit<TextInputProps, 'placeholder'> {
  label?: ReactNode
  variant?: ComponentProps<typeof AnimatedView>['variant']
  containerStyle?: ComponentProps<typeof Box>['style']
  hasError?: boolean
}
export const Input = forwardRef<TextInput, Props>(
  (
    { hasError, label, onFocus, onBlur, variant = 'default', containerStyle, value, ...restProps },
    ref,
  ) => {
    const { colors, spacing } = useTheme()
    const inputRef = useRef<TextInput>(null)
    const { focused, labelStyle } = useInputStyles({
      value,
    })

    useImperativeHandle(ref, () => inputRef.current!, [])

    return (
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Box width="100%" style={containerStyle}>
          <AnimatedText
            variant="label"
            style={[
              labelStyle,
              {
                position: 'absolute',
                left: spacing['2sm'],
                color: hasError ? colors.error : colors.textPrimary2,
                zIndex: 1,
              },
            ]}
          >
            {label}
          </AnimatedText>
          <AnimatedView variant={variant}>
            <TextInput
              ref={inputRef}
              onFocus={(event) => {
                focused.value = true
                onFocus && onFocus(event)
              }}
              onBlur={(event) => {
                if (!value) focused.value = false
                onBlur && onBlur(event)
              }}
              style={{
                paddingTop: label ? spacing['2xl'] : ms(22),
                paddingBottom: label ? spacing.sm : ms(22),
                paddingHorizontal: spacing.s,
              }}
              selectionColor={colors.primary}
              value={value}
              {...restProps}
            />
          </AnimatedView>
        </Box>
      </TouchableWithoutFeedback>
    )
  },
)
