import React from "react";
interface CTAProps {
    title: string;
    description: string;
    primaryButton: {
        text: string;
        link: string;
    };
    secondaryButton?: {
        text: string;
        link: string;
    };
}
declare const CTA: React.FC<CTAProps>;
export default CTA;
