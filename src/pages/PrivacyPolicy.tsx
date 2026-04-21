const PrivacyPolicy = () => {
  return (
    <div className="container-custom py-20">
      <h1 className="font-heading text-4xl font-bold text-white mb-8">Privacy Policy</h1>
      
      <div className="prose prose-invert max-w-4xl space-y-8 text-grey-light">
        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">1. Information We Collect</h2>
          <p className="leading-relaxed">
            Eagle International Group LLC ("we," "our," or "us") collects information you provide directly to us, such as when you request information about our services, subscribe to our newsletter, or contact us for inquiries. This information may include your name, email address, phone number, company name, and any other information you choose to provide.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">2. How We Use Your Information</h2>
          <p className="leading-relaxed mb-4">We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Respond to your inquiries and fulfill your requests</li>
            <li>Send you information about our services, updates, and newsletters</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">3. Information Sharing</h2>
          <p className="leading-relaxed">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided that those parties agree to keep this information confidential.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">4. Data Security</h2>
          <p className="leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">5. Cookies and Tracking</h2>
          <p className="leading-relaxed">
            Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. Cookies help us understand how visitors use our website so we can improve functionality and content.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">6. Your Rights</h2>
          <p className="leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">7. Third-Party Links</h2>
          <p className="leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">8. Children's Privacy</h2>
          <p className="leading-relaxed">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">9. Changes to This Policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on this page with a revised "Last Updated" date. Your continued use of our services after any modifications indicates your acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">10. Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="mt-4 p-4 bg-dark-secondary rounded-md border border-dark-tertiary">
            <p className="font-bold text-white">Eagle International Group LLC</p>
            <p>10480 Little Patuxent Parkway, Suite 400</p>
            <p>Columbia, Maryland 21044</p>
            <p>Email: privacy@eagleinternationalgroup.us</p>
            <p>Phone: +1 (410) 740-8744</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
