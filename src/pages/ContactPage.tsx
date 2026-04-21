import React, { useState } from "react";
import { clsx } from "clsx";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ContactPage: React.FC = () => {
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "USA Headquarters",
      details: ["Columbia, Maryland, USA"],
      description: "Our strategic base for North American operations and refinery management."
    },
    {
      icon: "🌍",
      title: "Global Presence",
      details: ["Nigeria, Ghana, UK, Spain, China"],
      description: "Extensive network across Africa, Europe, and Asia."
    },
    {
      icon: "📧",
      title: "Email Support",
      details: ["info@eagleinternational.com", "partnerships@eagleinternational.com"],
      description: "Quick response for all inquiries."
    },
    {
      icon: "⏰",
      title: "Operational Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM (EST)"],
      description: "Global coordination 24/7 for urgent trading deals."
    },
  ];

  return (
    <div className="min-h-screen bg-dark-primary">
      <section className="relative py-16 sm:py-20 md:py-24 flex items-center justify-center overflow-hidden border-b-2 border-orange-primary bg-dark-secondary text-center">
        <div className="absolute inset-0 w-full h-full">
          <img src="/images/Petroleum-Logistics.jpg" alt="Contact Eagle International" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
        </div>
        <div className="relative z-10 w-full container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 uppercase tracking-tighter text-white drop-shadow-2xl leading-tight">
              Get In <span className="text-orange-primary">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-grey-light font-light drop-shadow-lg max-w-3xl mx-auto px-4">
              Ready to explore strategic opportunities in the global energy market?
            </p>
          </div>
        </div>
      </section>

      <section ref={formRef} className="py-12 sm:py-16 md:py-24 bg-dark-primary overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div className={clsx("space-y-8 sm:space-y-10 md:space-y-12 transition-all duration-1000 transform", formVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0")}>
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                  Let's Build <span className="text-orange-primary">Together</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-grey-medium leading-relaxed font-light border-l-4 border-orange-primary/30 pl-4 sm:pl-6 italic">
                  "At EAGLE, we delight in satisfying our clients by introducing them to a totally new and refreshing approach to service provision."
                </p>
                <p className="text-sm sm:text-base md:text-lg text-grey-medium font-light">
                  Whether you are looking for crude oil marketing, renewable energy solutions, or strategic engineering partnerships, our team is ready to deliver.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="bg-dark-secondary/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 hover:border-orange-primary/30 transition-all group">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                    <h4 className="text-white font-bold uppercase tracking-tight mb-2 group-hover:text-orange-primary transition-colors text-sm sm:text-base">{item.title}</h4>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-grey-light text-xs sm:text-sm font-medium">{detail}</p>
                    ))}
                    <p className="text-grey-medium text-xs mt-2 sm:mt-3 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-orange-primary/10 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Card className="relative bg-gradient-to-br from-dark-secondary to-dark-tertiary border-orange-primary/20 p-6 sm:p-8 rounded-xl sm:rounded-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-orange-primary/5 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16 blur-2xl"></div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-tight">Direct Partnership</h3>
                  <p className="text-grey-medium mb-4 sm:mb-6 font-light text-sm sm:text-base">
                    Intermediaries are identified in advance and given written engagement of service in accordance with our best value chain practices.
                  </p>
                  <div className="flex items-center gap-2 sm:gap-3 text-orange-primary font-bold uppercase tracking-widest text-xs">
                    <span className="w-8 sm:w-12 h-[2px] bg-orange-primary"></span>
                    Strictly Professional
                  </div>
                </Card>
              </div>
            </div>

            <div className={clsx("transition-all duration-1000 transform delay-300", formVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0")}>
              <Card className="bg-dark-secondary border-white/5 p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-orange-primary/5 rounded-full blur-3xl -mr-24 sm:-mr-32 -mt-24 sm:-mt-32"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 sm:mb-8 uppercase tracking-tighter">
                    Send An <span className="text-orange-primary">Inquiry</span>
                  </h3>

                  {submitStatus === "success" && (
                    <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-orange-primary/10 border border-orange-primary/30 rounded-xl sm:rounded-2xl animate-fade-in">
                      <p className="text-orange-primary font-bold flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                        <span className="text-xl sm:text-2xl">✓</span> Inquiry Received Successfully. We will contact you shortly.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-grey-medium uppercase tracking-widest ml-1">Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-dark-tertiary/50 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white focus:outline-none focus:border-orange-primary/50 transition-all placeholder:text-white/10 text-sm sm:text-base" placeholder="Your Name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-grey-medium uppercase tracking-widest ml-1">Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-dark-tertiary/50 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white focus:outline-none focus:border-orange-primary/50 transition-all placeholder:text-white/10 text-sm sm:text-base" placeholder="email@company.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-grey-medium uppercase tracking-widest ml-1">Company</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-dark-tertiary/50 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white focus:outline-none focus:border-orange-primary/50 transition-all placeholder:text-white/10 text-sm sm:text-base" placeholder="Organization Name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-grey-medium uppercase tracking-widest ml-1">Subject</label>
                        <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-dark-tertiary/50 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white focus:outline-none focus:border-orange-primary/50 transition-all appearance-none cursor-pointer text-sm sm:text-base">
                          <option value="" className="bg-dark-secondary">Select Inquiry Type</option>
                          <option value="oil-gas" className="bg-dark-secondary">Oil & Gas Trading</option>
                          <option value="renewable" className="bg-dark-secondary">Renewable Energy</option>
                          <option value="engineering" className="bg-dark-secondary">Engineering Services</option>
                          <option value="partnership" className="bg-dark-secondary">Strategic Partnership</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-grey-medium uppercase tracking-widest ml-1">Message</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full bg-dark-tertiary/50 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white focus:outline-none focus:border-orange-primary/50 transition-all placeholder:text-white/10 resize-none text-sm sm:text-base" placeholder="Tell us about your project or inquiry..." />
                    </div>

                    <Button type="submit" variant="primary" size="lg" fullWidth isLoading={isSubmitting} className="py-3 sm:py-4 text-sm sm:text-base">
                      Send Inquiry
                    </Button>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
