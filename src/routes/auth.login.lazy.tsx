import LoginPage from '@/components/pages/LoginPage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/auth/login')({
  component: LoginPage
})
