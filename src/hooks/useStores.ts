import ContextStores from '@/src/contextes/ContextStores'
import type { Stores } from '@/src/stores/types'
import { isSome } from 'fp-ts/lib/Option'
import { useContext } from 'react'

/**
 * Retrieve stores from a React context.
 */
export function useStores(): Stores {
  const stores = useContext(ContextStores)

  if (!isSome(stores)) {
    throw new Error('Stores are not available in ContextStores context')
  }

  return stores.value.stores
}
