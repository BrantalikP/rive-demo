import { router } from 'expo-router'
import React from 'react'

import { ArrowLeft } from './parts/ArrowLeft'

import { Button } from '~/features/ui/components/Button'

export const BackButton = () => {
  return <Button variant="backButton" label={<ArrowLeft />} onPress={router.back} />
}
