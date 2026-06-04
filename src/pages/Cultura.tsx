import React, { useState } from 'react';
import { ARCHAEOLOGY_DATA, ArcheologicalSite } from '../data/canarData';
import { Landmark, Compass, Award, Shield } from 'lucide-react';

export const Cultura: React.FC = () => {
  const [selectedSite, setSelectedSite] = useState<ArcheologicalSite>(ARCHAEOLOGY_DATA[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 animate-fade-in">
      {/* Editorial Header */}
      <div className="space-y-6 max-w-3xl mb-12">
        <div className="inline-flex items-center space-x-2 text-ochre bg-ochre/5 border border-ochre/10 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Landmark className="h-3.5 w-3.5" />
          <span>Fusión Imperial Inca-Kañari</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-ink tracking-tight">
          Cultura y Complejos Arqueológicos
        </h1>
        <div className="w-24 h-1 bg-terracotta" />
        <p className="text-base text-ink-light leading-relaxed">
          La arqueología de la provincia del Cañar es el testimonio físico de un fascinante choque y posterior acuerdo cultural. Tras intensos enfrentamientos en el siglo XV, la Confederación Kañari firmó tratados con los Incas invasores. Esta fusión política e identitaria dio origen a un estilo arquitectónico mixto, combinando la mampostería imperial de piedra tallada incaica con las estructuras y templos de adoración lunar de origen Kañari.
        </p>
      </div>

      {/* Main Grid: Selector & Content Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Sites Selector (Left Column) */}
        <div className="lg:col-span-4 space-y-4">
          <span className="block text-xs font-bold uppercase tracking-widest text-earth mb-2">
            Seleccionar Complejo Arqueológico
          </span>
          <div className="space-y-3">
            {ARCHAEOLOGY_DATA.map((site) => (
              <button
                key={site.id}
                onClick={() => setSelectedSite(site)}
                className={`w-full p-5 rounded border text-left transition-all duration-200 ${
                  selectedSite.id === site.id
                    ? 'border-terracotta bg-paper-dark shadow-sm ring-1 ring-terracotta'
                    : 'border-earth-light/25 hover:border-ochre bg-paper/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-earth">
                    {site.culture}
                  </span>
                  <span className="text-[10px] bg-earth-light/10 px-2 py-0.5 rounded font-mono text-earth-dark">
                    {site.period}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-ink">
                  {site.name}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Site Viewer (Right Column) */}
        <div className="lg:col-span-8 bg-paper-dark border border-earth-light/35 rounded p-6 md:p-10 shadow-sm space-y-6">
          <div className="border-b border-earth-light/25 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-terracotta block mb-1">
              Ficha Técnica Arqueológica
            </span>
            <h2 className="font-serif text-3xl font-bold text-ink">
              {selectedSite.name}
            </h2>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-earth-dark">
              <div>
                <strong>Cultura:</strong> {selectedSite.culture}
              </div>
              <div>
                <strong>Período:</strong> {selectedSite.period}
              </div>
            </div>
          </div>

          {/* Site Image */}
          <div className="w-full h-64 md:h-80 overflow-hidden rounded border border-earth-light/20 shadow-sm">
            <img
              src={selectedSite.imageUrl}
              alt={selectedSite.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm md:text-base font-semibold text-ink leading-relaxed">
              {selectedSite.description}
            </p>
            <p className="text-sm md:text-base text-ink-light leading-relaxed">
              {selectedSite.details}
            </p>
          </div>

          {/* Key Features List */}
          <div className="bg-paper border border-earth-light/30 p-6 rounded">
            <h4 className="font-serif font-bold text-ink text-base mb-3 flex items-center space-x-2">
              <Award className="h-4 w-4 text-ochre" />
              <span>Elementos Destacados del Complejo</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-earth-dark">
              {selectedSite.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-terracotta mt-0.5 flex-shrink-0">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Comparative Architecture Fusions Section */}
      <section className="bg-paper-dark border border-earth-light/30 rounded p-8 md:p-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-ink">
              Análisis Estructural de la Fusión
            </h2>
            <p className="text-xs uppercase tracking-widest text-earth">
              ¿Cómo diferenciar la técnica Kañari de la Imperial Inca?
            </p>
            <div className="w-12 h-0.5 bg-terracotta mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Kañari Architecture */}
            <div className="bg-paper p-6 rounded border border-earth-light/20 space-y-3">
              <div className="flex items-center space-x-2 text-terracotta">
                <Compass className="h-5 w-5" />
                <h3 className="font-serif font-bold text-lg text-ink">Estilo Ancestral Kañari</h3>
              </div>
              <ul className="text-xs space-y-2 text-earth-dark">
                <li>
                  <strong>Mampostería:</strong> Piedra de río o cantos rodados labrados de forma rústica, unidos con un denso mortero de arcilla y paja.
                </li>
                <li>
                  <strong>Morfología:</strong> Edificaciones de forma elíptica o circular. Orientación mística ligada a las fuentes de agua y ciclos de la luna.
                </li>
                <li>
                  <strong>Ubicación:</strong> Cimas cónicas de colinas sagradas y riberas de lagunas.
                </li>
              </ul>
            </div>

            {/* Inca Architecture */}
            <div className="bg-paper p-6 rounded border border-earth-light/20 space-y-3">
              <div className="flex items-center space-x-2 text-ochre">
                <Shield className="h-5 w-5" />
                <h3 className="font-serif font-bold text-lg text-ink">Estilo Imperial Incaico</h3>
              </div>
              <ul className="text-xs space-y-2 text-earth-dark">
                <li>
                  <strong>Mampostería:</strong> Bloques tallados geométricamente pulidos y ensamblados de forma milimétrica sin mortero (arquitectura almohadillada).
                </li>
                <li>
                  <strong>Morfología:</strong> Estructuras de planta rectangular (Kanchas), con nichos y puertas trapezoidales anchas en la base y angostas arriba.
                </li>
                <li>
                  <strong>Ubicación:</strong> Terrazas talladas en pendientes y explanadas alineadas con los solsticios solares.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
