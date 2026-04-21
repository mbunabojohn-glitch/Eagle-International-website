import { useState } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_LINKS, COMPANY_INFO, SITE_TAGLINE } from "../../../utils/constants";
import type { NavigationLink } from "../../../types";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )},
    { name: "Twitter", href: "#", icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
    )}
  ];

  return (
    <footer className="bg-dark-primary text-white border-t border-dark-tertiary">
      <div className="bg-dark-secondary border-b border-dark-tertiary py-12">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h3 className="font-heading text-2xl font-bold mb-2">Subscribe to our newsletter</h3>
            <p className="text-grey-medium">Stay updated with the latest energy insights and company news.</p>
          </div>
          <form className="flex w-full md:w-auto gap-2" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              className="bg-dark-tertiary border border-grey-dark px-4 py-3 rounded-md focus:outline-none focus:border-orange-primary flex-grow md:w-80"
            />
            <button 
              type="submit"
              className="bg-orange-primary hover:bg-orange-dark text-white px-6 py-3 rounded-md transition-colors font-bold uppercase tracking-wider text-sm whitespace-nowrap"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <span className="text-3xl font-black uppercase tracking-tighter text-white">
                Eagle <span className="text-orange-primary transition-colors group-hover:text-white">International</span>
              </span>
            </Link>
            <p className="text-grey-medium leading-relaxed">
              {SITE_TAGLINE}. {COMPANY_INFO.name} is a leader in global energy solutions and strategic engineering services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-dark-tertiary flex items-center justify-center text-grey-light hover:bg-orange-primary hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider mb-8 relative inline-block">
              Navigation
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-orange-primary"></span>
            </h4>
            <ul className="grid grid-cols-1 gap-4">
              {NAVIGATION_LINKS.map((link: NavigationLink) => (
                <li key={link.id}>
                  <Link 
                    to={link.path}
                    className="text-grey-medium hover:text-orange-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider mb-8 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-orange-primary"></span>
            </h4>
            <ul className="space-y-4 text-grey-medium">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.suite}<br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-orange-primary transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${COMPANY_INFO.emails.info}`} className="hover:text-orange-primary transition-colors truncate">
                  {COMPANY_INFO.emails.info}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider mb-8 relative inline-block">
              Our Vision
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-orange-primary"></span>
            </h4>
            <p className="text-grey-medium mb-6 italic">
              "To be the most reliable and innovative partner in the global energy landscape, delivering excellence through integrity and transparency."
            </p>
            <div className="pt-4 border-t border-dark-tertiary">
              <span className="text-xs uppercase tracking-[0.2em] text-orange-primary font-bold">
                Established 1999
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-tertiary pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-grey-medium text-sm">
            Copyright © {currentYear} {COMPANY_INFO.name}. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-grey-medium">
            <Link to="/privacy" className="hover:text-orange-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-orange-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
