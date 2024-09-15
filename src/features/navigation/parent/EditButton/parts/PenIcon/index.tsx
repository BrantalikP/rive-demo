import * as React from 'react'

import { Path, Svg } from '~/features/ui/components/Svg'
import { useTheme } from '~/features/ui/theme/useTheme'
import { ms } from '~/utils/scale'

export const PenIcon = () => {
  const { colors } = useTheme()
  return (
    <Svg width={ms(24)} height={ms(24)} fill="none" viewBox="0 0 24 24">
      <Path
        fill={colors.primary}
        fillRule="evenodd"
        d="M19.736 4.264a4.328 4.328 0 0 0-6.122 0l-6.421 6.422a13.5 13.5 0 0 0-3.479 5.994l-.661 2.425a1.5 1.5 0 0 0 1.842 1.842l2.425-.661a13.5 13.5 0 0 0 5.994-3.479l6.422-6.421a4.329 4.329 0 0 0 0-6.122Zm-4 2.122a1.328 1.328 0 0 1 1.878 1.878L17 8.88 15.121 7l.615-.614ZM13 9.12l-3.686 3.686a10.5 10.5 0 0 0-2.675 4.554 10.5 10.5 0 0 0 4.554-2.675L14.879 11 13 9.121Z"
        clipRule="evenodd"
      />
    </Svg>
  )
}
