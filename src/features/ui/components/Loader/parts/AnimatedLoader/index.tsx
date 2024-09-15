import * as React from 'react'

import { useAnimatedLoaderStyles } from './useAnimatedLoaderStyles'

import { AnimatedSvg, Path } from '~/features/ui/components/Svg'
import { useTheme } from '~/features/ui/theme/useTheme'

export const AnimatedLoader = (props: Omit<React.ComponentProps<typeof AnimatedSvg>, 'key'>) => {
  const { animatedProps } = useAnimatedLoaderStyles()
  const { colors } = useTheme()

  return (
    <AnimatedSvg
      fill="none"
      viewBox="0 0 80 80"
      style={{ width: '20%', height: '20%' }}
      animatedProps={animatedProps}
      {...props}
    >
      <Path
        fill={colors.green}
        d="M42.574 26.824c-.09-.676.255-1.262.765-1.338.51-.077 1.006.408 1.096 1.07.089.676-.255 1.262-.765 1.338-.51.077-1.007-.395-1.096-1.07Z"
      />
      <Path
        fill={colors.green}
        fillRule="evenodd"
        d="M0 40C0 17.993 17.993 0 40 0c21.994 0 40 17.993 40 40S61.994 80 40 80C17.993 80 0 61.994 0 40Zm65.031-9.227.009.001v-.013l.153.016c1.614.164 1.748.178 1.835-.169.076-.343-.24-.47-1.026-.787l-.006-.003c-.395-.14-9.175-3.249-15.865-3.44-1.453-2.714-3.364-5.2-5.977-6.792-2.714-1.657-6.652-1.542-9.391-.038-2.346 1.29-3.745 3.982-5.011 6.417-.31.594-.61 1.173-.915 1.713-.205.361-.41.722-.617 1.083-1.153 2.02-2.307 4.045-3.27 6.142-3.746 8.742-1.91 20.057 7.85 23.676 5.123 1.899 11.367 1.338 15.967-1.605 4.88-3.135 6.728-8.844 6.219-14.4-.357-3.976-1.478-7.977-2.867-11.71l-.153-.383c1.44-.204 3.287-.319 5.874-.23 3.256.115 5.712.37 7.191.522Z"
        clipRule="evenodd"
      />
    </AnimatedSvg>
  )
}
