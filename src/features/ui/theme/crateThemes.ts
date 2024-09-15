export const crateThemes = {
  labs: {
    1: '#700000',
    2: '#D63E0A',
    3: '#F05824',
    4: '#FF723E',
    5: '#FF9864',
  },
  panda: {
    1: '#003F23',
    2: '#00A589',
    3: '#13BFA3',
    4: '#2DD9BD',
    5: '#53FFE3',
  },
  sprout: {
    1: '#6E4100',
    2: '#D4A700',
    3: '#EEC104',
    4: '#FFDB1E',
    5: '#FFFF44',
  },
  studio: {
    1: '#000013',
    2: '#115579',
    3: '#2B6F93',
    4: '#4589AD',
    5: '#6BAFD3',
  },
  world: {
    1: '#00464E',
    2: '#40ACB4',
    3: '#5AC6CE',
    4: '#74E0E8',
    5: '#9AFFFF',
  },
} as const

export type CrateThemeKeys = keyof typeof crateThemes
