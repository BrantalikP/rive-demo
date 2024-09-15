import { Canvas, Path } from '@shopify/react-native-skia'
import { useResponsiveProp } from '@shopify/restyle'
import { ComponentProps } from 'react'
import { DimensionValue } from 'react-native'
import { SharedValue } from 'react-native-reanimated'

import { CONNECTOR_END_BOTTOM_MARGIN } from '~/features/crates/screens/CratesOverview/components/Crate/presets'
import { ms } from '~/utils/scale'

export const ConnectorEndRight = (
  props: Partial<ComponentProps<typeof Path>> & { lineLength: SharedValue<number> },
) => {
  const margin = useResponsiveProp(CONNECTOR_END_BOTTOM_MARGIN)

  return (
    <Canvas
      style={{
        position: 'absolute',
        left: ms(125),
        zIndex: -1,
        transform: [{ scaleX: -1 }],
        bottom: margin as DimensionValue,
        height: ms(906),
        width: ms(165),
      }}
    >
      <Path
        color="#F05824"
        strokeJoin="round"
        style="stroke"
        opacity={0.2}
        strokeWidth={4}
        end={props.lineLength}
        path="M50 804H26c-13.255 0-24-10.745-24-24v-84c0-13.255 10.745-24 24-24h92.5c13.255 0 24-10.745 24-24V2"
        {...props}
      />
    </Canvas>
  )
}
