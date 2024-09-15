/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import { PasswordScreen } from './index'

import { act, fireEvent, render, screen } from '~/utils/test-utils'

const mockEyeButton = jest.fn(() => <></>)
jest.mock('~/features/auth/components/EyeButton', () => ({
  EyeButton: () => mockEyeButton(),
}))

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'))

jest.mock('expo-router', () => ({
  router: {
    navigate: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  },
  useLocalSearchParams: jest.fn(() => ({
    email: 'admin@kiwico.com',
  })),
}))

jest.mock('@shopify/restyle', () => {
  const RealModule = jest.requireActual('@shopify/restyle')
  const RN = jest.requireActual('react-native')
  RealModule.createText = () => RN.Text
  RealModule.createBox = () => RN.View
  RealModule.createRestyleComponent = (_: any, c: any) => c || RN.View
  return RealModule
})

describe('PasswordScreen', () => {
  it('renders correctly', () => {
    render(<PasswordScreen />)
    expect(screen.getByText('Password')).toBeTruthy()
    expect(screen.getByText('Continue')).toBeTruthy()
  })

  it('shows error message when password is empty', async () => {
    render(<PasswordScreen />)

    const button = screen.getByText('Continue')

    await act(async () => {
      fireEvent.press(button)
    })

    expect(screen.getByText('Please enter your password')).toBeTruthy()
  })

  it.skip('navigates to next screen when password is valid', async () => {
    render(<PasswordScreen />)
    const password = 'validPassword123'

    const passwordInput = screen.getByText('Password')

    await act(async () => {
      fireEvent.changeText(passwordInput, password)
    })

    await act(async () => {
      fireEvent.press(screen.getByText('Continue'))
    })

    expect(require('expo-router').router.replace).toHaveBeenCalledWith('/')
  })

  it.skip('should redirect user back if email is missing', () => {
    render(<PasswordScreen />)
    expect(require('expo-router').router.back).toHaveBeenCalled()
  })
})
