import { HomePage } from '@/components/pages/App/HomePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/home')({
  component: HomePage
})
