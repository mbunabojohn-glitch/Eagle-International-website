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
    description:
      "Crude oil and petroleum products trading with strategic partnerships across global markets.",
    icon: "⚡",
    features: [],
    image: "/images/Oil-Gas.jpg",
  },
  {
    id: "2",
    title: "Renewable Energy",
    description:
      "Solar thermal panels, wind power stations, and sustainable energy solutions.",
    icon: "🌞",
    features: [],
    image: "/images/Renewable-Energy.jpg",
  },
  {
    id: "3",
    title: "Engineering Services",
    description:
      "Civil engineering, construction, and project management for multinational clients.",
    icon: "🏗️",
    features: [],
    image: "/images/Engineering-Service.jpg",
  },
  {
    id: "4",
    title: "Supply Chain Enhancement",
    description:
      "Value chain optimization and procurement solutions with global strategic partners.",
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
    <section ref={elementRef} className="py-24 bg-dark-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            Our <span className="text-orange-primary">Services</span>
          </h2>
          <p className="text-xl text-grey-medium max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive solutions designed to drive growth and excellence
            across energy and engineering sectors worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={bookVariants}
              className="group h-[450px] relative preserve-3d cursor-pointer"
            >
              <Card className="h-full w-full p-0 overflow-hidden relative border-none bg-dark-secondary rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                {/* Background Image with Overlay */}
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

                {/* Content Container */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end h-full">
                  {/* Icon & Title - Always Visible */}
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-32">
                    <div className="text-4xl mb-4 bg-orange-primary/20 w-16 h-16 rounded-xl flex items-center justify-center backdrop-blur-sm border border-orange-primary/30">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight leading-tight mb-2">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description & Button - Revealed on Hover */}
                  <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <p className="text-grey-light text-sm mb-6 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    <Link to={`/services#service-${service.id}`} className="block">
                      <Button 
                        variant="primary" 
                        fullWidth 
                        className="py-4 text-sm font-bold shadow-lg shadow-orange-primary/20"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Decorative border revealed on hover */}
                <div className="absolute inset-0 border-2 border-orange-primary/0 group-hover:border-orange-primary/50 rounded-2xl transition-colors duration-500 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-20">
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-12 py-4 border-white text-white hover:bg-white hover:text-black font-bold tracking-widest"
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
