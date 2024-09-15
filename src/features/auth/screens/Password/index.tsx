import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Keyboard } from 'react-native'

import { usePasswordScreen } from './hooks/usePasswordScreen'
import { DividerWithText } from '../../components/DividerWithText'

import { EyeButton } from '~/features/auth/components/EyeButton'
import { Box } from '~/features/ui/components/Box'
import { Button } from '~/features/ui/components/Button'
import { ErrorMessage } from '~/features/ui/components/ErrorMessage'
import { Input } from '~/features/ui/components/Input'
import { Pressable } from '~/features/ui/components/Pressable'
import { Text } from '~/features/ui/components/Text'

export const PasswordScreen = () => {
  const { form, onSubmit, isLoginPending, isRequestMagicCodePending, isError, onRequestMagicCode } =
    usePasswordScreen()
  const [hidePassword, setHidePassword] = useState(true)

  return (
    <Pressable onPress={Keyboard.dismiss} flexGrow={1} width="100%">
      <Text variant="hlg" textAlign="center" marginBottom="2xl">
        Sign in to KiwiCo
      </Text>
      <Box gap="m" mb="2xl">
        <Box>
          <Controller
            control={form.control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Email"
                variant="compoundTop"
                keyboardType="email-address"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                readOnly
                hasError={Boolean(form.formState.errors.email)}
              />
            )}
          />
          <Controller
            control={form.control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Box justifyContent="center">
                <Input
                  label="Password"
                  variant="compoundBottom"
                  secureTextEntry={hidePassword}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  hasError={Boolean(form.formState.errors.password)}
                />
                <EyeButton
                  opened={!hidePassword}
                  onPress={() => setHidePassword((prev) => !prev)}
                />
              </Box>
            )}
          />
          <ErrorMessage message={form.formState.errors.email?.message} />
          <ErrorMessage message={form.formState.errors.password?.message} />
        </Box>
        <Button
          label={isLoginPending ? 'Signing in...' : 'Continue'}
          onPress={(event) => {
            void form.handleSubmit(onSubmit)(event)
          }}
          disabled={isLoginPending || isRequestMagicCodePending || isError}
        />
      </Box>
      <DividerWithText text="or continue with password-free sign in" />
      <Button
        label={isRequestMagicCodePending ? 'Sending a one-time code...' : 'Send a one-time code'}
        variant="light"
        onPress={onRequestMagicCode}
        disabled={isRequestMagicCodePending || isLoginPending}
      />
    </Pressable>
  )
}
