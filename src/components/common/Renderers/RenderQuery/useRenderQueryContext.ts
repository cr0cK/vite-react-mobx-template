import type { Maybe } from '@/libs/helpers/types'
import { useContext } from 'react'
import ContextRenderQuery, {
  type IContextRenderQueryParameters
} from './RenderQueryContext'

/**
 * Retrieve stores from a React context.
 */
export function useRenderQueryContext(): Maybe<IContextRenderQueryParameters> {
  return useContext(ContextRenderQuery)
}
