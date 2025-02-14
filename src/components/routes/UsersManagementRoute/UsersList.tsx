import { useGetUsersQuery } from '@/src/queries/useUsersQuery'
import RenderQuery from '../../helpers/RenderQuery'

function UsersList() {
  const getUsersQuery = useGetUsersQuery()

  console.log('UsersList')

  return (
    <RenderQuery
      {...getUsersQuery}
      renderData={users => {
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
    />
  )
}

export default UsersList
