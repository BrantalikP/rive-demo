import { router } from 'expo-router'
import { useEffect, useState } from 'react'

import { PASSCODE_LENGTH } from '~/features/passcode/components/PasscodeInput/presets'
import { parsePasscode } from '~/features/passcode/utils/passcode'

export const useCreatePasscode = () => {
  const [passcode, setPasscode] = useState<string[]>([])

  const handleButtonPress = (char: string) => {
    if (passcode.length < PASSCODE_LENGTH) {
      setPasscode((prev) => [...prev, char])
    }
  }

  // If the passcode is the correct length, navigate to the confirm passcode screen and reset the passcode
  useEffect(() => {
    if (passcode.length === PASSCODE_LENGTH) {
      router.navigate({
        pathname: '/confirm-passcode',
        params: { passcode: parsePasscode(passcode) },
      })

      setPasscode([])
    }
  }, [passcode])

  return {
    passcode,
    handleButtonPress,
  }
}
