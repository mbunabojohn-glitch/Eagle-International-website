import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

interface CTAProps {
  title: string;
  description: string;
  primaryButton?: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
  variant?: "primary" | "secondary";
}

const CTA: React.FC<CTAProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = "primary",
}) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const bgClass =
    variant === "primary"
      ? "bg-gradient-to-r from-primary to-primary-dark"
      : "bg-gradient-to-r from-gray-900 to-gray-800";

  return (
    <section ref={elementRef} className={`py-20 ${bgClass}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryButton && (
              <Link to={primaryButton.link}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {primaryButton.text}
                </Button>
              </Link>
            )}
            {secondaryButton && (
              <Link to={secondaryButton.link}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {secondaryButton.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
