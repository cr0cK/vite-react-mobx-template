import type { Maybe } from '@/libs/helpers/types'
import React from 'react'

export interface IContextRenderQueryParameters {
  renderLoading?: () => React.ReactNode
  renderError?: (err: Error) => React.ReactNode
}

const ContextRenderQuery =
  React.createContext<Maybe<IContextRenderQueryParameters>>(null)

export default ContextRenderQuery
