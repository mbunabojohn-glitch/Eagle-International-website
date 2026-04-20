export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}

export type ServiceResponse = Service[];
