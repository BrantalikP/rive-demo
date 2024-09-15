import { useHapticFeedback } from './hooks/useHapticFeedback'

import { Box } from '~/features/ui/components/Box'
import { Button } from '~/features/ui/components/Button'
import { ms } from '~/utils/scale'

interface KeyboardProps {
  onPress: (key: string) => void
}

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

export const Keyboard: React.FC<KeyboardProps> = ({ onPress }) => {
  const { triggerHapticFeedback } = useHapticFeedback()
  return (
    <Box
      flexDirection="row"
      testID="passcode-keyboard"
      flexWrap="wrap"
      justifyContent="center"
      width={ms(360)}
    >
      {keys.map((key) => (
        <Button
          margin="sm"
          label={key}
          onPress={() => {
            triggerHapticFeedback()
            onPress(key)
          }}
          variant="square"
          key={key}
        />
      ))}
    </Box>
  )
}
