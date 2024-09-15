import { Slot } from 'expo-router'
import React from 'react'

import { Provider } from '~/provider'

const RootStack = () => {
  return <Slot />
}

export default function Root() {
  return (
    <Provider>
      <RootStack />
    </Provider>
  )
}
