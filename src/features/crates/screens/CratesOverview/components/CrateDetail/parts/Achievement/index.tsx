import { CheckIcon } from '~/features/crates/screens/CratesOverview/components/CrateDetail/parts/CheckIcon'
import { CompleteIcon } from '~/features/crates/screens/CratesOverview/components/CrateDetail/parts/CompleteIcon'
import { CrateIcon } from '~/features/crates/screens/CratesOverview/components/CrateDetail/parts/CrateIcon'
import { PlayIcon } from '~/features/crates/screens/CratesOverview/components/CrateDetail/parts/PlayIcon'
import { WrenchIcon } from '~/features/crates/screens/CratesOverview/components/CrateDetail/parts/WrenchIcon'
import { Box } from '~/features/ui/components/Box'

interface IAchievement {
  name: 'wrench' | 'complete' | 'play' | 'crate'
  isCompleted?: boolean
}

const icons = {
  wrench: WrenchIcon,
  complete: CompleteIcon,
  play: PlayIcon,
  crate: CrateIcon,
}

export const Achievement = ({ name, isCompleted = false }: IAchievement) => {
  const Icon = icons[name]
  return (
    <Box>
      <Icon isCompleted={isCompleted} />
      {isCompleted && <CheckIcon />}
    </Box>
  )
}
