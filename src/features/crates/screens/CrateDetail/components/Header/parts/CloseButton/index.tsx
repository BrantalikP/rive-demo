import { router } from 'expo-router'
import { ComponentProps } from 'react'

import { CrossIcon } from './parts/CrossIcon'

import { Button } from '~/features/ui/components/Button'

export const CloseButton = (props: Omit<ComponentProps<typeof Button>, 'label'>) => {
  return <Button label={<CrossIcon />} variant="backButton" onPress={router.back} {...props} />
}
