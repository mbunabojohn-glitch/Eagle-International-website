import type { ContactFormData, ContactFormErrors } from "../types";
/**
 * Format number with thousand separators
 */
export declare const formatNumber: (num: number) => string;
/**
 * Format phone number
 */
export declare const formatPhone: (phone: string) => string;
/**
 * Validate email address
 */
export declare const isValidEmail: (email: string) => boolean;
/**
 * Validate phone number (US format)
 */
export declare const isValidPhone: (phone: string) => boolean;
/**
 * Validate contact form
 */
export declare const validateContactForm: (data: ContactFormData) => ContactFormErrors;
/**
 * Debounce function
 */
export declare const debounce: <T extends (...args: any[]) => any>(func: T, wait: number) => ((...args: Parameters<T>) => void);
/**
 * Throttle function
 */
export declare const throttle: <T extends (...args: any[]) => any>(func: T, limit: number) => ((...args: Parameters<T>) => void);
/**
 * Scroll to element smoothly
 */
export declare const scrollToElement: (elementId: string) => void;
/**
 * Check if element is in viewport
 */
export declare const isInViewport: (element: HTMLElement) => boolean;
/**
 * Generate random ID
 */
export declare const generateId: () => string;
/**
 * Clamp number between min and max
 */
export declare const clamp: (num: number, min: number, max: number) => number;
/**
 * Get initials from name
 */
export declare const getInitials: (name: string) => string;
