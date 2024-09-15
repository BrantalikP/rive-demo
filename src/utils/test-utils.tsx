import { ThemeProvider } from '@shopify/restyle'
import { QueryClientProvider } from '@tanstack/react-query'
import { RenderOptions, render } from '@testing-library/react-native'
import { JSXElementConstructor, PropsWithChildren, ReactElement } from 'react'

import { generateQueryClient } from '~/api/query-client'
// We need to import the theme from the theme file directly
import { theme } from '~/features/ui/theme/theme'

const generateTestQueryClient = () => {
  const client = generateQueryClient()
  const options = client.getDefaultOptions()
  options.queries = {
    ...options.queries,
    retry: false,
  }
  return client
}

const AllTheProviders = ({ children }: PropsWithChildren) => {
  const queryClient = generateTestQueryClient()
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement<unknown, string | JSXElementConstructor<any>>,
  options?: RenderOptions,
) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
