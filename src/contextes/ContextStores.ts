import { type Option, none } from 'fp-ts/lib/Option'
import React from 'react'
import type { StoreRoot } from '../stores/StoreRoot'

/**
 * Provide the root store to the app.
 */
const ContextStores = React.createContext<Option<StoreRoot>>(none)

export default ContextStores
