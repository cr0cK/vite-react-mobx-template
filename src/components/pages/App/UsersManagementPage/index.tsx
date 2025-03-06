import { UsersControls } from './UsersControls'
import { UsersList } from './UsersList'
import { UsersList2 } from './UsersList2'

export function UsersManagementPage() {
  return (
    <div>
      <h1>Users</h1>
      <UsersList />
      <UsersList2 />
      <UsersControls />
    </div>
  )
}
