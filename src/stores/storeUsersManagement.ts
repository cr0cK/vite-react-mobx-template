import type { UserEntity } from '@/src/schemas/User'
import { action, computed, makeAutoObservable, observable } from 'mobx'

/**
 * Store in charge of users management.
 */
export class StoreUsersManagement {
  private _users = observable.array<UserEntity>()

  constructor() {
    makeAutoObservable(this)
  }

  @action
  setUsers(users: UserEntity[]): this {
    this._users.replace(users)
    return this
  }

  @computed
  get users(): UserEntity[] {
    return this._users
  }
}
