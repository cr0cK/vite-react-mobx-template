import { ContainerFlex } from '@/components/common/Containers/ContainerFlex'
import { H1 } from '@/components/common/Typography/Hx'
import { Paragraph } from '@/components/common/Typography/Text'
import { Button } from '@/components/ui/button'
import { FieldError, Label } from '@/components/ui/field'
import { Input, TextField } from '@/components/ui/textfield'
import { useStores } from '@/hooks/useStores'
import { buildVariants, styled } from '@/init/styles/buildVariants'
import { useAuthedUserMutation } from '@/queries/useAuthedUserMutation'
import { useNavigate } from '@tanstack/react-router'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Form } from 'react-aria-components'
import { handleSubmitOnClick } from './handlers'

export interface ILoginPageProps {}

const StyledContainerFlex = styled(ContainerFlex)(props => {
  return buildVariants(props)
    .css({
      padding: 20,
      border: '1px solid silver',
      borderRadius: 5,
      boxShadow: '3px 3px 10px 0px rgba(0, 0, 0, 0.1)'
    })
    .end()
})

export function LoginPage_(props: ILoginPageProps) {
  const { storeAuthentication } = useStores()

  const navigate = useNavigate()
  const authedUserMutation = useAuthedUserMutation(storeAuthentication)

  /** Redirect to the app if authenticated */
  useEffect(() => {
    if (storeAuthentication.isAuthenticated) {
      navigate({ to: '/app' })
    }
  }, [storeAuthentication.isAuthenticated])

  return (
    <StyledContainerFlex direction="column" name="LoginPage">
      <H1>Login</H1>
      <Paragraph>Enter your email below to login to your account.</Paragraph>

      <Form onSubmit={handleSubmitOnClick(authedUserMutation, navigate)}>
        <ContainerFlex name="Form" direction="column" gap={20}>
          <TextField name="email" type="email" isRequired>
            <Label>Email</Label>
            <Input placeholder="user1@example.com to login" />
            <FieldError />
          </TextField>

          <TextField name="password" type="password" isRequired>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter anything" />
            <FieldError />
          </TextField>

          <Button className="w-fit self-end" type="submit">
            Submit
          </Button>
        </ContainerFlex>
      </Form>
    </StyledContainerFlex>
  )
}

export const LoginPage = observer(LoginPage_)
