import {
  Canvas,
  Group,
  TextPath,
  Skia,
  useFont,
  vec,
  Image,
  useImage,
  Path,
  Circle,
} from '@shopify/react-native-skia'

import {
  CANVAS_SIZE,
  CENTER_X,
  CENTER_Y,
  IMAGE_SIZE,
  PROGRESS_WIDTH,
  TOTAL_RADIUS,
  WHITE_BORDER_WIDTH,
  imageOffsetX,
  imageOffsetY,
  progressRadius,
  whiteBorderRadius,
} from './presets'
import { getFormattedDate } from './utils/getFormattedDate'

import { CrateOrder } from '~/api/generated/apiSchemas'
import { useTheme } from '~/features/ui/theme/useTheme'

const imageClipPath = Skia.Path.Make()
imageClipPath.addCircle(CENTER_X, CENTER_Y, IMAGE_SIZE / 2)

const textPathRadius = TOTAL_RADIUS
const textPath = Skia.Path.Make()
textPath.addCircle(CENTER_X, CENTER_Y, textPathRadius)

interface IImageContainer {
  crateImage: CrateOrder['crateImage']
  completionDate: CrateOrder['completedAt']
  progress?: number
}

export const CrateProgress = ({ progress = 100, crateImage, completionDate }: IImageContainer) => {
  const { textVariants, colors } = useTheme()
  const font = useFont(
    require('../../../../../../../assets/fonts/CentraNo2-Bold.otf'),
    textVariants.labelSmall.fontSize,
  )
  const image = useImage(crateImage ?? require('../../assets/crate-image.gif'))

  return (
    <Canvas
      style={{
        height: CANVAS_SIZE,
        width: CANVAS_SIZE,
      }}
    >
      <Circle
        cx={CENTER_X}
        cy={CENTER_Y}
        r={whiteBorderRadius}
        color="white"
        style="stroke"
        strokeWidth={WHITE_BORDER_WIDTH}
      />
      <Path
        path={`M ${CENTER_X} ${CENTER_Y - progressRadius}
               A ${progressRadius} ${progressRadius} 0 1 1 ${CENTER_X - 0.0001} ${CENTER_Y - progressRadius}`}
        color={colors.primary}
        style="stroke"
        strokeWidth={PROGRESS_WIDTH}
        strokeCap="round"
        start={0}
        end={progress / 100}
      />
      {completionDate && (
        <Group transform={[{ rotate: 29 }]} origin={vec(CENTER_X, CENTER_Y)}>
          <TextPath
            color={colors.primary}
            font={font}
            path={textPath}
            text={`COMPLETED ${getFormattedDate(completionDate)}`}
          />
        </Group>
      )}
      <Group clip={imageClipPath}>
        <Image
          fit="fill"
          x={imageOffsetX}
          y={imageOffsetY}
          height={IMAGE_SIZE}
          width={IMAGE_SIZE}
          image={image}
        />
      </Group>
    </Canvas>
  )
}
