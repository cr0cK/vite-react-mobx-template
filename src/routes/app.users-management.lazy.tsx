import { createLazyFileRoute } from '@tanstack/react-router'
import UsersManagementPage from '../components/pages/UsersManagementPage'

export const Route = createLazyFileRoute('/app/users-management')({
  component: UsersManagementPage
})
