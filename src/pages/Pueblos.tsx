import React, { useState } from 'react';
import { Compass, Sparkles, BookOpen, Fingerprint } from 'lucide-react';

export const Pueblos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cosmovision' | 'indumentaria' | 'saberes'>('cosmovision');
  const [selectedClothing, setSelectedClothing] = useState<string>('sombrero');

  const clothingDetails: Record<string, { title: string; desc: string; symbol: string }> = {
    sombrero: {
      title: 'El Sombrero de Lana de Borrego',
      desc: 'De forma copa redonda y ala corta volteada hacia arriba, es elaborado con lana de oveja prensada y endurecida con goma. Lleva una pequeña cinta de color oscuro. Su color blanco refleja la pureza del espíritu Kañari y evoca la blancura de las nubes andinas sobre las cumbres sagradas.',
      symbol: 'Pureza, comunión con las alturas y resistencia identitaria frente a la aculturación.'
    },
    poncho: {
      title: 'El Poncho Rojo o Azul Marino',
      desc: 'Tejido a mano en telares tradicionales utilizando lana de oveja. Los hombres Kañari visten ponchos pesados de color rojo encendido o azul marino profundo. Su trama tupida proporciona excelente abrigo contra el gélido viento del páramo.',
      symbol: 'Representa la fuerza del hombre trabajador y protector de su familia y comunidad.'
    },
    pollera: {
      title: 'La Pollera Bordada (Zhupa)',
      desc: 'Faldas largas de lana o paño fino lucidas por las mujeres. Tradicionalmente son de colores intensos y contrastantes como rosa mexicano, morado o verde esmeralda. El ruedo inferior se adorna con elaborados bordados de flores en hilos de seda brillantes.',
      symbol: 'La fertilidad de la tierra, la conexión con la naturaleza y el estatus social o festivo.'
    },
    chumbi: {
      title: 'La Faja o Chumbi',
      desc: 'Cinturón largo tejido con hilos de colores que sirve para ajustar el pantalón del hombre o sujetar la pollera de la mujer. Su manufactura es un arte textil complejo, donde se entrelazan motivos geométricos que narran la mitología Kañari e Inca.',
      symbol: 'Eje del cuerpo, protección de los órganos vitales y registro gráfico de la memoria histórica.'
    },
    tupu: {
      title: 'El Tupu (Prendedor de Plata)',
      desc: 'Un gran alfiler de plata, bronce o alpaca rematado con una placa circular decorada con relieves. Se utiliza para sujetar el paño de lana (lliclla) que cubre los hombros de las mujeres.',
      symbol: 'Vínculo colonial y prehispánico, denota elegancia, linaje familiar y riqueza material.'
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 animate-fade-in">
      {/* Intro Header */}
      <div className="space-y-6 max-w-3xl mb-12">
        <div className="inline-flex items-center space-x-2 text-terracotta bg-terracotta/5 border border-terracotta/10 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Fingerprint className="h-3.5 w-3.5" />
          <span>Nacionalidad Originaria</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-ink tracking-tight">
          El Pueblo Kichwa Kañari
        </h1>
        <div className="w-24 h-1 bg-terracotta" />
        <p className="text-base text-ink-light leading-relaxed">
          Los <strong>Kañari</strong> representan uno de los pueblos preincaicos más antiguos, fuertes y emblemáticos de la cordillera andina ecuatoriana. Su territorio histórico abarca las actuales provincias de Cañar y Azuay. Conservando con orgullo su idioma Kichwa, sus vestimentas y su modelo organizativo comunitario, son custodios de saberes milenarios sobre el cosmos, la agricultura y el arte textil.
        </p>
      </div>

      {/* Tabs Switcher Navigation */}
      <div className="border-b border-earth-light/25 mb-8 flex overflow-x-auto space-x-2">
        <button
          onClick={() => setActiveTab('cosmovision')}
          className={`pb-4 px-4 font-serif text-base font-bold whitespace-nowrap transition-all duration-200 border-b-2 uppercase tracking-wide flex items-center space-x-2 ${
            activeTab === 'cosmovision'
              ? 'border-terracotta text-terracotta'
              : 'border-transparent text-earth hover:text-ink'
          }`}
        >
          <Compass className="h-4 w-4" />
          <span>Cosmovisión y Origen</span>
        </button>
        <button
          onClick={() => setActiveTab('indumentaria')}
          className={`pb-4 px-4 font-serif text-base font-bold whitespace-nowrap transition-all duration-200 border-b-2 uppercase tracking-wide flex items-center space-x-2 ${
            activeTab === 'indumentaria'
              ? 'border-terracotta text-terracotta'
              : 'border-transparent text-earth hover:text-ink'
          }`}
        >
          <Sparkles className="h-4 w-4" />
          <span>Indumentaria Tradicional</span>
        </button>
        <button
          onClick={() => setActiveTab('saberes')}
          className={`pb-4 px-4 font-serif text-base font-bold whitespace-nowrap transition-all duration-200 border-b-2 uppercase tracking-wide flex items-center space-x-2 ${
            activeTab === 'saberes'
              ? 'border-terracotta text-terracotta'
              : 'border-transparent text-earth hover:text-ink'
          }`}
        >
          <BookOpen className="h-4 w-4" />
          <span>Saberes y Prácticas</span>
        </button>
      </div>

      {/* Tab Panels Content */}
      <div className="bg-paper-dark border border-earth-light/30 rounded p-6 md:p-10 shadow-sm min-h-[400px]">
        {/* Tab 1: Cosmovision */}
        {activeTab === 'cosmovision' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-ink">
                El Culto Lunar y la Serpiente Leoquina
              </h2>
              <div className="w-16 h-0.5 bg-ochre" />
              <p className="text-sm md:text-base text-ink-light leading-relaxed">
                Antes de la hegemonía incaica, el universo mitológico Kañari giraba en torno a la divinidad de la <strong>Luna (Killa)</strong> y al elemento primordial del <strong>agua</strong>. A diferencia del sol (deidad de fuego y orden expansivo), la luna regía sus ciclos agrícolas, la maduración de las semillas y la sabiduría curativa femenina.
              </p>
              <p className="text-sm md:text-base text-ink-light leading-relaxed">
                Su geografía sagrada está salpicada de cumbres como el cerro Narrío y lagunas sagradas de páramo como <strong>Culebrillas</strong>. La laguna de Culebrillas es venerada como el lecho creador de la gran Serpiente <i>Leoquina</i>, madre biológica del linaje. La topografía montañosa y sinuosa del territorio era entendida por los sabios andinos como el cuerpo ondulante de esta serpiente cósmica.
              </p>
              <div className="p-4 bg-paper rounded border border-earth-light/40 flex items-center space-x-3 text-xs text-earth-dark">
                <Compass className="h-6 w-6 text-terracotta flex-shrink-0" />
                <span>
                  <strong>Dato Arqueológico:</strong> En las orillas de la laguna de Culebrillas se han hallado cimientos ceremoniales de piedra de manufactura mixta Kañari e Inca, confirmando su rol de oráculo de peregrinación precolombino.
                </span>
              </div>
            </div>

            {/* Graphic Illustration representation */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-ochre-light/20 to-terracotta/10 border-2 border-dashed border-earth-light/45 p-8 rounded text-center max-w-sm space-y-4">
                <div className="text-ochre text-5xl font-serif">☾</div>
                <h3 className="font-serif font-bold text-ink text-lg">Calendario Lunar Kañari</h3>
                <p className="text-xs text-earth-dark leading-relaxed">
                  Basado en los tránsitos de la luna sobre las cimas de la cordillera. Marcaba con exactitud milimétrica el momento del deshierbe, la cosecha de la papa y el mulluyo de maíz.
                </p>
                <div className="border-t border-earth-light/25 pt-3 flex justify-around text-[10px] uppercase font-bold tracking-wider text-earth">
                  <span>Luna Nueva (Sowing)</span>
                  <span>Luna Llena (Harvest)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Indumentaria */}
        {activeTab === 'indumentaria' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Diagram Navigation Column */}
            <div className="lg:col-span-5 space-y-3">
              <h2 className="text-xl font-bold font-serif text-ink mb-4">
                Elementos del Traje Ancestral
              </h2>
              <div className="flex flex-col space-y-2">
                {Object.keys(clothingDetails).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedClothing(key)}
                    className={`p-3 rounded border text-left text-sm font-semibold uppercase tracking-wider transition-all ${
                      selectedClothing === key
                        ? 'border-terracotta bg-terracotta/10 text-terracotta font-bold'
                        : 'border-earth-light/20 hover:border-ochre text-ink-light'
                    }`}
                  >
                    {clothingDetails[key].title}
                  </button>
                ))}
              </div>
            </div>

            {/* Display Detail Card Column */}
            <div className="lg:col-span-7 bg-paper border border-earth-light/40 p-6 rounded flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-block bg-ochre/15 text-ochre px-3 py-1 rounded text-xs uppercase font-bold tracking-wider">
                  Detalle de Vestimenta
                </div>
                <h3 className="text-2xl font-bold font-serif text-ink">
                  {clothingDetails[selectedClothing].title}
                </h3>
                <p className="text-sm text-ink-light leading-relaxed">
                  {clothingDetails[selectedClothing].desc}
                </p>
              </div>

              <div className="border-t border-earth-light/20 pt-4 mt-6">
                <span className="block text-xs font-bold uppercase tracking-wider text-earth mb-1">
                  Carga Simbólica y Cosmología:
                </span>
                <p className="text-xs italic text-terracotta font-medium">
                  {clothingDetails[selectedClothing].symbol}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Saberes */}
        {activeTab === 'saberes' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1 */}
            <div className="bg-paper border border-earth-light/40 p-6 rounded shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-ink mb-2">La Chacra y Agricultura</h3>
                <p className="text-xs text-earth-dark leading-relaxed">
                  La chacra es el espacio sagrado de cultivo biodiverso donde convive el maíz, el melloco, la oca, el frejol y la quinua. No es un mero terreno comercial, sino un ecosistema ritual donde se interactúa afectivamente con las plantas.
                </p>
              </div>
              <div className="text-xs font-bold text-ochre uppercase tracking-wider mt-4">
                Pachamama (Tierra Viva)
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-paper border border-earth-light/40 p-6 rounded shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-ink mb-2">La Minga Comunitaria</h3>
                <p className="text-xs text-earth-dark leading-relaxed">
                  Institución social andina fundamental de trabajo colectivo obligatorio y recíproco. Se convoca para reparar acueductos, levantar escuelas, cosechar comunalmente o construir caminos. Al final de la jornada se comparte la chicha y la pampamesa.
                </p>
              </div>
              <div className="text-xs font-bold text-terracotta uppercase tracking-wider mt-4">
                Maki Mañachi (Apoyo Recíproco)
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-paper border border-earth-light/40 p-6 rounded shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-ink mb-2">Medicina y Partería</h3>
                <p className="text-xs text-earth-dark leading-relaxed">
                  El uso de plantas medicinales nativas de páramo (como chuquiragua, valeriana, marco y ortiga) es clave. Los sanadores y parteras tradicionales (Jachis) gozan de gran prestigio político y espiritual en las comunas.
                </p>
              </div>
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mt-4">
                Ranti Ranti (Reciprocidad)
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
