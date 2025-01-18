import { observer } from 'mobx-react-lite'
import { useStores } from '../hooks/useStores'

function UsersList() {
  const { storeUsersManagement } = useStores()

  return (
    <div>
      {storeUsersManagement.users.map(user => {
        return (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        )
      })}
    </div>
  )
}

export default observer(UsersList)
