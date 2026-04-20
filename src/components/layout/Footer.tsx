import { Link } from "react-router-dom";
import { COMPANY_INFO, NAVIGATION_LINKS, CORE_VALUES } from "@utils/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-secondary border-t-2 border-orange-primary pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-xl font-bold text-orange-primary mb-6 uppercase">
              Eagle International Group
            </h4>
            <p className="text-grey-light leading-relaxed mb-4">
              A premier engineering and energy solutions provider with over 25
              years of excellence in delivering innovative, sustainable, and
              efficient solutions across global markets.
            </p>
            <p className="text-grey-light">
              <strong className="text-white">Core Values:</strong>{" "}
              {CORE_VALUES.join(" • ")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-bold text-orange-primary mb-6 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="text-grey-light hover:text-orange-primary transition-colors duration-300"
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
