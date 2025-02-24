import { queryOptions, useQuery } from '@tanstack/react-query'
import { UserEntity } from '../entities/UserEntity'
import { useStores } from '../hooks/useStores'
import { ViewResult } from '../libs/ViewResult'
import { ensureArray } from '../libs/helpers/ensureArray'
import { getUsers } from '../mocks/getUsers'
import type { StoreUsersManagement } from '../stores/StoreUsersManagement'
import { getQuery } from './getQueries'

/**
 * Retrieve users and update the store accordingly.
 */
export function useGetUsersQuery() {
  const { storeUsersManagement } = useStores()

  return useQuery(_getUsersQueryOptions(storeUsersManagement))
}

function _getUsersQueryOptions(storeUsersManagement: StoreUsersManagement) {
  return queryOptions({
    queryKey: [getQuery('getUsers')],
    queryFn: getUsers,
    throwOnError: err => {
      queueMicrotask(() => {
        storeUsersManagement.$users.updateLeft(box =>
          box.set(new ViewResult(err.message, { err }))
        )
      })

      return false
    },
    select: users => {
      const userEntities = ensureArray(users).map(user => new UserEntity(user))

      queueMicrotask(() => {
        storeUsersManagement.$users.updateRight(arr =>
          arr.replace(userEntities)
        )
      })

      return userEntities
    },
    staleTime: Number.POSITIVE_INFINITY,
    retry: false
  })
}
