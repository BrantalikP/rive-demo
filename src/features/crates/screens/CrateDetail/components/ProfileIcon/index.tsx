import * as React from 'react'

import { Path, Svg } from '~/features/ui/components/Svg'
import { useTheme } from '~/features/ui/theme/useTheme'
import { ms } from '~/utils/scale'

export const ProfileIcon = (props: React.ComponentProps<typeof Svg>) => {
  const { colors } = useTheme()
  return (
    <Svg width={ms(20)} height={ms(20)} fill="none" viewBox="0 0 20 20" {...props}>
      <Path
        fill={colors.labs}
        d="M7.5 6.5a2.5 2.5 0 0 1 5 0c0 1.03-.47 1.823-.766 2.22-.14.187-.234.411-.234.645 0 .38.243.716.602.836l3.188 1.062c.424.142.71.539.71.986v.501a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75v-.501c0-.447.286-.844.71-.986l3.188-1.062a.881.881 0 0 0 .602-.836c0-.234-.094-.458-.234-.645C7.971 8.323 7.5 7.53 7.5 6.5ZM4.75 14.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H4.75Z"
      />
    </Svg>
  )
}
