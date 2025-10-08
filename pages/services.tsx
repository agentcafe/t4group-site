import Head from 'next/head';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Card from '../components/Card';
import CTABanner from '../components/CTABanner';

export default function Services() {
  const services = [
    {
      title: 'SaaS Development',
      description: 'End-to-end SaaS product development with modern tech stacks and scalable architecture.',
      features: ['Custom Development', 'API Integration', 'Database Design', 'Security Implementation']
    },
    {
      title: 'Embedded Talent',
      description: 'Skilled developers who integrate seamlessly with your team to accelerate product delivery.',
      features: ['Senior Developers', 'Project Management', 'Code Reviews', 'Knowledge Transfer']
    },
    {
      title: 'Data Platform Solutions',
      description: 'Build robust data infrastructure and analytics platforms for data-driven insights.',
      features: ['Data Pipeline', 'Analytics Dashboard', 'Real-time Processing', 'Machine Learning']
    },
    {
      title: 'Technical Consulting',
      description: 'Strategic technical guidance to help you make informed technology decisions.',
      features: ['Architecture Review', 'Technology Stack', 'Performance Optimization', 'Best Practices']
    }
  ];

  return (
    <>
      <Head>
        <title>Services - T4 Group | SaaS Development & Embedded Talent</title>
        <meta name="description" content="Expert SaaS development, embedded talent, data platforms, and technical consulting services. Scale your team with our experienced developers and technical expertise." />
        <meta name="keywords" content="SaaS development, embedded talent, data platforms, technical consulting, software development" />
        <meta property="og:title" content="Services - T4 Group" />
        <meta property="og:description" content="Expert SaaS development, embedded talent, data platforms, and technical consulting services." />
        <meta property="og:type" content="website" />
      </Head>

      <Layout>
        <main>
          <Section className="hero bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl mb-8">We deliver comprehensive technology solutions that drive your business forward</p>
            </div>
          </Section>

          <Section className="py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </Section>

          <Section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Choose T4 Group?</h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </Section>

          <CTABanner 
            title="Ready to Get Started?"
            description="Let's discuss how we can help accelerate your project"
            buttonText="Contact Us"
            buttonHref="/contact"
          />
        </main>
      </Layout>
    </>
  );
}
