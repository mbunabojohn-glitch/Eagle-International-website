import React from "react";
import { clsx } from "clsx";
import InfoCards from "@components/features/InfoCards";
import CTA from "@components/features/CTA";
import Card from "@components/common/Card";
import { useScrollAnimation } from "@hooks/useScrollAnimation";

const MissionPage: React.FC = () => {
  const { elementRef: mvRef, isVisible: mvVisible } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: successRef, isVisible: successVisible } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: partnersRef, isVisible: partnersVisible } = useScrollAnimation({ threshold: 0.1 });

  const successFactors = [
    { title: "Technical Skill Set", desc: "World class technical expertise", icon: "🛠️" },
    { title: "Professional Staff", desc: "Top Notch and experienced team", icon: "👥" },
    { title: "Operational Capacity", desc: "High technical expertise & scale", icon: "⚙️" },
    { title: "Knowledge Capital", desc: "Sound operational methodologies", icon: "🧠" },
    { title: "High Integrity", desc: "Efficiency and dependability", icon: "⚖️" },
    { title: "Best Practices", desc: "International industry standards", icon: "🌐" },
    { title: "Customer Oriented", desc: "Business process focus", icon: "🤝" },
    { title: "Milestone Delivery", desc: "Detailed support services", icon: "🏁" },
  ];

  const groupPartners = [
    { name: "Eagle International Energy Inc", location: "Baltimore, Maryland", focus: "Petroleum Exploration & Oil & Gas Servicing" },
    { name: "Edge&Edge International Energy Inc", location: "Baltimore, Maryland", focus: "Crude-oil Marketing, Renewable Energy & New Business" },
    { name: "Edge International Services Ltd", location: "Lagos, Nigeria", focus: "Acquisition & Merger, Procurement, Project Management" },
    { name: "Location Builders Limited", location: "Global", focus: "Real Estates & Heavy Civil Engineering Construction" },
    { name: "Avalanche Media & Entertainment", location: "Global", focus: "Events, Media Content Developments & Entertainment" },
    { name: "Penny Sustainable Housing Ltd", location: "Global", focus: "Low-cost and Mass Housing Development Systems" },
  ];

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden border-b-2 border-orange-primary bg-dark-secondary text-center">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/Petroleum-Logistics.jpg"
            alt="Mission and Vision"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white drop-shadow-2xl leading-tight">
              Our <span className="text-orange-primary">Mission</span>
            </h1>
            <p className="text-xl md:text-2xl text-grey-light font-light drop-shadow-lg max-w-3xl mx-auto">
              Delivering results-oriented consulting and value-enhancer services globally.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Statements */}
      <section ref={mvRef} className="py-24 bg-dark-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
             {/* Mission */}
             <div className={clsx(
               "space-y-8 transition-all duration-1000 transform",
               mvVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
             )}>
                <div className="space-y-4">
                  <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
                    Mission <span className="text-orange-primary">Statement</span>
                  </h2>
                  <div className="h-1.5 w-24 bg-orange-primary rounded-full"></div>
                </div>
                <p className="text-xl text-grey-medium leading-relaxed font-light border-l-4 border-orange-primary/30 pl-6 italic">
                  "EAGLE INTERNATIONAL GROUP LLC is dedicated to delivering the most efficient and results-oriented consulting and value-enhancer services to our clients and shall continuously guarantee client satisfaction through the quality of our professional staff and technical interventions."
                </p>
             </div>

             {/* Vision */}
             <div className={clsx(
               "space-y-8 transition-all duration-1000 transform delay-300",
               mvVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
             )}>
                <div className="space-y-4">
                  <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
                    Our <span className="text-orange-primary">Vision</span>
                  </h2>
                  <div className="h-1.5 w-24 bg-orange-primary rounded-full"></div>
                </div>
                <p className="text-lg text-grey-medium leading-relaxed font-light">
                  To be at the forefront of partnership development with crude oil producers that ensures a stable supply of crude oil and petroleum products into the ever demanding energy market; and the provision of top-notch management consulting and advisory services by operating a dynamic business environment guided by sound principles of high integrity and superlative technical competence.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-24 bg-dark-secondary border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">
                Key <span className="text-orange-primary">Objectives</span>
              </h2>
              <p className="text-grey-medium font-light leading-relaxed">
                Strategic targets designed to cement our position as a market leader in the global Oil & Gas business environment.
              </p>
            </div>
            <div className="lg:col-span-2 grid gap-6">
              {[
                { title: "Market Penetration", text: "Achieve 3-5% market penetration within 10 years of global entry." },
                { title: "Market Leadership", text: "Recognition as a veritable leader in Oil & Gas business transactions." },
                { title: "Milestone Excellence", text: "Detailed technically sound support in delivering every supply chain milestone." }
              ].map((obj, i) => (
                <div key={i} className="flex items-center gap-6 bg-dark-tertiary/30 p-8 rounded-2xl border border-white/5 hover:border-orange-primary/30 transition-all group">
                  <span className="text-3xl font-black text-orange-primary/20 group-hover:text-orange-primary transition-colors">0{i+1}</span>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-tight mb-1">{obj.title}</h4>
                    <p className="text-grey-medium font-light">{obj.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section ref={successRef} className="py-24 bg-dark-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
              Critical <span className="text-orange-primary">Success Factors</span>
            </h2>
            <p className="text-grey-medium mt-4 font-light">Our success is hinged on world-class technical skill sets and operational methodologies.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {successFactors.map((factor, i) => (
              <div 
                key={i} 
                className={clsx(
                  "bg-dark-secondary/50 p-6 rounded-2xl border border-white/5 hover:border-orange-primary/30 transition-all group text-center transform",
                  successVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{factor.icon}</div>
                <h4 className="text-white font-bold text-sm uppercase tracking-tight mb-2 group-hover:text-orange-primary transition-colors">{factor.title}</h4>
                <p className="text-grey-medium text-xs font-light">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group & Partners */}
      <section ref={partnersRef} className="py-24 bg-dark-secondary border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
              The Group & <span className="text-orange-primary">Strategic Partners</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupPartners.map((partner, i) => (
              <div 
                key={i} 
                className={clsx(
                  "relative group transition-all duration-1000 transform",
                  partnersVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Card className="h-full bg-dark-tertiary/50 border border-white/5 p-8 hover:bg-dark-secondary transition-colors">
                  <div className="flex flex-col h-full">
                    <span className="text-orange-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">Affiliate</span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2 leading-tight">{partner.name}</h3>
                    <p className="text-grey-light text-sm mb-6 flex items-center gap-2">
                      <span className="text-orange-primary">📍</span> {partner.location}
                    </p>
                    <div className="mt-auto pt-6 border-t border-white/5">
                      <p className="text-grey-medium text-xs uppercase tracking-widest leading-relaxed">{partner.focus}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Structure & Office */}
      <section className="py-24 bg-dark-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
                Legal <span className="text-orange-primary">Structure</span>
              </h2>
              <p className="text-xl text-grey-medium font-light leading-relaxed border-l-4 border-orange-primary/30 pl-6 italic">
                Registered as a corporation with the State of Maryland’s Department of Assessments and Taxation, USA.
              </p>
              <p className="text-grey-medium font-light leading-relaxed">
                In consonance with regulatory provisions, EAGLE INTERNATIONAL GROUP LLC operates as a purposely built vehicle for global energy and trade operations.
              </p>
            </div>
            
            <Card className="bg-dark-secondary border-orange-primary/20 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-primary/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-tighter">Legal Office</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <span className="text-2xl text-orange-primary">📍</span>
                  <div>
                    <p className="text-white font-medium">10480 Little Patuxent Parkway, Suite 400</p>
                    <p className="text-grey-medium">Columbia, Maryland 21044, USA</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-2xl text-orange-primary">📞</span>
                  <div>
                    <p className="text-white font-medium">+1 (410) 740-8744</p>
                    <p className="text-grey-medium">Main Office Line</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-2xl text-orange-primary">📠</span>
                  <div>
                    <p className="text-white font-medium">+1 (410) 740-8704</p>
                    <p className="text-grey-medium">Secure Fax Line</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Partner?"
        description="Join our mission to transform the global energy landscape through integrity and superlative technical competence."
        primaryButton={{
          text: "Contact Our Office",
          link: "/contact",
        }}
      />
    </div>
  );
};

export default MissionPage;
