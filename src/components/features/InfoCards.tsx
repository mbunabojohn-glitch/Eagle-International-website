import React from "react";
import Card from "../common/Card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

interface InfoCard {
  title: string;
  description: string;
  icon: string;
}

interface InfoCardsProps {
  title: string;
  subtitle?: string;
  cards: InfoCard[];
  variant?: "default" | "primary";
}

const InfoCards: React.FC<InfoCardsProps> = ({
  title,
  subtitle,
  cards,
  variant = "default",
}) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const bgClass = variant === "primary" ? "bg-dark-secondary" : "bg-dark-primary";

  return (
    <section ref={elementRef} className={`py-12 md:py-20 ${bgClass}`}>
      <div className="container-custom">
        <div
          className={`text-center mb-12 md:mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-grey-medium px-4">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card hoverable className="bg-dark-tertiary border border-white/5 h-full">
                <div className="text-4xl sm:text-5xl mb-4">{card.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white uppercase tracking-wide">
                  {card.title}
                </h3>
                <p className="text-grey-medium text-sm sm:text-base">
                  {card.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
