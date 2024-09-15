/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import { EmailScreen } from './index'

import { act, fireEvent, render, screen } from '~/utils/test-utils'

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'))
jest.mock('expo-router', () => ({
  router: {
    navigate: jest.fn(),
  },
  Stack: {
    Screen: () => <></>,
  },
}))

jest.mock('@shopify/restyle', () => {
  const RealModule = jest.requireActual('@shopify/restyle')
  const RN = jest.requireActual('react-native')
  RealModule.createText = () => RN.Text
  RealModule.createBox = () => RN.View
  RealModule.createRestyleComponent = (_: any, c: any) => c || RN.View
  return RealModule
})

describe('EmailScreen', () => {
  it('renders correctly', () => {
    render(<EmailScreen />)
    expect(screen.getByText('Sign in to KiwiCo')).toBeTruthy()
    expect(screen.getByText('Email')).toBeTruthy()
    expect(screen.getByText('Continue')).toBeTruthy()
  })

  it('shows error message when email is empty', async () => {
    render(<EmailScreen />)

    const button = screen.getByText('Continue')

    await act(async () => {
      fireEvent.press(button)
    })

    expect(screen.getByText('Please enter the email you used with KiwiCo')).toBeTruthy()
  })

  it('shows error message when email is invalid', async () => {
    render(<EmailScreen />)

    const emailInput = screen.getByText('Email')

    fireEvent.changeText(emailInput, 'invalid-email')

    const button = screen.getByText('Continue')

    await act(async () => {
      fireEvent.press(button)
    })

    expect(screen.getByText('Please enter the email you used with KiwiCo')).toBeTruthy()
  })

  it('navigates to password screen when email is valid', async () => {
    render(<EmailScreen />)
    const email = 'admin@kiwico.com'

    const emailInput = screen.getByText('Email')

    fireEvent.changeText(emailInput, email)

    await act(async () => {
      fireEvent.press(screen.getByText('Continue'))
    })

    expect(require('expo-router').router.navigate).toHaveBeenCalledWith({
      params: {
        email,
      },
      pathname: '/password',
    })
  })
})
