import { AppStateCreator } from '~/store/types'

export interface IProfileSlice {
  isEditing: boolean
  setIsEditing: (isEditing: boolean) => void
}

export const profileSlice: AppStateCreator<IProfileSlice> = (set) => ({
  isEditing: false,
  setIsEditing: (isEditing) => {
    set({ isEditing })
  },
})
