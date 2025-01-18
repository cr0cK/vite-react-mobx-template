import ContextStores from '@/src/contextes/ContextStores'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { some } from 'fp-ts/lib/Option'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StoreRoot } from '../stores/StoreRoot'
import { createEnvironment } from '../stores/StoreRoot/Environment'
import App from './App'

/**
 * Create and render the app.
 */
export function createApp() {
  const rootContainer = document.getElementById('root')

  if (!rootContainer) {
    throw new Error('Root node container not found')
  }

  // create the browser environment
  const environment = createEnvironment()

  // instanciate the root store (and all top-level stores)
  const storeRoot = new StoreRoot(environment)

  createRoot(rootContainer).render(
    <StrictMode>
      <ContextStores.Provider value={some(storeRoot)}>
        <QueryClientProvider client={storeRoot.environment.queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ContextStores.Provider>
    </StrictMode>
  )
}
