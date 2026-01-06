import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { Navigation } from '../components/Navigation'
import { LanguageToggle } from '../components/LanguageToggle'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <Outlet />
      <LanguageToggle />
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
})
