import { RefObject, useRef, useState } from 'react'
import { NativeSyntheticEvent, TextInput, TextInputChangeEventData } from 'react-native'

export const OTP_LENGTH = 6

export const useOTPInput = ({ callback }: { callback?: (value: string[]) => void }) => {
  const [otp, setOTP] = useState<string[]>(Array(OTP_LENGTH).fill(''))

  const refs: RefObject<TextInput>[] = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ]

  const handleChangeText = (text: string, index: number) => {
    const newOTP = [...otp]
    newOTP[index] = text
    setOTP(newOTP)
    const newOtpLength = newOTP.join('').length

    // Focus next input if it exists
    if (text !== '' && index < OTP_LENGTH - 1) {
      refs[index + 1]?.current?.focus()
    }

    // Call callback if OTP is complete
    if (newOtpLength === OTP_LENGTH) {
      callback?.(newOTP)
    }
  }

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace') {
      if (otp[index] === '' && index > 0) {
        refs[index - 1]?.current?.focus()
        handleChangeText('', index - 1)
      } else {
        handleChangeText('', index)
      }
    } else if (key !== 'Backspace') {
      handleChangeText(key, index)
    }
  }

  const handleFocus = (index: number) => {
    if (refs[index].current) {
      refs[index].current?.setNativeProps({ selection: { start: 1, end: 1 } })
    }
  }

  const getVariant = (index: number, otpLength: number) => {
    if (index === 0) {
      return 'firstInput'
    }
    if (index === otpLength - 1) {
      return 'lastInput'
    }
    return 'middleInput'
  }

  const handleChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const inputText = event.nativeEvent.text

    // Remove any non-digit characters
    let cleanedText = inputText.replace(/\D/g, '')

    // If the cleaned text is longer than OTP_LENGTH, remove characters from the beginning
    if (cleanedText.length > OTP_LENGTH) {
      cleanedText = cleanedText.slice(-OTP_LENGTH)
    }

    const text = cleanedText.split('')

    if (text.length === OTP_LENGTH) {
      refs[0]?.current?.blur()
      setOTP(text)
      callback?.(text)
    }
  }

  return { otp, handleKeyPress, refs, getVariant, handleFocus, handleChange }
}
