import { useRef, useState, useMemo } from 'react'
import PagerView from 'react-native-pager-view'

import { IntroPagerView } from '../PagerViews/IntroPagerView'
import { MaterialPagerView } from '../PagerViews/MaterialPagerView'
import { StepPagerView } from '../PagerViews/StepPagerView'
import { TutorialPagerView } from '../PagerViews/TutorialPagerView'

import { Diy } from '~/api/generated/apiSchemas'

export const useDIYPagerView = ({ data }: { data?: Diy }) => {
  const [page, setPage] = useState(0)
  const refPagerView = useRef<PagerView>(null)
  const imageUrl = data?.images[0].url

  const stepPagerViews = useMemo(() => {
    return data?.instructionSteps
      .filter((step) => step.type === 'STEP')
      ?.map((step, index, array) => {
        const isLastStep = index === array.length - 1

        return (
          <StepPagerView
            key={index}
            step={step}
            isLastStep={isLastStep}
            refPagerView={refPagerView}
            index={index}
          />
        )
      })
  }, [data?.instructionSteps, refPagerView])

  const pagerViews = useMemo(
    () => [
      <IntroPagerView key="intro" data={data} imageUrl={imageUrl} />,
      <MaterialPagerView key="material" materials={data?.materials} />,
      <TutorialPagerView
        key="tutorial"
        imageUrl={imageUrl}
        refPagerView={refPagerView}
        page={page}
      />,
      ...(stepPagerViews ?? []),
    ],
    [data, imageUrl, refPagerView, page, stepPagerViews],
  )

  return { page, setPage, pagerViews, refPagerView }
}
