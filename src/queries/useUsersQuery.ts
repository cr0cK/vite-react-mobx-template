import { useQuery } from '@tanstack/react-query'
import { UserEntity } from '../entities/UserEntity'
import { useStores } from '../hooks/useStores'
import { ViewResult } from '../libs/ViewResult'
import { getUsers } from '../mocks/getUsers'

/**
 * Retrieve users and update the store accordingly.
 */
export function useGetUsersQuery() {
  const { storeUsersManagement } = useStores()

  return useQuery({
    queryKey: ['getUsers'],
    queryFn: getUsers,
    throwOnError: error => {
      queueMicrotask(() => {
        storeUsersManagement.$users.updateLeft(err =>
          err.set(new ViewResult(error.message))
        )
      })

      return false
    },
    select: users => {
      const userEntities = users.map(user => new UserEntity(user))

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
