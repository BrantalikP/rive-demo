import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { type IStore } from './types'

import { userSlice } from '~/features/auth/store/userSlice'
import { passcodeSlice } from '~/features/passcode/store/passcodeSlice'
import { profileSlice } from '~/features/profiles/store/profileSlice'
import { mmkvStorage } from '~/utils/storage'

export const rootStore = create<IStore>()(
  persist(
    (...args) => ({
      ...passcodeSlice(...args),
      ...profileSlice(...args),
      ...userSlice(...args),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => mmkvStorage),
      // specify the keys you want to persist
      partialize: (state: IStore) => ({ passcode: state.passcode, user: state.user }),
    },
  ),
)

export const useRootStore = <T>(selector: (state: IStore) => T): T => rootStore(selector)
