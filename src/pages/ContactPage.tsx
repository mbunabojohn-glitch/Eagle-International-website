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
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
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
      details: [
        "info@eagleinternational.com",
        "partnerships@eagleinternational.com",
      ],
      description: "Quick response for all inquiries."
    },
    {
      icon: "⏰",
      title: "Operational Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM (EST)",
      ],
      description: "Global coordination 24/7 for urgent trading deals."
    },
  ];

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden border-b-2 border-orange-primary bg-dark-secondary text-center">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/Petroleum-Logistics.jpg"
            alt="Contact Eagle International"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white drop-shadow-2xl leading-tight">
              Get In <span className="text-orange-primary">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-grey-light font-light drop-shadow-lg max-w-3xl mx-auto">
              Ready to explore strategic opportunities in the global energy market?
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section ref={formRef} className="py-24 bg-dark-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Column: Contact Info & Value Prop */}
            <div className={clsx(
              "space-y-12 transition-all duration-1000 transform",
              formVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            )}>
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
                  Let's Build <span className="text-orange-primary">Together</span>
                </h2>
                <p className="text-xl text-grey-medium leading-relaxed font-light border-l-4 border-orange-primary/30 pl-6 italic">
                  "At EAGLE, we delight in satisfying our clients by introducing them to a totally new and refreshing approach to service provision."
                </p>
                <p className="text-lg text-grey-medium font-light">
                  Whether you are looking for crude oil marketing, renewable energy solutions, or strategic engineering partnerships, our team is ready to deliver.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="bg-dark-secondary/50 p-6 rounded-2xl border border-white/5 hover:border-orange-primary/30 transition-all group">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                      {item.icon}
                    </div>
                    <h4 className="text-white font-bold uppercase tracking-tight mb-2 group-hover:text-orange-primary transition-colors">
                      {item.title}
                    </h4>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-grey-light text-sm font-medium">{detail}</p>
                    ))}
                    <p className="text-grey-medium text-xs mt-3 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Special CTA Card */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-orange-primary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Card className="relative bg-gradient-to-br from-dark-secondary to-dark-tertiary border-orange-primary/20 p-8 rounded-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Direct Partnership</h3>
                  <p className="text-grey-medium mb-6 font-light">
                    Intermediaries are identified in advance and given written engagement of service in accordance with our best value chain practices.
                  </p>
                  <div className="flex items-center gap-3 text-orange-primary font-bold uppercase tracking-widest text-xs">
                    <span className="w-12 h-[2px] bg-orange-primary"></span>
                    Strictly Professional
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className={clsx(
              "transition-all duration-1000 transform delay-300",
              formVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            )}>
              <Card className="bg-dark-secondary border-white/5 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-8 uppercase tracking-tighter">
                    Send An <span className="text-orange-primary">Inquiry</span>
                  </h3>

                  {submitStatus === "success" && (
                    <div className="mb-8 p-6 bg-orange-primary/10 border border-orange-primary/30 rounded-2xl animate-fade-in">
                      <p className="text-orange-primary font-bold flex items-center gap-3">
                        <span className="text-2xl">✓</span> Inquiry Received Successfully. We will contact you shortly.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-grey-medium uppercase tracking-widest ml-1">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-dark-tertiary/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orange-primary/50 transition-all placeholder:text-white/10"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-grey-medium uppercase tracking-widest ml-1">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-dark-tertiary/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orange-primary/50 transition-all placeholder:text-white/10"
                          placeholder="email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-grey-medium uppercase tracking-widest ml-1">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-dark-tertiary/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orange-primary/50 transition-all placeholder:text-white/10"
                          placeholder="Organization Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-grey-medium uppercase tracking-widest ml-1">Subject</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full bg-dark-tertiary/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orange-primary/50 transition-all appearance-none cursor-pointer"
                        >
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
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-dark-tertiary/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orange-primary/50 transition-all resize-none placeholder:text-white/10"
                        placeholder="Provide details about your project or inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      className="py-5 shadow-2xl shadow-orange-primary/20"
                    >
                      {isSubmitting ? "Processing..." : "Submit Inquiry"}
                    </Button>
                    
                    <p className="text-center text-[10px] text-grey-medium uppercase tracking-[0.2em] pt-4">
                      All communications are strictly confidential
                    </p>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote Section */}
      <section className="py-24 bg-dark-secondary border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-orange-primary text-6xl opacity-20">"</div>
            <p className="text-3xl md:text-4xl font-light text-white leading-tight italic">
              We believe in consistently offering cutting edge solutions and ensuring our clients return based on the quality service provided.
            </p>
            <div className="h-1 w-20 bg-orange-primary mx-auto"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
