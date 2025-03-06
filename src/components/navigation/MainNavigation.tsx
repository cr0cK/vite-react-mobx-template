import { Link } from '@tanstack/react-router'

export function MainNavigation() {
  return (
    <div>
      <Link to="/app" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/app/users-management" className="[&.active]:font-bold">
        Users Management
      </Link>{' '}
      <Link to="/app/about" className="[&.active]:font-bold">
        About
      </Link>
    </div>
  )
}
