import type { UseAuthedUserMutation } from '@/queries/useAuthedUserMutation'
import type { UseNavigateResult } from '@tanstack/react-router'
import { toast } from 'sonner'

/**
 * Handle login form submition.
 * Example of implementation for the demo.
 */
export function handleSubmitOnClick(
  mutation: UseAuthedUserMutation,
  navigate: UseNavigateResult<any>
) {
  return (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const formData = new FormData(evt.currentTarget)
    const email = String(formData.get('email') ?? '')

    mutation
      .mutateAsync({ email })
      .then(() => {
        navigate({ to: '/app' })
      })
      .catch(() => {
        toast('Your username or password is incorrect.', {
          description:
            'Please check your credentials and try again. If you continue having issues, consider resetting your password.'
        })
      })
  }
}
