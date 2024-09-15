import { ms } from '~/utils/scale'

export const CANVAS_SIZE = ms(180)
export const IMAGE_SIZE = ms(124)
export const CENTER_X = CANVAS_SIZE / 2
export const TEXT_MARGIN = ms(12)
export const PROGRESS_WIDTH = ms(4)
export const WHITE_BORDER_WIDTH = ms(2 + 4 + 2)
export const TOTAL_RADIUS = IMAGE_SIZE / 2 + WHITE_BORDER_WIDTH + TEXT_MARGIN
export const CENTER_Y = CANVAS_SIZE - TOTAL_RADIUS

export const imageOffsetX = CENTER_X - IMAGE_SIZE / 2
export const imageOffsetY = CENTER_Y - IMAGE_SIZE / 2
export const progressRadius = IMAGE_SIZE / 2 + WHITE_BORDER_WIDTH / 2
export const whiteBorderRadius = IMAGE_SIZE / 2 + WHITE_BORDER_WIDTH / 2
