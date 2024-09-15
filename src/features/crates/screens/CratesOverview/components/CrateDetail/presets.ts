import { Dimensions } from 'react-native'

import {
  IMAGE_SIZE,
  imageOffsetY,
} from '~/features/crates/screens/CratesOverview/components/CrateProgress/presets'
import { ms } from '~/utils/scale'

const { width } = Dimensions.get('window')
export const TOP = imageOffsetY + IMAGE_SIZE / 2
export const OFFSET = ms(4)

export const CONTAINER_HEIGHT = ms(400)
export const CONTAINER_WIDTH = width * 0.8
