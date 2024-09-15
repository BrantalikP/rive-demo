import { hex2rgba } from '~/utils/hex2rgba'

export const palette = {
  white: '#FFFFFF',
  black: '#000000',

  white80: hex2rgba('#FFFFFF', 0.8),

  black10: hex2rgba('#000000', 0.1),
  black20: hex2rgba('#000000', 0.2),

  black50: hex2rgba('#000000', 0.5),
  black60: hex2rgba('#000000', 0.6),

  beigeSubdued: '#FAF5F1',
  beige: '#F3E7DD',
  beigeDarker: '#E1DCD8',

  green: '#00B261',
  greenDarker: '#009953',
  green10: hex2rgba('#00B261', 0.1),

  blue: '#1D5FBF',
  blueSubdued: '#E2F6FA',
  blueDarker: '#174C99',

  denim: '#1D5FBF',
  denim20: hex2rgba('#1D5FBF', 0.2),

  red: '#EF4444',
  redDarker: '#B91C1C',

  turquoise: '#5CC6CE',
  raspberry: '#EF4059',

  yellow: '#F4EC94',
  yellowDarker: '#DAD27A',

  // crate themes
  labs: '#F05824',
  panda: '#13BFA3',
  sprout: '#EEC104',
  studio: '#2B6F93',
  world: '#5AC6CE',

  labsLight: '#fff088',

  cyanTurquoise: '#00FFD8',
}
