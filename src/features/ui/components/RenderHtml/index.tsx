import RenderHtmlRN, { RenderHTMLProps } from 'react-native-render-html'

import { useTheme } from '../../theme/useTheme'

// Console Warning
// MemoizedTNodeRenderer: Support for defaultProps will be
// removed from memo components in a future major release.
// Use JavaScript default parameters instead. Warning: %s:
// Support for defaultProps will be removed from memo
// components in a future major release. Use JavaScript default
// parameters instead.%s MemoizedTNodeRenderer
// See more: https://github.com/meliorence/react-native-render-html/issues/661#issuecomment-2232604517

export const RenderHtml = ({ tagsStyles, ...props }: RenderHTMLProps) => {
  const { colors, textVariants } = useTheme()

  return (
    <RenderHtmlRN
      tagsStyles={{
        h1: { ...textVariants.hxl, fontWeight: '700' },
        h2: { ...textVariants.hlg, fontWeight: '700' },
        h3: { ...textVariants.hmd, fontWeight: '700' },
        h4: { ...textVariants.hsm, fontWeight: '700' },
        h5: { ...textVariants.hsm, fontWeight: '700' },
        h6: { ...textVariants.hsm, fontWeight: '700' },
        p: { ...textVariants.p, fontWeight: '400' },
        a: {
          color: colors.blueDarker,
        },
        ...tagsStyles,
      }}
      {...props}
    />
  )
}
