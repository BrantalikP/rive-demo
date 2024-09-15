import { CrossIcon } from './parts/CrossIcon'

import { useEditing } from '~/features/profiles/screens/EditProfile/hooks/useEditing'
import { Button } from '~/features/ui/components/Button'

export const CloseButton = () => {
  const { handleNavigationBack } = useEditing()
  return <Button label={<CrossIcon />} variant="backButton" onPress={handleNavigationBack} />
}
