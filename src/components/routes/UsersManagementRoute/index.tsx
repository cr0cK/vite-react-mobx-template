import { useGetUsersQuery } from '@/src/queries/useUsersQuery'
import UsersList from './UsersList'

export default function UsersManagementRoute() {
  useGetUsersQuery()

  return (
    <div>
      <h1>Users</h1>
      <UsersList />
    </div>
  )
}
