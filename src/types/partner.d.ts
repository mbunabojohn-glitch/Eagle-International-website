export interface Partner {
    id: string;
    name: string;
    title: string;
    role: string;
    bio: string;
    education: string[];
    experience: string[];
    photo?: string;
    email?: string;
    phone?: string;
}
export interface TeamMember {
    id: string;
    name: string;
    title: string;
    phone: string;
    initials: string;
}
export type PartnersResponse = Partner[];
