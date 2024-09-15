import { PropsWithChildren } from 'react'
import { Dimensions } from 'react-native'

import { Tile } from './parts/Tile'
import { TILE_SIZE } from './presets'

import { Box } from '~/features/ui/components/Box'

interface ITicTacToeLayout extends PropsWithChildren {
  tileSize?: number
}

export const TicTacToeLayout = ({ children, tileSize = TILE_SIZE }: ITicTacToeLayout) => {
  const { width, height } = Dimensions.get('window')
  const numColumns = Math.ceil(width / tileSize)
  const numRows = Math.ceil(height / tileSize)

  // TODO: let's move to a separate hook if the logic requires
  const renderTiles = () => {
    const rows = []
    for (let i = 0; i < numRows; i++) {
      const rowTiles = []
      for (let j = 0; j < numColumns; j++) {
        rowTiles.push(
          <Tile
            tileSize={tileSize}
            key={`tile-${j}-${i}`}
            onPress={() => console.log(`tile-x${j}-y${i}`)}
          />,
        )
      }
      rows.push(
        <Box key={`row-${i}`} flexDirection="row">
          {rowTiles}
        </Box>,
      )
    }
    return rows
  }

  return (
    <Box flex={1} backgroundColor="primaryBackground">
      <Box position="absolute" zIndex={-1} width={width} height={height}>
        {renderTiles()}
      </Box>
      {children}
    </Box>
  )
}
