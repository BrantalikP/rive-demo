import { Svg, Path, G, Defs, ClipPath } from '~/features/ui/components/Svg'
import { useTheme } from '~/features/ui/theme/useTheme'
import { ms } from '~/utils/scale'

export const CompleteIcon = ({ isCompleted }: { isCompleted: boolean }) => {
  const { colors } = useTheme()

  const strokeFill = isCompleted ? colors.primary : '#E5E5E5'
  return (
    <Svg width={ms(45)} height={ms(44)} fill="none" viewBox="0 0 45 44">
      <Path
        stroke={strokeFill}
        strokeWidth={3}
        d="M2 22C2 10.678 11.178 1.5 22.5 1.5S43 10.678 43 22s-9.178 20.5-20.5 20.5S2 33.322 2 22Z"
      />
      <G clipPath="url(#a)">
        <Path
          fill="#00B261"
          d="M22.173 31.004c5.066 0 9.173-4.03 9.173-9.002S27.239 13 22.173 13 13 17.03 13 22.002s4.107 9.002 9.173 9.002Z"
        />
        <Path
          fill="#2D2D2D"
          d="M31.138 15.611c-4.06 1.976-7.715 4.568-9.831 8.537-1.125-1.985-2.042-3.692-2.935-5.788-.117-.28-.376-.473-.697-.388-.267.07-.514.408-.396.684 1.066 2.508 2.155 4.996 3.577 7.33.2.327.8.396.98 0 1.947-4.276 5.662-7.364 9.874-9.414.654-.319.078-1.28-.572-.961Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M13 13h19v18H13z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
