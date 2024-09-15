import { Svg, Path, Rect } from '~/features/ui/components/Svg'
import { useTheme } from '~/features/ui/theme/useTheme'
import { ms } from '~/utils/scale'

export const PlayIcon = ({ isCompleted }: { isCompleted: boolean }) => {
  const { colors } = useTheme()

  const strokeFill = isCompleted ? colors.primary : '#E5E5E5'
  return (
    <Svg width={ms(45)} height={ms(44)} fill="none" viewBox="0 0 45 44">
      <Rect
        width={ms(41)}
        height={ms(41)}
        x={2}
        y={1.5}
        stroke={strokeFill}
        strokeWidth={3}
        rx={20.5}
      />
      <Path
        fill="#F05824"
        d="M32.435 21.064c.06.749.069 1.52.064 2.302-.064.576-.123 1.153-.188 1.73-.558 4.017-2.868 6.403-6.73 7.133-4.067.772-7.632-.019-10.482-3.464-3.519-4.241-3.139-9.18-.796-13.369 2.054-3.66 7.938-5.022 12.051-2.869 1.931 1 3.578 2.492 4.782 4.329a8.887 8.887 0 0 1 1.299 4.208Z"
      />
      <Path
        fill="#fff"
        d="M20.47 25.98c-.677-.308-1.075-7.464-.27-8.045.403-.288 1.895.646 3.473 1.576 1.41.828 2.9 1.651 2.924 2.084.05.855-5.454 4.691-6.131 4.384h.004Z"
      />
    </Svg>
  )
}
