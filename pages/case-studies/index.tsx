import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import Card from '../../components/Card';
import CTABanner from '../../components/CTABanner';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'SaaS Embedded Talent',
      description: 'How we helped a growing SaaS company scale their development team with embedded senior developers.',
      slug: 'saas-embedded-talent',
      tags: ['SaaS', 'Embedded Talent', 'Team Scaling'],
      metrics: {
        timeToMarket: '40% faster',
        teamSize: '3x growth',
        codeQuality: '95% test coverage'
      }
    },
    {
      title: 'Fintech Data Platform',
      description: 'Building a comprehensive data analytics platform for a financial technology company.',
      slug: 'fintech-data-platform',
      tags: ['Fintech', 'Data Platform', 'Analytics'],
      metrics: {
        dataProcessing: '10M+ transactions/day',
        performance: '99.9% uptime',
        scaling: '500% data growth handled'
      }
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies - T4 Group | Success Stories & Results</title>
        <meta name="description" content="Explore our successful project case studies. See how T4 Group delivered exceptional results for SaaS companies, fintech platforms, and more." />
        <meta name="keywords" content="case studies, success stories, SaaS development, fintech, data platforms, project results" />
        <meta property="og:title" content="Case Studies - T4 Group" />
        <meta property="og:description" content="Explore our successful project case studies and see the results we've delivered for our clients." />
        <meta property="og:type" content="website" />
      </Head>

      <Layout>
        <main>
          <Section className="hero bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
              <p className="text-xl mb-8">Real results from real projects. See how we've helped our clients succeed.</p>
            </div>
          </Section>

          <Section className="py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {study.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{study.title}</h3>
                      <p className="text-gray-600 mb-6">{study.description}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-gray-800">Key Results</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {Object.entries(study.metrics).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}:
                            </span>
                            <span className="font-medium text-blue-600">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read Full Case Study
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </Section>

          <Section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-600 italic mb-4">
                    "T4 Group's embedded developers became an integral part of our team. 
                    They helped us scale rapidly while maintaining code quality."
                  </p>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">CTO, SaaS Company</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-600 italic mb-4">
                    "The data platform they built handles our massive transaction volume 
                    flawlessly. Exceptional technical expertise."
                  </p>
                  <div className="font-semibold">Michael Chen</div>
                  <div className="text-sm text-gray-500">VP Engineering, Fintech</div>
                </div>
              </div>
            </div>
          </Section>

          <CTABanner 
            title="Ready to Create Your Success Story?"
            description="Let's discuss how we can help you achieve similar results"
            buttonText="Get Started"
            buttonHref="/contact"
          />
        </main>
      </Layout>
    </>
  );
}
