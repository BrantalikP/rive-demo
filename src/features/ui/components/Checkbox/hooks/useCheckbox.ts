import { useState } from 'react'
import { useSharedValue } from 'react-native-reanimated'

export const useCheckbox = () => {
  const [checked, setChecked] = useState(false)
  const animatedValue = useSharedValue(checked ? 1 : 0)

  const handlePress = () => {
    setChecked((prev) => !prev)
    animatedValue.value = checked ? 0 : 1
  }

  return {
    handlePress,
    checked,
    animatedValue,
  }
}
