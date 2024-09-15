import { useEffect } from 'react'
import {
  cancelAnimation,
  Easing,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

import {
  BUTTON_WIDTH,
  BUTTON_WIDTH_EDITING,
  PAUSE_DURATION,
  FADE_OUT_DURATION,
} from '~/features/navigation/parent/EditButton/hooks/presets'
import { useRootStore } from '~/store/useRootStore'

export const useEditing = (pathname: string) => {
  const isEditing = useRootStore((state) => state.isEditing)
  const setIsEditing = useRootStore((state) => state.setIsEditing)
  const buttonWidth = useSharedValue(BUTTON_WIDTH)
  const labelOpacity = useSharedValue(1)

  useEffect(() => {
    if (pathname !== '/profiles' && pathname !== '/edit-profile') {
      setIsEditing(false)
    }
  }, [pathname])

  useEffect(() => {
    buttonWidth.value = withTiming(isEditing ? BUTTON_WIDTH_EDITING : BUTTON_WIDTH, {
      easing: Easing.inOut(Easing.ease),
    })
  }, [isEditing])

  const handleEdit = () => {
    cancelAnimation(labelOpacity)

    labelOpacity.value = withSequence(
      withTiming(0, {
        duration: 0,
      }),
      withDelay(
        PAUSE_DURATION,
        withTiming(1, {
          duration: FADE_OUT_DURATION,
          easing: Easing.inOut(Easing.ease),
        }),
      ),
    )

    setIsEditing(!isEditing)
  }

  return { isEditing, handleEdit, buttonWidth, labelOpacity }
}
