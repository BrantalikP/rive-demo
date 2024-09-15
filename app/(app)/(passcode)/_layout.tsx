import { Stack } from 'expo-router'

import { Header } from '~/features/passcode/navigation/Header'
import { useNavigationStyles } from '~/features/passcode/navigation/styles'

const PasscodeLayout = () => {
  const { styles } = useNavigationStyles()
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: '',
        header: (props) => <Header {...props} />,
        contentStyle: styles.contentStyle,
      }}
    />
  )
}

export default PasscodeLayout
