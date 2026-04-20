import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Card from '../components/common/Card';
import Loader from '../components/common/Loader';
import { CTA } from '../components/features';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { servicesApi } from '../api/services';

const ServicesPage: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const { data: services, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: servicesApi.getAll,
  });

  if (isLoading) {
    return <Loader fullScreen />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary to-secondary-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-2xl text-white/90">
              Comprehensive solutions for international trade and market
              expansion
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={elementRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.map((service, index) => (
              <div
                key={service.id}
                className={`transform transition-all duration-700 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card hover className="h-full">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                    {service.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  {service.features && (
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-600"
                        >
                          <span className="text-primary mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful international partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description:
                  'Understanding your business objectives and market aspirations',
              },
              {
                step: '02',
                title: 'Strategy',
                description:
                  'Developing customized solutions aligned with your goals',
              },
              {
                step: '03',
                title: 'Execution',
                description:
                  'Implementing strategies with precision and expertise',
              },
              {
                step: '04',
                title: 'Growth',
                description:
                  'Continuous optimization and scaling for sustained success',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Let's Discuss Your Needs"
        description="Schedule a consultation to explore how our services can accelerate your business growth"
        primaryButton={{
          text: 'Contact Us',
          link: '/contact',
        }}
        secondaryButton={{
          text: 'View Partners',
          link: '/partners',
        }}
      />
    </div>
  );
};

export default ServicesPage;