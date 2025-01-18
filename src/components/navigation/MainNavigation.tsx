import { Link } from '@tanstack/react-router'

export default function MainNavigation() {
  return (
    <div>
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/users-management" className="[&.active]:font-bold">
        Users Management
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
    </div>
  )
}
