import { MMKV } from 'react-native-mmkv'
import { view } from './storybook.requires'

const storage = new MMKV()

const setItem = (key: string, value: string) => {
  storage.set(key, value)
}

const getItem = (key: string) => {
  return storage.getString(key)
}

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: async (key) => {
      const value = getItem(key)
      return value ?? null
    },
    setItem: async (key, value) => {
      setItem(key, value)
    },
  },
})

export default StorybookUIRoot
