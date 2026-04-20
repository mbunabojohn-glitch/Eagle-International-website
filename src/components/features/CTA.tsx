import React from "react";
import { Link } from "react-router-dom";
import Button from "@components/common/Button";
import { useScrollAnimation } from "@hooks/useScrollAnimation";

interface CTAProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
}

const CTA: React.FC<CTAProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
}) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-24 bg-orange-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 uppercase tracking-tighter leading-tight">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to={primaryButton.link} className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white text-orange-primary hover:bg-dark-primary hover:text-white border-none shadow-xl"
              >
                {primaryButton.text}
              </Button>
            </Link>
            {secondaryButton && (
              <Link to={secondaryButton.link} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-orange-primary"
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
