import { Text } from '~/features/ui/components/Text'

interface IProgressTitle {
  isUploading: boolean
  progress: number
}

export const ProgressTitle = ({ isUploading, progress }: IProgressTitle) => {
  return (
    <Text variant="hxl" mb="4xl">
      {/* eslint-disable-next-line no-nested-ternary */}
      {isUploading ? (progress >= 100 ? 'Uploaded' : `${progress}%`) : 'Start Uploading'}
    </Text>
  )
}
