import { UsersManagementPage } from '@/components/pages/App/UsersManagementPage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/app/users-management')({
  component: UsersManagementPage
})
