import { useStores } from '@/src/hooks/useStores'
import { useGetUsersQuery } from '@/src/queries/useUsersQuery'
import Loader from '../../helpers/Loader'
import RenderEither from '../../helpers/RenderEither'

function UsersList() {
  const { isLoading } = useGetUsersQuery()

  const { storeUsersManagement } = useStores()

  return (
    <Loader isLoading={isLoading}>
      <RenderEither
        observableEither={storeUsersManagement.$users}
        onLeft={error => {
          return <div>Error: {error.get().message}</div>
        }}
        onRight={users => {
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
    </Loader>
  )
}

export default UsersList
