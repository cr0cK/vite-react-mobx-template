import type { UserEntity } from '@/src/entities/UserEntity'
import { ViewResult } from '@/src/libs/ViewResult'
import { ObservableEither } from '@/src/libs/mobx/ObservableEither'
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
}
