import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/canarData';
import { X, Compass, Image as ImageIcon, Eye } from 'lucide-react';

export const Galeria: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'arqueologia' | 'pueblos' | 'paisajes' | 'artesanias'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const filterTabs = [
    { label: 'Todos', value: 'all' },
    { label: 'Arqueología', value: 'arqueologia' },
    { label: 'Pueblos y Rostros', value: 'pueblos' },
    { label: 'Paisajes y Cerros', value: 'paisajes' },
    { label: 'Artesanías y Fajas', value: 'artesanias' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 animate-fade-in">
      {/* Editorial Header */}
      <div className="space-y-6 max-w-3xl mb-12">
        <div className="inline-flex items-center space-x-2 text-terracotta bg-terracotta/5 border border-terracotta/10 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          <ImageIcon className="h-3.5 w-3.5" />
          <span>Registro Visual del Patrimonio</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-ink tracking-tight">
          Galería Documental
        </h1>
        <div className="w-24 h-1 bg-terracotta" />
        <p className="text-base text-ink-light leading-relaxed">
          Un recorrido estético por las texturas, colores e hitos arqueológicos del Cañar. Esta selección retrata las majestuosas construcciones de piedra picada, los tejidos cargados de símbolos milenarios, la riqueza hídrica de los páramos y los rostros de los artesanos custodios de la memoria colectiva.
        </p>
      </div>

      {/* Filter Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-earth-light/25 pb-6 mb-10">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveFilter(tab.value as any)}
            className={`px-4 py-2 text-xs md:text-sm font-semibold rounded uppercase tracking-wider transition-all duration-200 ${
              activeFilter === tab.value
                ? 'bg-terracotta text-paper shadow-sm'
                : 'bg-paper-dark border border-earth-light/35 text-ink-light hover:border-terracotta hover:text-terracotta'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group cursor-pointer bg-paper border border-earth-light/30 rounded overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-[320px]"
          >
            {/* Real Image representation */}
            <div className="w-full h-48 relative overflow-hidden bg-paper-dark border-b border-earth-light/20">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover Overlay Icon */}
              <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-paper text-terracotta p-3 rounded-full scale-75 group-hover:scale-100 transition-transform duration-300 shadow-md">
                  <Eye className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Content text metadata */}
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-terracotta tracking-wider mb-1 block">
                  {item.category}
                </span>
                <h3 className="font-serif font-bold text-base text-ink line-clamp-1 group-hover:text-terracotta transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-earth-dark line-clamp-2 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="text-[10px] text-earth uppercase font-bold tracking-widest text-right mt-2 flex items-center justify-end space-x-1">
                <span>Ampliar Detalle</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal Window */}
      {selectedItem && (
        <div className="fixed inset-0 bg-ink/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-paper border border-earth-light/40 rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl relative animate-fade-in">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-paper bg-ink/40 p-2 rounded-full hover:bg-terracotta hover:text-paper transition-all z-10"
              aria-label="Cerrar modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Column: Real image */}
              <div className="h-64 md:h-auto min-h-[300px] relative bg-paper-dark">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>

              {/* Right Column: Information */}
              <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="px-3 py-1 bg-terracotta/10 text-terracotta rounded text-xs font-bold uppercase tracking-wider inline-block">
                    {selectedItem.category}
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-ink">
                    {selectedItem.title}
                  </h2>
                  <div className="w-12 h-0.5 bg-ochre" />
                  <p className="text-sm md:text-base text-ink-light leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-earth-light/20 flex items-center justify-between text-xs text-earth">
                  <span className="flex items-center space-x-1">
                    <Compass className="h-4 w-4 text-ochre" />
                    <span>Provincia de Cañar, Ecuador</span>
                  </span>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-4 py-2 bg-terracotta text-paper font-semibold uppercase tracking-wider rounded text-[10px] hover:bg-terracotta-dark transition-all"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
