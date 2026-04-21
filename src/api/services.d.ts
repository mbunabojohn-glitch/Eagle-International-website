import type { ServiceResponse, ContactFormData, ContactResponse } from "../types";
export declare const servicesApi: {
    getAll: () => Promise<ServiceResponse>;
    getById: (id: string) => Promise<any>;
    getByCategory: (category: string) => Promise<any>;
};
export declare const contactApi: {
    send: (data: ContactFormData) => Promise<ContactResponse>;
};
export declare const partnersApi: {
    getAll: () => Promise<any>;
};
export declare const mockServices: ServiceResponse;
