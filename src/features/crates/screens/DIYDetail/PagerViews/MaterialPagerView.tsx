import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { MARGIN_TOP } from './presets'

import { DiyMaterial } from '~/api/generated/apiSchemas'
import { Box } from '~/features/ui/components/Box'
import { Checkbox } from '~/features/ui/components/Checkbox'
import { ColorizedTitle } from '~/features/ui/components/ColorizedTitle'
import { DotsDivider } from '~/features/ui/components/DotsDivider'
import { ScrollView } from '~/features/ui/components/ScrollView'

export const MaterialPagerView = ({ materials }: { materials?: DiyMaterial[] }) => {
  const insets = useSafeAreaInsets()

  return (
    <ScrollView>
      <Box
        style={{
          paddingTop: insets.top + MARGIN_TOP,
          paddingBottom: insets.bottom,
        }}
        paddingHorizontal="xl"
      >
        <Box alignItems="center" justifyContent="center">
          <ColorizedTitle mt="l">Materials</ColorizedTitle>
        </Box>
        <Box mt="xl" gap="2sm">
          {materials?.map((material, i, array) => {
            const isLast = i === array.length - 1
            return (
              <React.Fragment key={material.title}>
                <Checkbox label={material.title} />
                {!isLast && <DotsDivider paddingLeft="3xl" />}
              </React.Fragment>
            )
          })}
        </Box>
      </Box>
    </ScrollView>
  )
}
