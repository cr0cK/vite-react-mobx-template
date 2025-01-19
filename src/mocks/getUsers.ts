import type { UserEntityRaw } from '../schemas/User'

// Mocked API call
export async function getUsers(): Promise<UserEntityRaw[]> {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve([
        {
          id: 1,
          createdAt: new Date('2025-01-01T10:00:00'),
          email: 'user1@example.com',
          firstName: 'Alice',
          lastName: 'Smith'
        },
        {
          id: 2,
          createdAt: new Date('2025-01-02T12:30:00'),
          email: 'user2@example.com',
          firstName: 'Bob',
          lastName: 'Johnson'
        },
        {
          id: 3,
          createdAt: new Date('2025-01-03T15:45:00'),
          email: 'user3@example.com',
          lastName: 'Williams' // Assuming no firstName
        },
        {
          id: 4,
          createdAt: new Date('2025-01-04T18:20:00'),
          email: 'user4@example.com',
          firstName: 'Eve',
          lastName: 'Brown'
        }
      ])
    }, 1000)
  )
}
