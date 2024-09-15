import { useUpload } from './hooks/useUpload'

import { ProgressTitle } from '~/features/rive/components/ProgressTitle'
import { Box } from '~/features/ui/components/Box'

export const UploadScreen = () => {
  const { animationUrl, isUploading, riveRef, progress, startUploading, stopUploading } =
    useUpload()
  if (!animationUrl) return null

  return (
    <Box alignItems="center" justifyContent="center" flex={1} backgroundColor="black">
      <ProgressTitle isUploading={isUploading} progress={progress} />
      <Box style={{ width: 142, height: 62 }}>{/* TODO: Rive component*/}</Box>
    </Box>
  )
}
