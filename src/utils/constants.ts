import type { NavigationLink, Stat } from "../types";

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

export const CORE_VALUES = ["Integrity", "Transparency", "Accountability"];

export const CAROUSEL_INTERVAL = 5000; // 5 seconds
export const ANIMATION_DURATION = 1000; // 1 second
