import { Path, Svg } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

export const TrashIcon = (props: React.ComponentProps<typeof Svg>) => (
  <Svg width={ms(32)} height={ms(32)} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#F05824"
      d="M2 10a8 8 0 0 1 8-8h12a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V10Z"
    />
    <Path
      fill="#fff"
      d="M15 15a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM18 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="m12.653 10 .032-.192a3.361 3.361 0 0 1 6.63 0l.032.192H24a1 1 0 1 1 0 2h-1v9a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-9H8a1 1 0 1 1 0-2h4.653Zm2.035 0a1.36 1.36 0 0 1 2.624 0h-2.624Zm-1.205 2H21v9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-9h2.483Z"
      clipRule="evenodd"
    />
  </Svg>
)
