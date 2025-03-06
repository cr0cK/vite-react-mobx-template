import { RenderQuery } from '@/components/common/Renderers/RenderQuery'
import { useGetUsersQuery } from '@/queries/useUsersQuery'

export function UsersList() {
  const getUsersQuery = useGetUsersQuery()

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
