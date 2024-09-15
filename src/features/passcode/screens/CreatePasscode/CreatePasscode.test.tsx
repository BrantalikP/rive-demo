import { renderHook, act } from '@testing-library/react-hooks'
import React from 'react'

import { CreatePasscodeScreen } from '.'
import { useCreatePasscode } from './hooks/useCreatePasscode'
import { PASSCODE_LENGTH } from '../../components/PasscodeInput/presets'

import { render, screen, fireEvent } from '~/utils/test-utils'

jest.mock('expo-router', () => ({
  router: {
    navigate: jest.fn(),
  },
}))

describe('useCreatePasscode hook', () => {
  it('initializes with an empty passcode', () => {
    const { result } = renderHook(() => useCreatePasscode())
    expect(result.current.passcode).toEqual([])
  })

  it('adds a digit to the passcode when handleButtonPress is called', () => {
    const { result } = renderHook(() => useCreatePasscode())
    act(() => {
      result.current.handleButtonPress('1')
    })
    expect(result.current.passcode).toEqual(['1'])
  })

  it('limits the passcode to PASSCODE_LENGTH digits', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCreatePasscode())

    await act(async () => {
      result.current.handleButtonPress('1')
      result.current.handleButtonPress('2')
      result.current.handleButtonPress('6')
      result.current.handleButtonPress('4')
      await waitForNextUpdate()
    })

    expect(result.current.passcode).toEqual([])
    expect(require('expo-router').router.navigate).toHaveBeenCalledWith({
      pathname: '/confirm-passcode',
      params: { passcode: '1264' },
    })

    // Try to add another digit
    act(() => {
      result.current.handleButtonPress('5')
    })

    expect(result.current.passcode).toEqual(['5'])
  })

  it('navigates to confirm-passcode screen when passcode is complete', () => {
    const { result } = renderHook(() => useCreatePasscode())
    act(() => {
      for (let i = 1; i <= PASSCODE_LENGTH; i++) {
        result.current.handleButtonPress(i.toString())
      }
    })
    expect(require('expo-router').router.navigate).toHaveBeenCalledWith({
      pathname: '/confirm-passcode',
      params: { passcode: '1234' },
    })
  })
})

describe('CreatePasscodeScreen', () => {
  it('renders correctly', () => {
    render(<CreatePasscodeScreen />)
    expect(screen.getByText('Create a passcode')).toBeTruthy()
    expect(
      screen.getByText('You will use this to access parent zone and manage your account.'),
    ).toBeTruthy()
  })

  it('renders PasscodeInput component', () => {
    render(<CreatePasscodeScreen />)
    expect(screen.getByTestId('passcode-input')).toBeTruthy()
  })

  it('renders Keyboard component', () => {
    render(<CreatePasscodeScreen />)
    expect(screen.getByTestId('passcode-keyboard')).toBeTruthy()
  })

  it('updates PasscodeInput when keys are pressed', () => {
    render(<CreatePasscodeScreen />)

    fireEvent.press(screen.getByText('1'))
    fireEvent.press(screen.getByText('2'))
    fireEvent.press(screen.getByText('3'))

    const filledDots = screen.getAllByTestId('filled-passcode-dot')
    const emptyDots = screen.getAllByTestId('empty-passcode-dot')

    expect(filledDots.length).toBe(3)
    expect(emptyDots.length).toBe(PASSCODE_LENGTH - 3)
  })
})
