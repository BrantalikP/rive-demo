import * as Haptics from 'expo-haptics'

export const useHapticFeedback = () => {
  const triggerHapticFeedback = () => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }

  return { triggerHapticFeedback }
}
