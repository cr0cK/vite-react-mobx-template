import { type Option, isSome, none, some } from 'fp-ts/lib/Option'
import { StoreUsersManagement } from './storeUsersManagement'
import type { Stores } from './types'

/**
 * Root store instanciating all top-level stores.
 */
export class StoreRoot {
  private _stores: Option<Stores> = none

  constructor() {
    this._instanciateStores()
  }

  /**
   * Instanciate all top-level stores.
   */
  _instanciateStores() {
    this._stores = some({
      storeRoot: this,
      storeUsersManagement: new StoreUsersManagement()
    })
  }

  /**
   * Return top-level stores.
   */
  get stores(): Stores {
    if (!isSome(this._stores)) {
      throw new Error('Stores has not been instanciated')
    }

    return this._stores.value
  }
}
