import React from 'react';
import { Landmark, ArrowUp, Mail, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper-dark border-t border-earth-dark/40 relative overflow-hidden">
      {/* Decorative Andean SVG Pattern Top Border */}
      <div className="w-full overflow-hidden leading-[0] h-4 bg-terracotta/25">
        <svg
          className="relative block w-[200%] h-full text-terracotta"
          viewBox="0 0 1200 20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L20,20 L40,0 L60,20 L80,0 L100,20 L120,0 L140,20 L160,0 L180,20 L200,0 L220,20 L240,0 L260,20 L280,0 L300,20 L320,0 L340,20 L360,0 L380,20 L400,0 L420,20 L440,0 L460,20 L480,0 L500,20 L520,0 L540,20 L560,0 L580,20 L600,0 L620,20 L640,0 L660,20 L680,0 L700,20 L720,0 L740,20 L760,0 L780,20 L800,0 L820,20 L840,0 L860,20 L880,0 L900,20 L920,0 L940,20 L960,0 L980,20 L1000,0 L1020,20 L1040,0 L1060,20 L1080,0 L1100,20 L1120,0 L1140,20 L1160,0 L1180,20 L1200,0 L1220,20 L1240,0 L1260,20 L1280,0 L1300,20 L1320,0 L1340,20 L1360,0 L1380,20 L1400,0 L1420,20 L1440,0 L1460,20 L1480,0 L1500,20 L1520,0 L1540,20 L1560,0 L1580,20 L1600,0 L1620,20 L1640,0 L1660,20 L1680,0 L1700,20 L1720,0 L1740,20 L1760,0 L1780,20 L1800,0 L1820,20 L1840,0 L1860,20 L1880,0 L1900,20 L1920,0 L1940,20 L1960,0 L1980,20 L2000,0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-terracotta text-paper p-2 rounded-full">
                <Landmark className="h-5 w-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-paper">
                Raíces de Cañar
              </span>
            </div>
            <p className="text-sm text-earth-light leading-relaxed">
              Un proyecto documental e interactivo dedicado a registrar, preservar y divulgar el invaluable patrimonio histórico, arqueológico y vivo de la provincia del Cañar, Ecuador.
            </p>
            <div className="space-y-2 text-xs text-earth-light">
              <div className="flex items-center space-x-2">
                <MapPin className="h-3.5 w-3.5 text-terracotta" />
                <span>Provincia del Cañar, Región Interandina, Ecuador</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3.5 w-3.5 text-ochre" />
                <span>contacto@raicesdecanar.gob.ec</span>
              </div>
            </div>
          </div>

          {/* Column 2: Sitemap Navigation */}
          <div>
            <h3 className="font-serif text-lg font-bold text-paper border-b border-earth-dark py-2 mb-4">
              Mapa del Sitio
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('/')}
                  className="text-earth-light hover:text-ochre transition-colors duration-150"
                >
                  Inicio - Documental Principal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('/pueblos-nacionalidades')}
                  className="text-earth-light hover:text-ochre transition-colors duration-150"
                >
                  Pueblo Kichwa Kañari
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('/cultura-arqueologia')}
                  className="text-earth-light hover:text-ochre transition-colors duration-150"
                >
                  Complejos Arqueológicos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('/tradiciones-festividades')}
                  className="text-earth-light hover:text-ochre transition-colors duration-150"
                >
                  Tradiciones y Festividades
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('/gastronomia')}
                  className="text-earth-light hover:text-ochre transition-colors duration-150"
                >
                  Gastronomía Ancestral
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('/galeria')}
                  className="text-earth-light hover:text-ochre transition-colors duration-150"
                >
                  Galería Fotográfica
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('/mapa')}
                  className="text-earth-light hover:text-ochre transition-colors duration-150"
                >
                  Mapa y Cantones
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Historical Highlights */}
          <div>
            <h3 className="font-serif text-lg font-bold text-paper border-b border-earth-dark py-2 mb-4">
              Hitos y Simbología
            </h3>
            <ul className="space-y-3 text-xs text-earth-light">
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-terracotta rounded-full mt-1.5 flex-shrink-0" />
                <span>
                  <strong>La Luna (Killa):</strong> Deidad principal Kañari, representada en lagunas sagradas y en la orientación de sus primeras huacas.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-ochre rounded-full mt-1.5 flex-shrink-0" />
                <span>
                  <strong>El Sol (Inti):</strong> Deidad Inca introducida en la fusión, representada en el Castillo elíptico de Ingapirca.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0" />
                <span>
                  <strong>La Guacamaya y la Serpiente:</strong> Animales mitológicos fundacionales en el origen del pueblo Kañari.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Links and Actions */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-paper border-b border-earth-dark py-2 mb-4">
              Sitios de Interés
            </h3>
            <div className="space-y-2 text-xs">
              <a
                href="https://www.patrimoniocultural.gob.ec"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded bg-earth-dark/20 border border-earth-dark/50 hover:bg-earth-dark/40 text-earth-light hover:text-paper transition-all"
              >
                <span>Inst. Nac. de Patrimonio Cultural</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://www.turismo.gob.ec"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded bg-earth-dark/20 border border-earth-dark/50 hover:bg-earth-dark/40 text-earth-light hover:text-paper transition-all"
              >
                <span>Ministerio de Turismo de Ecuador</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div className="pt-2">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full py-2 bg-earth-dark hover:bg-terracotta text-paper hover:text-paper text-xs font-semibold uppercase tracking-wider rounded flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <span>Subir al Inicio</span>
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-16 pt-8 border-t border-earth-dark/50 flex flex-col md:flex-row items-center justify-between text-xs text-earth">
          <div>
            <p>© {currentYear} Raíces de Cañar. Proyecto Cultural e Histórico.</p>
            <p className="mt-1 text-[10px]">
              Diseño inspirado en el patrimonio arqueológico andino.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <span>Azogues · Cañar · Biblián · El Tambo · Déleg · Suscal · La Troncal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
