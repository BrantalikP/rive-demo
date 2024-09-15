import { Path, Svg } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

export const LogOutIcon = (props: React.ComponentProps<typeof Svg>) => (
  <Svg width={ms(32)} height={ms(32)} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#00B261"
      d="M2 10a8 8 0 0 1 8-8h12a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V10Z"
    />
    <Path
      fill="#fff"
      d="M9 10a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v2a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3V10Z"
    />
    <Path
      fill="#fff"
      d="m16.414 15 1.293-1.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L16.414 17H22a1 1 0 1 0 0-2h-5.586Z"
    />
  </Svg>
)
