import Head from 'next/head'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  title?: string
}

export default function Layout({ children, title = 'T4 Group' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="T4 Group - Professional Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="container">
          <h1>T4 Group</h1>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="container">
          <p>&copy; 2025 T4 Group. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
