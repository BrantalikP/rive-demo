import { renderHook, act } from '@testing-library/react-hooks'
import React from 'react'

import { EnterPasscodeScreen } from '.'
import { PASSCODE_LENGTH } from '../../components/PasscodeInput/presets'
import { useValidatePasscode } from '../../hooks/useValidatePasscode'

import { fireEvent, render, screen } from '~/utils/test-utils'

jest.mock('~/store/useRootStore', () => ({
  useRootStore: jest.fn(() => '1234'),
}))

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'))
jest.mock('expo-router', () => ({
  router: {
    navigate: jest.fn(),
  },
}))

describe('EnterPasscodeScreen', () => {
  const mockInitialPasscode = '1234'

  it('renders correctly', () => {
    render(<EnterPasscodeScreen />)
    // TODO: implement MSW and check for the user name
    expect(screen.getByText('Hello,')).toBeTruthy()
    expect(screen.getByText('Please enter your passcode to access the parent zone.')).toBeTruthy()
  })

  it('renders PasscodeInput component', () => {
    render(<EnterPasscodeScreen />)
    expect(screen.getByTestId('passcode-input')).toBeTruthy()
  })

  it('renders Keyboard component', () => {
    render(<EnterPasscodeScreen />)
    expect(screen.getByTestId('passcode-keyboard')).toBeTruthy()
  })

  it('calls handleButtonPress when a key is pressed', () => {
    const { result } = renderHook(() => useValidatePasscode({ initialPasscode: '1234' }))

    render(<EnterPasscodeScreen />)

    act(() => {
      result.current.handleButtonPress('1')
    })

    expect(result.current.passcode).toEqual(['1'])
  })

  it('updates PasscodeInput when passcode changes', async () => {
    render(<EnterPasscodeScreen />)

    fireEvent.press(screen.getByText('1'))
    fireEvent.press(screen.getByText('2'))
    fireEvent.press(screen.getByText('3'))

    const filledDots = screen.getAllByTestId('filled-passcode-dot')
    const emptyDots = screen.getAllByTestId('empty-passcode-dot')

    expect(filledDots.length).toBe(3)
    expect(emptyDots.length).toBe(PASSCODE_LENGTH - 3)
  })

  it('navigates to parent screen when correct passcode is entered', async () => {
    const mockSavePasscode = jest.fn()
    jest
      .spyOn(require('~/store/useRootStore'), 'useRootStore')
      .mockImplementation(() => mockSavePasscode)

    const { result, waitForNextUpdate } = renderHook(() =>
      useValidatePasscode({ initialPasscode: mockInitialPasscode }),
    )

    await act(async () => {
      result.current.handleButtonPress('1')
      result.current.handleButtonPress('2')
      result.current.handleButtonPress('3')
      result.current.handleButtonPress('4')
      await waitForNextUpdate()
    })

    expect(mockSavePasscode).toHaveBeenCalledWith(mockInitialPasscode)
    expect(require('expo-router').router.navigate).toHaveBeenCalledWith({ pathname: '/(parent)' })
  })
})
