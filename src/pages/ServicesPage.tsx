import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import Card from '@components/common/Card';
import Loader from '@components/common/Loader';
import CTA from '@components/features/CTA';
import { useScrollAnimation } from '@hooks/useScrollAnimation';
import { servicesApi } from '@api/services';
import type { Service } from '@types';

const ServiceRow: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={elementRef}
      id={`service-${service.id}`}
      className="scroll-mt-32"
    >
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Column */}
        <div 
          className={clsx(
            "relative group transition-all duration-1000 ease-out transform",
            isVisible ? "translate-x-0 opacity-100" : isEven ? "-translate-x-20 opacity-0" : "translate-x-20 opacity-0",
            !isEven ? "md:order-2" : ""
          )}
        >
           <div className="absolute -inset-4 bg-orange-primary/10 rounded-3xl blur-2xl group-hover:bg-orange-primary/20 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
           <Card className="relative h-[400px] lg:h-[500px] bg-dark-secondary border border-white/5 shadow-2xl overflow-hidden rounded-2xl p-0">
              {service.image ? (
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-8xl bg-dark-tertiary">
                  {service.icon}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-4 py-1 rounded-full bg-orange-primary/20 backdrop-blur-md border border-orange-primary/30 text-orange-primary text-xs font-bold uppercase tracking-widest mb-2">
                  Sector {index + 1}
                </span>
              </div>
           </Card>
        </div>
        
        {/* Content Column */}
        <div 
          className={clsx(
            "space-y-8 transition-all duration-1000 ease-out transform delay-300",
            isVisible ? "translate-x-0 opacity-100" : isEven ? "translate-x-20 opacity-0" : "-translate-x-20 opacity-0"
          )}
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-4">
              <span className="text-5xl bg-orange-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center text-orange-primary border border-orange-primary/20 shadow-inner">
                {service.icon}
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                {service.title.split(' ').map((word, i) => (
                  <span key={i} className={i === 0 ? "text-white" : "text-orange-primary"}>
                    {word}{' '}
                  </span>
                ))}
              </h2>
            </div>
            <div className="h-1 w-24 bg-orange-primary rounded-full"></div>
          </div>
          
          <p className="text-xl text-grey-medium leading-relaxed font-light italic border-l-4 border-orange-primary/30 pl-6">
            {service.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {service.features && service.features.map((feature: string, idx: number) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-dark-secondary/50 p-4 rounded-xl border border-white/5 hover:border-orange-primary/30 transition-all hover:bg-dark-secondary group"
              >
                <span className="text-orange-primary mt-1 group-hover:scale-125 transition-transform">✓</span>
                <span className="text-grey-light text-sm font-medium tracking-wide uppercase">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const location = useLocation();

  const { data: services, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: servicesApi.getAll,
  });

  useEffect(() => {
    if (location.hash && services) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash, services]);

  if (isLoading) {
    return <Loader fullScreen />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden border-b-2 border-orange-primary bg-dark-secondary text-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/Service-hero.jpg"
            alt="Eagle International Services"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white drop-shadow-2xl leading-tight">
              Our <span className="text-orange-primary">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-grey-light font-light drop-shadow-lg max-w-3xl mx-auto">
              Comprehensive solutions for international trade, energy, and engineering
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-dark-primary border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-tight">
              A Global Leader in <span className="text-orange-primary">Energy & Engineering</span>
            </h2>
            <div className="space-y-6 text-xl text-grey-medium font-light leading-relaxed">
              <p>
                EAGLE INTERNATIONAL GROUP (EAGLE GROUP) is a trading and engineering service provider with special interest in Oil & Gas and the Energy sector including Renewable/Clean Energy.
              </p>
              <p>
                Our Oil & Gas Division under our New Business Ventures is driven by our extensive trading activities in refined products such as AGO/D2, Aviation Fuel, Petroleum Motor Spirit and DPK. This gave us a new drive to venture into Oil & Gas mid-stream sector especial in the sales and purchase of Crude oil to ready markets in Asia, W/Africa, Europe and America.
              </p>
              <p>
                Our recent voyage into Crude Oil Marketing is informed by the inroad we have made in closing spot deals. Specifically, we are currently exploring openings and opportunities for long term contracts with the Government of Nigeria/Nigerian National Petroleum Corporation (NNPC) and other African Oil producing States, for us to export ready Crude Oil into the international and other emerging world market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-24 md:gap-32">
            {services?.map((service: Service, index: number) => (
              <ServiceRow key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-dark-secondary border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-widest">
              Our <span className="text-orange-primary">Service Culture</span>
            </h2>
            <p className="text-xl text-grey-medium max-w-3xl mx-auto font-light">
              At EAGLE, we pride ourselves in being at the forefront of relevant, modern and technical methodologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6 text-grey-medium text-lg font-light leading-relaxed">
              <p>
                Eagle International Group adheres to strict international trading practices such as <span className="text-white font-medium underline decoration-orange-primary underline-offset-4">INCOTERM 2000</span>. All requests and intents to us are to be accompanied by full details of the requesting party.
              </p>
              <p>
                We guide and pride our customers to follow strict contractual procedures, which generally entails placing of financial instrument in accordance with standard banking practices. As part of our best value chain enhancing practice, all intermediaries are identified in advance and are given written engagement of service.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                "Consistently offering cutting edge solutions",
                "Eclipsing the highest global standards",
                "Refreshing approach to service provision",
                "Retaining most skilled and experienced staff"
              ].map((belief, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-dark-tertiary/50 p-6 rounded-2xl border border-white/5 hover:border-orange-primary/30 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-orange-primary/10 flex items-center justify-center text-orange-primary group-hover:scale-110 transition-transform">
                    <span className="text-2xl">★</span>
                  </div>
                  <span className="text-white font-medium uppercase tracking-tight">{belief}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-widest">
              Our Process
            </h2>
            <p className="text-xl text-grey-medium max-w-3xl mx-auto font-light">
              A proven methodology for delivering successful international projects
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description:
                  'Deep analysis of project requirements and market conditions.',
              },
              {
                step: '02',
                title: 'Strategy',
                description:
                  'Developing tailored solutions and strategic partnership frameworks.',
              },
              {
                step: '03',
                title: 'Execution',
                description:
                  'Coordinated implementation with rigorous quality control standards.',
              },
              {
                step: '04',
                title: 'Optimization',
                description:
                  'Continuous monitoring and enhancement of operational performance.',
              },
            ].map((item, index) => (
              <div key={index} className="relative p-8 bg-dark-tertiary rounded-xl border border-white/5 hover:border-orange-primary/30 transition-colors group">
                <span className="absolute -top-6 left-8 text-6xl font-black text-white/5 group-hover:text-orange-primary/10 transition-colors">
                   {item.step}
                </span>
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wide relative z-10">
                  {item.title}
                </h4>
                <p className="text-grey-medium text-sm leading-relaxed relative z-10">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Custom Solutions for Your Business"
        description="Connect with our experts to discuss how we can tailor our services to your specific needs."
        primaryButton={{
          text: "Request Proposal",
          link: "/contact",
        }}
      />
    </div>
  );
};

export default ServicesPage;
