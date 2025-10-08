import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import Card from '../../components/Card';
import Testimonial from '../../components/Testimonial';

export default function FintechDataPlatform() {
  const projectDetails = {
    client: 'FinanceFlow Technologies',
    industry: 'Financial Technology',
    timeline: '12 months',
    teamSize: '5 developers + 2 data engineers',
    technologies: ['Python', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Apache Spark']
  };

  const challenges = [
    'Processing 10M+ financial transactions per day',
    'Real-time fraud detection and alerts',
    'Regulatory compliance (PCI DSS, SOX)',
    'High availability requirements (99.9% uptime)',
    'Complex data transformations and analytics'
  ];

  const solutions = [
    {
      title: 'Scalable Data Pipeline',
      description: 'Built a robust event-driven architecture using Apache Kafka for real-time data streaming and processing.'
    },
    {
      title: 'Real-time Analytics Engine',
      description: 'Implemented Apache Spark for complex data transformations and real-time fraud detection algorithms.'
    },
    {
      title: 'Microservices Architecture',
      description: 'Designed scalable microservices with proper separation of concerns and fault tolerance.'
    },
    {
      title: 'Compliance & Security',
      description: 'Implemented end-to-end encryption, audit logging, and compliance monitoring systems.'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Deployed on AWS with auto-scaling, load balancing, and disaster recovery capabilities.'
    },
    {
      title: 'Monitoring & Observability',
      description: 'Created comprehensive monitoring dashboards and alerting systems for proactive issue detection.'
    }
  ];

  const results = [
    {
      metric: '10M+',
      description: 'Transactions processed daily'
    },
    {
      metric: '99.9%',
      description: 'System uptime achieved'
    },
    {
      metric: '500%',
      description: 'Data processing capacity increase'
    },
    {
      metric: '<100ms',
      description: 'Average transaction processing time'
    },
    {
      metric: '95%',
      description: 'Reduction in false positives for fraud detection'
    },
    {
      metric: '24/7',
      description: 'Real-time monitoring and alerts'
    }
  ];

  const technicalHighlights = [
    {
      title: 'Event-Driven Architecture',
      description: 'Apache Kafka handles millions of events per day with guaranteed delivery and fault tolerance.'
    },
    {
      title: 'Real-time Processing',
      description: 'Apache Spark Streaming processes transactions in real-time for immediate fraud detection.'
    },
    {
      title: 'Data Lake Implementation',
      description: 'Centralized data storage with efficient querying and analytics capabilities.'
    },
    {
      title: 'Machine Learning Pipeline',
      description: 'Automated ML model training and deployment for continuous improvement in fraud detection.'
    }
  ];

  return (
    <>
      <Head>
        <title>Fintech Data Platform Case Study - T4 Group</title>
        <meta name="description" content="Learn how T4 Group built a comprehensive data platform for FinanceFlow Technologies, processing 10M+ transactions daily with 99.9% uptime and real-time fraud detection." />
        <meta name="keywords" content="fintech, data platform, real-time processing, fraud detection, Apache Kafka, case study" />
        <meta property="og:title" content="Fintech Data Platform Case Study - T4 Group" />
        <meta property="og:description" content="How we built a scalable fintech data platform processing 10M+ transactions daily with 99.9% uptime." />
        <meta property="og:type" content="article" />
      </Head>

      <Layout>
        <main>
          <Section className="hero bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
            <div className="max-w-4xl mx-auto">
              <Link 
                href="/case-studies" 
                className="inline-flex items-center text-green-100 hover:text-white mb-6"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Case Studies
              </Link>
              <h1 className="text-5xl font-bold mb-6">Fintech Data Platform</h1>
              <p className="text-xl mb-8">Building a comprehensive data analytics platform for a financial technology company processing millions of transactions daily.</p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Fintech</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Data Platform</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Real-time Analytics</span>
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
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
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
                  FinanceFlow Technologies needed a robust data platform capable of processing massive volumes 
                  of financial transactions in real-time while maintaining the highest standards of security and 
                  regulatory compliance. The platform had to support complex analytics, fraud detection, and 
                  provide insights for business decision-making.
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
                <h2 className="text-3xl font-bold mb-8">Technical Highlights</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {technicalHighlights.map((highlight, index) => (
                    <div key={index} className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-12">Results Achieved</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">{result.metric}</div>
                      <div className="text-gray-600">{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Testimonial 
                quote="T4 Group delivered an exceptional data platform that exceeded our expectations. The system handles our massive transaction volume flawlessly, and the real-time analytics capabilities have transformed how we detect fraud and make business decisions. Their expertise in financial data processing and compliance was invaluable."
                author="Michael Chen"
                position="VP Engineering"
                company="FinanceFlow Technologies"
              />
            </div>
          </Section>

          <Section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Need a Scalable Data Platform?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Let our data engineering experts help you build a platform that can handle 
                your data processing needs at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  href="/case-studies" 
                  className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
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
