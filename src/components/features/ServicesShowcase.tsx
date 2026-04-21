import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "../common/Card";
import Button from "../common/Button";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import type { Service } from "../../types";

interface ServicesShowcaseProps {
  services?: Service[];
  limit?: number;
  showViewAll?: boolean;
}

const defaultServices: Service[] = [
  {
    id: "1",
    title: "Oil & Gas Trading",
    description: "Crude oil and petroleum products trading with strategic partnerships across global markets.",
    icon: "⚡",
    features: [],
    image: "/images/Oil-Gas.jpg",
  },
  {
    id: "2",
    title: "Renewable Energy",
    description: "Solar thermal panels, wind power stations, and sustainable energy solutions.",
    icon: "🌞",
    features: [],
    image: "/images/Renewable-Energy.jpg",
  },
  {
    id: "3",
    title: "Engineering Services",
    description: "Civil engineering, construction, and project management for multinational clients.",
    icon: "🏗️",
    features: [],
    image: "/images/Engineering-Service.jpg",
  },
  {
    id: "4",
    title: "Supply Chain Enhancement",
    description: "Value chain optimization and procurement solutions with global strategic partners.",
    icon: "🔗",
    features: [],
    image: "/images/Chain-Enhancement.jpg",
  },
];

const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  services = defaultServices,
  limit,
  showViewAll = true,
}) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const displayServices = limit ? services.slice(0, limit) : services;

  const bookVariants = {
    hidden: {
      rotateY: -90,
      opacity: 0,
      transformOrigin: "left"
    },
    visible: (i: number) => ({
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: [0.45, 0.05, 0.55, 0.95]
      }
    })
  };

  return (
    <section ref={elementRef} className="py-12 md:py-24 bg-dark-primary overflow-hidden">
      <div className="container-custom">
        <div
          className={`text-center mb-12 md:mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter">
            Our <span className="text-orange-primary">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-grey-medium max-w-3xl mx-auto font-light leading-relaxed px-4">
            Comprehensive solutions designed to drive growth and excellence across energy and engineering sectors worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 perspective-1000">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={bookVariants}
              className="group h-[380px] sm:h-[420px] md:h-[450px] relative preserve-3d cursor-pointer"
            >
              <Card className="h-full w-full p-0 overflow-hidden relative border-none bg-dark-secondary rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="absolute inset-0 z-0">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-dark-tertiary" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                <div className="absolute inset-0 z-10 p-4 sm:p-6 md:p-8 flex flex-col justify-end h-full">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-24 sm:group-hover:-translate-y-28 md:group-hover:-translate-y-32">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 bg-orange-primary/20 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center backdrop-blur-sm border border-orange-primary/30">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-tight leading-tight mb-2">
                      {service.title}
                    </h3>
                  </div>

                  <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <p className="text-grey-light text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    <Link to={`/services#service-${service.id}`} className="block">
                      <Button
                        variant="primary"
                        fullWidth
                        className="py-3 sm:py-4 text-xs sm:text-sm font-bold shadow-lg shadow-orange-primary/20"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-orange-primary/0 group-hover:border-orange-primary/50 rounded-2xl transition-colors duration-500 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12 md:mt-20">
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="px-8 sm:px-12 py-3 sm:py-4 border-white text-white hover:bg-white hover:text-black font-bold tracking-wider text-sm sm:text-base"
              >
                VIEW ALL SERVICES
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesShowcase;
