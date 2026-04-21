import { forwardRef } from "react";
import clsx from "clsx";
import type { CardProps } from "../../types";

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hoverable = false, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "card p-6",
          hoverable && "card-hover cursor-pointer",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
