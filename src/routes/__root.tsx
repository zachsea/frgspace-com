import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-brand">
            <Link to="/" className="brand-link">
              FRG Space
            </Link>
          </div>
          <div className="nav-links">
            <Link
              to="/"
              className="nav-link"
              activeProps={{ className: 'nav-link active' }}
            >
              Home
            </Link>
            <Link
              to="/team"
              className="nav-link"
              activeProps={{ className: 'nav-link active' }}
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="nav-link"
              activeProps={{ className: 'nav-link active' }}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <main className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
      </main>
      <TanStackRouterDevtools />
    </div>
  ),
})
