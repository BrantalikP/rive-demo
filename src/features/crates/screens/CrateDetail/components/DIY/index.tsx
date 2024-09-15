import { Tile } from './parts/Tile'
import { Title } from './parts/Title'

import { DIY_MOCKS } from '~/features/crates/screens/CrateDetail/mocks/diy'
import { Box } from '~/features/ui/components/Box'

export const DIY = () => {
  return (
    <Box
      px="xl"
      alignItems="center"
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="space-between"
      mt="3xl"
    >
      <Title />
      {DIY_MOCKS.map(({ title, image, id }) => (
        <Tile id={id} title={title} image={image} key={id} />
      ))}
    </Box>
  )
}
