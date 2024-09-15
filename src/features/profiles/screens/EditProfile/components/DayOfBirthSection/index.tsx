import { useRef } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'
import { TextInput } from 'react-native'

import { FormData } from '~/features/profiles/screens/EditProfile/hooks/useEditing'
import { Box } from '~/features/ui/components/Box'
import { ErrorMessage } from '~/features/ui/components/ErrorMessage'
import { Input } from '~/features/ui/components/Input'

interface IDayOfBirthSection {
  form: UseFormReturn<FormData>
}

export const DayOfBirthSection = ({ form }: IDayOfBirthSection) => {
  const dayRef = useRef<TextInput>(null)
  const yearRef = useRef<TextInput>(null)
  const focusNextField = (focusInput: 'day' | 'year') => {
    if (focusInput === 'day') {
      dayRef.current?.focus()
    } else {
      yearRef.current?.focus()
    }
  }

  return (
    <Box gap="s">
      <Box flexDirection="row" gap="s" justifyContent="space-around" mt="m">
        <Controller
          control={form.control}
          name="month"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="MM"
              variant="rounded"
              maxLength={2}
              keyboardType="number-pad"
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => {
                onChange(text)
                if (text.length === 2) focusNextField('day')
              }}
              hasError={Boolean(form.formState.errors.month)}
              containerStyle={{ width: '30%' }}
            />
          )}
        />
        <Controller
          control={form.control}
          name="day"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="DD"
              ref={dayRef}
              variant="rounded"
              maxLength={2}
              value={value}
              keyboardType="number-pad"
              onBlur={onBlur}
              onChangeText={(text) => {
                onChange(text)
                if (text.length === 2) focusNextField('year')
              }}
              containerStyle={{ width: '30%' }}
              hasError={Boolean(form.formState.errors.day)}
            />
          )}
        />
        <Controller
          control={form.control}
          name="year"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="YYYY"
              ref={yearRef}
              variant="rounded"
              maxLength={4}
              value={value}
              keyboardType="number-pad"
              onBlur={onBlur}
              returnKeyType="done"
              onChangeText={onChange}
              containerStyle={{ width: '40%' }}
              hasError={Boolean(form.formState.errors.year)}
            />
          )}
        />
      </Box>
      <ErrorMessage message={form.formState.errors.month?.message} />
      <ErrorMessage message={form.formState.errors.day?.message} />
      <ErrorMessage message={form.formState.errors.year?.message} />
    </Box>
  )
}
