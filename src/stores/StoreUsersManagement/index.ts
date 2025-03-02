import type { UserEntity } from '@/entities/UserEntity'
import { ViewResult } from '@/libs/ViewResult'
import { ObservableEither } from '@/libs/mobx/ObservableEither'
import { makeAutoObservable, observable } from 'mobx'

/**
 * Store in charge of users management.
 */
export class StoreUsersManagement {
  public $users = ObservableEither.create(() => [
    observable.box(new ViewResult()),
    observable.array<UserEntity>()
  ])

  constructor() {
    makeAutoObservable(this)
  }

  // @computed
  // get userEntities(): UserEntity[] {
  //   return ensureArray(this.$users.right).map(user => new UserEntity(user))
  // }
}
