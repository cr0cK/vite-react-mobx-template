import { createLazyFileRoute } from '@tanstack/react-router'
import UsersManagementRoute from '../components/routes/UsersManagementRoute'

export const Route = createLazyFileRoute('/users-management')({
  component: UsersManagementRoute
})
