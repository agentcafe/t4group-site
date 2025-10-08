import Head from 'next/head';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Card from '../components/Card';
import Testimonial from '../components/Testimonial';
import CTABanner from '../components/CTABanner';

export default function About() {
  const teamMembers = [
    {
      name: 'David Chen',
      role: 'Founder & CEO',
      bio: 'Former tech lead at scale-up companies with 12+ years in software architecture and team building.',
      expertise: ['Software Architecture', 'Team Leadership', 'SaaS Development']
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO',
      bio: 'Full-stack engineer turned technical leader, specialized in building high-performance data platforms.',
      expertise: ['Data Engineering', 'Cloud Architecture', 'Performance Optimization']
    },
    {
      name: 'Michael Thompson',
      role: 'Lead Developer',
      bio: 'Senior developer with expertise in modern web technologies and agile development practices.',
      expertise: ['React/Next.js', 'Node.js', 'DevOps']
    }
  ];

  const coreValues = [
    {
      title: 'Quality First',
      description: 'We never compromise on code quality, testing, or best practices. Every line of code is crafted with care.',
      icon: '🎯'
    },
    {
      title: 'Collaborative Partnership',
      description: 'We work as an extension of your team, integrating seamlessly with your processes and culture.',
      icon: '🤝'
    },
    {
      title: 'Continuous Learning',
      description: 'We stay current with the latest technologies and continuously improve our skills and processes.',
      icon: '📚'
    },
    {
      title: 'Transparent Communication',
      description: 'Clear, honest communication is the foundation of successful projects and lasting partnerships.',
      icon: '💬'
    }
  ];

  const achievements = [
    {
      number: '10+',
      label: 'Years Combined Experience',
      description: 'Decades of expertise in software development'
    },
    {
      number: '50+',
      label: 'Projects Delivered',
      description: 'Successful projects across various industries'
    },
    {
      number: '25+',
      label: 'Happy Clients',
      description: 'Long-term partnerships built on trust'
    },
    {
      number: '95%',
      label: 'Client Retention Rate',
      description: 'Clients who return for additional projects'
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - T4 Group | Expert Software Development Team</title>
        <meta name="description" content="Meet the T4 Group team. Expert software developers specializing in SaaS development, embedded talent, and data platforms. Quality-first approach with transparent communication." />
        <meta name="keywords" content="software development team, SaaS experts, embedded developers, data platform specialists, T4 Group" />
        <meta property="og:title" content="About T4 Group - Expert Software Development Team" />
        <meta property="og:description" content="Meet our team of expert developers specializing in SaaS development, embedded talent, and data platforms." />
        <meta property="og:type" content="website" />
      </Head>

      <Layout>
        <main>
          <Section className="hero bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">About T4 Group</h1>
              <p className="text-xl mb-8">
                We're a team of passionate software developers dedicated to delivering 
                exceptional results through quality code, collaborative partnerships, and continuous innovation.
              </p>
            </div>
          </Section>

          <Section className="py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Story</h2>
              <div className="text-lg text-gray-600 space-y-6">
                <p>
                  T4 Group was founded with a simple mission: to help growing companies scale their 
                  development capabilities without compromising on quality. We've seen too many projects 
                  fail due to rushed timelines, poor communication, or lack of proper technical expertise.
                </p>
                <p>
                  Our approach is different. We believe in building long-term partnerships, 
                  integrating seamlessly with existing teams, and delivering code that not only 
                  works but is maintainable, scalable, and well-documented.
                </p>
                <p>
                  Today, we're proud to be the trusted development partner for SaaS companies, 
                  fintech startups, and established enterprises looking to accelerate their 
                  digital transformation.
                </p>
              </div>
            </div>
          </Section>

          <Section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {coreValues.map((value, index) => (
                  <Card key={index} className="p-6 text-center">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </Section>

          <Section className="py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Section>

          <Section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">By the Numbers</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold text-indigo-600 mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-lg font-semibold mb-2">
                      {achievement.label}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {achievement.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section className="py-16">
            <div className="max-w-4xl mx-auto">
              <Testimonial 
                quote="Working with T4 Group has been transformative for our company. They don't just write code – they understand our business goals and deliver solutions that drive real results. Their team feels like a natural extension of our own."
                author="Jennifer Walsh"
                position="VP of Product"
                company="TechVision Inc."
              />
            </div>
          </Section>

          <Section className="bg-indigo-600 text-white py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Choose T4 Group?</h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Proven Expertise</h3>
                  <p className="text-indigo-100">
                    Deep experience across modern technologies and industry best practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
                  <p className="text-indigo-100">
                    We adapt to your workflow, tools, and culture for smooth collaboration.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Long-term Partnership</h3>
                  <p className="text-indigo-100">
                    We're not just contractors – we're invested in your long-term success.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <CTABanner 
            title="Ready to Work Together?"
            description="Let's discuss how we can help accelerate your development goals"
            buttonText="Get in Touch"
            buttonHref="/contact"
          />
        </main>
      </Layout>
    </>
  );
}
