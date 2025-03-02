import { useGetUsersQuery } from '@/queries/useUsersQuery'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import { useIsFetching, useQueryClient } from '@tanstack/react-query'

export interface IUsersControlsProps {}

export default function UsersControls(props: IUsersControlsProps) {
  const queryClient = useQueryClient()
  const queryResult = useGetUsersQuery()

  const isFetchingUsers = useIsFetching({ queryKey: ['getUsers'] })

  return (
    <Box sx={{ display: 'flex', gap: theme => theme.spacing(1) }}>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            queryResult.refetch()
          }}
        >
          Reload users {isFetchingUsers ? '(R)' : ''}
        </Button>
      </div>

      <div>
        <Button
          variant="contained"
          onClick={() => {
            queryClient.resetQueries({
              queryKey: ['getUsers']
            })
          }}
        >
          Remove users
        </Button>
      </div>
    </Box>
  )
}
