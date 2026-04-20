import React from "react";
import { useCounterAnimation } from "@hooks/useCounterAnimation";
import { useScrollAnimation } from "@hooks/useScrollAnimation";

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix = "" }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const count = useCounterAnimation({ end: value, duration: 2000, isVisible });

  return (
    <div
      ref={elementRef}
      className={`text-center transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="text-5xl md:text-6xl font-bold text-orange-primary mb-2">
        {Math.round(count)}
        {suffix}
      </div>
      <div className="text-lg text-grey-medium">{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    { value: 15, label: "Years of Excellence", suffix: "+" },
    { value: 500, label: "Successful Projects", suffix: "+" },
    { value: 50, label: "Strategic Partners", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
  ];

  return (
    <section className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
