import { Tile } from '../Tile'

import { BUILDS_MOCKS } from '~/features/crates/screens/CrateDetail/mocks/build'
import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'

export const BuildList = () => {
  return (
    <Box mt="m" px="xl" alignItems="center" backgroundColor="white">
      <Text variant="hsm">Learn more about the build</Text>
      <Box
        pt="m"
        width="100%"
        alignItems="center"
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="space-between"
        pb="3xl"
      >
        {BUILDS_MOCKS.map(({ title, image, id, isVideo }) => (
          <Tile id={id} title={title} image={image} key={id} isVideo={isVideo} />
        ))}
      </Box>
    </Box>
  )
}
