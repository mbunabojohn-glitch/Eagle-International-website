import React from 'react';

// Button Types
export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

// Card Types
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  children: React.ReactNode;
}

// Loader Types
export interface LoaderProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullScreen?: boolean;
}

// Hero Types
export interface HeroSlide {
  id: string;
  title: string;
  description: string;
  highlight?: string;
  image?: string;
  video?: string;
}

// Navigation Types
export interface NavigationLink {
  id: string;
  label: string;
  path: string;
}

// Stat Types
export interface Stat {
  id: string;
  value: number;
  label: string;
  suffix?: string;
}

// Market Ticker Types
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
