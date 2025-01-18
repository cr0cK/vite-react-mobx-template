import { useGetUsersQuery } from '../queries/useUsersQuery'
import UsersList from './UsersList'

export default function UsersManagement() {
  useGetUsersQuery()

  return (
    <div>
      <h1>Users</h1>
      <UsersList />
    </div>
  )
}
