import { Path, Svg } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

export const DocumentIcon = (props: React.ComponentProps<typeof Svg>) => (
  <Svg width={ms(32)} height={ms(32)} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#00B261"
      d="M2 10a8 8 0 0 1 8-8h12a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V10Z"
    />
    <Path
      fill="#fff"
      d="M14 19a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3ZM13 17a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M12 7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-9.172a3 3 0 0 0-.879-2.12l-2.828-2.83A3 3 0 0 0 17.172 7H12Zm-1 3a1 1 0 0 1 1-1h5v3a1 1 0 0 0 1 1h3v9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V10Z"
      clipRule="evenodd"
    />
  </Svg>
)
