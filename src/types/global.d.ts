import type { StoreRoot } from './stores/StoreRoot'

declare global {
  interface Window {
    STORE_ROOT: StoreRoot
  }
}
