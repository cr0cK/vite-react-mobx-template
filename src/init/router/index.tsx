import { createHashHistory, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export type AppRouter = typeof router

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: AppRouter
  }
}

const hashHistory = createHashHistory()

// Create a new router instance
export const router = createRouter({
  routeTree,
  basepath: import.meta.env.VITE_GH_DEPLOYMENT_BASE || '/',
  history: import.meta.env.VITE_GH_DEPLOYMENT_BASE ? hashHistory : undefined
})
