export default function Contact() {
  const copyEmail = () => {
    navigator.clipboard.writeText('info@t4group.co');
    const btn = document.getElementById('copy-btn');
    if (btn) {
      btn.textContent = '✓';
      setTimeout(() => { btn.textContent = '📋'; }, 2000);
    }
  };

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
              className="btn"
              href="mailto:info@t4group.co"
              rel="noopener noreferrer"
              style={{ 
                fontSize: '1.1rem', 
                padding: '15px 30px',
                pointerEvents: 'auto',
                position: 'relative',
                zIndex: 10,
                display: 'inline-block',
                textDecoration: 'none'
              }}
            >
              Contact Us
            </a>
            <div style={{ marginTop: '1.5rem', fontSize: '1rem', color: '#666' }}>
              <span style={{ marginRight: '0.5rem' }}>Email us at:</span>
              <a 
                href="mailto:info@t4group.co" 
                style={{ 
                  color: '#007bff', 
                  textDecoration: 'underline',
                  pointerEvents: 'auto'
                }}
              >
                info@t4group.co
              </a>
              <button
                id="copy-btn"
                onClick={copyEmail}
                style={{
                  marginLeft: '0.5rem',
                  padding: '4px 8px',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  backgroundColor: 'white',
                  pointerEvents: 'auto'
                }}
                title="Copy email to clipboard"
              >
                📋
              </button>
            </div>
          </div>
          <div style={{ 
            marginTop: '3rem', 
            padding: '2rem', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)' 
          }}>
            <h4>Let's Build Something Great Together</h4>
            <p>Whether you need consultation, technology solutions, or digital transformation services, our team is here to help.</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact .btn {
          pointer-events: auto !important;
          cursor: pointer !important;
          position: relative;
          z-index: 10;
        }
        .contact a {
          pointer-events: auto !important;
        }
      `}</style>
    </section>
  )
}
