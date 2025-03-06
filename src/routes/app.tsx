import { LayoutApp } from '@/components/layout/LayoutApp'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app')({
  component: LayoutApp
})
