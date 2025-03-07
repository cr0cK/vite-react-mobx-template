import type { UserEntity } from '@/entities/UserEntity'
import { AppError } from '@/libs/AppError'
import { ObservableEither } from '@/libs/mobx/ObservableEither'
import { makeAutoObservable, observable } from 'mobx'
import type { StoreRoot } from '../StoreRoot'

/**
 * Store in charge of users management.
 */
export class StoreUsersManagement {
  public $users = ObservableEither.create(() => [
    observable.box(new AppError()),
    observable.array<UserEntity>()
  ])

  constructor(public storeRoot: StoreRoot) {
    makeAutoObservable(this)
  }

  // @computed
  // get userEntities(): UserEntity[] {
  //   return ensureArray(this.$users.right).map(user => new UserEntity(user))
  // }
}
