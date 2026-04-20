import React from "react";
import { clsx } from "clsx";
import Card from "@components/common/Card";
import CTA from "@components/features/CTA";
import { useScrollAnimation } from "@hooks/useScrollAnimation";

const PartnersPage: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: profilesRef, isVisible: profilesVisible } = useScrollAnimation({ threshold: 0.1 });

  const boardFunctions = [
    { title: "Policy Formulation", desc: "Formulating of policies for the organization", icon: "📋" },
    { title: "Effective Operations", desc: "Ensuring effective running of the organization", icon: "⚙️" },
    { title: "Strategic Priorities", desc: "Establishing corporate priorities and goals", icon: "🎯" },
    { title: "Organizational Structure", desc: "Determining the basic organizational structure", icon: "🏗️" },
  ];

  const boardProfiles = [
    {
      name: "Prince (Engr.) Ramoni Babafemi Okeowo",
      role: "Deputy-Chairman & Executive Director",
      image: "/images/Engineering-Service.jpg", // Representing his engineering background
      bio: [
        "Prince (Engr.) Okeowo studied Civil Engineering at the Obafemi Awolowo University, where he obtained Bachelor of Science Degree (BSc) in Civil Engineering in 1991. He equally studied for his Master degree at the same University where he obtained a higher degree, Masters in Business Administration.",
        "He worked briefly with a few engineering companies and later moved on to ENCON International Limited as a Senior Engineer, where he was Head of the Consulting Unit (Human and Material Development). These portfolios exposed him to Management Consulting on World Bank Assisted and International Finance Corporation (IFC) financed projects.",
        "He equally worked with Costain-West Africa Construction Company as Planning Engineer on the 250 Units of Residential Estate for Shell Trustees Ltd. He was also at Shell Petroleum Development Company Limited, a Royal Dutch SHELL Company as a Senior Civil Engineer (Oil & Gas), before joining the Board of Edge International Group, parent company to Eagle International Group LLC."
      ]
    },
    {
      name: "Dr. Wale Adeleye",
      role: "Executive Vice President & COO",
      image: "/images/Chain-Enhancement.jpg", // Representing supply chain/ops focus
      bio: [
        "Dr. Wale Adeleye is the Executive Vice President & Chief Operating Officer, Eagle International Group LLC. He is a trained pharmacist by profession, graduating with honors from the prestigious Bernard J Dunn School of Pharmacy, Shenandoah University in Winchester, Virginia, USA.",
        "He graduated with Doctorate of Pharmacy degree and Masters in Business Administration.",
        "He has worked at different management/leadership positions with different companies in the healthcare industry including Mariner health, Rite Aid pharmacy, Bravo Health, Health Spring among others."
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden border-b-2 border-orange-primary bg-dark-secondary text-center">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/Petroleum-Logistics.jpg"
            alt="Partners and Leadership"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white drop-shadow-2xl leading-tight">
              Partners & <span className="text-orange-primary">Leadership</span>
            </h1>
            <p className="text-xl md:text-2xl text-grey-light font-light drop-shadow-lg max-w-3xl mx-auto">
              Driven by a world-class board and technically solid management team.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={headerRef} className="py-24 bg-dark-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={clsx(
            "max-w-4xl transition-all duration-1000 transform",
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase tracking-tight">
              Our Core <span className="text-orange-primary">Strength</span>
            </h2>
            <p className="text-xl text-grey-medium leading-relaxed font-light border-l-4 border-orange-primary/30 pl-6 italic">
              One of our core strengths is the caliber and composition of its Board of Directors, Management and corporate governance system. The promoters deliberately and judiciously engineered and built an experienced, resourceful and technically solid team.
            </p>
            <p className="mt-6 text-lg text-grey-medium leading-relaxed font-light">
              This underscores the high premium we placed on our business and the desire to ensure efficiency, effectiveness and the ability to consistently deliver on our promise to customers, long-term growth and shareholder value.
            </p>
          </div>
        </div>
      </section>

      {/* Board Functions */}
      <section className="py-24 bg-dark-secondary border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
              Functions of <span className="text-orange-primary">The Board</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {boardFunctions.map((func, i) => (
              <div key={i} className="bg-dark-tertiary/50 p-8 rounded-2xl border border-white/5 hover:border-orange-primary/30 transition-all group text-center">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                  {func.icon}
                </div>
                <h4 className="text-white font-bold uppercase tracking-tight mb-4 group-hover:text-orange-primary transition-colors">
                  {func.title}
                </h4>
                <p className="text-grey-medium text-sm leading-relaxed">
                  {func.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Profiles */}
      <section ref={profilesRef} className="py-24 bg-dark-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Board <span className="text-orange-primary">Profiles</span>
            </h2>
          </div>

          <div className="space-y-32">
            {boardProfiles.map((profile, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div className={clsx(
                    "relative group transition-all duration-1000 ease-out transform",
                    profilesVisible ? "translate-x-0 opacity-100" : isEven ? "-translate-x-20 opacity-0" : "translate-x-20 opacity-0",
                    !isEven ? "md:order-2" : ""
                  )}>
                    <div className="absolute -inset-4 bg-orange-primary/10 rounded-3xl blur-2xl group-hover:bg-orange-primary/20 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    <Card className="relative h-[450px] lg:h-[550px] bg-dark-secondary border border-white/5 shadow-2xl overflow-hidden rounded-2xl p-0">
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter leading-tight mb-2">
                          {profile.name}
                        </h3>
                        <p className="text-orange-primary font-bold uppercase tracking-widest text-sm">
                          {profile.role}
                        </p>
                      </div>
                    </Card>
                  </div>

                  <div className={clsx(
                    "space-y-6 transition-all duration-1000 ease-out transform delay-300",
                    profilesVisible ? "translate-x-0 opacity-100" : isEven ? "translate-x-20 opacity-0" : "-translate-x-20 opacity-0"
                  )}>
                    <div className="space-y-6 text-lg text-grey-medium leading-relaxed font-light">
                      {profile.bio.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                    <div className="pt-4">
                      <div className="h-1 w-20 bg-orange-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA
        title="Connect With Our Team"
        description="Our board and management are available for strategic consultations and partnership discussions."
        primaryButton={{
          text: "Get in Touch",
          link: "/contact",
        }}
      />
    </div>
  );
};

export default PartnersPage;
