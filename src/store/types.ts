import { StateCreator } from 'zustand'

import { IUserSlice } from '~/features/auth/store/userSlice'
import { IPasscodeSlice } from '~/features/passcode/store/passcodeSlice'
import { IProfileSlice } from '~/features/profiles/store/profileSlice'

export type IStore = IPasscodeSlice & IProfileSlice & IUserSlice
export type AppStateCreator<TSlice> = StateCreator<
  IStore,
  [['zustand/persist', unknown]],
  [],
  TSlice
>
