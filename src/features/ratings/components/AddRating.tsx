import { Circle, Svg, Path } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

export const AddRating = ({ hasPlusSymbol = true }: { hasPlusSymbol?: boolean }) => (
  <Svg width={ms(46)} height={ms(41)} fill="none" viewBox="0 0 40 41">
    <Circle cx={20} cy={21} r={20} fill="#000" fillOpacity={0.1} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeOpacity={0.5}
      strokeWidth={2}
      d="M13.5 26s1.482 4 6.74 4c5.26 0 6.26-4 6.26-4"
    />
    <Circle cx={26.667} cy={17.668} r={2.667} fill="#000" fillOpacity={0.5} />
    <Circle cx={13.333} cy={17.668} r={2.667} fill="#000" fillOpacity={0.5} />
    {hasPlusSymbol && (
      <Path
        fill="#737373"
        stroke="#fff"
        strokeWidth={3}
        d="M31.5 8.247a2.5 2.5 0 0 0 2.5 2.5h1.197V12a2.5 2.5 0 0 0 2.5 2.5h.606a2.5 2.5 0 0 0 2.5-2.5v-1.253H42a2.5 2.5 0 0 0 2.5-2.5v-.536a2.5 2.5 0 0 0-2.5-2.5h-1.197V4a2.5 2.5 0 0 0-2.5-2.5h-.606a2.5 2.5 0 0 0-2.5 2.5v1.21H34a2.5 2.5 0 0 0-2.5 2.5v.537Z"
      />
    )}
  </Svg>
)
