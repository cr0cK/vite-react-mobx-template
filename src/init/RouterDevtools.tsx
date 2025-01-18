import * as React from 'react'
import { Suspense } from 'react'
import type { AppRouter } from './router'

export interface IRouterDevtoolsProps {
  production: boolean
  appRouter: AppRouter
}

// Lazy load TanStack Router Devtools only in development
const TanStackRouterDevtools = React.lazy(() =>
  import('@tanstack/router-devtools').then(module => ({
    default: module.TanStackRouterDevtools
    // For Embedded Mode
    // default: module.TanStackRouterDevtoolsPanel,
  }))
)

export default function RouterDevtools(props: IRouterDevtoolsProps) {
  if (props.production) {
    return null
  }

  return (
    <Suspense fallback={null}>
      <TanStackRouterDevtools router={props.appRouter} />
    </Suspense>
  )
}
