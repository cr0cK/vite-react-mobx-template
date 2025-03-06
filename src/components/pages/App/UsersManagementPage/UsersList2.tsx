import { RenderEitherObserver } from '@/components/common/Renderers/RenderEither'
import { useStores } from '@/hooks/useStores'

export function UsersList2() {
  const { storeUsersManagement } = useStores()

  return (
    <RenderEitherObserver
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
