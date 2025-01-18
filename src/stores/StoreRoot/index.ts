import type { Environment } from '@/src/environment/createEnvironment'
import { type Option, isSome, none, some } from 'fp-ts/lib/Option'
import { StoreUsersManagement } from '../StoreUsersManagement'
import type { Stores } from '../types'

/**
 * Root store instanciating all top-level stores.
 */
export class StoreRoot {
  private _environment: Environment
  private _stores: Option<Stores> = none

  constructor(environment: Environment) {
    this._environment = environment
    this._instanciateStores()
  }

  /**
   * Expose the environement.
   */
  get environment() {
    return this._environment
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

  /** Private */

  /**
   * Instanciate all top-level stores.
   */
  private _instanciateStores() {
    this._stores = some({
      storeRoot: this,
      storeUsersManagement: new StoreUsersManagement()
    })
  }
}
