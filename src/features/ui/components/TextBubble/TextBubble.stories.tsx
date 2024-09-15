import { type Meta, type StoryObj } from '@storybook/react'

import { TextBubble } from '.'

import { Text } from '~/features/ui/components/Text'

const TextBubbleContent = () => (
  <>
    <Text variant="labelBold">Hi David,</Text>
    <Text variant="label" mx="2xs">
      what's the
    </Text>
    <Text variant="labelBold">progress</Text>
    <Text ml="2xs" variant="label">
      on the building?
    </Text>
  </>
)

const TextBubbleMeta: Meta<typeof TextBubble> = {
  title: 'UI/TextBubble',
  component: TextBubble,
}

export default TextBubbleMeta

export const Default: StoryObj = {
  render: () => (
    <TextBubble>
      <TextBubbleContent />
    </TextBubble>
  ),
}
