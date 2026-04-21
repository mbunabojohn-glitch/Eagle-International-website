import React from "react";
interface InfoCard {
    title: string;
    description: string;
    icon: string;
}
interface InfoCardsProps {
    title: string;
    subtitle?: string;
    cards: InfoCard[];
    variant?: "default" | "primary";
}
declare const InfoCards: React.FC<InfoCardsProps>;
export default InfoCards;
