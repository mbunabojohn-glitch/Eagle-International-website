import React from "react";
import { clsx } from "clsx";
import InfoCards from "@components/features/InfoCards";
import CTA from "@components/features/CTA";
import Card from "@components/common/Card";
import { useScrollAnimation } from "@hooks/useScrollAnimation";

interface AnimatedAboutSectionProps {
  title: string;
  subtitle?: string;
  description: React.ReactNode;
  image: string;
  index: number;
  id?: string;
}

const AnimatedAboutSection: React.FC<AnimatedAboutSectionProps> = ({
  title,
  subtitle,
  description,
  image,
  index,
  id,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <section
      ref={elementRef}
      id={id}
      className={clsx(
        "py-24 overflow-hidden",
        isEven ? "bg-dark-primary" : "bg-dark-secondary border-y border-white/5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div
            className={clsx(
              "relative group transition-all duration-1000 ease-out transform",
              isVisible
                ? "translate-x-0 opacity-100"
                : isEven
                ? "translate-x-20 opacity-0"
                : "-translate-x-20 opacity-0",
              isEven ? "md:order-2" : ""
            )}
          >
            <div className="absolute -inset-4 bg-orange-primary/10 rounded-3xl blur-2xl group-hover:bg-orange-primary/20 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <Card className="relative h-[400px] lg:h-[500px] bg-dark-secondary border border-white/5 shadow-2xl overflow-hidden rounded-2xl p-0">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              {subtitle && (
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-4 py-1 rounded-full bg-orange-primary/20 backdrop-blur-md border border-orange-primary/30 text-orange-primary text-xs font-bold uppercase tracking-widest mb-2">
                    {subtitle}
                  </span>
                </div>
              )}
            </Card>
          </div>

          {/* Content Column */}
          <div
            className={clsx(
              "space-y-8 transition-all duration-1000 ease-out transform delay-300",
              isVisible
                ? "translate-x-0 opacity-100"
                : isEven
                ? "-translate-x-20 opacity-0"
                : "translate-x-20 opacity-0"
            )}
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                {title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={i === 0 ? "text-white" : "text-orange-primary"}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h2>
              <div className="h-1.5 w-24 bg-orange-primary rounded-full"></div>
            </div>

            <div className="text-xl text-grey-medium leading-relaxed font-light border-l-4 border-orange-primary/30 pl-6 space-y-4">
              {description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPage: React.FC = () => {
  const values = [
    {
      title: "Integrity",
      description:
        "The fundamental driving force of our corporation, ensuring ethical conduct in every global transaction.",
      icon: "⚖️",
    },
    {
      title: "Transparency",
      description:
        "We maintain open and clear communication with all partners, intermediaries, and stakeholders.",
      icon: "🔍",
    },
    {
      title: "Accountability",
      description:
        "Taking full responsibility for our services and solutions across the entire energy value chain.",
      icon: "📈",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden border-b-2 border-orange-primary bg-dark-secondary text-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/Petroleum-Logistics.jpg"
            alt="About Eagle International Group"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white drop-shadow-2xl leading-tight">
              About <span className="text-orange-primary">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-grey-light font-light drop-shadow-lg max-w-3xl mx-auto">
              A supply chain value enhancer and service company driven by
              integrity, transparency, and global excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Heritage Section */}
      <AnimatedAboutSection
        index={0}
        title="Our Heritage"
        subtitle="Est. 1999"
        image="/images/Chain-Enhancement.jpg"
        description={
          <>
            <p>
              Eagle International Group LLC (EAGLE GROUP) is a privately held
              corporation and a cornerstone affiliate of Edge International
              Group. Founded in 1999, our sister company began as a management
              and engineering consultant firm with strategic alliances in real
              estate and energy.
            </p>
            <p>
              Today, EAGLE GROUP has evolved into a global force, offering a
              wide spectrum of products and services across the petrochemical,
              Oil & Gas, and broader energy industries.
            </p>
          </>
        }
      />

      {/* Global Impact Section */}
      <AnimatedAboutSection
        index={1}
        title="Global Impact"
        subtitle="World-Class Partnerships"
        image="/images/Engineering-Service.jpg"
        description={
          <>
            <p>
              Our wealth of experience is derived from major projects executed
              with strategic partners across the United Kingdom, Spain, China,
              Ghana, Nigeria, and the USA.
            </p>
            <p>
              We have conducted major assignments for the World Bank, IFC,
              Royal Dutch SHELL, COSTAIN, and other international governments
              and multinational corporations.
            </p>
          </>
        }
      />

      {/* Strategic Evolution Section */}
      <AnimatedAboutSection
        index={2}
        title="Strategic Evolution"
        subtitle="Future Focused"
        image="/images/Oil-Gas.jpg"
        description={
          <>
            <p>
              Formed as a response to the emerging energy market, EAGLE GROUP is
              a purposely built vehicle to venture into Crude Oil exploration
              and Petroleum Products marketing.
            </p>
            <p>
              Our commitment includes the acquisition of a 30,000bpd light crude
              refinery in Ingleside, Texas, with plans to expand to 100,000bpd
              to meet increasing global demand.
            </p>
          </>
        }
      />

      <InfoCards
        title="Our Core Values"
        subtitle="The fundamental driving forces of our corporation"
        cards={values}
        variant="primary"
      />

      <CTA
        title="Join Our Strategic Network"
        description="We are consistently looking to develop long-term working relationships with technically capable partners globally."
        primaryButton={{
          text: "Contact Us",
          link: "/contact",
        }}
      />
    </div>
  );
};

export default AboutPage;
