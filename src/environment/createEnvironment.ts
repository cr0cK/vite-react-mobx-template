import { defaultLogger } from '@/lib/logger'
import { QueryClient } from '@tanstack/react-query'
import { type Config, createConfiguration } from './config'

export interface Environment {
  config: Config
  queryClient: QueryClient
  logger: Console
}

/**
 * Create the environment for the app that runs in the browser.
 * For tests, see createTestEnvironment().
 */
export function createEnvironment(): Environment {
  const config = createConfiguration()
  const queryClient = new QueryClient()
  const logger = defaultLogger

  return {
    config,
    queryClient,
    logger
  }
}
