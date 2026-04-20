import React from "react";
import { Link } from "react-router-dom";
import Card from "../common/Card";
import Button from "../common/Button";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Service } from "../../types";

interface ServicesShowcaseProps {
  services?: Service[];
  limit?: number;
  showViewAll?: boolean;
}

const defaultServices: Service[] = [
  {
    id: "1",
    title: "Import & Export",
    description:
      "Comprehensive import-export solutions connecting African markets with global trade partners.",
    icon: "🌍",
    category: "Trading",
  },
  {
    id: "2",
    title: "Supply Chain Management",
    description:
      "End-to-end supply chain optimization for seamless logistics and distribution.",
    icon: "📦",
    category: "Logistics",
  },
  {
    id: "3",
    title: "Strategic Partnerships",
    description:
      "Building bridges between international corporations and African businesses.",
    icon: "🤝",
    category: "Partnerships",
  },
  {
    id: "4",
    title: "Market Research",
    description:
      "In-depth market intelligence and business development insights across Africa.",
    icon: "📊",
    category: "Research",
  },
];

const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  services = defaultServices,
  limit,
  showViewAll = true,
}) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section ref={elementRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to drive growth and expansion
            across African markets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayServices.map((service, index) => (
            <div
              key={service.id}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card hover className="h-full">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-sm text-primary font-semibold">
                  {service.category}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg">View All Services</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesShowcase;
