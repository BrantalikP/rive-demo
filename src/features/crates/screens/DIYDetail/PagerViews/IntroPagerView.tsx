import React from 'react'
import { useWindowDimensions } from 'react-native'

import { HeaderSection } from '../../CrateDetail/components/HeaderSection'
import { DIYIllustration } from '../components/DIYIllustration'
import { Brush } from '../components/illustrations/Brush'
import { Kid } from '../components/illustrations/Kid'
import { Time } from '../components/illustrations/Time'
import { stripHtmlTags, wrapTextWithParagraph } from '../utils'

import { Diy } from '~/api/generated/apiSchemas'
import { Box } from '~/features/ui/components/Box'
import { DotsDivider } from '~/features/ui/components/DotsDivider'
import { RenderHtml } from '~/features/ui/components/RenderHtml'
import { ScrollView } from '~/features/ui/components/ScrollView'

export const IntroPagerView = ({ data, imageUrl }: { data?: Diy; imageUrl?: string }) => {
  const ageRange = [data?.minAge, data?.maxAge].join(' - ')
  const { width } = useWindowDimensions()

  return (
    <ScrollView>
      <HeaderSection image={imageUrl ?? ''} title={data?.title ?? ''} hasBottomBorder={false}>
        <Box paddingHorizontal="xl">
          <Box flexDirection="row" mt="m" gap="m" justifyContent="center">
            <DIYIllustration icon={<Kid />} label={`Ages ${ageRange}`} />
            <DIYIllustration icon={<Time />} label={data?.minutesToComplete} />
            <DIYIllustration icon={<Brush />} label={data?.messiness} />
          </Box>
          <DotsDivider mt="xl" />
          <RenderHtml
            source={{
              html: wrapTextWithParagraph(stripHtmlTags(data?.descriptionHTML ?? '')),
            }}
            contentWidth={width}
          />
        </Box>
      </HeaderSection>
    </ScrollView>
  )
}
