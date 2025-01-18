import type { StoreRoot } from '@/src/stores/storeRoot'
import { type Option, none } from 'fp-ts/lib/Option'
import React from 'react'

const ContextStores = React.createContext<Option<StoreRoot>>(none)

export default ContextStores
