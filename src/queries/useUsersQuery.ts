import { useQuery } from '@tanstack/react-query'
import { UserEntity } from '../entities/UserEntity'
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
    select: users => {
      const userEntities = users.map(user => new UserEntity(user))
      storeUsersManagement.setUsers(userEntities)
    }
  })
}
