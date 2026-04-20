import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { NAVIGATION_LINKS } from "@utils/constants";

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

const Navigation = ({ mobile, onItemClick }: NavigationProps) => {
  return (
    <nav className={clsx(mobile ? "w-full" : "block")}>
      <ul className={clsx(
        "flex",
        mobile ? "flex-col space-y-2 p-4" : "items-center space-x-1"
      )}>
        {NAVIGATION_LINKS.map((link) => (
          <li key={link.id} className={mobile ? "w-full" : ""}>
            <NavLink
              to={link.path}
              onClick={onItemClick}
              className={({ isActive }) =>
                clsx(
                  "relative px-4 py-2 font-heading font-semibold text-[0.9rem] uppercase tracking-wider transition-all duration-300 block rounded-md group whitespace-nowrap",
                  isActive
                    ? "text-orange-primary bg-white/5"
                    : "text-white hover:text-orange-primary hover:bg-white/5",
                  mobile ? "text-lg py-4 border-b border-white/10" : "text-sm"
                )
              }
            >
              {link.label}
              {!mobile && (
                <span
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-primary scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
