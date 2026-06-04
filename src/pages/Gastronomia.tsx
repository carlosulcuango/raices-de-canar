import React, { useState } from 'react';
import { GASTRONOMY_DATA, Dish } from '../data/canarData';
import { UtensilsCrossed, Sparkles, BookOpen, Flame } from 'lucide-react';

export const Gastronomia: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<Dish>(GASTRONOMY_DATA[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 animate-fade-in">
      {/* Editorial Header */}
      <div className="space-y-6 max-w-3xl mb-12">
        <div className="inline-flex items-center space-x-2 text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          <UtensilsCrossed className="h-3.5 w-3.5" />
          <span>Sabores Ancestrales del Páramo</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-ink tracking-tight">
          Gastronomía Identitaria
        </h1>
        <div className="w-24 h-1 bg-terracotta" />
        <p className="text-base text-ink-light leading-relaxed">
          La cocina tradicional de Cañar es un reflejo de la generosidad de la tierra andina (chacra) y la conservación de técnicas precolombinas. Utilizando principalmente el maíz, tubérculos como el melloco, la oca y la papa, proteínas como el cuy y carnes preparadas al fuego de paja de páramo, la gastronomía local es nutritiva, ritual y estrechamente comunitaria.
        </p>
      </div>

      {/* Main Grid: Culinary Display & Recipe Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Dishes Selector List (Left) */}
        <div className="lg:col-span-5 space-y-3">
          <span className="block text-xs font-bold uppercase tracking-widest text-earth mb-2">
            Platos Tradicionales
          </span>
          <div className="space-y-2">
            {GASTRONOMY_DATA.map((dish) => (
              <button
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className={`w-full p-4 rounded border text-left transition-all duration-200 ${
                  selectedDish.id === dish.id
                    ? 'border-terracotta bg-paper-dark shadow-sm ring-1 ring-terracotta'
                    : 'border-earth-light/25 hover:border-ochre bg-paper/50'
                }`}
              >
                <div className="text-[10px] uppercase font-bold text-earth tracking-wide mb-1">
                  {dish.origin}
                </div>
                <h3 className="font-serif font-bold text-lg text-ink">
                  {dish.name}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Recipe Viewer (Right) */}
        <div className="lg:col-span-7 bg-paper-dark border border-earth-light/35 rounded p-6 md:p-10 shadow-sm space-y-6">
          <div className="border-b border-earth-light/25 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-terracotta block mb-1">
              Ficha Gastronómica
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">
              {selectedDish.name}
            </h2>
            <p className="text-xs text-earth mt-1">
              <strong>Origen geográfico:</strong> {selectedDish.origin}
            </p>
          </div>

          {/* Dish Image */}
          <div className="w-full h-48 md:h-64 overflow-hidden rounded border border-earth-light/20 shadow-sm">
            <img
              src={selectedDish.imageUrl}
              alt={selectedDish.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-earth">
              Descripción del Plato
            </h4>
            <p className="text-sm md:text-base text-ink-light leading-relaxed">
              {selectedDish.description}
            </p>
          </div>

          {/* Ingredients list */}
          <div className="bg-paper p-6 rounded border border-earth-light/30">
            <h4 className="font-serif font-bold text-ink text-base mb-3 flex items-center space-x-2">
              <BookOpen className="h-4 w-4 text-ochre" />
              <span>Ingredientes Clave</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-earth-dark">
              {selectedDish.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-terracotta rounded-full flex-shrink-0" />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tradition & Ritual Use */}
          <div className="bg-amber-50/50 p-4 rounded border border-amber-200 text-xs md:text-sm text-earth-dark space-y-1.5">
            <div className="flex items-center space-x-1.5 text-amber-800 font-bold uppercase tracking-wide">
              <Sparkles className="h-4 w-4 text-ochre" />
              <span>Contexto Cultural y Tradición</span>
            </div>
            <p className="italic leading-relaxed">{selectedDish.tradition}</p>
          </div>
        </div>
      </div>

      {/* Special Feature: Cascaritas of Azogues */}
      <section className="bg-gradient-to-br from-ochre-light/20 to-terracotta/10 border border-earth-light/40 rounded p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-terracotta bg-paper px-3 py-1 rounded">
              <Flame className="h-3.5 w-3.5 text-terracotta" />
              <span>Técnica Declarada Patrimonio</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-ink">
              La Técnica del Chamuscado de las Cascaritas
            </h2>
            <div className="w-16 h-0.5 bg-ochre" />
            <p className="text-sm md:text-base text-ink-light leading-relaxed">
              Las <strong>Cascaritas de Azogues</strong> representan una técnica culinaria viva con más de un siglo de registro patrimonial. A diferencia del horneado tradicional de cerdo, esta técnica consiste en chamuscar directamente el cuero del animal entero utilizando sopletes avivados con <strong>paja de páramo</strong> seca.
            </p>
            <p className="text-sm md:text-base text-ink-light leading-relaxed">
              El proceso requiere una gran pericia para lograr una costra dorada extremadamente crujiente y fina (similar a una lámina de galleta) mientras que la carne interior retiene todos sus jugos. La paja de páramo quemada le infunde un característico regusto ahumado y andino incomparable. Es un plato icónico a lo largo del eje vial que conecta Cuenca con Azogues y Cañar.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="bg-paper p-6 rounded-lg border border-earth-light/40 max-w-xs space-y-3 text-center">
              <span className="text-terracotta text-5xl">🔥</span>
              <h3 className="font-serif font-bold text-ink">Sabor del Fuego</h3>
              <p className="text-xs text-earth-dark leading-relaxed">
                "El uso de la paja andina en el chamuscado conecta la técnica culinaria mestiza directamente con los recursos naturales del páramo."
              </p>
              <div className="pt-2 text-[10px] text-earth uppercase font-bold tracking-widest">
                Patrimonio Inmaterial de Azogues
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
