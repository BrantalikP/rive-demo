import { useAssets } from 'expo-asset'
import { useRef, useState } from 'react'
import { RiveRef } from 'rive-react-native'

export const useUpload = () => {
  const [assets, error] = useAssets([require('../assets/rive_demo_test.riv')])
  const animationUrl = assets?.[0].localUri
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const riveRef = useRef<RiveRef>(null)
  const [progress, setProgress] = useState<number>(0)
  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  }

  const startUploading = () => {
    let startTime: number | null = null
    const duration = 8000
    setIsUploading(true)

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const t = Math.min(elapsed / duration, 1)

      // Apply easing function
      const easedProgress = easeInOutQuad(t)

      const progress = easedProgress * 100

      // Update the 'progress' input
      riveRef.current?.setInputState('State Machine', 'progress', progress)
      setProgress(Number(progress.toPrecision(2)))

      if (t < 1) {
        requestAnimationFrame(animate)
      } else {
      }
    }

    requestAnimationFrame(animate)
  }

  const stopUploading = () => {
    riveRef.current?.setInputState('State Machine', 'uploading', false)
    riveRef.current?.setInputState('State Machine', 'progress', 0)
    setProgress(0)
    setIsUploading(false)
  }

  return {
    animationUrl,
    isUploading,
    riveRef,
    progress,
    startUploading,
    stopUploading,
  }
}
