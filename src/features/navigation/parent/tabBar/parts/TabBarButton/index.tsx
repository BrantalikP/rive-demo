import { ElementType, useMemo } from 'react'

import { useTabButton } from './hooks/useTabButton'
import { CogIcon } from '../CogIcon'
import { HomeIcon } from '../HomeIcon'
import { ProfilesIcon } from '../ProfilesIcon'
import { IconProps, ITabBarButton } from '../types'

import { Pressable } from '~/features/ui/components/Pressable'
import { ThemeColorKeys } from '~/features/ui/theme/types'

const icon: {
  [key: string]: ElementType<IconProps>
} = {
  index: HomeIcon,
  settings: CogIcon,
  profiles: ProfilesIcon,
}

export const TabBarButton = ({ route, isFocused, navigation, ...restProps }: ITabBarButton) => {
  const { onPress, onLongPress, strokeColor, animatedProps } = useTabButton({
    navigation,
    route,
    isFocused,
  })

  const NavIcon = useMemo(() => icon[route.name], [route.name])

  return (
    <Pressable hitSlop={25} onPress={onPress} onLongPress={onLongPress} {...restProps}>
      <NavIcon strokeColor={strokeColor as ThemeColorKeys} animatedProps={animatedProps} />
    </Pressable>
  )
}
