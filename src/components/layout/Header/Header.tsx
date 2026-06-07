import { useEffect, useState } from 'react';
import { useUIStore } from '../../../store/useUIStore';
import Logo from './Logo';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import { clsx } from 'clsx';

// Sun icon
const SunIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

// Moon icon
const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu, isDarkMode, toggleDarkMode, initTheme } = useUIStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    initTheme();
  }, [initTheme]);

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
          isScrolled
            ? "bg-white/95 dark:bg-dark-primary/95 backdrop-blur-md py-3 shadow-lg shadow-blue-primary/5 dark:shadow-black/30 border-b border-light-tertiary dark:border-dark-tertiary"
            : "bg-white dark:bg-dark-primary py-5"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation />
          </div>

          <div className="flex items-center gap-3">
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={clsx(
                "relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none",
                isDarkMode
                  ? "bg-blue-primary"
                  : "bg-light-tertiary"
              )}
              aria-label="Toggle dark mode"
            >
              <span className={clsx(
                "absolute top-1 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm",
                isDarkMode
                  ? "left-8 bg-white text-blue-primary"
                  : "left-1 bg-white text-slate-600"
              )}>
                {isDarkMode ? <MoonIcon /> : <SunIcon />}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-slate-700 dark:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={clsx(
                  "w-full h-0.5 bg-current transition-all duration-300",
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                )} />
                <span className={clsx(
                  "w-full h-0.5 bg-current transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0" : ""
                )} />
                <span className={clsx(
                  "w-full h-0.5 bg-current transition-all duration-300",
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                )} />
              </div>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu />
    </>
  );
};

export default Header;
