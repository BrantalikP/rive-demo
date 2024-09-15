/* eslint-disable import/consistent-type-specifier-style */
import { ExpoConfig, IOS } from '@expo/config-types'

import packageJson from './package.json'

import type { OtaUpdatePriority } from '~/hooks/useOTAUpdate'
import { Environment } from '~/types/env'

declare const process: {
  env: {
    EXPO_PUBLIC_APP_ENV: Environment
    EXPO_PUBLIC_APP_VERSION: string
    EXPO_PUBLIC_BUILD_NUMBER: string
  }
}
const environment = process.env.EXPO_PUBLIC_APP_ENV || 'dev'

const fonts = [
  './assets/fonts/CentraNo2-Bold.otf',
  './assets/fonts/CentraNo2-Book.otf',
  './assets/fonts/CentraNo2-BookItalic.otf',
]

// prefetched/embedded assets, can be referenced as source='rn_meme' https://docs.expo.dev/versions/latest/sdk/asset/#configurable-properties
// TODO: fix imagine background to use expo assets and remove '-' from name due to android issue
// const assets = [
//   './src/features/profiles/assets/profile-1.png',
//   './src/features/profiles/assets/profile-2.png',
//   './src/features/profiles/assets/profile-3.png',
//   './src/features/profiles/assets/profile-4.png',
// ]

const getEnvironmentInfo = (): {
  name: ExpoConfig['name']
  appIdentifier: IOS['bundleIdentifier']
  icon: ExpoConfig['icon']
} => {
  const appIdentifier = 'com.kiwico.app'
  const appName = 'KiwiCo'

  if (environment === 'production')
    return {
      name: appName,
      appIdentifier,
      icon: './assets/icon.png',
    }

  return {
    name: `${appName} ${environment.toUpperCase()}`,
    appIdentifier: `${appIdentifier}.${environment}`,
    icon: `./assets/icon-${environment}.png`,
  }
}

const { name, appIdentifier, icon } = getEnvironmentInfo()

const plugins: ExpoConfig['plugins'] = [
  ['expo-build-properties'],
  ['expo-font', { fonts }],
  // ['expo-asset', { assets }],
  ['expo-router'],
  [
    'expo-build-properties',
    {
      ios: {
        deploymentTarget: '14.0', // needed for react native rive
      },
    },
  ],
  ['expo-secure-store'],
]

// UPDATE VERSION AND BUILDNUMBER
const version = process.env.EXPO_PUBLIC_APP_VERSION || packageJson.version
const buildNumber = process.env.EXPO_PUBLIC_BUILD_NUMBER || '1'

const fallbackToCacheTimeout = 0
const otaUpdatePriority: OtaUpdatePriority = 'normal'

const expoConfig: ExpoConfig = {
  name,
  slug: 'kiwico',
  version,
  owner: 'kiwico',
  runtimeVersion: {
    policy: 'sdkVersion',
  },
  scheme: 'kiwico',
  orientation: 'portrait',
  icon,
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#00B261',
  },
  updates: {
    fallbackToCacheTimeout,
    url: 'https://u.expo.dev/8edeb603-82ab-404d-b746-86d5df27e831',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    buildNumber,
    supportsTablet: false,
    bundleIdentifier: appIdentifier,
    config: {
      usesNonExemptEncryption: false,
    },
    infoPlist: {
      LSApplicationQueriesSchemes: ['itms-apps'],
    },
  },
  web: {
    bundler: 'metro',
  },
  android: {
    versionCode: parseInt(buildNumber, 10),
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    package: appIdentifier,
    // necessary from Android 12
    intentFilters: [
      { action: 'VIEW', data: { scheme: 'mailto' } },
      { action: 'VIEW', data: { scheme: 'sms' } },
      { action: 'VIEW', data: { scheme: 'tel' } },
    ],
  },
  jsEngine: 'hermes',
  plugins,
  extra: {
    fallbackToCacheTimeout,
    otaUpdatePriority,
    eas: {
      projectId: '8edeb603-82ab-404d-b746-86d5df27e831',
    },
  },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
}

export default expoConfig
