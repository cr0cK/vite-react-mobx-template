import type { Maybe } from '@/libs/helpers/types'
import { useRenderQueryContext } from './useRenderQueryContext'

/**
 * Props for a component that renders query states and data.
 */
export interface IRenderQueryProps<TData, TError extends Maybe<Error>> {
  /**
   * The result object from a `useQuery` hook.
   * Contains flags for loading and error states, as well as the data and error values.
   */
  queryResult: {
    isLoading: boolean
    isError: boolean
    data: TData
    error: TError
  }
  /**
   * Optional function to render a custom loading UI.
   * Invoked when the query is in a loading state.
   */
  renderLoading?: () => React.ReactNode
  /**
   * Optional function to render a custom error UI.
   * Invoked when the query encounters an error.
   */
  renderError?: (err: TError) => React.ReactNode
  /**
   * Function-as-a-child for rendering the query data.
   * This function receives the non-null data and should return the UI for the successful state.
   */
  children: (data: NonNullable<TData>) => React.ReactNode
}

/**
 * A component that conditionally renders content based on a query's state.
 *
 * This component displays one of three UI states:
 * - Loading: When the query is still fetching data.
 * - Error: When the query has encountered an error.
 * - Data: When the query has successfully returned data.
 */
export default function RenderQuery<TData, TError extends Maybe<Error>>(
  props: IRenderQueryProps<TData, TError>
) {
  const renderContainerContextValue = useRenderQueryContext()

  function renderLoading() {
    if (!props.queryResult.isLoading) {
      return null
    }

    if (props.renderLoading) {
      return props.renderLoading()
    }

    if (renderContainerContextValue?.renderLoading) {
      return renderContainerContextValue?.renderLoading()
    }

    return <div>Loading...</div>
  }

  function renderError() {
    if (!props.queryResult.error) {
      return null
    }

    if (props.renderError) {
      return props.renderError(props.queryResult.error)
    }

    if (renderContainerContextValue?.renderError) {
      return renderContainerContextValue.renderError(props.queryResult.error)
    }

    return <div>An error has occurred.</div>
  }

  function renderData() {
    if (!props.queryResult.data) {
      return null
    }

    return props.children(props.queryResult.data)
  }

  if (props.queryResult.isLoading) {
    return renderLoading()
  }

  if (props.queryResult.isError) {
    return renderError()
  }

  return renderData()
}
