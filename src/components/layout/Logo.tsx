import { Link } from "react-router-dom";
import { SITE_NAME } from "../../utils/constants";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 md:gap-3 group">
      <div className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] rounded-full border-[1.5px] md:border-2 border-blue-accent flex flex-col items-center justify-center bg-white relative transition-transform group-hover:scale-105">
        <span className="text-[0.25rem] md:text-[0.35rem] font-bold text-blue-accent uppercase tracking-wide">
          International
        </span>
        <div className="flex flex-col items-center gap-0.5">
          <div className="w-0 h-0 border-l-[6px] md:border-l-[9px] border-l-transparent border-r-[6px] md:border-r-[9px] border-r-transparent border-b-[9px] md:border-b-[12px] border-b-blue-accent"></div>
          <div className="w-0 h-0 border-l-[6px] md:border-l-[9px] border-l-transparent border-r-[6px] md:border-r-[9px] border-r-transparent border-t-[9px] md:border-t-[12px] border-t-grey-medium"></div>
        </div>
        <span className="text-[0.25rem] md:text-[0.35rem] font-bold text-blue-accent uppercase tracking-wide">
          Group LLC
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-heading text-[1.2rem] md:text-[1.8rem] font-bold text-white tracking-[1px] md:tracking-[2px] leading-none">
          EAGLE
        </span>
        <span className="text-[0.6rem] md:text-[0.8rem] font-medium text-grey-light tracking-[2px] md:tracking-[3px]">
          {SITE_NAME.replace("EAGLE ", "")}
        </span>
      </div>
    </Link>
  );
};

export default Logo;
