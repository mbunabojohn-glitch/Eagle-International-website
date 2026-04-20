import React from "react";
import { InfoCards, CTA } from "../components/features";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const MissionPage: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const strategicPillars = [
    {
      title: "Market Leadership",
      description:
        "Establishing ourselves as the premier bridge between African and global markets through excellence and innovation.",
      icon: "👑",
    },
    {
      title: "Sustainable Impact",
      description:
        "Creating lasting economic value while promoting environmental stewardship and social responsibility.",
      icon: "🌱",
    },
    {
      title: "Digital Transformation",
      description:
        "Leveraging technology to revolutionize international trade processes and enhance partner experiences.",
      icon: "💻",
    },
    {
      title: "Capacity Building",
      description:
        "Empowering local businesses and communities through knowledge transfer and skills development.",
      icon: "📚",
    },
    {
      title: "Strategic Networks",
      description:
        "Cultivating robust partnerships across continents to unlock unprecedented market opportunities.",
      icon: "🌐",
    },
    {
      title: "Innovation Excellence",
      description:
        "Pioneering new approaches to trade facilitation and cross-border business development.",
      icon: "🚀",
    },
  ];

  const impactAreas = [
    {
      title: "Economic Development",
      description:
        "Facilitating billions in trade that creates jobs, generates revenue, and stimulates economic growth across African markets.",
      icon: "💼",
    },
    {
      title: "Community Empowerment",
      description:
        "Supporting local communities through ethical business practices, employment opportunities, and social initiatives.",
      icon: "🤝",
    },
    {
      title: "Environmental Stewardship",
      description:
        "Promoting sustainable trade practices and supporting partners in their environmental responsibility efforts.",
      icon: "🌍",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Mission & Vision
            </h1>
            <p className="text-2xl text-white/90">
              Transforming global trade to empower African prosperity
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section ref={elementRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`max-w-4xl mx-auto text-center transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              To empower African businesses and international partners through
              strategic trade solutions, innovative partnerships, and
              unparalleled market expertise that drives sustainable growth and
              prosperity for all stakeholders.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  Excellence
                </div>
                <div className="text-gray-600">In Every Partnership</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  Innovation
                </div>
                <div className="text-gray-600">Driving Progress</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  Impact
                </div>
                <div className="text-gray-600">Creating Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🔭</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed mb-12">
              To be Africa's most trusted international trade partner,
              recognized globally for excellence, integrity, and transformative
              impact on global commerce and economic development.
            </p>

            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Vision 2030
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold text-primary mb-3">
                    Geographic Expansion
                  </h4>
                  <p className="text-gray-600">
                    Presence in all major African markets with strategic hubs
                    connecting to global trade centers
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">
                    Digital Leadership
                  </h4>
                  <p className="text-gray-600">
                    Industry-leading digital platform for seamless cross-border
                    trade facilitation
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">
                    Economic Impact
                  </h4>
                  <p className="text-gray-600">
                    $10B+ in annual trade facilitation creating thousands of
                    jobs
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">
                    Sustainable Practices
                  </h4>
                  <p className="text-gray-600">
                    100% of partnerships aligned with UN Sustainable Development
                    Goals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <InfoCards
        title="Strategic Pillars"
        subtitle="The foundations of our long-term success"
        cards={strategicPillars}
      />

      {/* Impact Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating positive change across multiple dimensions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl"
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-lg">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Join Our Mission"
        description="Partner with us to build a prosperous future for African and global trade"
        primaryButton={{
          text: "Become a Partner",
          link: "/contact",
        }}
        secondaryButton={{
          text: "Explore Services",
          link: "/services",
        }}
        variant="secondary"
      />
    </div>
  );
};

export default MissionPage;
