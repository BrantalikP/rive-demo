import { http, HttpResponse } from 'msw'

import { auth } from './data/auth'
import { me } from './data/me'

import { env } from '~/config'

const baseUrl = env.API_URL

export const handlers = [
  http.get(`${baseUrl}/me`, () => {
    return HttpResponse.json(me)
  }),
  http.post(`${baseUrl}/auth`, () => {
    return HttpResponse.json(auth)
  }),
]
