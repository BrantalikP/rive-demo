import { Controller, UseFormReturn } from 'react-hook-form'

import { FormData } from '~/features/profiles/screens/EditProfile/hooks/useEditing'
import { Box } from '~/features/ui/components/Box'
import { ErrorMessage } from '~/features/ui/components/ErrorMessage'
import { Input } from '~/features/ui/components/Input'
import { Text } from '~/features/ui/components/Text'

interface INameSection {
  form: UseFormReturn<FormData>
}

export const NameSection = ({ form }: INameSection) => {
  return (
    <>
      <Text variant="hlg">Edit Profile</Text>
      <Box width="100%" my="2xl">
        <Box>
          <Controller
            control={form.control}
            name="first_name"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Child's first name"
                variant="compoundTop"
                keyboardType="default"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                hasError={Boolean(form.formState.errors.first_name)}
              />
            )}
          />
          <Controller
            control={form.control}
            name="last_name"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Child's last name"
                variant="compoundBottom"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                hasError={Boolean(form.formState.errors.last_name)}
              />
            )}
          />
          <ErrorMessage message={form.formState.errors.first_name?.message} />
          <ErrorMessage message={form.formState.errors.last_name?.message} />
        </Box>
      </Box>
    </>
  )
}
