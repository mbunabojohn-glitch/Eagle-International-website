import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import { NAVIGATION_LINKS } from "../../utils/constants";
import type { NavigationLink } from "../../types";

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

const Navigation = ({ className, onItemClick }: NavigationProps) => {
  return (
    <nav className={clsx("flex flex-col md:flex-row items-center", className)}>
      {NAVIGATION_LINKS.map((link: NavigationLink) => (
        <NavLink
          key={link.id}
          to={link.path}
          onClick={onItemClick}
          className={({ isActive }) =>
            clsx(
              "px-4 py-2 text-sm font-medium transition-colors duration-300",
              isActive ? "text-orange-primary" : "text-white hover:text-orange-primary"
            )
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
