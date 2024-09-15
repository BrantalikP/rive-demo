import Rive, { Fit } from 'rive-react-native'

import { useUpload } from './hooks/useUploadBoilerplate'

import { ProgressTitle } from '~/features/rive/components/ProgressTitle'
import { Box } from '~/features/ui/components/Box'

export const UploadScreen = () => {
  const { animationUrl, isUploading, riveRef, progress, startUploading, stopUploading } =
    useUpload()
  if (!animationUrl) return null

  return (
    <Box alignItems="center" justifyContent="center" flex={1} backgroundColor="black">
      <ProgressTitle isUploading={isUploading} progress={progress} />
      <Box style={{ width: 142, height: 62 }}>
        <Rive
          fit={Fit.Contain}
          ref={riveRef}
          url={animationUrl}
          stateMachineName="State Machine"
          onStateChanged={(e, stateName) => {
            if (stateName === 'idle') {
              stopUploading()
            }
            if (stateName === 'uploading') {
              void startUploading()
            }
          }}
        />
      </Box>
    </Box>
  )
}
