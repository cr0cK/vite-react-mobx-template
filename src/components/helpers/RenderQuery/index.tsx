import type { Maybe } from '@/src/libs/helpers/types'
import { useRenderQueryContext } from './useRenderQueryContext'

export interface IRenderQueryProps<TData, TError extends Maybe<Error>> {
  isLoading: boolean
  isError: boolean
  data: TData
  error: TError
  renderLoading?: () => React.ReactNode
  renderError?: (err: TError) => React.ReactNode
  renderData: (data: NonNullable<TData>) => React.ReactNode
}

export default function RenderQuery<TData, TError extends Maybe<Error>>(
  props: IRenderQueryProps<TData, TError>
) {
  const renderContainerContextValue = useRenderQueryContext()

  function renderLoading() {
    if (!props.isLoading) {
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
    if (!props.error) {
      return null
    }

    if (props.renderError) {
      return props.renderError(props.error)
    }

    if (renderContainerContextValue?.renderError) {
      return renderContainerContextValue.renderError(props.error)
    }

    return <div>An error has occurred.</div>
  }

  function renderData() {
    if (!props.data) {
      return null
    }

    return props.renderData(props.data)
  }

  if (props.isLoading) {
    return renderLoading()
  }

  if (props.isError) {
    return renderError()
  }

  return renderData()
}
