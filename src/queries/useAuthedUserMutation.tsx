import { UserEntity } from '@/entities/UserEntity'
import { mockedBackend } from '@/mocks/mockedBackend'
import type { StoreAuthentication } from '@/stores/StoreAuthentication'
import { useMutation } from '@tanstack/react-query'

/**
 * Use mutation to authenticate a user.
 */
export function useAuthedUserMutation(
  storeAuthentication: StoreAuthentication
) {
  return useMutation({
    mutationFn: mockedBackend().getAuthenticatedUser,
    onMutate: variables => {
      // TODO
      // Update flags
    },
    throwOnError: err => {
      queueMicrotask(() => {
        storeAuthentication.setAuthUser(null)
      })

      return false
    },
    onSuccess: user => {
      if (!user) {
        return null
      }

      const userEntity = new UserEntity(user)

      queueMicrotask(() => {
        storeAuthentication.setAuthUser(userEntity)
      })

      return userEntity
    },
    retry: false
  })
}

export type UseAuthedUserMutation = ReturnType<typeof useAuthedUserMutation>
