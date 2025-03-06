import type { Maybe } from '@/libs/helpers/types'
import { useRenderQueryContext } from '../RenderQuery/useRenderQueryContext'

/**
 * Props for a component that renders query states and data.
 */
export interface IRenderMutationProps<TData, TError extends Maybe<Error>> {
  /**
   * The result object from a `useQuery` hook.
   * Contains flags for loading and error states, as well as the data and error values.
   */
  mutationResult: {
    isError: boolean
    data: TData
    error: TError
  }
  /**
   * Optional function to render a custom error UI.
   * Invoked when the query encounters an error.
   */
  renderError?: (err: TError) => React.ReactNode
  /**
   * Function-as-a-child for rendering the query data.
   * This function receives the non-null data and should return the UI for the successful state.
   */
  children: (data: TData) => React.ReactNode
}

/**
 * A component that conditionally renders content based on a query's state.
 *
 * This component displays one of three UI states:
 * - Loading: When the query is still fetching data.
 * - Error: When the query has encountered an error.
 * - Data: When the query has successfully returned data.
 */
export function RenderMutation<TData, TError extends Maybe<Error>>(
  props: IRenderMutationProps<TData, TError>
) {
  const renderContainerContextValue = useRenderQueryContext()

  function renderError() {
    if (!props.mutationResult.error) {
      return null
    }

    if (props.renderError) {
      return props.renderError(props.mutationResult.error)
    }

    if (renderContainerContextValue?.renderError) {
      return renderContainerContextValue.renderError(props.mutationResult.error)
    }

    return <div>An error has occurred.</div>
  }

  function renderData() {
    // if (!props.mutationResult.data) {
    //   return null
    // }

    return props.children(props.mutationResult.data)
  }

  if (props.mutationResult.isError) {
    return renderError()
  }

  return renderData()
}
