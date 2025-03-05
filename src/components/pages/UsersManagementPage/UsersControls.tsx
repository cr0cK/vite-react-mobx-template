import { ContainerFlex } from '@/components/common/Containers/ContainerFlex'
import { Button } from '@/components/ui/button'
import { useGetUsersQuery } from '@/queries/useUsersQuery'
import { useIsFetching, useQueryClient } from '@tanstack/react-query'

export interface IUsersControlsProps {}

export default function UsersControls(props: IUsersControlsProps) {
  const queryClient = useQueryClient()
  const queryResult = useGetUsersQuery()

  const isFetchingUsers = useIsFetching({ queryKey: ['getUsers'] })

  return (
    <ContainerFlex name="UsersControls">
      <div>
        <Button
          onPress={() => {
            queryResult.refetch()
          }}
        >
          Reload users {isFetchingUsers ? '(R)' : ''}
        </Button>
      </div>

      <div>
        <Button
          onPress={() => {
            queryClient.resetQueries({
              queryKey: ['getUsers']
            })
          }}
        >
          Remove users
        </Button>
      </div>
    </ContainerFlex>
  )
}
