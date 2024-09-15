import * as React from 'react'

import { Feedback } from '../../hooks/useCrateFeedback'
import { FeedbackOption } from '../FeedbackOption'
import { IconContainer } from '../IconContainer'

import { Box } from '~/features/ui/components/Box'
import { Svg } from '~/features/ui/components/Svg'
import { Text } from '~/features/ui/components/Text'

export interface FeedbackOptionProps {
  type: Feedback
  icon: (props: React.ComponentProps<typeof Svg>) => React.JSX.Element
  label: string
  boldLabel: string
}

interface FeedbackOptionGroupProps {
  options: FeedbackOptionProps[]
  selectedFeedback: string[]
  toggleFeedback: (type: Feedback) => void
}

export const FeedbackOptionGroup: React.FC<FeedbackOptionGroupProps> = ({
  options,
  selectedFeedback,
  toggleFeedback,
}) => {
  const renderOption = ({ type, icon: Icon, label, boldLabel }: FeedbackOptionProps) => (
    <FeedbackOption
      key={type}
      onPress={() => toggleFeedback(type)}
      selected={selectedFeedback.includes(type)}
    >
      <IconContainer>
        <Icon mx="auto" />
      </IconContainer>
      <Text variant="pSmall" textAlign="center">
        {label} <Text variant="pSmallBold">{boldLabel}</Text>
      </Text>
    </FeedbackOption>
  )

  return (
    <Box gap="2sm">
      {[0, 2, 4].map((index) => (
        <Box key={index} gap="2sm" flexDirection="row">
          {renderOption(options[index])}
          {options[index + 1] && renderOption(options[index + 1])}
        </Box>
      ))}
    </Box>
  )
}
