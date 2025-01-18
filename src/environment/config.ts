/**
 * Create a new configuration.
 */
export function createConfiguration(): Config {
  return baseConfig
}

/**
 * Configuration of the application.
 */
const baseConfig = {
  production: false
}

export type Config = typeof baseConfig
