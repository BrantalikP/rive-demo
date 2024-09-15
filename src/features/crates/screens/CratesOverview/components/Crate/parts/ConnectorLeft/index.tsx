import { Canvas, Path } from '@shopify/react-native-skia'
import { ComponentProps } from 'react'
import { SharedValue } from 'react-native-reanimated'

import { LINE_HEIGHT } from '~/features/crates/screens/CratesOverview/components/Crate/presets'
import { ms } from '~/utils/scale'

export const ConnectorLeft = (
  props: Partial<ComponentProps<typeof Path>> & { lineLength: SharedValue<number> },
) => (
  <Canvas
    style={{
      position: 'absolute',
      flex: 1,
      left: ms(45),
      bottom: '0%',
      height: '200%',
      zIndex: -1,
      width: ms(124),
      transform: [{ rotateY: '180deg' }],
    }}
  >
    <Path
      color="#F05824"
      strokeJoin="round"
      style="stroke"
      opacity={0.2}
      start={props.lineLength}
      strokeWidth={4}
      path={`M2 2h86c13.255 0 24 10.745 24 24v${LINE_HEIGHT}c0 13.255-10.745 24-24 24H64`}
      {...props}
    />
  </Canvas>
)
