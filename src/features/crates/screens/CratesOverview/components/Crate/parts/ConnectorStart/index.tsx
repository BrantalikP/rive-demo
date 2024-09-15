import { Canvas, Path } from '@shopify/react-native-skia'
import { ComponentProps } from 'react'

import { ms } from '~/utils/scale'

export const ConnectorStart = (props: Partial<ComponentProps<typeof Path>>) => {
  return (
    <Canvas
      style={{
        position: 'absolute',
        left: ms(50),
        bottom: '-15%',
        zIndex: -1,
        height: ms(157),
        width: ms(53),
      }}
    >
      <Path
        color="#F05824"
        strokeJoin="round"
        style="stroke"
        opacity={0.2}
        strokeWidth={4}
        path="M51 2H26C12.745 2 2 12.745 2 26v129"
        {...props}
      />
    </Canvas>
  )
}
