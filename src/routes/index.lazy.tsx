import { createLazyFileRoute } from '@tanstack/react-router'
import IndexRoute from '../components/routes/IndexRoute'

export const Route = createLazyFileRoute('/')({
  component: IndexRoute
})
