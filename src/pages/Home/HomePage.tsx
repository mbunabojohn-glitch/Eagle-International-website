import React from "react";
import {
  HeroCarousel,
  Stats,
  ServicesShowcase,
  InfoCards,
  CTA,
} from "../components/features";

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
