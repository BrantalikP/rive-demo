import { UserEntity } from '~/api/generated/apiSchemas'
import { AppStateCreator } from '~/store/types'

export interface IUserSlice {
  user?: UserEntity
  setUser: (user?: UserEntity) => void
}

export const userSlice: AppStateCreator<IUserSlice> = (set) => ({
  user: undefined,
  setUser: (user) => {
    set({ user })
  },
})
