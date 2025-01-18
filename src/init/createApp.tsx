import ContextStores from '@/src/contextes/ContextStores'
import { StoreRoot } from '@/src/stores/storeRoot'
import { some } from 'fp-ts/lib/Option'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

/**
 * Create and render the app.
 */
export function createApp() {
  const rootContainer = document.getElementById('root')

  if (!rootContainer) {
    throw new Error('Root node container not found')
  }

  // instanciate the root store (and all top-level stores)
  const someStoreRoot = some(new StoreRoot())

  createRoot(rootContainer).render(
    <StrictMode>
      <ContextStores.Provider value={someStoreRoot}>
        <App />
      </ContextStores.Provider>
    </StrictMode>
  )
}
