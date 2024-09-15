import * as React from 'react'

import {
  BACKGROUND_HEIGHT,
  BACKGROUND_WIDTH,
  BOTTOM_OFFSET,
  ICON_HEIGHT,
  ICON_WIDTH,
  LEFT_OFFSET,
} from '~/features/crates/screens/CrateDetail/components/Build/parts/PlayIcon/presets'
import { Box } from '~/features/ui/components/Box'
import { Path, Rect, Svg } from '~/features/ui/components/Svg'

export const PlayIcon = () => (
  <Box
    zIndex={100}
    position="absolute"
    height={BACKGROUND_HEIGHT}
    width={BACKGROUND_WIDTH}
    borderRadius="round"
    backgroundColor="primaryBackground"
    left={LEFT_OFFSET}
    alignItems="center"
    justifyContent="center"
    bottom={BOTTOM_OFFSET}
  >
    <Svg width={ICON_WIDTH} height={ICON_HEIGHT} fill="none" viewBox="0 0 29 28">
      <Rect width={28} height={28} x={0.5} fill="#00B261" rx={14} />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M10.773 7.688a1.5 1.5 0 0 1 1.522.04l8 5a1.5 1.5 0 0 1 0 2.544l-8 5A1.5 1.5 0 0 1 10 19V9a1.5 1.5 0 0 1 .773-1.312ZM13 11.706v4.588L16.67 14 13 11.706Z"
        clipRule="evenodd"
      />
    </Svg>
  </Box>
)
