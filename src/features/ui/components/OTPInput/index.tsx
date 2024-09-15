import { OTP_LENGTH, useOTPInput } from './hooks/useOTPInput'
import { RestyleInput } from './styles'
import { Box } from '../Box'

import { useTheme } from '~/features/ui/theme/useTheme'

export function OTPInput({ callback }: { callback?: (value: string[]) => void }) {
  const { handleKeyPress, otp, getVariant, refs, handleFocus, handleChange } = useOTPInput({
    callback,
  })
  const { colors } = useTheme()

  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      {otp.map((code, index) => {
        const variant = getVariant(index, OTP_LENGTH)

        return (
          <RestyleInput
            key={index}
            autoComplete="one-time-code"
            variant={variant}
            enterKeyHint="next"
            selectionColor={colors.primary}
            inputMode="numeric"
            value={code}
            ref={refs[index]}
            onKeyPress={(event) => handleKeyPress(event.nativeEvent.key, index)}
            onFocus={() => handleFocus(index)}
            onChange={handleChange}
          />
        )
      })}
    </Box>
  )
}
