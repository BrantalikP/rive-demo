import { Redirect, useLocalSearchParams } from 'expo-router'

import { Build } from './components/Build'
import { DIY } from './components/DIY'
import { Header } from './components/Header'
import { HeaderSection } from './components/HeaderSection'
import { MarkComplete } from './components/MarkComplete'
import { ScreenStack } from './components/ScreenStack'
import { Tag } from './components/Tag'
import { TAGS_MOCKS } from './mocks/tags'

import { AnimatedBox, Box } from '~/features/ui/components/Box'
import { ScrollView } from '~/features/ui/components/ScrollView'
import { Text } from '~/features/ui/components/Text'
import { UnderlineButton } from '~/features/ui/components/UnderlineButton'
import { useTheme } from '~/features/ui/theme/useTheme'
import { validateCrateOrderId } from '~/utils/validations'

export const CrateDetail = () => {
  const { colors, spacing } = useTheme()
  const { crateOrderId } = useLocalSearchParams()
  const validatedCrateOrder = validateCrateOrderId({ crateOrderId })

  if (!validatedCrateOrder.success) {
    return <Redirect href="/crates-overview" />
  }

  return (
    <>
      <ScreenStack />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: spacing['4xl'],
          backgroundColor: colors.primaryBackground,
        }}
      >
        <Header />
        <AnimatedBox flex={1} justifyContent="center">
          <HeaderSection image={require('./mocks/assets/header.png')} title="Combination Vault">
            <Box flexDirection="row" gap="s" mt="xl">
              {TAGS_MOCKS.map(({ id, label, Icon }, index) => (
                <Tag key={id} label={label} icon={<Icon />} />
              ))}
            </Box>
            <Text px="m" mt="m" textAlign="center">
              Learn about engineering and design behind the combination vault.
            </Text>
            {/*/ / TODO: Implement Text extension */}
            <UnderlineButton mt="m" onPress={() => {}} label="Read more" />
          </HeaderSection>
          <Build />
          <MarkComplete crateOrderId={validatedCrateOrder.data.crateOrderId} />
          <DIY />
        </AnimatedBox>
      </ScrollView>
    </>
  )
}
