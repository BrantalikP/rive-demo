import { BuildList } from './parts/BuildList'

import { Player } from '~/features/crates/screens/CrateDetail/components/Player'
import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'

export const Build = () => {
  return (
    <Box pt="3xl" alignItems="center" backgroundColor="secondaryBackground">
      <Text variant="hmd">Build the Combination Vault</Text>
      <Player />
      <BuildList />
    </Box>
  )
}
