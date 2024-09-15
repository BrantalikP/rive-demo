import { Svg, Path, G, Defs, ClipPath, Circle } from '~/features/ui/components/Svg'
import { useTheme } from '~/features/ui/theme/useTheme'
import { ms } from '~/utils/scale'

export const CrateIcon = ({ isCompleted }: { isCompleted: boolean }) => {
  const { colors } = useTheme()

  const strokeFill = isCompleted ? colors.primary : '#E5E5E5'
  return (
    <Svg width={ms(45)} height={ms(44)} fill="none" viewBox="0 0 45 44">
      <Path
        stroke={strokeFill}
        strokeWidth={3}
        d="M2 22C2 10.678 11.178 1.5 22.5 1.5S43 10.678 43 22s-9.178 20.5-20.5 20.5S2 33.322 2 22Z"
      />
      <Path
        fill="#BB8D60"
        d="M12 17.6a4 4 0 0 1 4-4h13a4 4 0 0 1 4 4v8.8a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4v-8.8Z"
      />
      <Path
        stroke="#2D2D2D"
        strokeLinejoin="round"
        d="M16.2 27.25v-10.5h12.6v10.5H16.2ZM16.2 19.9h12.6M16.2 24.1h12.6"
      />
      <Path
        fill="#BB8D60"
        stroke="#2D2D2D"
        strokeLinejoin="round"
        d="m30.375 18.325-2.1-2.625-13.65 9.975 2.1 2.625 13.65-9.975Z"
      />
      {/* <G clipPath="url(#a)">*/}
      {/*  <Path fill="#00B261" d="M28.5 9a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z" />*/}
      {/*  <Circle cx={37.5} cy={9} r={9} fill="#00B261" />*/}
      {/*  <Path*/}
      {/*    fill="#fff"*/}
      {/*    d="M41.768 7.168c.245.256.245.506 0 .75-.426.426-.878.884-1.357 1.373-.479.48-1.016 1.011-1.612 1.596l-1.357 1.357c-.255.256-.51.256-.766 0l-.782-.782c-.266-.277-.57-.58-.91-.91l-.782-.782c-.255-.255-.255-.51 0-.766.277-.277.49-.484.638-.623.245-.255.49-.26.735-.016l1.484 1.485 3.32-3.32a.497.497 0 0 1 .367-.144.471.471 0 0 1 .383.144c.224.202.437.415.639.638Z"*/}
      {/*  />*/}
      {/* </G>*/}
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M28.5 9a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
