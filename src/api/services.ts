import api from "./base";
import type { ServiceResponse, ContactFormData, ContactResponse, EnergyPrice, EIADataResponse } from "../types";

// Services API
export const servicesApi = {
  // Get all services
  getAll: async (): Promise<ServiceResponse> => {
    // Return mock data for development
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockServices), 500);
    });
  },

  // Get service by ID
  getById: async (id: string) => {
    const response = await api.get(`/services/${id}`);
    return response.data;
  },

  // Get services by category
  getByCategory: async (category: string) => {
    const response = await api.get(`/services/category/${category}`);
    return response.data;
  },
};

// Contact API
export const contactApi = {
  send: async (data: ContactFormData): Promise<ContactResponse> => {
    const response = await api.post<ContactResponse>("/contact", data);
    return response.data;
  },
};

// Partners API
export const partnersApi = {
  getAll: async () => {
    const response = await api.get("/partners");
    return response.data;
  },
};

// Market Ticker API (EIA)
export const marketTickerApi = {
  // Get energy prices from EIA API (with mock data as fallback)
  getEnergyPrices: async (): Promise<EnergyPrice[]> => {
    // Mock data for development/testing
    const mockPrices: EnergyPrice[] = [
      {
        id: "brent",
        name: "Brent Crude Oil",
        icon: "🛢️",
        currentPrice: 85.50,
        change: 1.25,
        percentChange: 1.48,
        unit: "USD/bbl",
      },
      {
        id: "wti",
        name: "WTI Crude Oil",
        icon: "🛢️",
        currentPrice: 82.30,
        change: -0.80,
        percentChange: -0.96,
        unit: "USD/bbl",
      },
      {
        id: "natural_gas",
        name: "Natural Gas",
        icon: "💨",
        currentPrice: 2.95,
        change: 0.15,
        percentChange: 5.36,
        unit: "USD/MMBtu",
      },
      {
        id: "heating_oil",
        name: "Heating Oil",
        icon: "🔥",
        currentPrice: 2.45,
        change: 0.05,
        percentChange: 2.08,
        unit: "USD/gal",
      },
      {
        id: "gasoline",
        name: "Gasoline",
        icon: "⛽",
        currentPrice: 2.80,
        change: -0.03,
        percentChange: -1.07,
        unit: "USD/gal",
      },
      {
        id: "propane",
        name: "Propane",
        icon: "💧",
        currentPrice: 1.75,
        change: 0.08,
        percentChange: 4.76,
        unit: "USD/gal",
      },
    ];
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockPrices), 800);
    });
    
    // Uncomment below for actual EIA API calls
    /*
    const apiKey = import.meta.env.VITE_EIA_API_KEY;
    
    if (!apiKey) {
      // Fetch data for all three products
      // Note: You'll need to adjust the series IDs based on EIA's actual API structure
      // For now, using mock data is recommended during development
      const [brentData, wtiData, gasData] = await Promise.all([
        fetchEIAPetroleumPrice("PET.WTISHD.M", "RBRTE"), // Example series ID
        fetchEIAPetroleumPrice("PET.RBRTE.D", "RBRTE"),
        fetchEIANaturalGasPrice("NG.RNGWHHD.D"),
      ]);
      
      // Process and return data
      return [
        {
          id: "brent",
          name: "Brent Crude Oil",
          icon: "🛢️",
          currentPrice: brentData,
          change: 1.25,
          percentChange: 1.54,
          unit: "USD/bbl"
        },
        {
          id: "wti",
          name: "WTI Crude Oil",
          icon: "⛽",
          currentPrice: wtiData,
          change: -0.45,
          percentChange: -0.57,
          unit: "USD/bbl"
        },
        {
          id: "natural_gas",
          name: "Natural Gas",
          icon: "🔥",
          currentPrice: gasData,
          change: 0.12,
          percentChange: 4.39,
          unit: "USD/MMBtu"
        }
      ];
    }
    
    // Fallback to mock
    return mockPrices;
    */
  },
};

// Helper function to fetch EIA petroleum price
const fetchEIAPetroleumPrice = async (endpoint: string, seriesId: string): Promise<number> => {
  const apiKey = import.meta.env.VITE_EIA_API_KEY;
  const response = await fetch(
    `https://api.eia.gov/v2/petroleum/pri/spt/data/?api_key=${apiKey}&frequency=daily&data[0]=value&sort[0][column]=period&sort[0][direction]=desc&length=1`
  );
  const data: EIADataResponse = await response.json();
  return data.response.data[0].value;
};

