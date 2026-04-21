import React from "react";
import type { Service } from "../../types";
interface ServicesShowcaseProps {
    services?: Service[];
    limit?: number;
    showViewAll?: boolean;
}
declare const ServicesShowcase: React.FC<ServicesShowcaseProps>;
export default ServicesShowcase;
