import React from "react";
import { InfoCards, CTA } from "../components/features";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const AboutPage: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const values = [
    {
      title: "Integrity",
      description:
        "We conduct business with the highest ethical standards, building trust through transparency and honesty.",
      icon: "⚖️",
    },
    {
      title: "Excellence",
      description:
        "We pursue excellence in every engagement, delivering superior service and results to our partners.",
      icon: "⭐",
    },
    {
      title: "Innovation",
      description:
        "We embrace innovation and technology to create cutting-edge solutions for complex challenges.",
      icon: "💡",
    },
    {
      title: "Partnership",
      description:
        "We believe in collaborative relationships that create mutual value and sustainable growth.",
      icon: "🤝",
    },
    {
      title: "Sustainability",
      description:
        "We are committed to responsible business practices that benefit communities and the environment.",
      icon: "🌍",
    },
    {
      title: "Diversity",
      description:
        "We celebrate diversity and inclusion, recognizing that different perspectives drive innovation.",
      icon: "🎨",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-2xl text-white/90">
              Bridging continents, building futures
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={elementRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid md:grid-cols-2 gap-12 items-center transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded with a vision to transform international trade in
                  Africa, Eagle International Group has grown to become a
                  trusted partner for businesses seeking to expand their global
                  footprint.
                </p>
                <p>
                  For over 15 years, we have specialized in connecting African
                  markets with international opportunities, facilitating
                  billions of dollars in trade and creating thousands of jobs
                  across the continent.
                </p>
                <p>
                  Our success is built on deep local knowledge, global
                  expertise, and an unwavering commitment to our partners'
                  success. We don't just facilitate transactions—we build
                  lasting relationships and create shared value.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg">
                To empower African businesses and international partners through
                strategic trade solutions, innovative partnerships, and
                unparalleled market expertise that drives sustainable growth and
                prosperity.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🔭</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg">
                To be Africa's most trusted international trade partner,
                recognized for excellence, integrity, and transformative impact
                on global commerce and economic development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <InfoCards
        title="Our Core Values"
        subtitle="The principles that guide everything we do"
        cards={values}
      />

      {/* CTA */}
      <CTA
        title="Join Us in Shaping the Future"
        description="Discover how Eagle International Group can help your business thrive in global markets"
        primaryButton={{
          text: "Get in Touch",
          link: "/contact",
        }}
        secondaryButton={{
          text: "View Services",
          link: "/services",
        }}
      />
    </div>
  );
};

export default AboutPage;
