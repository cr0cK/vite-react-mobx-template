import type { StoreAuthentication } from './StoreAuthentication'
import type { StoreRoot } from './StoreRoot'
import type { StoreUsersManagement } from './StoreUsersManagement'

/**
 * Top-level stores, exposed by storeRoot.stores.
 */
export type Stores = {
  storeRoot: StoreRoot
  storeAuthentication: StoreAuthentication
  storeUsersManagement: StoreUsersManagement
}
