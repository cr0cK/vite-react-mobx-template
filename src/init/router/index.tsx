import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export type AppRouter = typeof router

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: AppRouter
  }
}

// Create a new router instance
export const router = createRouter({ routeTree })
