import React from 'react'
import { FadeInUp } from 'react-native-reanimated'

import { Notch } from './parts/Notch'

import { AnimatedBox } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'
import { ms } from '~/utils/scale'

interface ErrorMessageProps {
  message?: string
}
export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) {
    return null
  }

  return (
    <AnimatedBox
      entering={FadeInUp.duration(200)}
      backgroundColor="red"
      borderColor="error"
      borderWidth={ms(2)}
      paddingHorizontal="m"
      paddingVertical="s"
      borderRadius="m"
      position="relative"
      mt="sm"
    >
      <Notch />
      <Text my="auto" variant="labelSmall" color="white">
        {message}
      </Text>
    </AnimatedBox>
  )
}
