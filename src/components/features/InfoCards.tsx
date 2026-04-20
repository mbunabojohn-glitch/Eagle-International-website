import React from "react";
import Card from "@components/common/Card";
import { useScrollAnimation } from "@hooks/useScrollAnimation";

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

  const bgClass =
    variant === "primary"
      ? "bg-dark-secondary"
      : "bg-dark-primary";

  return (
    <section ref={elementRef} className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider text-white`}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`text-xl max-w-3xl mx-auto text-grey-medium`}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card
                hoverable
                className="bg-dark-tertiary border border-white/5"
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3
                  className="text-xl font-bold mb-3 text-white uppercase tracking-wide"
                >
                  {card.title}
                </h3>
                <p
                  className="text-grey-medium"
                >
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
