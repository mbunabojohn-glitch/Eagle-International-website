export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}
export interface ContactFormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
}
export interface ContactResponse {
    success: boolean;
    message: string;
}
