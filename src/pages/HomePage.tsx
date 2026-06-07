import React from "react";
import HeroCarousel from "../components/features/HeroCarousel";
import MarketTicker from '../components/features/MarketTicker';
import Stats from "../components/features/Stats";
import ServicesShowcase from "../components/features/ServicesShowcase";
import InfoCards from "../components/features/InfoCards";
import CTA from "../components/features/CTA";

const HomePage: React.FC = () => {
  const missionCards = [
    {
      title: "Global Expertise",
      description:
        "Leveraging decades of international trade experience to connect African markets with global opportunities.",
      icon: "🌐",
    },
    {
      title: "Local Knowledge",
      description:
        "Deep understanding of African business landscapes, cultures, and regulatory environments.",
      icon: "🎯",
    },
    {
      title: "Sustainable Growth",
      description:
        "Building long-term partnerships that create value for all stakeholders and communities.",
      icon: "🌱",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <section className="py-12 md:py-16 bg-light-primary dark:bg-dark-primary">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-8 uppercase tracking-wider">Live Market Data</h2>
          <MarketTicker />
        </div>
      </section>
      <Stats />
      <ServicesShowcase limit={4} />
      <InfoCards
        title="Why Choose Eagle International"
        subtitle="Combining global reach with local expertise for unparalleled market access"
        cards={missionCards}
      />
      <CTA
        title="Ready to Expand Your Business?"
        description="Partner with us to unlock new opportunities across African and international markets"
        primaryButton={{
          text: "Get Started",
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

export default HomePage;
