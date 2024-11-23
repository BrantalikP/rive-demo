import { useUpload } from './hooks/useUpload'

import { ProgressTitle } from '~/features/rive/components/ProgressTitle'
import { HEIGHT, WIDTH } from '~/features/rive/presets'
import { Box } from '~/features/ui/components/Box'

export const UploadScreen = () => {
  const { animationUrl, isUploading, riveRef, progress, startUploading, stopUploading } =
    useUpload()
  if (!animationUrl) return null

  return (
    <Box alignItems="center" justifyContent="center" flex={1} backgroundColor="black">
      <ProgressTitle isUploading={isUploading} progress={progress} />
      <Box style={{ width: WIDTH, height: HEIGHT }}>{/* TODO: Rive component*/}</Box>
    </Box>
  )
}
