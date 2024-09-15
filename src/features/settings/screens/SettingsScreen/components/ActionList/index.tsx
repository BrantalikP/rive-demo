import { ActionButton } from './parts/ActionButton'

import { ActionProps } from '~/features/settings/screens/SettingsScreen/components/ActionList/types'
import { Box } from '~/features/ui/components/Box'
import { ms } from '~/utils/scale'

interface IActionList {
  actions: ActionProps[]
}

export const ActionList = ({ actions }: IActionList) => {
  return (
    <Box
      borderRadius="m"
      borderColor="beigeDarker"
      mt="sm"
      width="100%"
      backgroundColor="white"
      borderWidth={ms(2)}
      justifyContent="space-between"
      px="ml"
      py="2xs"
    >
      {actions.map(({ Icon, label, action }, index) => (
        <ActionButton label={label} key={`${label}-${index}`} icon={<Icon />} action={action} />
      ))}
    </Box>
  )
}
