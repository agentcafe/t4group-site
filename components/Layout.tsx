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
      <main>
        {children}
      </main>
      <footer style={{ padding: '16px 0', color: '#9ca3af', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: '14px', textAlign: 'center', background: 'transparent' }}>
        <div>
          <div>T4 GROUP LTD — Company No. 15258159</div>
          <div>Registered office: 86-90 Paul Street, London, EC2A 4NE</div>
          <div>© 2025 T4 Group. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
