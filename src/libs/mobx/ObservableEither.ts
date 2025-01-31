import { action, computed, makeObservable } from 'mobx'
import { isDefined } from '../helpers/isDefined'
import type { Maybe } from '../helpers/types'

interface IEither<TLeft, TRight> {
  left: TLeft
  right: TRight
}

type EitherPosition = 'left' | 'right'

export class ObservableEither<TLeft, TRight> {
  private _creator?: () => [TLeft, TRight]

  private _either: IEither<TLeft, TRight>

  private _position: EitherPosition = 'right'

  private _debugLogger?: (...messages: any[]) => void

  private constructor(creator: () => [TLeft, TRight]) {
    const [left, right] = creator()

    this._either = { left, right }
    this._creator = creator

    makeObservable(this)
  }

  /**
   * Allow to debug the observable either assignations.
   */
  setDebugLogger(logger?: (message: string) => void): this {
    this._debugLogger = logger

    return this
  }

  /**
   * Actions
   */

  /**
   * Set right value.
   */
  @action
  setRight(right: TRight) {
    this._either.right = right
    this._position = 'right'

    if (this._debugLogger) {
      this._debugLogger('setRight', right)
    }

    return this
  }

  /**
   * Update right value for mutable observables.
   */
  @action
  updateRight(fn: (right: TRight) => void) {
    if (!isDefined(this._either.right)) {
      return this
    }

    fn(this._either.right)
    this._position = 'right'

    if (this._debugLogger) {
      this._debugLogger('updateRight')
    }

    return this
  }

  /**
   * Set left value.
   */
  @action
  setLeft(left: TLeft) {
    this._either.left = left
    this._position = 'left'

    if (this._debugLogger) {
      this._debugLogger('setLeft', left)
    }

    return this
  }

  /**
   * Update left value for mutable observables.
   */
  @action
  updateLeft(fn: (left: TLeft) => void) {
    if (!isDefined(this._either.left)) {
      return this
    }

    fn(this._either.left)
    this._position = 'left'

    if (this._debugLogger) {
      this._debugLogger('updateLeft')
    }

    return this
  }

  /**
   * For some reasons, you may be interesting to toggle to left or right,
   * as values are not overridden when during updates.
   */
  @action
  setPosition(position: EitherPosition) {
    this._position = position
    return this
  }

  /**
   * Reinitialize left and right values from the creator function.
   */
  @action
  reset() {
    if (this._creator) {
      const [left, right] = this._creator()
      this._either = { left, right }
      this._position = 'right'
    }
  }

  /**
   * Computed
   */

  /**
   * Return the either object
   */
  @computed
  get either(): IEither<TLeft, TRight> {
    return this._either
  }

  /**
   * Return right value.
   * If position is "left", return null.
   */
  @computed
  get right() {
    if (this._debugLogger) {
      this._debugLogger('computeRight')
    }

    if (this._position === 'left') {
      return null
    }

    return this._either.right
  }

  /**
   * Return left value.
   * If position is "right", return null.
   */
  @computed
  get left() {
    if (this._debugLogger) {
      this._debugLogger('computeLeft')
    }

    if (this._position === 'right') {
      return null
    }

    return this._either.left
  }

  /**
   * Return booleans according to the position.
   */
  @computed
  get isLeft(): boolean {
    return this._position === 'left'
  }

  @computed
  get isRight(): boolean {
    return this._position === 'right'
  }

  /**
   * Return left, right values tuple.
   */
  @computed
  get unwrapedEither() {
    return [this.left, this.right] as [Maybe<TLeft>, Maybe<TRight>]
  }

  /**
   * Create a new new observable either.
   */
  static create<TLeft, TRight>(
    creator: () => [TLeft, TRight]
  ): ObservableEither<TLeft, TRight> {
    return new ObservableEither(creator)
  }
}
