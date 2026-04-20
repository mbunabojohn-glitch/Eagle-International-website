import React from "react";
import Card from "../components/common/Card";
import { CTA } from "../components/features";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const PartnersPage: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const partnerCategories = [
    {
      title: "Global Corporations",
      description:
        "Leading international companies leveraging our expertise to enter African markets",
      icon: "🏢",
      partners: [
        "Fortune 500 Manufacturing",
        "International Technology Firms",
        "Global Financial Institutions",
        "Multinational Consumer Brands",
      ],
    },
    {
      title: "African Enterprises",
      description:
        "Local businesses expanding their international reach and capabilities",
      icon: "🌍",
      partners: [
        "Regional Trading Companies",
        "Manufacturing & Production",
        "Agricultural Exporters",
        "Technology Startups",
      ],
    },
    {
      title: "Government & Institutions",
      description:
        "Public sector partners driving economic development and trade",
      icon: "🏛️",
      partners: [
        "Trade Development Agencies",
        "Export Promotion Councils",
        "Investment Authorities",
        "Economic Development Zones",
      ],
    },
    {
      title: "Industry Associations",
      description:
        "Collaborative partnerships with sector-specific organizations",
      icon: "🤝",
      partners: [
        "Chamber of Commerce",
        "Industry Trade Groups",
        "Professional Associations",
        "Business Networks",
      ],
    },
  ];

  const benefits = [
    {
      title: "Market Access",
      description:
        "Direct access to extensive networks across African and international markets",
      icon: "🌐",
    },
    {
      title: "Risk Mitigation",
      description:
        "Expert guidance on regulatory compliance, cultural nuances, and market dynamics",
      icon: "🛡️",
    },
    {
      title: "Resource Optimization",
      description:
        "Efficient allocation of resources through shared infrastructure and expertise",
      icon: "⚡",
    },
    {
      title: "Innovation & Growth",
      description:
        "Collaborative opportunities for innovation and sustainable business expansion",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Partners
            </h1>
            <p className="text-2xl text-white/90">
              Building strategic alliances that create mutual value and lasting
              impact
            </p>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section ref={elementRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Partner Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting diverse organizations across industries and continents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerCategories.map((category, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card hover className="h-full">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <div className="space-y-2">
                    {category.partners.map((partner, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-700"
                      >
                        <span className="text-primary mr-2">▪</span>
                        <span>{partner}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Partnership Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What you gain when you partner with Eagle International Group
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <Card hover className="h-full text-center">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Partnership Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our collaborative relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold text-primary mb-3">$2B+</div>
              <div className="text-xl text-gray-700 font-semibold mb-2">
                Trade Facilitated
              </div>
              <div className="text-gray-600">
                Total value of international transactions
              </div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-primary mb-3">50+</div>
              <div className="text-xl text-gray-700 font-semibold mb-2">
                Active Partnerships
              </div>
              <div className="text-gray-600">
                Across 20+ countries and industries
              </div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-primary mb-3">95%</div>
              <div className="text-xl text-gray-700 font-semibold mb-2">
                Partner Retention
              </div>
              <div className="text-gray-600">
                Long-term relationships built on trust
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Become a Partner"
        description="Join our network of global businesses transforming international trade in Africa"
        primaryButton={{
          text: "Partnership Inquiry",
          link: "/contact",
        }}
        secondaryButton={{
          text: "Learn More",
          link: "/about",
        }}
      />
    </div>
  );
};

export default PartnersPage;
