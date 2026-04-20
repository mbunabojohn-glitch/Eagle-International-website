import { useEffect, useState } from 'react';
import { useUIStore } from '@store/useUIStore';
import Logo from './Logo';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import { clsx } from 'clsx';

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useUIStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg" : "bg-black py-5"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={clsx(
                "w-full h-0.5 bg-white transition-all duration-300",
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              )} />
              <span className={clsx(
                "w-full h-0.5 bg-white transition-all duration-300",
                isMobileMenuOpen ? "opacity-0" : ""
              )} />
              <span className={clsx(
                "w-full h-0.5 bg-white transition-all duration-300",
                isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
              )} />
            </div>
          </button>
        </div>
      </header>
      
      <MobileMenu />
    </>
  );
};

export default Header;