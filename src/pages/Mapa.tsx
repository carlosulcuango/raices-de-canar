import React, { useState } from 'react';
import { CANTONS_DATA, Canton } from '../data/canarData';
import { MapPin, Compass, Info, Thermometer, Mountain, Users } from 'lucide-react';

export const Mapa: React.FC = () => {
  const [selectedCanton, setSelectedCanton] = useState<Canton>(
    CANTONS_DATA.find((c) => c.id === 'canar') || CANTONS_DATA[0]
  );
  const [hoveredCanton, setHoveredCanton] = useState<string | null>(null);

  // Dynamic colors for cantons on the map to differentiate them in an elegant earthy theme
  const getCantonColor = (id: string, isSelected: boolean, isHovered: boolean) => {
    if (isSelected) return 'fill-terracotta stroke-terracotta-dark stroke-[3]';
    if (isHovered) return 'fill-ochre/40 stroke-ochre stroke-[2]';

    switch (id) {
      case 'suscal':
      case 'el-tambo':
        return 'fill-ochre/20 stroke-ochre/70 stroke-[1.5]'; // Northern transition zone
      case 'canar':
        return 'fill-terracotta/15 stroke-terracotta/50 stroke-[1.5]'; // Core archeological zone
      case 'biblian':
      case 'azogues':
      case 'deleg':
        return 'fill-earth-light/25 stroke-earth-light/70 stroke-[1.5]'; // Valley zone
      default:
        return 'fill-paper-dark stroke-earth-light/40 stroke-[1.5]';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 animate-fade-in">
      {/* Editorial Header */}
      <div className="space-y-6 max-w-3xl mb-12">
        <div className="inline-flex items-center space-x-2 text-terracotta bg-terracotta/5 border border-terracotta/10 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Compass className="h-3.5 w-3.5" />
          <span>Cartografía Territorial de Cañar</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-ink tracking-tight">
          Mapa Cantonal Interactivo
        </h1>
        <div className="w-24 h-1 bg-terracotta" />
        <p className="text-base text-ink-light leading-relaxed">
          La provincia del Cañar cuenta con una milenaria geografía andina que desciende desde los gélidos páramos del Parque Nacional Sangay a más de 4000 metros de altitud, hasta fértiles valles entremontanos. Explora la división territorial de sus <strong>6 cantones</strong> haciendo clic en el mapa vectorial para desplegar información detallada sobre altitud, demografía, historia y sus atractivos turísticos más destacados.
        </p>
      </div>

      {/* Map & Detail Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Interactive SVG Map */}
        <div className="lg:col-span-6 bg-paper-dark border border-earth-light/35 rounded p-6 shadow-sm flex flex-col justify-between min-h-[450px]">
          <div>
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-earth mb-4">
              <span>Vista Vectorial de la Provincia</span>
              <span className="text-terracotta font-medium flex items-center">
                <Info className="h-3.5 w-3.5 mr-1" />
                Haz clic para explorar
              </span>
            </div>

            {/* SVG Canvas Map */}
            <div className="w-full flex justify-center py-4">
              <svg
                viewBox="0 0 500 400"
                className="w-full max-w-[440px] h-auto drop-shadow-md select-none"
              >
                {/* Background grid representation */}
                <g className="opacity-[0.05] stroke-ink stroke-[0.5] fill-none">
                  <path d="M 0 50 L 500 50 M 0 100 L 500 100 M 0 150 L 500 150 M 0 200 L 500 200 M 0 250 L 500 250 M 0 300 L 500 300 M 0 350 L 500 350" />
                  <path d="M 50 0 L 50 400 M 100 0 L 100 400 M 150 0 L 150 400 M 200 0 L 200 400 M 250 0 L 250 400 M 300 0 L 300 400 M 350 0 L 350 400 M 400 0 L 400 400 M 450 0 L 450 400" />
                </g>

                {/* SVG Canton Paths */}
                {/* 1. Suscal (North-West node) */}
                <path
                  d="M 50 140 L 160 110 L 175 170 L 95 200 Z"
                  className={`transition-all duration-300 cursor-pointer ${getCantonColor(
                    'suscal',
                    selectedCanton.id === 'suscal',
                    hoveredCanton === 'suscal'
                  )}`}
                  onClick={() => setSelectedCanton(CANTONS_DATA.find(c => c.id === 'suscal')!)}
                  onMouseEnter={() => setHoveredCanton('suscal')}
                  onMouseLeave={() => setHoveredCanton(null)}
                />

                {/* 2. El Tambo (North-Center transit hub) */}
                <path
                  d="M 160 110 L 255 80 L 265 145 L 175 170 Z"
                  className={`transition-all duration-300 cursor-pointer ${getCantonColor(
                    'el-tambo',
                    selectedCanton.id === 'el-tambo',
                    hoveredCanton === 'el-tambo'
                  )}`}
                  onClick={() => setSelectedCanton(CANTONS_DATA.find(c => c.id === 'el-tambo')!)}
                  onMouseEnter={() => setHoveredCanton('el-tambo')}
                  onMouseLeave={() => setHoveredCanton(null)}
                />

                {/* 3. Cañar (North-East archetype & highlands) */}
                <path
                  d="M 255 80 L 435 40 L 455 125 L 375 185 L 285 205 L 265 145 Z"
                  className={`transition-all duration-300 cursor-pointer ${getCantonColor(
                    'canar',
                    selectedCanton.id === 'canar',
                    hoveredCanton === 'canar'
                  )}`}
                  onClick={() => setSelectedCanton(CANTONS_DATA.find(c => c.id === 'canar')!)}
                  onMouseEnter={() => setHoveredCanton('canar')}
                  onMouseLeave={() => setHoveredCanton(null)}
                />

                {/* 4. Biblián (Central core) */}
                <path
                  d="M 175 170 L 285 205 L 315 265 L 245 285 L 185 235 Z"
                  className={`transition-all duration-300 cursor-pointer ${getCantonColor(
                    'biblian',
                    selectedCanton.id === 'biblian',
                    hoveredCanton === 'biblian'
                  )}`}
                  onClick={() => setSelectedCanton(CANTONS_DATA.find(c => c.id === 'biblian')!)}
                  onMouseEnter={() => setHoveredCanton('biblian')}
                  onMouseLeave={() => setHoveredCanton(null)}
                />

                {/* 5. Azogues (South-East provincial capital) */}
                <path
                  d="M 285 205 L 375 185 L 465 215 L 435 335 L 345 335 L 315 265 Z"
                  className={`transition-all duration-300 cursor-pointer ${getCantonColor(
                    'azogues',
                    selectedCanton.id === 'azogues',
                    hoveredCanton === 'azogues'
                  )}`}
                  onClick={() => setSelectedCanton(CANTONS_DATA.find(c => c.id === 'azogues')!)}
                  onMouseEnter={() => setHoveredCanton('azogues')}
                  onMouseLeave={() => setHoveredCanton(null)}
                />

                {/* 6. Déleg (South-West ancestral canton) */}
                <path
                  d="M 185 235 L 315 265 L 345 335 L 275 365 L 195 315 Z"
                  className={`transition-all duration-300 cursor-pointer ${getCantonColor(
                    'deleg',
                    selectedCanton.id === 'deleg',
                    hoveredCanton === 'deleg'
                  )}`}
                  onClick={() => setSelectedCanton(CANTONS_DATA.find(c => c.id === 'deleg')!)}
                  onMouseEnter={() => setHoveredCanton('deleg')}
                  onMouseLeave={() => setHoveredCanton(null)}
                />

                {/* Typography Labels on top of Map */}
                <g className="fill-ink font-sans font-bold text-[9px] pointer-events-none text-center select-none uppercase tracking-wider">
                  <text x="110" y="155" className="fill-ochre-dark">Suscal</text>
                  <text x="210" y="130" className="fill-ochre-dark">El Tambo</text>
                  <text x="350" y="115" className="fill-terracotta">Cañar</text>
                  <text x="240" y="225" className="fill-earth-dark">Biblián</text>
                  <text x="380" y="260" className="fill-earth-dark">Azogues</text>
                  <text x="260" y="315" className="fill-earth-dark">Déleg</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Quick instructions text */}
          <div className="pt-4 border-t border-earth-light/20 text-xs text-earth flex items-center space-x-2 justify-center">
            <span>Zonificación geográfica:</span>
            <span className="inline-block w-2.5 h-2.5 bg-terracotta/30 border border-terracotta/60 rounded-sm" />
            <span>Páramo & Arqueología</span>
            <span className="inline-block w-2.5 h-2.5 bg-ochre/30 border border-ochre/70 rounded-sm" />
            <span>Nodo Transitivo</span>
            <span className="inline-block w-2.5 h-2.5 bg-earth-light/30 border border-earth-light/70 rounded-sm" />
            <span>Valles Interandinos</span>
          </div>
        </div>

        {/* Right Column: Dynamic Canton Information Card */}
        <div className="lg:col-span-6 bg-paper-dark border border-earth-light/35 rounded p-6 md:p-8 shadow-sm flex flex-col justify-between">
          <div className="space-y-6">
            {/* Header Info Card */}
            <div className="border-b border-earth-light/25 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-terracotta block mb-1">
                Ficha del Cantón Seleccionado
              </span>
              <h2 className="font-serif text-3xl font-bold text-ink flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-terracotta" />
                <span>{selectedCanton.name}</span>
              </h2>
              <p className="text-xs text-earth mt-1 font-semibold uppercase">
                Cabecera Cantonal: {selectedCanton.capital}
              </p>
            </div>

            {/* Canton Image */}
            <div className="w-full h-40 md:h-48 overflow-hidden rounded border border-earth-light/20 shadow-sm">
              <img
                src={selectedCanton.imageUrl}
                alt={selectedCanton.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Canton Description */}
            <p className="text-sm md:text-base text-ink-light leading-relaxed">
              {selectedCanton.description}
            </p>

            {/* Geographical and Demographical Grid Metrics */}
            <div className="grid grid-cols-3 gap-4 border-y border-earth-light/20 py-4">
              <div className="text-center">
                <Mountain className="h-4.5 w-4.5 mx-auto text-terracotta mb-1" />
                <span className="block text-[9px] uppercase font-bold text-earth">Altitud Promedio</span>
                <span className="text-xs md:text-sm font-bold text-ink">{selectedCanton.elevation}</span>
              </div>
              <div className="text-center">
                <Users className="h-4.5 w-4.5 mx-auto text-ochre mb-1" />
                <span className="block text-[9px] uppercase font-bold text-earth">Población</span>
                <span className="text-xs md:text-sm font-bold text-ink">{selectedCanton.population}</span>
              </div>
              <div className="text-center">
                <Thermometer className="h-4.5 w-4.5 mx-auto text-emerald-700 mb-1" />
                <span className="block text-[9px] uppercase font-bold text-earth">Clima</span>
                <span className="text-xs md:text-sm font-bold text-ink">{selectedCanton.climate}</span>
              </div>
            </div>

            {/* History snippet */}
            <div className="space-y-2 text-xs md:text-sm text-earth-dark">
              <h4 className="font-bold uppercase tracking-widest text-ink text-[11px] flex items-center">
                <Info className="h-3.5 w-3.5 mr-1 text-ochre" />
                Breve Apunte Histórico
              </h4>
              <p className="leading-relaxed italic pl-2 border-l-2 border-ochre/55">
                {selectedCanton.history}
              </p>
            </div>

            {/* Primary Attractions */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-ink text-base">Atractivos Principales</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-earth-dark">
                {selectedCanton.attractions.map((attraction, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-terracotta rounded-full flex-shrink-0" />
                    <span>{attraction}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-earth-light/20 flex items-center justify-between text-[10px] text-earth uppercase font-bold tracking-widest">
            <span>Provincia de Cañar, Ecuador</span>
            <span className="text-terracotta">ID: {selectedCanton.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
