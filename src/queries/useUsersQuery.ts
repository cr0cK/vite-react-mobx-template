import { useQuery } from '@tanstack/react-query'
import { useStores } from '../hooks/useStores'
import { getUsers } from '../mocks/getUsers'

/**
 * Retrieve users.
 */
export function useGetUsersQuery() {
  const { storeUsersManagement } = useStores()

  return useQuery({
    queryKey: ['getUsers'],
    queryFn: getUsers,
    select: users => storeUsersManagement.setUsers(users)
  })
}
