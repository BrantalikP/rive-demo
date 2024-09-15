import { ComponentProps } from 'react'

import { Box } from '~/features/ui/components/Box'
import { ms } from '~/utils/scale'

interface Props extends ComponentProps<typeof Box> {
  steps: number
  activeStep: number
}

export const StepperIndicator = ({ steps, activeStep, ...props }: Props) => {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      gap="s"
      justifyContent="center"
      position="absolute"
      bottom={ms(8)}
      left={0}
      right={0}
      {...props}
    >
      <Box
        flexDirection="row"
        alignItems="center"
        gap="s"
        backgroundColor="beigeSubdued"
        padding="s"
        borderRadius="m"
      >
        {new Array(steps).fill(null).map((_, index) => (
          <Box
            key={index}
            width={ms(8)}
            height={ms(8)}
            borderRadius="round"
            backgroundColor={index <= activeStep ? 'denim' : 'beigeDarker'}
          />
        ))}
      </Box>
    </Box>
  )
}
