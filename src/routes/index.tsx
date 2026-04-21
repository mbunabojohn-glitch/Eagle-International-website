import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import {
  HomePage as Home,
  AboutPage as About,
  ServicesPage as Services,
  PartnersPage as Partners,
  MissionPage as Mission,
  ContactPage as Contact,
  PrivacyPolicy,
  TermsOfService,
} from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="partners" element={<Partners />} />
        <Route path="mission" element={<Mission />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsOfService />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
