import React from 'react'
import { Alert, useWindowDimensions } from 'react-native'
import PagerView from 'react-native-pager-view'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { BUTTON_MARGIN, MARGIN_TOP } from './presets'
import { stripHtmlTags, wrapTextWithParagraph } from '../utils'

import { DiyInstructionStep } from '~/api/generated/apiSchemas'
import { TicTacToeLayout } from '~/features/tic-tac-toe/components/TicTacToeLayout'
import { Badge } from '~/features/ui/components/Badge'
import { Box } from '~/features/ui/components/Box'
import { Button } from '~/features/ui/components/Button'
import { Image } from '~/features/ui/components/Image'
import { RenderHtml } from '~/features/ui/components/RenderHtml'
import { ScrollView } from '~/features/ui/components/ScrollView'
import { useTheme } from '~/features/ui/theme/useTheme'
import { ms } from '~/utils/scale'

export const StepPagerView = ({
  step,
  isLastStep,
  refPagerView,
  index,
}: {
  step: DiyInstructionStep
  isLastStep: boolean
  refPagerView: React.RefObject<PagerView>
  index: number
}) => {
  const { width, height } = useWindowDimensions()
  const insets = useSafeAreaInsets()
  const { textVariants } = useTheme()

  return (
    <TicTacToeLayout>
      <ScrollView>
        <Box
          style={{
            paddingTop: insets.top + MARGIN_TOP,
            paddingBottom: insets.bottom || BUTTON_MARGIN,
          }}
          paddingHorizontal="xl"
          alignItems="center"
          minHeight={height}
          justifyContent="space-between"
        >
          <Box>
            {step.imageURL && (
              <Box
                width={width - ms(16)}
                height={ms(300)}
                borderRadius="m"
                overflow="hidden"
                mt="xl"
              >
                <Image source={step.imageURL} contentFit="fill" flex={1} width="100%" />
              </Box>
            )}
            <Badge label={isLastStep ? 'Final Result' : `Step ${index + 1}`} mt="2xl" mb="m" />
            <RenderHtml
              source={{
                html: wrapTextWithParagraph(stripHtmlTags(step.text)),
              }}
              contentWidth={width}
              tagsStyles={{
                p: {
                  ...textVariants.hmd,
                  fontWeight: '700',
                },
              }}
            />
          </Box>
          {isLastStep && (
            <Button
              label="I'm finished"
              onPress={() => {
                refPagerView.current?.setPage(0)
                Alert.alert('DIY', 'DIY completion will be implemented soon')
              }}
            />
          )}
        </Box>
      </ScrollView>
    </TicTacToeLayout>
  )
}