// Helper function to fetch EIA natural gas price
const fetchEIANaturalGasPrice = async (seriesId: string): Promise<number> => {
  const apiKey = import.meta.env.VITE_EIA_API_KEY;
  const response = await fetch(
    `https://api.eia.gov/v2/natural-gas/pri/fut/data/?api_key=${apiKey}&frequency=daily&data[0]=value&sort[0][column]=period&sort[0][direction]=desc&length=1`
  );
  const data: EIADataResponse = await response.json();
  return data.response.data[0].value;
};

export const mockServices: ServiceResponse = [
  {
    id: "1",
    title: "Oil & Gas Trading",
    description:
      "In collaboration with various strategic partners, we have spot-buy/short-term contracts in place for the supply of AGO, D2, PMS, DPK and JP 54 to source directly from Russia and Europe to end-buyers and intermediary trading companies in Europe, America and the W/Africa sub-region. We are also in an advanced stage of fine tuning the marketing of 12million Barrel quarterly Crude Oil allocation from Nigeria in collaboration with some majors and re-seller companies. Our interest is ongoing in the acquisition and re-work of a 30,000bpd refinery to 100,000bpd in Ingleside, Texas.",
    icon: "⚡",
    features: [
      "Spot-buy & Short-term Contracts",
      "AGO, D2, PMS, DPK & JP 54 Supply",
      "12M Barrel Quarterly Crude Allocation",
      "Mid-stream Marketing Operations",
      "Refinery Acquisition (Ingleside, Texas)",
      "Registered with USRBC",
    ],
    image: "/images/Oil-Gas.jpg",
  },
  {
    id: "2",
    title: "Renewable Energy",
    description:
      "Since the birth of the flagship of THE GROUP, A division of the Conglomerate began to explore new business to provide sources of renewable energy in tandem with focus on the sustainability and stability of the environment and the ecosystem. Part of the GROUP effort is to exploit the inexhaustible energy of the sun (SOLAR ENERGY). We are in partnership and represent the manufacturers both in United States and Spain of Installation Systems of all types of power/energy generation through thermal solar panels & photovoltaic energy sources. Considerations are also in top-gear to implement and install wind-power station/farms and Water/Gas turbine systems in some of African States, especially, Northern Nigeria.",
    icon: "🌞",
    features: [
      "Solar Energy Exploitation",
      "Thermal Solar Panels & Photovoltaics",
      "US & Spanish Manufacturer Partnerships",
      "Wind-power Station Implementation",
      "Water/Gas Turbine Systems",
      "Independent Power Generation Projects",
    ],
    image: "/images/Renewable-Energy.jpg",
  },
  {
    id: "3",
    title: "Engineering Services",
    description:
      "EAGLE INTERNATIONAL GROUP is a premier engineering service provider with a focus on delivering relevant, modern, and technical methodologies. We pride ourselves on being a global firm in our orientation, structure, and philosophy, consistently offering cutting-edge solutions that eclipse the highest global standards. Our engineering division works in tandem with our energy sectors to provide comprehensive infrastructure and technical support for multinational projects, ensuring value for money and the highest quality service provision.",
    icon: "🏗️",
    features: [
      "Modern Technical Methodologies",
      "Cutting-edge Infrastructure Solutions",
      "Global Standard Engineering",
      "Multinational Project Management",
      "Technical Consultancy",
      "Value-driven Implementation",
    ],
    image: "/images/Engineering-Service.jpg",
  },
  {
    id: "4",
    title: "Supply Chain Enhancement",
    description:
      "Eagle International Group adheres to strict international trading practices such as INCOTERM 2000. As part of our best value chain enhancing practice, all intermediaries are identified in advance and are given written engagement of service. We guide and pride our customers to follow strict contractual procedures, which generally entails placing of financial instrument in accordance with standard banking practices. This rigorous approach ensures a stable and efficient supply chain for critical resources globally, connecting African markets with international opportunities through secure and transparent processes.",
    icon: "🔗",
    features: [
      "INCOTERM 2000 Compliance",
      "Strict Contractual Procedures",
      "Intermediary Engagement Standards",
      "Value Chain Optimization",
      "International Banking Practices",
      "Global Market Access Security",
    ],
    image: "/images/Chain-Enhancement.jpg",
  },
];
