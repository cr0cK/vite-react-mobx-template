import type { Maybe } from '../helpers/types'

/**
 * Represents the result of an operation intended for the UI.
 *
 * This class encapsulates optional data, a message, and an error, allowing
 * the UI to display relevant information based on the operation's outcome.
 */
export class AppError<TData = any> {
  private _message: string
  private _data: Maybe<TData>
  private _err: Maybe<Error>

  /**
   * Creates a new AppError instance.
   *
   * @param message An optional message describing the context of the result.
   * @param data Optional data associated with the result.
   * @param err An optional error if the operation resulted in a failure.
   */
  constructor(message?: string, parameters?: { data?: TData; err?: Error }) {
    this._message = message ?? 'An error has occurred. Please try again.'
    this._data = parameters?.data ?? null
    this._err = parameters?.err ?? null
  }

  get message() {
    return this._message
  }

  get data() {
    return this._data
  }

  get err() {
    return this._err
  }
}
