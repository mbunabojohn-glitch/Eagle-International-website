import type { NavigationLink, Stat, InfoCard } from "@types";

export const SITE_NAME = "Eagle International Group LLC";
export const SITE_TAGLINE = "Energy • Engineering • Excellence";

export const COMPANY_INFO = {
  name: "Eagle International Group LLC",
  founded: 1999,
  address: {
    street: "10480 Little Patuxent Parkway",
    suite: "Suite 400",
    city: "Columbia",
    state: "Maryland",
    zip: "21044",
    country: "USA",
  },
  phone: "+1 (410) 740-8744",
  fax: "+1 (410) 740-8704",
  emails: {
    info: "info@eagleinternationalgroup.us",
    enquiries: "enquiries@eagleinternationalgroup.us",
    business: "business@eagleinternationalgroup.us",
  },
  website: "www.eagleinternationalgroup.us",
};

export const NAVIGATION_LINKS: NavigationLink[] = [
  { id: "1", label: "Home", path: "/" },
  { id: "2", label: "About Us", path: "/about" },
  { id: "3", label: "Services", path: "/services" },
  { id: "4", label: "Partners", path: "/partners" },
  { id: "5", label: "Our Mission", path: "/mission" },
  { id: "6", label: "Contact Us", path: "/contact" },
];

export const STATS: Stat[] = [
  { id: "1", value: 25, label: "Years of Excellence" },
  { id: "2", value: 100000, label: "BPD Capacity" },
  { id: "3", value: 12, label: "Million Barrels" },
  { id: "4", value: 6, label: "Global Markets" },
];

export const INFO_CARDS: InfoCard[] = [
  {
    id: "1",
    title: "Welcome !",
    headerColor: "orange",
    image: "/images/industrial.jpg",
    heading: "About Eagle International Group",
    description:
      "A privately held corporation and supply chain value enhancer, duly registered in Maryland, USA. Founded in 1999 as part of the Edge International Group conglomerate, we have grown to offer comprehensive solutions in Oil & Gas, Renewable Energy, and Engineering services.",
    link: "/about",
  },
  {
    id: "2",
    title: "Service",
    headerColor: "blue",
    image: "/images/team-meeting.jpg",
    heading: "Comprehensive Solutions",
    description:
      "Oil & Gas Trading • Renewable Energy Systems • Civil Engineering • Supply Chain Management • Strategic Consulting. We deliver excellence through our worldwide network of strategic partners and technical expertise.",
    link: "/services",
  },
  {
    id: "3",
    title: "Our Mission",
    headerColor: "grey",
    image: "/images/professional-team.jpg",
    heading: "Excellence & Integrity",
    description:
      "Dedicated to delivering efficient and results-oriented consultancy services through our quality professional staff and technical interventions. Our core values: Integrity, Transparency, and Accountability.",
    link: "/mission",
  },
];

export const CORE_VALUES = ["Integrity", "Transparency", "Accountability"];

export const CAROUSEL_INTERVAL = 5000; // 5 seconds
export const ANIMATION_DURATION = 1000; // 1 second
