import { useStores } from './useStores'

export function useLogger() {
  const { storeRoot } = useStores()

  return storeRoot.environment.logger
}
