import { createTheme } from '@shopify/restyle'

import { FONTS } from './fonts'
import { palette } from './palette'

import { ms } from '~/utils/scale'

const colors = {
  ...palette,
  primary: palette.green,
  secondary: palette.blue,

  textPrimary: palette.black,
  textPrimary2: palette.black60,
  textSecondary: palette.black50,

  primaryBackground: palette.beigeSubdued,
  secondaryBackground: palette.white,
  tertiaryBackground: palette.blueSubdued,

  iconPrimary: palette.black,
  iconSecondary: palette.black60,
  iconTertiary: palette.black50,

  error: palette.redDarker,
  danger: palette.red,

  shadow: palette.beigeDarker,
  lostButton: palette.denim,

  lostButtonBorder: palette.denim20,
  // Tic Tac Toe
  tileBorder: palette.black10,
}

export const theme = createTheme({
  colors,
  spacing: {
    auto: 'auto',
    zero: 0,
    '3xs': ms(2),
    '2xs': ms(4),
    xs: ms(6),
    s: ms(8),
    '2sm': ms(10),
    sm: ms(12),
    m: ms(16),
    ml: ms(18),
    l: ms(20),
    xl: ms(24),
    '2xl': ms(32),
    '3xl': ms(40),
    '4xl': ms(50),
    '5xl': ms(60),
  },
  borderRadii: {
    zero: 0,
    '4xs': ms(1),
    '3xs': ms(2),
    '2xs': ms(4),
    xs: ms(6),
    s: ms(8),
    '2sm': ms(10),
    sm: ms(12),
    m: ms(16),
    ml: ms(18),
    l: ms(20),
    xl: ms(24),
    '2xl': ms(32),
    '3xl': ms(40),
    round: 1000,
  },
  breakpoints: {
    small: 0,
    normal: { width: 376, height: 750 },
  },
  textVariants: {
    hxl: {
      fontSize: ms(34),
      lineHeight: ms(40),
      fontFamily: FONTS.CENTRA_NO_2.BOLD,
      color: 'textPrimary',
      letterSpacing: -0.25,
      fontWeight: 700,
    },
    hlg: {
      fontSize: ms(28),
      lineHeight: ms(32),
      fontFamily: FONTS.CENTRA_NO_2.BOLD,
      color: 'textPrimary',
      fontWeight: 700,
      letterSpacing: -0.25,
    },
    hmd: {
      fontSize: ms(23),
      lineHeight: ms(28),
      fontFamily: FONTS.CENTRA_NO_2.BOLD,
      color: 'textPrimary',
      fontWeight: 700,
      letterSpacing: -0.25,
    },
    hsm: {
      fontSize: ms(20),
      lineHeight: ms(24),
      fontFamily: FONTS.CENTRA_NO_2.BOLD,
      color: 'textPrimary',
      fontWeight: 700,
      letterSpacing: -0.25,
    },
    p: {
      fontSize: ms(17),
      lineHeight: ms(28),
      fontFamily: FONTS.CENTRA_NO_2.BOOK,
      color: 'textPrimary',
      fontWeight: 400,
      letterSpacing: -0.15,
    },
    pBold: {
      fontSize: ms(17),
      lineHeight: ms(28),
      fontFamily: FONTS.CENTRA_NO_2.BOLD,
      color: 'textPrimary',
      fontWeight: 700,
      letterSpacing: -0.15,
    },
    pSmall: {
      fontSize: ms(15),
      lineHeight: ms(24),
      fontFamily: FONTS.CENTRA_NO_2.BOOK,
      color: 'textPrimary',
      letterSpacing: -0.15,
      fontWeight: 400,
    },
    pSmallBold: {
      fontSize: ms(15),
      lineHeight: ms(24),
      fontFamily: FONTS.CENTRA_NO_2.BOLD,
      color: 'textPrimary',
      fontWeight: 700,
      letterSpacing: -0.15,
    },
    label: {
      fontSize: ms(17),
      lineHeight: ms(24),
      fontFamily: FONTS.CENTRA_NO_2.BOOK,
      color: 'textPrimary',
      letterSpacing: -0.15,
      fontWeight: 400,
    },
    labelBold: {
      fontSize: ms(17),
      lineHeight: ms(24),
      fontFamily: FONTS.CENTRA_NO_2.BOLD,
      color: 'textPrimary',
      fontWeight: 700,
      letterSpacing: -0.15,
    },
    labelItalic: {
      fontSize: ms(17),
      lineHeight: ms(24),
      fontFamily: FONTS.CENTRA_NO_2.BOOK_IT,
      color: 'textPrimary',
      letterSpacing: -0.15,
      fontWeight: 400,
    },
    labelNarrow: {
      fontSize: ms(17),
      lineHeight: ms(20),
      fontFamily: FONTS.CENTRA_NO_2.BOOK,
      color: 'textPrimary',
      letterSpacing: -0.15,
      fontWeight: 400,
    },
    labelSmall: {
      fontSize: ms(14),
      lineHeight: ms(20),
      fontFamily: FONTS.CENTRA_NO_2.BOOK,
      color: 'textPrimary',
      letterSpacing: -0.15,
      fontWeight: 400,
    },
    tileLabel: {
      fontSize: ms(17),
      lineHeight: ms(20),
      fontFamily: FONTS.CENTRA_NO_2.BOLD,
      color: 'textPrimary',
      fontWeight: 700,
      letterSpacing: -0.15,
    },
    labelSmallBold: {
      fontSize: ms(14),
      lineHeight: ms(20),
      fontFamily: FONTS.CENTRA_NO_2.BOLD,
      color: 'textPrimary',
      letterSpacing: -0.15,
      fontWeight: 700,
    },
    labelSmallItalic: {
      fontSize: ms(14),
      lineHeight: ms(20),
      fontFamily: FONTS.CENTRA_NO_2.BOOK_IT,
      color: 'textPrimary',
      letterSpacing: -0.15,
      fontWeight: 400,
    },
    labelXSmall: {
      fontSize: ms(12),
      lineHeight: ms(16),
      fontFamily: FONTS.CENTRA_NO_2.BOOK,
      color: 'textPrimary',
      letterSpacing: -0.15,
      fontWeight: 400,
    },
    labelXSmallBold: {
      fontSize: ms(12),
      lineHeight: ms(16),
      fontFamily: FONTS.CENTRA_NO_2.BOLD,
      color: 'textPrimary',
      letterSpacing: -0.15,
      fontWeight: 700,
    },
    labelXSmallItalic: {
      fontSize: ms(12),
      lineHeight: ms(16),
      fontFamily: FONTS.CENTRA_NO_2.BOOK_IT,
      color: 'textPrimary',
      letterSpacing: -0.15,
      fontWeight: 400,
    },
    button: {
      fontSize: ms(17),
      lineHeight: ms(24),
      fontFamily: FONTS.CENTRA_NO_2.BOLD,
      color: 'textPrimary',
      letterSpacing: -0.15,
      fontWeight: 700,
    },
    buttonLarge: {
      fontSize: ms(34),
      lineHeight: ms(40),
      fontFamily: FONTS.CENTRA_NO_2.BOLD,
      color: 'textPrimary',
      letterSpacing: -0.25,
      fontWeight: 700,
    },
    stripeLabel: {
      fontSize: ms(16),
      lineHeight: ms(25),
      fontFamily: FONTS.CENTRA_NO_2.BOLD,
      color: 'white',
      letterSpacing: 0.5,
      fontWeight: 700,
    },
    speechBubbleText: {
      fontSize: ms(20),
      lineHeight: ms(20),
      fontFamily: FONTS.CENTRA_NO_2.BOOK,
      color: 'textPrimary',
      fontWeight: 400,
      letterSpacing: -0.25,
    },
    defaults: {
      // p
      fontSize: ms(17),
      lineHeight: ms(28),
      fontFamily: FONTS.CENTRA_NO_2.BOOK,
      color: 'textPrimary',
      fontWeight: 400,
      letterSpacing: -0.15,
    },
  },
  buttonVariants: {
    defaults: {
      paddingVertical: 'sm',
      paddingHorizontal: 'l',
      borderWidth: 2,
      borderRadius: 'm',
      height: ms(56),
    },
    default: {
      backgroundColor: 'green',
      borderColor: 'greenDarker',
    },
    light: {
      backgroundColor: 'white',
      borderColor: 'beigeDarker',
    },
    rounded: {
      paddingVertical: 0,
      paddingHorizontal: 0,
      backgroundColor: 'beigeSubdued',
      borderColor: 'beigeDarker',
      borderRadius: 'round',
      width: ms(45),
      height: ms(45),
      justifyContent: 'center',
      alignItems: 'center',
    },
    backButton: {
      paddingVertical: 0,
      paddingHorizontal: 0,
      backgroundColor: 'white',
      borderColor: 'beigeDarker',
      borderRadius: 'm',
      width: ms(40),
      height: ms(40),
      justifyContent: 'center',
      alignItems: 'center',
    },
    square: {
      paddingVertical: 0,
      paddingHorizontal: 0,
      backgroundColor: 'beigeSubdued',
      borderColor: 'beigeDarker',
      width: ms(72),
      height: ms(72),
      justifyContent: 'center',
      alignItems: 'center',
    },
    striped: {
      backgroundColor: 'white',
      borderColor: 'beigeDarker',
      overflow: 'hidden',
    },
  },
  inputVariants: {
    defaults: {
      backgroundColor: 'white',
      borderColor: 'beigeDarker',
      borderWidth: 2,
    },
    default: {},
    rounded: { borderRadius: 'm' },
    compoundTop: { borderTopLeftRadius: 'm', borderTopRightRadius: 'm' },
    compoundBottom: {
      borderBottomLeftRadius: 'm',
      borderBottomRightRadius: 'm',
      borderTopWidth: 0,
    },
  },
  otpInputVariants: {
    defaults: {
      minWidth: ms(58),
      height: ms(64),
      borderWidth: ms(2),
      borderColor: 'beigeDarker',
      textAlign: 'center',
      flex: 1,
      fontSize: ms(20),
      backgroundColor: 'white',
    },
    firstInput: {
      borderTopLeftRadius: 'm',
      borderBottomLeftRadius: 'm',
    },
    middleInput: {
      borderLeftWidth: 0,
    },
    lastInput: {
      borderTopRightRadius: 'm',
      borderBottomRightRadius: 'm',
      borderLeftWidth: 0,
    },
  },
})

export type Theme = typeof theme
