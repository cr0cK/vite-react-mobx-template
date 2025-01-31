/**
 * Represents the result of an operation intended for the UI.
 *
 * This class encapsulates optional data, a message, and an error, allowing
 * the UI to display relevant information based on the operation's outcome.
 *
 * @template TData The type of the data contained in the result.
 */
export class UIResult<TData> {
  /**
   * Creates a new UIResult instance.
   *
   * @param message An optional message describing the context of the result.
   * @param data Optional data associated with the result.
   * @param err An optional error if the operation resulted in a failure.
   */
  constructor(
    public message?: string,
    public data?: TData,
    public err?: Error
  ) {}
}
