import { useGetUsersQuery } from '@/src/queries/useUsersQuery'
import RenderQuery from '../../common/RenderQuery'

function UsersList() {
  const getUsersQuery = useGetUsersQuery()

  console.log('UsersList')

  return (
    <RenderQuery queryResult={getUsersQuery}>
      {users => {
        return (
          <div>
            {users.map(user => {
              return (
                <li key={user.raw.id}>
                  {user.raw.id} - {user.fullName}
                </li>
              )
            })}
          </div>
        )
      }}
    </RenderQuery>
  )
}

export default UsersList
