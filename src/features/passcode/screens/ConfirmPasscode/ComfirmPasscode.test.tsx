import { renderHook, act } from '@testing-library/react-hooks'
import React from 'react'

import { ConfirmPasscodeScreen } from '.'
import { PASSCODE_LENGTH } from '../../components/PasscodeInput/presets'
import { useValidatePasscode } from '../../hooks/useValidatePasscode'

import { render, screen, fireEvent } from '~/utils/test-utils'

jest.mock('expo-router', () => ({
  router: {
    navigate: jest.fn(),
  },
  useLocalSearchParams: jest.fn(),
}))

jest.mock('~/store/useRootStore', () => ({
  useRootStore: jest.fn(),
}))

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'))

describe('useValidatePasscode hook', () => {
  const mockInitialPasscode = '1234'

  it('initializes with an empty passcode', () => {
    const { result } = renderHook(() =>
      useValidatePasscode({ initialPasscode: mockInitialPasscode }),
    )
    expect(result.current.passcode).toEqual([])
    expect(result.current.isValid).toBeNull()
  })

  it('adds a digit to the passcode when handleButtonPress is called', () => {
    const { result } = renderHook(() =>
      useValidatePasscode({ initialPasscode: mockInitialPasscode }),
    )
    act(() => {
      result.current.handleButtonPress('1')
    })
    expect(result.current.passcode).toEqual(['1'])
  })

  it('validates correct passcode and navigates', () => {
    const mockSavePasscode = jest.fn()
    jest
      .spyOn(require('~/store/useRootStore'), 'useRootStore')
      .mockImplementation(() => mockSavePasscode)

    const { result } = renderHook(() =>
      useValidatePasscode({ initialPasscode: mockInitialPasscode }),
    )
    act(() => {
      for (const digit of mockInitialPasscode) {
        result.current.handleButtonPress(digit)
      }
    })
    expect(result.current.isValid).toBe(true)
    expect(mockSavePasscode).toHaveBeenCalledWith(mockInitialPasscode)
    expect(require('expo-router').router.navigate).toHaveBeenCalledWith({ pathname: '/(parent)' })
  })

  it('invalidates incorrect passcode and triggers shake animation', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useValidatePasscode({ initialPasscode: mockInitialPasscode }),
    )

    await act(async () => {
      result.current.handleButtonPress('9')
      result.current.handleButtonPress('9')
      result.current.handleButtonPress('9')
      result.current.handleButtonPress('9')
      await waitForNextUpdate()
    })

    expect(result.current.isValid).toBeNull()
    expect(result.current.passcode).toEqual([])
  })
  it('navigates for correct passcode', async () => {
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

describe('ConfirmPasscodeScreen', () => {
  beforeEach(() => {
    jest.spyOn(require('expo-router'), 'useLocalSearchParams').mockReturnValue({ passcode: '1234' })
  })

  it('renders correctly', () => {
    render(<ConfirmPasscodeScreen />)
    expect(screen.getByText('Confirm your passcode code.')).toBeTruthy()
    expect(
      screen.getByText('You will use this to access parent zone and manage your account.'),
    ).toBeTruthy()
  })

  it('renders PasscodeInput component', () => {
    render(<ConfirmPasscodeScreen />)
    expect(screen.getByTestId('passcode-input')).toBeTruthy()
  })

  it('renders Keyboard component', () => {
    render(<ConfirmPasscodeScreen />)
    expect(screen.getByTestId('passcode-keyboard')).toBeTruthy()
  })

  it('updates PasscodeInput when keys are pressed', () => {
    render(<ConfirmPasscodeScreen />)
    fireEvent.press(screen.getByText('1'))
    fireEvent.press(screen.getByText('2'))
    fireEvent.press(screen.getByText('3'))
    const filledDots = screen.getAllByTestId('filled-passcode-dot')
    const emptyDots = screen.getAllByTestId('empty-passcode-dot')
    expect(filledDots.length).toBe(3)
    expect(emptyDots.length).toBe(PASSCODE_LENGTH - 3)
  })
})
