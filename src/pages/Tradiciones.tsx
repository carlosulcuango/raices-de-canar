import React, { useState } from 'react';
import { FESTIVITIES_DATA, Festivity } from '../data/canarData';
import { Calendar, Sparkles, X, ChevronRight, Info } from 'lucide-react';

export const Tradiciones: React.FC = () => {
  const [selectedFestivity, setSelectedFestivity] = useState<Festivity | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 animate-fade-in">
      {/* Editorial Header */}
      <div className="space-y-6 max-w-3xl mb-12">
        <div className="inline-flex items-center space-x-2 text-emerald-700 bg-emerald-50 border border-emerald-250 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Calendar className="h-3.5 w-3.5" />
          <span>Calendario Ritual & Espiritualidad</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-ink tracking-tight">
          Tradiciones y Festividades
        </h1>
        <div className="w-24 h-1 bg-terracotta" />
        <p className="text-base text-ink-light leading-relaxed">
          El tiempo en los Andes no es lineal, sino cíclico y festivo. Para las comunidades del Cañar, la espiritualidad se expresa mediante los solsticios y equinoccios, estrechamente ligados a la siembra y la cosecha. Estas festividades representan una sinergia perfecta de antiguos ritos precolombinos dedicados a los espíritus tutelares de los cerros (Apus) y a la Pachamama, entrelazados con la fe católica mestiza.
        </p>
      </div>

      {/* Festivities Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {FESTIVITIES_DATA.map((fest) => (
          <div
            key={fest.id}
            className="bg-paper-dark border border-earth-light/35 p-6 rounded flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                <span className="text-terracotta flex items-center space-x-1">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  {fest.date}
                </span>
                <span className="text-earth">{fest.origin}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-ink group-hover:text-terracotta transition-colors duration-150">
                {fest.name}
              </h3>
              <p className="text-sm text-earth-dark leading-relaxed line-clamp-4">
                {fest.description}
              </p>
            </div>
            <button
              onClick={() => setSelectedFestivity(fest)}
              className="mt-6 w-full py-2 bg-paper hover:bg-terracotta hover:text-paper text-xs font-bold uppercase tracking-wider rounded border border-earth-light/40 hover:border-transparent transition-all duration-200 flex items-center justify-center space-x-1"
            >
              <span>Ver Rituales y Detalles</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Curiquingue Ritual Highlight Drawer */}
      <section className="bg-gradient-to-br from-ochre-light/20 to-terracotta/10 border border-earth-light/40 rounded p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-terracotta bg-paper px-3 py-1 rounded">
              <Sparkles className="h-3.5 w-3.5 text-ochre" />
              <span>Danza Sagrada Andina</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-ink">
              La Danza de los Curiquingues
            </h2>
            <div className="w-16 h-0.5 bg-ochre" />
            <p className="text-sm md:text-base text-ink-light leading-relaxed">
              El <strong>Curiquingue</strong> (<i>Phalcoboenus carunculatus</i>) es el ave sagrada de los páramos del Cañar. En tiempos prehispánicos era considerado un mensajero de los dioses andinos y un símbolo de buen augurio para las cosechas.
            </p>
            <p className="text-sm md:text-base text-ink-light leading-relaxed">
              Durante el Inti Raymi y el Lalay Kañari, los danzantes visten trajes especiales que emulan el plumaje de este halcón: alas de tela bicolor, cascabeles que suenan al ritmo de tambores y pingullos, y una careta dorada con un gran pico. El baile imita fielmente el andar ceremonioso del curiquingue, saltando alegremente de lado a lado con los brazos extendidos y agachando la cabeza en actitud de humilde reverencia y agradecimiento ante los frutos de la tierra.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="bg-paper p-6 rounded-lg border border-earth-light/40 max-w-xs space-y-3 text-center">
              <span className="text-terracotta text-5xl">🪶</span>
              <h3 className="font-serif font-bold text-ink">El Vuelo del Halcón</h3>
              <p className="text-xs text-earth-dark leading-relaxed">
                "Danzar como el Curiquingue es encarnar la humildad y la alegría de recibir el sustento diario de la tierra y del sol."
              </p>
              <div className="pt-2 text-[10px] text-earth uppercase font-bold tracking-widest">
                Patrimonio Coreográfico vivo de Cañar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Festivity Details Modal Window */}
      {selectedFestivity && (
        <div className="fixed inset-0 bg-ink/65 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-paper border border-earth-light/40 rounded-lg max-w-2xl w-full p-6 md:p-8 shadow-2xl relative animate-fade-in">
            <button
              onClick={() => setSelectedFestivity(null)}
              className="absolute top-4 right-4 text-earth hover:text-terracotta transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-terracotta">
                <Calendar className="h-4 w-4" />
                <span>{selectedFestivity.date}</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">
                {selectedFestivity.name}
              </h2>
              <div className="w-12 h-0.5 bg-ochre" />

              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-earth mb-1">
                    Descripción General
                  </h4>
                  <p className="text-sm md:text-base text-ink-light leading-relaxed">
                    {selectedFestivity.description}
                  </p>
                </div>

                <div className="bg-paper-dark p-4 rounded border border-earth-light/30">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-terracotta mb-1 flex items-center">
                    <Info className="h-3.5 w-3.5 mr-1" />
                    Ritos y Tradición Oral
                  </h4>
                  <p className="text-xs md:text-sm text-earth-dark leading-relaxed">
                    {selectedFestivity.ritual}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-earth-light/25 flex items-center justify-between text-xs text-earth">
                <span>Origen: {selectedFestivity.origin}</span>
                <button
                  onClick={() => setSelectedFestivity(null)}
                  className="px-4 py-2 bg-terracotta text-paper font-semibold uppercase tracking-wider rounded text-[10px] hover:bg-terracotta-dark transition-all"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
