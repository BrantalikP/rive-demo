import { useResponsiveProp } from '@shopify/restyle'

import {
  BUTTONS_CONTAINER_MARGIN,
  SMALL_BUTTONS_CONTAINER_MARGIN,
  SMALL_TITLE_MARGIN,
  TITLE_MARGIN,
} from '~/features/profiles/screens/SelectProfileScreen/presets'

export const useProfileStyles = () => {
  const buttonSpacing = {
    normal: BUTTONS_CONTAINER_MARGIN,
    small: SMALL_BUTTONS_CONTAINER_MARGIN,
  }
  const titleSpacing = {
    normal: TITLE_MARGIN,
    small: SMALL_TITLE_MARGIN,
  }

  const buttonMarginTop = useResponsiveProp(buttonSpacing)
  const titleMarginTop = useResponsiveProp(titleSpacing)

  return {
    buttonMarginTop,
    titleMarginTop,
  }
}
