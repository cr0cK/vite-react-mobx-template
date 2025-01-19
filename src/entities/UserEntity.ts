import { isDefined } from '../libs/helpers/isDefined'
import type { UserEntityRaw } from '../schemas/User'

/**
 * Extends UserEntityRaw.
 */
export class UserEntity {
  private _userEntityRaw: UserEntityRaw

  constructor(userEntityRaw: UserEntityRaw) {
    this._userEntityRaw = userEntityRaw
  }

  get raw() {
    return this._userEntityRaw
  }

  /**
   * Return the full name of the user.
   */
  get fullName(): string {
    return [this._userEntityRaw.firstName, this._userEntityRaw.lastName]
      .filter(isDefined)
      .join(' ')
  }
}
