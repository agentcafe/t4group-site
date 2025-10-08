export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Ready to get started? We'd love to hear from you.
          </p>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Get In Touch</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
              Contact us today to discuss your project and discover how we can help transform your business.
            </p>
            <a 
              href="mailto:info@t4group.co" 
              className="btn" 
              style={{ fontSize: '1.1rem', padding: '15px 30px' }}
            >
              Email Us: info@t4group.co
            </a>
          </div>
          <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h4>Let's Build Something Great Together</h4>
            <p>Whether you need consultation, technology solutions, or digital transformation services, our team is here to help.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
