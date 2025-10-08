import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Contact />
    </Layout>
  )
}
