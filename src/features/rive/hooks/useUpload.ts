import { useAssets } from 'expo-asset'
import * as Haptics from 'expo-haptics'
import { useRef, useState } from 'react'
import { RiveRef } from 'rive-react-native'

export const useUpload = () => {
  const [assets, error] = useAssets([require('../assets/rive_demo.riv')])
  const animationUrl = assets?.[0].localUri
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const riveRef = useRef<RiveRef>(null)
  const [progress, setProgress] = useState<number>(0)
  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  }

  const startUploading = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid)

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
      // TODO: update progress
      setProgress(Number(progress.toPrecision(2)))

      if (t < 1) {
        requestAnimationFrame(animate)
      } else {
      }
    }

    requestAnimationFrame(animate)
  }

  const stopUploading = () => {
    // TODO: reset state

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
