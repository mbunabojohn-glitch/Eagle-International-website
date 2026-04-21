import { Link } from "react-router-dom";
import { NAVIGATION_LINKS, COMPANY_INFO, SITE_TAGLINE, CORE_VALUES } from "../../../utils/constants";
import type { NavigationLink } from "../../../types";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-secondary border-t border-dark-tertiary pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-black uppercase tracking-tighter text-white">
                Eagle <span className="text-orange-primary">International</span>
              </span>
            </Link>
            <p className="text-grey-light font-light leading-relaxed">
              {SITE_TAGLINE}
            </p>
            <div className="flex space-x-4">
              {CORE_VALUES.map((value) => (
                <span key={value} className="text-xs uppercase tracking-widest text-orange-primary/60">
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAVIGATION_LINKS.map((link: NavigationLink) => (
                <li key={link.id}>
                  <Link 
                    to={link.path}
                    className="text-grey-medium hover:text-orange-primary transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl font-bold text-orange-primary mb-6 uppercase">
              Contact
            </h4>
            <ul className="space-y-3 text-grey-light">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-orange-primary transition-colors duration-300"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.emails.info}`}
                  className="hover:text-orange-primary transition-colors duration-300"
                >
                  {COMPANY_INFO.emails.info}
                </a>
              </li>
              <li>
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-tertiary pt-8 text-center">
          <p className="text-grey-medium text-sm">
            Copyright © {currentYear} {COMPANY_INFO.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
