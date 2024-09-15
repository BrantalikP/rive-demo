import { Controller } from 'react-hook-form'
import { Keyboard } from 'react-native'

import { ScreenStack } from './components/ScreenStack'
import { useEmailScreen } from './hooks/useEmailScreen'

import { Box } from '~/features/ui/components/Box'
import { Button } from '~/features/ui/components/Button'
import { ErrorMessage } from '~/features/ui/components/ErrorMessage'
import { Input } from '~/features/ui/components/Input'
import { Pressable } from '~/features/ui/components/Pressable'
import { Text } from '~/features/ui/components/Text'

export const EmailScreen = () => {
  const { form, onSubmit } = useEmailScreen()

  return (
    <>
      <ScreenStack />
      <Pressable onPress={Keyboard.dismiss} flexGrow={1} width="100%">
        <Text variant="hlg" textAlign="center" marginBottom="2xl">
          Sign in to KiwiCo
        </Text>
        <Box gap="m">
          <Box>
            <Controller
              control={form.control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  variant="rounded"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  label="Email"
                  autoFocus
                  keyboardType="email-address"
                  autoCapitalize="none"
                  hasError={Boolean(form.formState.errors.email)}
                  autoCorrect={false}
                />
              )}
              name="email"
            />
            <ErrorMessage message={form.formState.errors.email?.message} />
          </Box>
          <Button label="Continue" onPress={form.handleSubmit(onSubmit)} />
        </Box>
      </Pressable>
    </>
  )
}
