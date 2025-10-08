import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Card from '../components/Card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real implementation, you would send this data to your backend
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      title: 'Email',
      value: 'hello@t4group.dev',
      href: 'mailto:hello@t4group.dev',
      icon: '📧'
    },
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      icon: '📞'
    },
    {
      title: 'LinkedIn',
      value: 'Connect with us',
      href: 'https://linkedin.com/company/t4group',
      icon: '🔗'
    }
  ];

  const officeLocations = [
    {
      city: 'San Francisco',
      address: '123 Tech Street, Suite 400\nSan Francisco, CA 94102',
      timezone: 'PST (GMT-8)'
    },
    {
      city: 'Remote',
      address: 'We work with teams globally\nand offer flexible collaboration',
      timezone: 'All Timezones'
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us - T4 Group | Get in Touch for Your Next Project</title>
        <meta name="description" content="Ready to start your next project? Contact T4 Group for expert SaaS development, embedded talent, and data platform solutions. Get a free consultation today." />
        <meta name="keywords" content="contact T4 Group, software development consultation, SaaS development quote, embedded developers, project inquiry" />
        <meta property="og:title" content="Contact T4 Group - Start Your Next Project" />
        <meta property="og:description" content="Get in touch with our expert development team for your next SaaS, embedded talent, or data platform project." />
        <meta property="og:type" content="website" />
      </Head>

      <Layout>
        <main>
          <Section className="hero bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl mb-8">
                Ready to accelerate your development goals? Let's discuss how we can help 
                bring your project to life.
              </p>
            </div>
          </Section>

          <Section className="py-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl font-bold mb-8">Tell Us About Your Project</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        >
                          <option value="">Select a project type</option>
                          <option value="saas-development">SaaS Development</option>
                          <option value="embedded-talent">Embedded Talent</option>
                          <option value="data-platform">Data Platform</option>
                          <option value="technical-consulting">Technical Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-25k">Under $25K</option>
                          <option value="25k-50k">$25K - $50K</option>
                          <option value="50k-100k">$50K - $100K</option>
                          <option value="100k-250k">$100K - $250K</option>
                          <option value="over-250k">Over $250K</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">When do you need to start?</option>
                        <option value="immediately">Immediately</option>
                        <option value="within-month">Within 1 month</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Description *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Tell us about your project, current challenges, and what you're looking to achieve..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="lg:pl-8">
                  <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                  
                  <div className="space-y-6 mb-12">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="flex items-center">
                        <div className="text-2xl mr-4">{method.icon}</div>
                        <div>
                          <div className="font-semibold text-gray-900">{method.title}</div>
                          <a 
                            href={method.href} 
                            className="text-teal-600 hover:text-teal-700 transition-colors"
                          >
                            {method.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-6">Office Locations</h3>
                  <div className="grid gap-6">
                    {officeLocations.map((location, index) => (
                      <Card key={index} className="p-6">
                        <h4 className="font-semibold text-lg mb-2">{location.city}</h4>
                        <p className="text-gray-600 mb-2 whitespace-pre-line">{location.address}</p>
                        <p className="text-sm text-gray-500">{location.timezone}</p>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-4">Response Time</h3>
                    <p className="text-gray-600">
                      We typically respond to inquiries within <strong>24 hours</strong> during 
                      business days. For urgent matters, please call us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you need a quick consultation or want to discuss a full project, 
                we're here to help. Let's turn your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:hello@t4group.dev" 
                  className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors inline-flex items-center justify-center"
                >
                  📧 Email Us Directly
                </a>
                <a 
                  href="tel:+15551234567" 
                  className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors inline-flex items-center justify-center"
                >
                  📞 Schedule a Call
                </a>
              </div>
            </div>
          </Section>
        </main>
      </Layout>
    </>
  );
}
