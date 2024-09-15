import { Subscription } from '~/api/generated/apiSchemas'

export const crateOrder = (section: Subscription, sectionList: Subscription[]) => {
  return getIndex(section, sectionList) === 0
}

export const getIndex = (section: Subscription, sectionList: Subscription[]) => {
  return sectionList.findIndex((s) => s.subscriptionId === section.subscriptionId)
}
