import React from 'react';
import { ShieldAlert, Compass, UtensilsCrossed, CalendarDays, Sparkles, BookOpen, Map, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* Editorial Hero Section */}
      <section
        style={{ backgroundImage: "url('/images/inicio.jpg')" }}
        className="bg-cover bg-center bg-no-repeat min-h-screen md:min-h-[600px] h-screen md:h-[92vh] relative flex flex-col items-center justify-center border-b border-earth-light/25"
      >
        {/* Subtle overlay for image clarity and button legibility */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12 p-6 sm:p-12 md:p-24">
          {/* Top cultural tag */}
          <div className="inline-flex items-center space-x-2 bg-black/40 border border-paper/10 text-paper px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest backdrop-blur-sm animate-pulse">
            <Sparkles className="h-3.5 w-3.5 text-ochre-light" />
            <span>Documental Interactivo Patrimonio de Cañar</span>
          </div>

          {/* Fluid title main text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight text-paper leading-[1.1] text-balance">
            Raíces de Cañar
          </h1>

          {/* Action buttons with responsive width */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('/pueblos-nacionalidades')}
              className="w-full sm:w-auto px-8 py-3 bg-terracotta hover:bg-terracotta-dark text-paper font-semibold rounded shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Explorar el Legado</span>
              <BookOpen className="h-4 w-4" />
            </button>
            <button
              onClick={() => onNavigate('/mapa')}
              className="w-full sm:w-auto px-8 py-3 bg-paper-light border border-earth-light/50 hover:border-terracotta text-ink hover:text-terracotta font-semibold rounded shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Mapa de Cantones</span>
              <Map className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs text-paper/85 uppercase tracking-widest animate-bounce">
          <span className="mb-2">Descubrir</span>
          <div className="w-1 h-8 bg-terracotta/80 rounded" />
        </div>
      </section>

      {/* Cultural Origin Mythology Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink tracking-tight">
              La Tierra de la Serpiente y la Guacamaya
            </h2>
            <div className="w-20 h-1 bg-terracotta" />
            
            <p className="text-base text-ink-light leading-relaxed">
              Según el mito de origen de los <strong>Kañaris</strong>, su linaje procede de una gran laguna sagrada llamada <strong>Leoquina</strong>. En tiempos inmemoriales, una serpiente ancestral emergió de las profundidades y habitó los páramos de Cañar, engendrando a los primeros pobladores antes de retornar a las aguas primordiales.
            </p>
            
            <p className="text-base text-ink-light leading-relaxed">
              Posteriormente, cuando un diluvio universal cubrió las cumbres andinas, solo dos hermanos sobrevivieron refugiados en la cima del monte <strong>Huacayñán</strong>. Sin alimento, fueron socorridos por dos misteriosas <strong>Guacamayas con rostro de mujer</strong>. Los hermanos capturaron a la guacamaya menor, de cuya unión nacieron los nuevos progenitores que poblaron de nuevo estas fértiles tierras, consolidando un culto sagrado hacia las aves y los páramos.
            </p>

            <blockquote className="border-l-4 border-ochre pl-4 italic text-earth-dark text-sm bg-ochre/5 py-3 pr-2 rounded-r">
              "El pueblo Kañari adora al agua y a la luna. Sus santuarios son lagunas elevadas y cimas andinas, tejiendo una red mística que une al cielo con la tierra."
            </blockquote>
          </div>

          {/* Visual representations / Artistic Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-paper-dark border border-earth-light/35 p-6 rounded relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta/5 rounded-full -mr-8 -mt-8" />
              <div className="text-terracotta mb-4">
                <ShieldAlert className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink mb-2">El Pueblo del Agua</h3>
              <p className="text-xs text-earth-dark leading-relaxed">
                Sus lagunas de origen como Culebrillas son consideradas huacas sagradas. Cada año, peregrinan para rendir tributo a las profundidades creadoras.
              </p>
            </div>

            <div className="bg-paper-dark border border-earth-light/35 p-6 rounded relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-ochre/5 rounded-full -mr-8 -mt-8" />
              <div className="text-ochre mb-4">
                <Compass className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink mb-2">La Fusión Sincrética</h3>
              <p className="text-xs text-earth-dark leading-relaxed">
                El encuentro del culto Kañari a la Luna (Femenina) con el culto Inca al Sol (Masculino) dio forma a una de las fusiones arquitectónicas más asombrosas de América.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Navigation Grid */}
      <section className="bg-paper-dark py-20 px-4 border-y border-earth-light/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink tracking-tight">
              Patrimonio Vivo de Cañar
            </h2>
            <p className="text-sm text-earth max-w-xl mx-auto">
              Descubre las diversas dimensiones que integran la memoria y el presente de una de las provincias más históricas del Ecuador.
            </p>
            <div className="w-16 h-1 bg-terracotta mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1: Pueblos */}
            <div className="bg-paper p-6 rounded border border-earth-light/30 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
              <div>
                <div className="text-terracotta mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Compass className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink mb-2">Pueblos y Nacionalidades</h3>
                <p className="text-sm text-earth-dark leading-relaxed mb-4">
                  Conoce la historia del valiente pueblo Kichwa Kañari, su indumentaria típica, su lengua y sus dinámicas de vida comunitaria.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/pueblos-nacionalidades')}
                className="text-xs font-bold text-terracotta group-hover:text-terracotta-dark flex items-center space-x-1 uppercase tracking-wider"
              >
                <span>Saber Más</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Box 2: Arqueologia */}
            <div className="bg-paper p-6 rounded border border-earth-light/30 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
              <div>
                <div className="text-ochre mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Compass className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink mb-2">Cultura y Arqueología</h3>
                <p className="text-sm text-earth-dark leading-relaxed mb-4">
                  Explora las imponentes ruinas de Ingapirca, la fortaleza de Cojitambo y los altares de agua rituales labrados en piedra en Coyoctor.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/cultura-arqueologia')}
                className="text-xs font-bold text-terracotta group-hover:text-terracotta-dark flex items-center space-x-1 uppercase tracking-wider"
              >
                <span>Saber Más</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Box 3: Tradiciones */}
            <div className="bg-paper p-6 rounded border border-earth-light/30 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
              <div>
                <div className="text-emerald-700 mb-4 group-hover:scale-110 transition-transform duration-200">
                  <CalendarDays className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink mb-2">Tradiciones y Fiestas</h3>
                <p className="text-sm text-earth-dark leading-relaxed mb-4">
                  Sumérgete en la devoción andina: desde la danza del Curiquingue en el Inti Raymi hasta las coplas del Lalay Kañari.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/tradiciones-festividades')}
                className="text-xs font-bold text-terracotta group-hover:text-terracotta-dark flex items-center space-x-1 uppercase tracking-wider"
              >
                <span>Saber Más</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Box 4: Gastronomia */}
            <div className="bg-paper p-6 rounded border border-earth-light/30 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
              <div>
                <div className="text-amber-800 mb-4 group-hover:scale-110 transition-transform duration-200">
                  <UtensilsCrossed className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink mb-2">Gastronomía Ancestral</h3>
                <p className="text-sm text-earth-dark leading-relaxed mb-4">
                  Degusta los sabores de la tierra: cuy con papas, mellocos frescos, chicha fermentada en chombas y las crujientes cascaritas de Azogues.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/gastronomia')}
                className="text-xs font-bold text-terracotta group-hover:text-terracotta-dark flex items-center space-x-1 uppercase tracking-wider"
              >
                <span>Saber Más</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink tracking-tight">
              Línea del Tiempo Histórica
            </h2>
            <p className="text-sm text-earth">
              Un breve recorrido por las eras del territorio del Cañar, desde los orígenes formativos hasta la colonia.
            </p>
            <div className="w-16 h-1 bg-terracotta mx-auto" />
          </div>

          <div className="relative border-l border-earth-light/40 ml-4 md:ml-32 space-y-12 py-4">
            {/* Era 1 */}
            <div className="relative">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-terracotta rounded-full border-4 border-paper" />
              <div className="md:absolute md:-left-32 md:w-28 text-left md:text-right font-serif font-bold text-terracotta text-sm">
                4000 a.C. - 500 d.C.
              </div>
              <div className="ml-6">
                <h4 className="font-serif font-bold text-ink text-lg">Período Pre-Kañari (Narrío y Alausí)</h4>
                <p className="text-sm text-earth-dark mt-1">
                  Primeros asentamientos alfareros en las faldas del cerro Narrío. Desarrollo de sofisticadas técnicas cerámicas y redes comerciales interregionales para intercambiar conchas Spondylus y obsidiana.
                </p>
              </div>
            </div>

            {/* Era 2 */}
            <div className="relative">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-ochre rounded-full border-4 border-paper" />
              <div className="md:absolute md:-left-32 md:w-28 text-left md:text-right font-serif font-bold text-ochre text-sm">
                500 d.C. - 1460 d.C.
              </div>
              <div className="ml-6">
                <h4 className="font-serif font-bold text-ink text-lg">Federación Hatun Cañar (Cultura Kañari)</h4>
                <p className="text-sm text-earth-dark mt-1">
                  Se consolida la identidad Kañari unificada bajo cacicazgos locales confederados. Veneran a la Luna y a la Guacamaya. Crean grandes orfebrerías de oro, cobre y plata, y construyen santuarios y tumbas subterráneas.
                </p>
              </div>
            </div>

            {/* Era 3 */}
            <div className="relative">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-ink rounded-full border-4 border-paper" />
              <div className="md:absolute md:-left-32 md:w-28 text-left md:text-right font-serif font-bold text-ink text-sm">
                1470 d.C. - 1530 d.C.
              </div>
              <div className="ml-6">
                <h4 className="font-serif font-bold text-ink text-lg">Invasión Inca y Alianza</h4>
                <p className="text-sm text-earth-dark mt-1">
                  El emperador inca Tupac Yupanqui inicia la ocupación militar de la zona, topando con feroz resistencia. Posteriormente, mediante matrimonios políticos y pactos diplomáticos, se consolida la alianza Inca-Kañari. Se levanta la capital norteña y templos solares monumentales en Ingapirca.
                </p>
              </div>
            </div>

            {/* Era 4 */}
            <div className="relative">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-earth rounded-full border-4 border-paper" />
              <div className="md:absolute md:-left-32 md:w-28 text-left md:text-right font-serif font-bold text-earth text-sm">
                1534 d.C. en adelante
              </div>
              <div className="ml-6">
                <h4 className="font-serif font-bold text-ink text-lg">Período de Transición y Resistencia Cultural</h4>
                <p className="text-sm text-earth-dark mt-1">
                  Con la llegada de los colonizadores españoles, se desestructura la red incaica. Sin embargo, el pueblo Kañari resiste conservando celosamente su lengua, indumentaria, saberes agrícolas andinos y sus tierras comunales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Call to Action Banner */}
      <section className="bg-terracotta text-paper py-16 px-4 text-center relative overflow-hidden">
        {/* Decorative circular pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-paper/10 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-paper/5 rounded-full pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">
            ¿Listo para conocer el territorio ancestral?
          </h2>
          <p className="text-sm text-paper-dark leading-relaxed max-w-lg mx-auto">
            Interactúa con nuestro mapa cartográfico detallado de los cantones de la provincia de Cañar, y descubre atractivos turísticos, elevación, y datos demográficos en tiempo real.
          </p>
          <div>
            <button
              onClick={() => onNavigate('/mapa')}
              className="px-8 py-3 bg-paper text-terracotta hover:bg-ochre hover:text-paper font-bold uppercase tracking-wider text-xs rounded transition-all duration-300"
            >
              Abrir Mapa Interactivo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
