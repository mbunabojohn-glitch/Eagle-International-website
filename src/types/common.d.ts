import React from 'react';
export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    fullWidth?: boolean;
    children: React.ReactNode;
}
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverable?: boolean;
    children: React.ReactNode;
}
export interface LoaderProps {
    size?: "sm" | "md" | "lg";
    text?: string;
    fullScreen?: boolean;
}
export interface HeroSlide {
    id: string;
    title: string;
    description: string;
    highlight?: string;
    image?: string;
    video?: string;
}
export interface NavigationLink {
    id: string;
    label: string;
    path: string;
}
export interface Stat {
    id: string;
    value: number;
    label: string;
    suffix?: string;
}
export interface EnergyPrice {
    id: string;
    name: string;
    icon: string;
    currentPrice: number;
    change: number;
    percentChange: number;
    unit: string;
}
export interface EIADataResponse {
    response: {
        data: Array<{
            period: string;
            value: number;
            series: string;
        }>;
    };
}
