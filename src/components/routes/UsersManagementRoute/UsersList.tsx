import { useStores } from '@/src/hooks/useStores'
import { observer } from 'mobx-react-lite'

function UsersList() {
  const { storeUsersManagement } = useStores()

  return (
    <div>
      {storeUsersManagement.users.map(user => {
        return (
          <li key={user.raw.id}>
            {user.raw.id} - {user.fullName}
          </li>
        )
      })}
    </div>
  )
}

export default observer(UsersList)
