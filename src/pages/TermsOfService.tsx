const TermsOfService = () => {
  return (
    <div className="container-custom py-20">
      <h1 className="font-heading text-4xl font-bold text-white mb-8">Terms of Service</h1>
      
      <div className="prose prose-invert max-w-4xl space-y-8 text-grey-light">
        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">1. Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By accessing and using the Eagle International Group LLC website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this website or our services. These Terms of Service ("Terms") govern your use of our website and all services provided by Eagle International Group LLC ("we," "our," or "us").
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">2. Description of Services</h2>
          <p className="leading-relaxed mb-4">
            Eagle International Group LLC provides global energy solutions, strategic engineering services, and petroleum logistics including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Oil and Gas Trading and Logistics</li>
            <li>Chain Enhancement Solutions</li>
            <li>Strategic Engineering Services</li>
            <li>Renewable Energy Consulting</li>
            <li>Petroleum Storage and Transportation</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">3. User Responsibilities</h2>
          <p className="leading-relaxed mb-4">By using our services, you agree to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Not use our services for any unlawful purpose</li>
            <li>Not interfere with or disrupt our website or servers</li>
            <li>Not attempt to gain unauthorized access to any systems</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">4. Intellectual Property</h2>
          <p className="leading-relaxed">
            All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Eagle International Group LLC and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent. The Eagle International name and logo are trademarks of Eagle International Group LLC.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">5. Service Availability</h2>
          <p className="leading-relaxed">
            We strive to provide uninterrupted access to our services, but we do not guarantee continuous availability. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice. We are not liable for any damages arising from the unavailability of our services due to maintenance, upgrades, or circumstances beyond our control.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">6. Limitation of Liability</h2>
          <p className="leading-relaxed mb-4">
            To the fullest extent permitted by law, Eagle International Group LLC shall not be liable for:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Any indirect, incidental, special, consequential, or punitive damages</li>
            <li>Loss of profits, revenue, data, or business opportunities</li>
            <li>Any damages resulting from reliance on information provided on this website</li>
            <li>Any errors, inaccuracies, or omissions in content</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">7. Confidentiality</h2>
          <p className="leading-relaxed">
            Any information shared through our services is treated with strict confidentiality. We implement appropriate security measures to protect sensitive business information and proprietary data. However, you acknowledge that no data transmission over the internet is completely secure, and we cannot guarantee the security of information transmitted to or from our systems.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">8. Governing Law</h2>
          <p className="leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of the State of Maryland, United States of America, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be resolved in the courts of Maryland, and you hereby consent to the exclusive jurisdiction of such courts.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">9. Modifications to Terms</h2>
          <p className="leading-relaxed">
            We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on this website. Your continued use of our services after any modifications constitutes your acceptance of the updated Terms. We encourage you to review these Terms periodically to stay informed of any changes.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">10. Severability</h2>
          <p className="leading-relaxed">
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-orange-primary mb-4">11. Contact Information</h2>
          <p className="leading-relaxed">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <div className="mt-4 p-4 bg-dark-secondary rounded-md border border-dark-tertiary">
            <p className="font-bold text-white">Eagle International Group LLC</p>
            <p>10480 Little Patuxent Parkway, Suite 400</p>
            <p>Columbia, Maryland 21044</p>
            <p>Email: legal@eagleinternationalgroup.us</p>
            <p>Phone: +1 (410) 740-8744</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
