import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useEffect, useState } from 'react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-container">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
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
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </div>
  )
}
