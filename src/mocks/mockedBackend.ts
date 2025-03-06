import { usersFixture } from './fixtures/users'
import { delayResponse } from './helpers'

export function mockedBackend() {
  return {
    /**
     * Return a user whom as the same email.
     */
    getAuthenticatedUser: (variables: { email: string }) => {
      const foundUser = usersFixture.find(
        user => user.email === variables.email
      )

      if (!foundUser) {
        return delayResponse({ code: 'USER_NOT_FOUND' }, foundUser)
      }

      return delayResponse(null, foundUser)
    },

    /**
     * Return all users.
     */
    getAllUsers: () => {
      return delayResponse(null, usersFixture)
    }
  }
}
