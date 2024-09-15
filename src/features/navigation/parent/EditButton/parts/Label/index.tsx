import { ComponentProps } from 'react'

import { PenIcon } from '~/features/navigation/parent/EditButton/parts/PenIcon'
import { AnimatedBox } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'

interface ILabel extends ComponentProps<typeof AnimatedBox> {
  isEditing: boolean
}
export const Label = ({ isEditing, style }: ILabel) => {
  return (
    <AnimatedBox style={style}>
      {isEditing ? <Text variant="button">Done</Text> : <PenIcon />}
    </AnimatedBox>
  )
}
