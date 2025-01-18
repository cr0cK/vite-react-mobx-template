import { createLazyFileRoute } from '@tanstack/react-router'
import AboutRoute from '../components/routes/AboutRoute'

export const Route = createLazyFileRoute('/about')({
  component: AboutRoute
})
