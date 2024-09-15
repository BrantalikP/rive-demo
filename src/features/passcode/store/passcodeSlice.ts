import { AppStateCreator } from '~/store/types'

export interface IPasscodeSlice {
  passcode: string | null
  setPasscode: (passcode: string) => void
  removePasscode: () => void
}

export const passcodeSlice: AppStateCreator<IPasscodeSlice> = (set) => ({
  passcode: null,
  setPasscode: (passcode) => {
    set({ passcode })
  },
  removePasscode: () => {
    set({ passcode: null })
  },
})
