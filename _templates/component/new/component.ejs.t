---
to: "<%= componentType === 'primitives' ? `src/features/ui/components/${name}/index.tsx` : `src/components/${name}/index.tsx` %>"
---
import { ComponentProps } from 'react'

import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'

interface Props extends ComponentProps<typeof Box> {}

export const <%= name %> = (props: Props) => {
  return (
    <Box {...props}>
      <Text><%= name %></Text>
    </Box>
  )
}
