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
      case 'la-troncal':
        return 'fill-emerald-800/15 stroke-emerald-850 stroke-[1.5]'; // Coastal warm zone
      case 'suscal':
      case 'el-tambo':
        return 'fill-ochre/15 stroke-ochre/60 stroke-[1.5]'; // High transit zone
      case 'canar':
        return 'fill-terracotta/10 stroke-terracotta/40 stroke-[1.5]'; // Core archeological zone
      case 'biblian':
      case 'azogues':
      case 'deleg':
        return 'fill-earth-light/20 stroke-earth-light/60 stroke-[1.5]'; // Valley zone
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
          La provincia del Cañar cuenta con una peculiar geografía que desciende abruptamente desde los gélidos páramos andinos a más de 4000 metros de altitud, hasta las cálidas llanuras tropicales de la Costa a nivel del mar. Explora la división territorial de sus <strong>7 cantones</strong> haciendo clic en el mapa vectorial para desplegar información detallada sobre altitud, demografía, historia y sus atractivos turísticos más destacados.
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
                className="w-full max-w-[420px] h-auto drop-shadow-md select-none"
              >
                {/* Background grid representation */}
                <g className="opacity-[0.05] stroke-ink stroke-[0.5] fill-none">
                  <path d="M 0 50 L 500 50 M 0 100 L 500 100 M 0 150 L 500 150 M 0 200 L 500 200 M 0 250 L 500 250 M 0 300 L 500 300 M 0 350 L 500 350" />
                  <path d="M 50 0 L 50 400 M 100 0 L 100 400 M 150 0 L 150 400 M 200 0 L 200 400 M 250 0 L 250 400 M 300 0 L 300 400 M 350 0 L 350 400 M 400 0 L 400 400 M 450 0 L 450 400" />
                </g>

                {/* SVG Canton Paths */}
                {/* 1. La Troncal (Coastal plain, far west) */}
                <path
                  d="M 20 180 L 100 170 L 90 230 L 70 270 L 10 260 Z"
                  className={`transition-all duration-300 cursor-pointer ${getCantonColor(
                    'la-troncal',
                    selectedCanton.id === 'la-troncal',
                    hoveredCanton === 'la-troncal'
                  )}`}
                  onClick={() => setSelectedCanton(CANTONS_DATA.find(c => c.id === 'la-troncal')!)}
                  onMouseEnter={() => setHoveredCanton('la-troncal')}
                  onMouseLeave={() => setHoveredCanton(null)}
                />
                
                {/* 2. Suscal (Narrow transit area) */}
                <path
                  d="M 100 170 L 170 140 L 180 180 L 120 220 L 90 230 Z"
                  className={`transition-all duration-300 cursor-pointer ${getCantonColor(
                    'suscal',
                    selectedCanton.id === 'suscal',
                    hoveredCanton === 'suscal'
                  )}`}
                  onClick={() => setSelectedCanton(CANTONS_DATA.find(c => c.id === 'suscal')!)}
                  onMouseEnter={() => setHoveredCanton('suscal')}
                  onMouseLeave={() => setHoveredCanton(null)}
                />

                {/* 3. El Tambo (Center-north small node) */}
                <path
                  d="M 170 140 L 230 110 L 240 150 L 195 180 Z"
                  className={`transition-all duration-300 cursor-pointer ${getCantonColor(
                    'el-tambo',
                    selectedCanton.id === 'el-tambo',
                    hoveredCanton === 'el-tambo'
                  )}`}
                  onClick={() => setSelectedCanton(CANTONS_DATA.find(c => c.id === 'el-tambo')!)}
                  onMouseEnter={() => setHoveredCanton('el-tambo')}
                  onMouseLeave={() => setHoveredCanton(null)}
                />

                {/* 4. Cañar (Huge north-east highlands) */}
                <path
                  d="M 170 140 L 230 110 L 320 60 L 400 90 L 410 140 L 340 180 L 260 210 L 240 150 Z"
                  className={`transition-all duration-300 cursor-pointer ${getCantonColor(
                    'canar',
                    selectedCanton.id === 'canar',
                    hoveredCanton === 'canar'
                  )}`}
                  onClick={() => setSelectedCanton(CANTONS_DATA.find(c => c.id === 'canar')!)}
                  onMouseEnter={() => setHoveredCanton('canar')}
                  onMouseLeave={() => setHoveredCanton(null)}
                />

                {/* 5. Biblián (Central slice) */}
                <path
                  d="M 260 210 L 340 180 L 360 230 L 290 270 L 250 250 L 230 220 Z"
                  className={`transition-all duration-300 cursor-pointer ${getCantonColor(
                    'biblian',
                    selectedCanton.id === 'biblian',
                    hoveredCanton === 'biblian'
                  )}`}
                  onClick={() => setSelectedCanton(CANTONS_DATA.find(c => c.id === 'biblian')!)}
                  onMouseEnter={() => setHoveredCanton('biblian')}
                  onMouseLeave={() => setHoveredCanton(null)}
                />

                {/* 6. Azogues (South-east capital area) */}
                <path
                  d="M 340 180 L 410 140 L 480 190 L 450 310 L 390 320 L 360 230 Z"
                  className={`transition-all duration-300 cursor-pointer ${getCantonColor(
                    'azogues',
                    selectedCanton.id === 'azogues',
                    hoveredCanton === 'azogues'
                  )}`}
                  onClick={() => setSelectedCanton(CANTONS_DATA.find(c => c.id === 'azogues')!)}
                  onMouseEnter={() => setHoveredCanton('azogues')}
                  onMouseLeave={() => setHoveredCanton(null)}
                />

                {/* 7. Déleg (Small far south tip) */}
                <path
                  d="M 290 270 L 360 230 L 390 320 L 340 350 L 280 320 Z"
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
                  <text x="50" y="215" className="fill-emerald-800">La Troncal</text>
                  <text x="125" y="195" className="fill-ochre-dark">Suscal</text>
                  <text x="180" y="155" className="fill-ochre-dark">Tambo</text>
                  <text x="310" y="120" className="fill-terracotta">Cañar</text>
                  <text x="285" y="235" className="fill-earth-dark">Biblián</text>
                  <text x="390" y="215" className="fill-earth-dark">Azogues</text>
                  <text x="315" y="295" className="fill-earth-dark">Déleg</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Quick instructions text */}
          <div className="pt-4 border-t border-earth-light/20 text-xs text-earth flex items-center space-x-1.5 justify-center">
            <span>Zonificación ecológica:</span>
            <span className="inline-block w-2.5 h-2.5 bg-emerald-700/20 border border-emerald-800 rounded-sm" />
            <span>Tropical</span>
            <span className="inline-block w-2.5 h-2.5 bg-terracotta/20 border border-terracotta/40 rounded-sm" />
            <span>Páramo</span>
            <span className="inline-block w-2.5 h-2.5 bg-earth-light/20 border border-earth-light/60 rounded-sm" />
            <span>Valles y Yungas</span>
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
