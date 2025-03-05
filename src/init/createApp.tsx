import ContextStores from '@/contextes/ContextStores'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from '@tanstack/react-router'
import { some } from 'fp-ts/lib/Option'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createEnvironment } from '../environment/createEnvironment'
import { StoreRoot } from '../stores/StoreRoot'
import RouterDevtools from './RouterDevtools'
import { router } from './router'

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

  // save storeRoot instance on window for easier debugging
  window.STORE_ROOT = storeRoot

  createRoot(rootContainer).render(
    <StrictMode>
      <ContextStores.Provider value={some(storeRoot)}>
        <QueryClientProvider client={storeRoot.environment.queryClient}>
          <RouterProvider router={router} />

          <ReactQueryDevtools initialIsOpen={false} />

          <RouterDevtools
            production={environment.config.production}
            appRouter={router}
          />
        </QueryClientProvider>
      </ContextStores.Provider>
    </StrictMode>
  )
}
