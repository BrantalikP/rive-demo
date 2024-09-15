import { Platform } from 'react-native'

export const isIOS = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'
export const runtimeVersion = process.env.EXPO_PUBLIC_APP_VERSION || '0.0.0'
