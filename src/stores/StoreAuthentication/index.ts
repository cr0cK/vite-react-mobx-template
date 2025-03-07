import { UserEntity } from '@/entities/UserEntity'
import { isDefined } from '@/libs/helpers/isDefined'
import type { Maybe } from '@/libs/helpers/types'
import { mockedBackend } from '@/mocks/mockedBackend'
import { computed, makeAutoObservable, observable } from 'mobx'
import type { StoreRoot } from '../StoreRoot'
import StoreFlags from '../common/StoreFlags'

const LOCALSTORAGE_KEY = {
  authUser: 'template-vite-mobx-reactquery:authedUser'
}

/**
 * Store in charge of users' authentication.
 */
export class StoreAuthentication {
  public $authedUser = observable.box<Maybe<UserEntity>>(null)

  public storeFlags: StoreFlags

  constructor(public storeRoot: StoreRoot) {
    this.storeFlags = new StoreFlags(this.storeRoot)

    this.initAuthUserFromLocalStorage()

    makeAutoObservable(this)
  }

  /**
   * Initialize the user from the local storage.
   */
  initAuthUserFromLocalStorage() {
    const authUserEmail = localStorage.getItem(LOCALSTORAGE_KEY.authUser)

    if (!authUserEmail) {
      return
    }

    mockedBackend()
      .getAuthenticatedUser({ email: authUserEmail })
      .then(user => {
        this.setAuthUser(user ? new UserEntity(user) : null)
      })
      .catch(err => {
        // Ignore, the error will be shown in the UI.
      })
  }

  /**
   * Save the authed user.
   */
  setAuthUser(user: Maybe<UserEntity>): this {
    this.$authedUser.set(user)

    // persist in local storage for demo
    if (user) {
      localStorage.setItem(LOCALSTORAGE_KEY.authUser, user.raw.email)
    } else {
      localStorage.removeItem(LOCALSTORAGE_KEY.authUser)
    }

    return this
  }

  /**
   * Remove authed user.
   */
  logout() {
    this.setAuthUser(null)
  }

  /** Computed */

  @computed
  get isAuthenticated(): boolean {
    return isDefined(this.authedUser)
  }

  @computed
  get authedUser(): Maybe<UserEntity> {
    return this.$authedUser.get() ?? null
  }
}
