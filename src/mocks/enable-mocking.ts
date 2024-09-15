import './polyfills'
import { server } from './server'

export async function enableMocking() {
  if (!__DEV__) {
    return
  }

  server.listen({ onUnhandledRequest: 'bypass' })
}
