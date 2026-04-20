import { useUIStore } from "@store";
import Navigation from "./Navigation.tsx";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useUIStore();

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
          />

          {/* Menu Content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[80%] max-w-[400px] bg-black z-[70] lg:hidden shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="font-heading font-bold text-white text-xl tracking-wider">MENU</span>
              <button 
                onClick={closeMobileMenu}
                className="p-2 text-white hover:text-orange-primary transition-colors"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto py-4">
              <Navigation mobile onItemClick={closeMobileMenu} />
            </div>

            <div className="p-6 border-t border-white/10 mt-auto">
              <p className="text-grey-medium text-sm text-center">
                © {new Date().getFullYear()} Eagle International Group LLC
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
