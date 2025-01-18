import { useStores } from '@/src/hooks/useStores'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

function UsersManagement() {
  const { storeUsersManagement } = useStores()

  useEffect(() => {
    const mockUsers = [
      {
        id: 1,
        createdAt: new Date('2025-01-01T10:00:00'),
        email: 'user1@example.com',
        name: 'Alice'
      },
      {
        id: 2,
        createdAt: new Date('2025-01-02T12:30:00'),
        email: 'user2@example.com',
        name: 'Bob'
      },
      {
        id: 3,
        createdAt: new Date('2025-01-03T15:45:00'),
        email: 'user3@example.com'
      },
      {
        id: 4,
        createdAt: new Date('2025-01-04T18:20:00'),
        email: 'user4@example.com',
        name: 'Eve'
      }
    ]

    setTimeout(() => {
      storeUsersManagement.setUsers(mockUsers)
    }, 2000)
  }, [])

  return (
    <div>
      <h1>Users</h1>

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

export default observer(UsersManagement)
