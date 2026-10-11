import { Outlet, useLocation } from 'react-router-dom'
import { SiteFooter } from './SiteFooter'
import { SiteNav } from './SiteNav'

export function Layout() {
  const { pathname } = useLocation()
  const showCta = pathname !== '/contact'

  return (
    <div className="page">
      <div className="grid-bg" aria-hidden />
      <div className="scanline" aria-hidden />
      <SiteNav />
      <Outlet />
      <SiteFooter showCta={showCta} />
    </div>
  )
}
