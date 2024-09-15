import { ComponentProps } from 'react'

import { colors } from './presets'

import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'
import { ms } from '~/utils/scale'

export const ColorizedTitle = ({
  children,
  ...props
}: ComponentProps<typeof Text> & { children: string }) => {
  const parseText = (text: string) => {
    let colorIndex = 0
    return text.split('').map((char, index) => {
      if (char.toLowerCase() === 'i') {
        const color = colors[colorIndex % 2] // Alternate between 0 and 1
        colorIndex++ // Increment the counter for next 'i'

        return (
          <Box key={index}>
            <Text
              variant="hlg"
              style={{
                position: 'absolute',
                bottom: ms(13),
                zIndex: 1000,
                color,
              }}
            >
              .
            </Text>
            <Text
              variant="hlg"
              style={{
                top: ms(3),
              }}
            >
              {char}
            </Text>
          </Box>
        )
      }
      return char
    })
  }

  return (
    <Text variant="hlg" {...props}>
      {parseText(children)}
    </Text>
  )
}
