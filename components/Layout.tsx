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
      <footer style={{ backgroundColor: '#1a1a1a', color: '#f5f5f5', padding: '2rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.75rem',
            fontSize: '0.875rem',
            lineHeight: '1.5'
          }}>
            <p style={{ margin: 0, fontWeight: '600' }}>
              T4 GROUP LTD — Company No. 15258159
            </p>
            <p style={{ margin: 0 }}>
              Registered office: 86-90 Paul Street, London, EC2A 4NE
            </p>
            <p style={{ margin: 0 }}>
              © 2025 T4 Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
