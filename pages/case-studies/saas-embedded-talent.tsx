import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import Card from '../../components/Card';
import Testimonial from '../../components/Testimonial';

export default function SaaSEmbeddedTalent() {
  const projectDetails = {
    client: 'TechFlow SaaS',
    industry: 'Software as a Service',
    timeline: '8 months',
    teamSize: '3 embedded developers',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'TypeScript', 'GraphQL']
  };

  const challenges = [
    'Rapid scaling needs with tight deadlines',
    'Complex feature requirements',
    'Integration with existing legacy systems',
    'Maintaining code quality during fast growth'
  ];

  const solutions = [
    {
      title: 'Senior Developer Integration',
      description: 'Our experienced developers seamlessly joined their existing team, following their processes and coding standards.'
    },
    {
      title: 'Agile Development Process',
      description: 'Implemented efficient sprint planning and code review processes to maintain quality while increasing velocity.'
    },
    {
      title: 'Knowledge Transfer',
      description: 'Continuous documentation and pair programming ensured knowledge sharing with the internal team.'
    },
    {
      title: 'Legacy System Integration',
      description: 'Built robust APIs and migration strategies to connect new features with existing infrastructure.'
    }
  ];

  const results = [
    {
      metric: '40%',
      description: 'Faster time-to-market for new features'
    },
    {
      metric: '3x',
      description: 'Development team scaling in 6 months'
    },
    {
      metric: '95%',
      description: 'Test coverage maintained throughout growth'
    },
    {
      metric: '99.9%',
      description: 'Uptime achieved for production systems'
    }
  ];

  return (
    <>
      <Head>
        <title>SaaS Embedded Talent Case Study - T4 Group</title>
        <meta name="description" content="Learn how T4 Group helped TechFlow SaaS scale their development team with embedded senior developers, achieving 40% faster time-to-market and 3x team growth." />
        <meta name="keywords" content="embedded talent, SaaS development, team scaling, case study, software development" />
        <meta property="og:title" content="SaaS Embedded Talent Case Study - T4 Group" />
        <meta property="og:description" content="How embedded senior developers helped a SaaS company achieve 40% faster development and 3x team growth." />
        <meta property="og:type" content="article" />
      </Head>

      <Layout>
        <main>
          <Section className="hero bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
            <div className="max-w-4xl mx-auto">
              <Link 
                href="/case-studies" 
                className="inline-flex items-center text-blue-100 hover:text-white mb-6"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Case Studies
              </Link>
              <h1 className="text-5xl font-bold mb-6">SaaS Embedded Talent</h1>
              <p className="text-xl mb-8">How we helped a growing SaaS company scale their development team with embedded senior developers.</p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">SaaS</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Embedded Talent</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Team Scaling</span>
              </div>
            </div>
          </Section>

          <Section className="py-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                  <div className="space-y-3">
                    <div><strong>Client:</strong> {projectDetails.client}</div>
                    <div><strong>Industry:</strong> {projectDetails.industry}</div>
                    <div><strong>Timeline:</strong> {projectDetails.timeline}</div>
                    <div><strong>Team Size:</strong> {projectDetails.teamSize}</div>
                  </div>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectDetails.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
                <p className="text-lg text-gray-600 mb-6">
                  TechFlow SaaS was experiencing rapid growth and needed to scale their development team quickly 
                  to meet increasing customer demands. They faced the challenge of maintaining code quality and 
                  development velocity while rapidly expanding their technical capabilities.
                </p>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Our Solution</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {solutions.map((solution, index) => (
                    <Card key={index} className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                      <p className="text-gray-600">{solution.description}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-12">Results Achieved</h2>
                <div className="grid md:grid-cols-4 gap-8">
                  {results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">{result.metric}</div>
                      <div className="text-gray-600">{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Testimonial 
                quote="T4 Group's embedded developers became an integral part of our team. They helped us scale rapidly while maintaining the code quality and development practices that are crucial to our success. Their expertise in modern web technologies and agile methodologies was exactly what we needed."
                author="Sarah Johnson"
                position="CTO, TechFlow SaaS"
                company="TechFlow SaaS"
              />
            </div>
          </Section>

          <Section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Team?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Let our embedded developers help you achieve similar results. 
                Contact us to discuss your scaling needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  href="/case-studies" 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View More Case Studies
                </Link>
              </div>
            </div>
          </Section>
        </main>
      </Layout>
    </>
  );
}
