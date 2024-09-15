import * as SecureStore from 'expo-secure-store'

const KEY = 'accessToken'

export function setAccessToken(value: string) {
  SecureStore.setItem(KEY, value)
}

export function getAccessToken() {
  return SecureStore.getItem(KEY)
}

export async function deleteAccessToken() {
  await SecureStore.deleteItemAsync(KEY)
}
