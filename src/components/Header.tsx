import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark, Globe2, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Pueblos', path: '/pueblos-nacionalidades' },
    { label: 'Arqueología', path: '/cultura-arqueologia' },
    { label: 'Tradiciones', path: '/tradiciones-festividades' },
    { label: 'Gastronomía', path: '/gastronomia' },
    { label: 'Galería', path: '/galeria' },
    { label: 'Mapa Interactivo', path: '/mapa' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHome = currentPath === '/';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-paper/95 backdrop-blur-md shadow-md border-b border-earth-light/20 py-3 text-ink'
          : isHome
          ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 text-paper'
          : 'bg-paper/90 backdrop-blur-md border-b border-earth-light/20 py-4 text-ink'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div
            onClick={() => handleLinkClick('/')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="bg-terracotta text-paper p-2 rounded-full transition-transform duration-300 group-hover:rotate-12 shadow-sm">
              <Landmark className="h-5 w-5" />
            </div>
            <div>
              <span
                className={`block font-serif text-lg md:text-xl font-bold tracking-tight transition-colors duration-200 ${
                  !isScrolled && isHome
                    ? 'text-paper group-hover:text-ochre-light'
                    : 'text-ink group-hover:text-terracotta'
                }`}
              >
                Raíces de Cañar
              </span>
              <span
                className={`block text-[10px] tracking-[0.2em] uppercase font-sans ${
                  !isScrolled && isHome ? 'text-paper-dark/80' : 'text-earth'
                }`}
              >
                Patrimonio & Cultura
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {menuItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleLinkClick(item.path)}
                  className={`px-3 py-2 rounded-md text-xs lg:text-sm font-semibold tracking-wide uppercase transition-all duration-200 ${
                    isActive
                      ? 'text-terracotta bg-terracotta/10 border-b-2 border-terracotta rounded-b-none'
                      : !isScrolled && isHome
                      ? 'text-paper/90 hover:text-ochre-light hover:bg-white/10'
                      : 'text-ink-light hover:text-terracotta hover:bg-earth-light/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Audio/Theme Toggle or Cultural Note widget */}
          <div
            className={`hidden lg:flex items-center space-x-2 text-xs border px-3 py-1.5 rounded-full ${
              !isScrolled && isHome
                ? 'border-paper/30 text-paper-light bg-black/20 backdrop-blur-xs'
                : 'border-earth-light/30 text-earth'
            }`}
          >
            <Globe2 className="h-3.5 w-3.5 text-ochre" />
            <span className="font-semibold uppercase tracking-wider">Kichwa Kañari / Esp</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-1.5 rounded-lg focus:outline-none transition-colors ${
                !isScrolled && isHome
                  ? 'text-paper hover:bg-white/10'
                  : 'text-ink hover:text-terracotta hover:bg-earth-light/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-paper border-b border-earth-light/20 shadow-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {menuItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleLinkClick(item.path)}
                className={`block w-full text-left px-4 py-3 rounded-md text-sm font-semibold uppercase tracking-wide transition-colors ${
                  isActive
                    ? 'text-terracotta bg-terracotta/5 border-l-4 border-terracotta'
                    : 'text-ink-light hover:text-terracotta hover:bg-earth-light/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-earth-light/20 flex items-center px-4 space-x-2 text-xs text-earth">
            <Sparkles className="h-4 w-4 text-ochre" />
            <span>Provincia de Cañar, Ecuador</span>
          </div>
        </div>
      </div>
    </header>
  );
};
