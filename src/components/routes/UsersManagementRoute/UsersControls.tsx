import { useGetUsersQuery } from '@/src/queries/useUsersQuery'
import { useIsFetching, useQueryClient } from '@tanstack/react-query'

export interface IUsersControlsProps {}

export default function UsersControls(props: IUsersControlsProps) {
  const queryClient = useQueryClient()
  const queryResult = useGetUsersQuery()

  const isFetchingUsers = useIsFetching({ queryKey: ['getUsers'] })

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => {
            queryResult.refetch()
          }}
        >
          Reload users <span>{isFetchingUsers ? 'R' : ''}</span>
        </button>
      </div>

      <div>
        <button
          type="button"
          onClick={() => {
            queryClient.resetQueries({
              queryKey: ['getUsers']
            })
          }}
        >
          Remove users
        </button>
      </div>
    </div>
  )
}
