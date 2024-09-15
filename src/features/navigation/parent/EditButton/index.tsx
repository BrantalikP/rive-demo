import { usePathname } from 'expo-router'

import { PenIcon } from './parts/PenIcon'

import { useEditing } from '~/features/navigation/parent/EditButton/hooks/useEditing'
import { Label } from '~/features/navigation/parent/EditButton/parts/Label'
import { Button } from '~/features/ui/components/Button'

export const EditButton = () => {
  const pathname = usePathname()
  const { isEditing, handleEdit, buttonWidth, labelOpacity } = useEditing(pathname)

  // A bit hacky to prevent the button from disappearing when the user returns from the edit profile screen.
  if (pathname === '/profiles' || pathname === '/edit-profile')
    return (
      <Button
        marginRight="xl"
        variant="backButton"
        label={<Label isEditing={isEditing} style={{ opacity: labelOpacity }} />}
        innerContainerStyle={{
          width: buttonWidth,
        }}
        onPress={handleEdit}
      />
    )
}
