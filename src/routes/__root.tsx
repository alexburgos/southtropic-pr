import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  ),
})
