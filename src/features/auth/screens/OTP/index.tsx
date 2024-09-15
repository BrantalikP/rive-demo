import { useOTPScreen } from './hooks/useOTPScreen'

import { Box } from '~/features/ui/components/Box'
import { ErrorMessage } from '~/features/ui/components/ErrorMessage'
import { OTPInput } from '~/features/ui/components/OTPInput'
import { Text } from '~/features/ui/components/Text'
import { UnderlineButton } from '~/features/ui/components/UnderlineButton'

export const OTPScreen = () => {
  const {
    onSubmit,
    timeLeft,
    requestMagicCode,
    email,
    error,
    isLoginPending,
    isRequestMagicCodePending,
  } = useOTPScreen()

  return (
    <Box flexGrow={1} width="100%">
      <Text variant="hlg" textAlign="center" marginBottom="2xl">
        Confirm your email
      </Text>
      <Text variant="labelSmall" color="textSecondary" textAlign="center" mb="xl">
        Please enter the code we sent to {email}
      </Text>
      <Box gap="xl" alignItems="center">
        <Box width="100%">
          <OTPInput callback={onSubmit} />
          {error ? <ErrorMessage message={error} /> : null}
        </Box>
        {timeLeft > 0 ? (
          <Text variant="labelSmall" color="textSecondary" textAlign="center">
            Resend in {timeLeft}s
          </Text>
        ) : (
          <UnderlineButton
            onPress={requestMagicCode}
            label="Resend code"
            disabled={isRequestMagicCodePending || isLoginPending}
          />
        )}
      </Box>
    </Box>
  )
}
