export default function Services() {
  const services = [
    {
      title: 'Consulting',
      description: 'Expert consultation services to help your business grow and innovate.'
    },
    {
      title: 'Technology Solutions',
      description: 'Custom technology implementations tailored to your specific needs.'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation to modernize your operations.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {services.map((service, index) => (
            <div key={index} style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
