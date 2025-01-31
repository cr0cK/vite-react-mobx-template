import type { UserEntity } from '@/src/entities/UserEntity'
import { UIResult } from '@/src/libs/UIResult'
import { ensureArray } from '@/src/libs/helpers/ensureArray'
import { ObservableEither } from '@/src/libs/mobx/ObservableEither'
import { action, computed, makeAutoObservable, observable } from 'mobx'

/**
 * Store in charge of users management.
 */
export class StoreUsersManagement {
  private _usersData = ObservableEither.create(() => [
    observable.box(new UIResult()),
    observable.array<UserEntity>()
  ])

  constructor() {
    makeAutoObservable(this)
  }

  @action
  setUsers(users: UserEntity[]): this {
    this._usersData.updateRight(arr => arr.replace(users))
    return this
  }

  @computed
  get users(): UserEntity[] {
    return ensureArray(this._usersData.right)
  }
}
