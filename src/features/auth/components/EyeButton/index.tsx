import { useAssets } from 'expo-asset'
import { useEffect, useRef } from 'react'
import Rive, { RiveRef } from 'rive-react-native'

import { SIZE } from '~/features/auth/components/EyeButton/presets'
import { Pressable } from '~/features/ui/components/Pressable'

interface IEyeButton {
  onPress: () => void
  opened: boolean
}

export const EyeButton = ({ onPress, opened }: IEyeButton) => {
  const [assets, error] = useAssets([require('../../assets/eye.riv')])
  const animationUrl = assets?.[0].localUri
  const eyeRef = useRef<RiveRef>(null)

  useEffect(() => {
    if (eyeRef.current) {
      eyeRef.current.setInputState('State Machine', 'opened', opened)
    }
  }, [opened])

  if (!animationUrl || error) return null
  return (
    <Pressable
      height={SIZE}
      width={SIZE}
      hitSlop={40}
      onPress={onPress}
      position="absolute"
      zIndex={9999}
      right={0}
      mr="m"
    >
      <Rive
        ref={eyeRef}
        url={animationUrl}
        style={{ width: SIZE, height: SIZE, pointerEvents: 'none' }}
        autoplay
      />
    </Pressable>
  )
}
