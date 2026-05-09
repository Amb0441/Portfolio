import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
