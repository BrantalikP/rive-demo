import { useAssets } from 'expo-asset'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import Rive, { Fit } from 'rive-react-native'

interface ITimeLine {
  id: string
}

export const TimeLine = ({ id }: ITimeLine) => {
  const [assets, error] = useAssets([require('../../assets/timeline.riv')])
  const animationUrl = assets?.[0].localUri
  const { width } = useWindowDimensions()

  if (!animationUrl) return null
  return (
    <Rive
      fit={Fit.FitWidth}
      url={animationUrl}
      autoplay
      stateMachineName={id}
      style={{ flex: 1, width, alignSelf: 'center' }}
    />
  )
}
