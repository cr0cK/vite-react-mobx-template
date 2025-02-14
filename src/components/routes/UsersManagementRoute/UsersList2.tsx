import { useStores } from '@/src/hooks/useStores'
import { RenderObvEitherObserver } from '../../helpers/RenderObvEither'

function UsersList2() {
  const { storeUsersManagement } = useStores()

  console.log('UsersList2')

  return (
    <RenderObvEitherObserver
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
                  {user.raw.id} - {user.raw.firstName}
                </li>
              )
            })}
          </div>
        )
      }}
    />
  )
}

export default UsersList2
