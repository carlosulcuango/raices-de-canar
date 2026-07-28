export interface Canton {
  id: string;
  name: string;
  capital: string;
  population: string;
  elevation: string;
  climate: string;
  history: string;
  attractions: string[];
  description: string;
  mapPath: string; // Dynamic SVG path coordinates for our interactive map
  imageUrl: string;
}

export interface Dish {
  id: string;
  name: string;
  origin: string;
  description: string;
  ingredients: string[];
  tradition: string;
  imageUrl: string;
}

export interface ArcheologicalSite {
  id: string;
  name: string;
  culture: string;
  period: string;
  description: string;
  details: string;
  features: string[];
  imageUrl: string;
}

export interface Festivity {
  id: string;
  name: string;
  date: string;
  origin: string;
  description: string;
  ritual: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'arqueologia' | 'pueblos' | 'paisajes' | 'artesanias';
  description: string;
  colorPreset: string; // Beautiful gradient presets for overlay highlights
  imageUrl: string; // Real public URL
}

export const CANTONS_DATA: Canton[] = [
  {
    id: 'azogues',
    name: 'Azogues',
    capital: 'Azogues',
    population: '82,000 hab. aprox.',
    elevation: '2,518 m.s.n.m.',
    climate: '12°C - 18°C (Templado semicálido)',
    description: 'Capital administrativa y cultural de la provincia. Famosa por sus imponentes iglesias de piedra, artesanías en paja toquilla y el cerro Cojitambo.',
    history: 'Fue declarada Patrimonio Cultural de la Nación por su centro histórico de piedra picada y arquitectura colonial. Su nombre proviene de los yacimientos de azogue (mercurio) explotados en la época española.',
    attractions: [
      'Santuario de la Virgen de la Nube (Zhalao)',
      'Complejo Arqueológico Cojitambo',
      'Talleres artesanales de Paja Toquilla',
      'Río Burgay y parque lineal'
    ],
    mapPath: 'M 140 180 L 190 200 L 210 170 L 200 130 L 160 140 Z',
    imageUrl: '/images/cojitambo.jpg'
  },
  {
    id: 'canar',
    name: 'Cañar',
    capital: 'Cañar',
    population: '75,000 hab. aprox.',
    elevation: '3,185 m.s.n.m.',
    climate: '8°C - 14°C (Frío andino / páramo)',
    description: 'La Capital Arqueológica y Cultural del Ecuador. Cuna de la nacionalidad Kañari, alberga el majestuoso santuario de Ingapirca.',
    history: 'El cantón con mayor población indígena Kichwa Kañari. Históricamente, fue el núcleo de resistencia y posterior alianza comercial y cultural con los Incas.',
    attractions: [
      'Complejo Arqueológico de Ingapirca',
      'Laguna de Culebrillas (Sitio Sagrado)',
      'Cerro Narrio (Asentamiento pre-Kañari)',
      'Mercado tradicional de los domingos'
    ],
    mapPath: 'M 100 80 L 150 90 L 180 130 L 160 140 L 120 120 L 90 100 Z',
    imageUrl: '/images/ingapirca.jpg'
  },
  {
    id: 'biblian',
    name: 'Biblián',
    capital: 'Biblián',
    population: '22,000 hab. aprox.',
    elevation: '2,608 m.s.n.m.',
    climate: '11°C - 16°C (Templado frío)',
    description: 'Conocido como el "Cantón Verde" de la provincia, destaca por su fe religiosa representada en el espectacular santuario del Zhalao.',
    history: 'Su desarrollo histórico estuvo ligado al ferrocarril y la agricultura. En 1944 se construyó el Santuario de la Virgen del Rocío tallado directamente en el acantilado de piedra, convirtiéndose en un ícono paisajístico.',
    attractions: [
      'Santuario de la Virgen del Rocío',
      'Cerro Zhalao',
      'Artesanías en paja toquilla y tejido a mano',
      'Haciendas coloniales y producción láctea'
    ],
    mapPath: 'M 120 120 L 160 140 L 200 130 L 170 160 L 130 150 Z',
    imageUrl: '/images/santuario.jpg'
  },
  {
    id: 'el-tambo',
    name: 'El Tambo',
    capital: 'El Tambo',
    population: '11,500 hab. aprox.',
    elevation: '2,980 m.s.n.m.',
    climate: '10°C - 15°C (Templado frío andino)',
    description: 'Histórico nodo del Qhapaq Ñan (Camino del Inca) y estación de descanso prehispánica. Destaca por el Complejo Arqueológico Coyoctor y sus baños rituales tallados en piedra.',
    history: 'Su nombre proviene del vocablo Kichwa "Tampu", refiriéndose a las posadas ceremoniales e imperiales construidas a lo largo de las calzadas andinas para el descanso de los chasquis y la comitiva del Inca. Conserva infraestructura de piedra viva y patrimonio ferroviario.',
    attractions: [
      'Complejo Arqueológico Coyoctor (Baños del Inca)',
      'Silla del Inca y altares rituales labrados en piedra',
      'Iglesia San Juan Bautista y centro histórico de piedra',
      'Estación del Ferrocarril Histórico e itinerario andino'
    ],
    mapPath: 'M 150 110 L 250 80 L 260 140 L 170 170 Z',
    imageUrl: '/images/tambo.jpg'
  },
  {
    id: 'deleg',
    name: 'Déleg',
    capital: 'Déleg',
    population: '7,000 hab. aprox.',
    elevation: '2,650 m.s.n.m.',
    climate: '12°C - 17°C (Templado semicálido)',
    description: 'Considerado el cantón más antiguo y cuna de ilustres personajes como Luis Cordero Crespo. Famoso por sus paisajes verdes, la laguna de Guabizhún y tradiciones artesanales.',
    history: 'Poblado por comunidades Kañaris precolombinas expertas en alfarería y medicina natural. Con la colonia se convirtió en una próspera zona agrícola y ganadera que mantiene sus tradiciones andinas intactas.',
    attractions: [
      'Laguna mística de Guabizhún',
      'Parroquia rural Solano y arquitectura colonial',
      'Casa Histórica del ex-Presidente Luis Cordero',
      'Mirador natural de Surampalti y senderos ecológicos'
    ],
    mapPath: 'M 180 230 L 310 260 L 340 330 L 270 360 L 190 310 Z',
    imageUrl: '/images/Deleg.jpg'
  },
  {
    id: 'suscal',
    name: 'Suscal',
    capital: 'Suscal',
    population: '6,200 hab. aprox.',
    elevation: '2,700 m.s.n.m.',
    climate: '11°C - 16°C (Templado húmedo)',
    description: 'Enclave de profunda identidad Kichwa Kañari, rodeado por valles y páramos fértiles. Reconocido por la conservación del telar de cintura y medicina ancestral.',
    history: 'Históricamente sirvió como punto neurálgico de intercambio entre los páramos andinos del Cañar y los valles subtropicales. Sus tejedores conservan los diseños ancestrales en fajas (chumbis) y ponchos.',
    attractions: [
      'Páramos y vertientes sagradas de Suscal',
      'Talleres comunitarios de telar de cintura Kañari',
      'Huertos medicinales y saberes de sanación andina',
      'Ruta de las Cascadas y biodiversidad andina'
    ],
    mapPath: 'M 40 140 L 150 110 L 170 170 L 90 200 Z',
    imageUrl: '/images/suscal.jpg'
  }
];

export const GASTRONOMY_DATA: Dish[] = [
  {
    id: 'cuy-papas',
    name: 'Cuy con Papas',
    origin: 'Provincia del Cañar en general (Área andina)',
    description: 'El cuy asado al carbón acompañado de papas cocidas bañadas en una salsa de maní espesa y sazonada, mote y lechuga fresca.',
    ingredients: ['Cuy seleccionado', 'Papas andinas', 'Maní molido y tostado', 'Achiote y aliños caseros', 'Mote cocido'],
    tradition: 'Es el plato festivo por excelencia de la cultura Kañari. Se sirve en matrimonios, bautizos, visitas de alto honor y durante el Inti Raymi como ofrenda de comunión comunitaria.',
    imageUrl: '/images/cuy.jpg'
  },
  {
    id: 'mellocos',
    name: 'Mellocos y Habas con Queso',
    origin: 'Cantones altos (Cañar, Biblián, El Tambo)',
    description: 'Mellocos cocidos (tubérculo andino de textura firme y suave mucílago) servidos calientes junto a habas tiernas cocidas y queso fresco artesanal del páramo.',
    ingredients: ['Mellocos rojos o amarillos', 'Habas verdes tiernas', 'Queso criollo de hacienda', 'Ají de piedra andino'],
    tradition: 'Comida cotidiana y nutritiva asociada al trabajo agrícola (chacra). Representa la biodiversidad de los tubérculos andinos domesticados milenariamente.',
    imageUrl: '/images/mellocos.jpg'
  },
  {
    id: 'chicha-jora',
    name: 'Chicha de Jora',
    origin: 'Comunidades Kichwa Kañari',
    description: 'Bebida fermentada de maíz amarillo germinado (jora), cocido con hierbas aromáticas, panela y madurado tradicionalmente en vasijas de barro (chombas).',
    ingredients: ['Maíz de jora malteado', 'Panela de caña', 'Hierba luisa y especias dulces', 'Agua de vertiente'],
    tradition: 'Bebida sagrada de origen preincaico utilizada en rituales de agradecimiento a la Pachamama y como combustible refrescante para las mingas comunitarias.',
    imageUrl: '/images/chicha.jpg'
  },
  {
    id: 'cascaritas',
    name: 'Las Cascaritas de Azogues',
    origin: 'Azogues y el eje vial de Cañar',
    description: 'Piel de cerdo chamuscada y dorada al soplete con paja de páramo hasta quedar crujiente (tipo galleta). Se sirve caliente cortada en trozos, acompañada de mote, sal y ají.',
    ingredients: ['Cuero de cerdo entero', 'Paja de páramo (para chamuscar)', 'Mote blanco', 'Sal en grano', 'Ají de piedra'],
    tradition: 'Patrimonio gastronómico de la provincia. La técnica del chamuscado con soplete y paja le otorga un sabor ahumado único que atrae a viajeros de todo el país.',
    imageUrl: '/images/cascaritas.jpg'
  },
  {
    id: 'cascaron',
    name: 'El Cascarón',
    origin: 'Tradición mestiza de Azogues',
    description: 'Bebida o postre caliente preparado a base de huevos batidos con aguardiente de caña (puntas), canela y almíbar, servido en vasijas tradicionales.',
    ingredients: ['Yemas de huevo frescas', 'Aguardiente artesanal (puntas)', 'Canela en rama', 'Almíbar de panela o azúcar'],
    tradition: 'Consumido tradicionalmente en las noches frías de festividades religiosas y patronales para brindar calor y energía a los devotos y danzantes.',
    imageUrl: '/images/cascaron.jpg'
  }
];

export const ARCHAEOLOGY_DATA: ArcheologicalSite[] = [
  {
    id: 'ingapirca',
    name: 'Complejo Arqueológico de Ingapirca',
    culture: 'Kañari - Inca (Fusión arquitectónica)',
    period: 'Siglo XV d.C. (Aproximadamente 1470-1500)',
    description: 'El sitio arqueológico prehispánico más importante de Ecuador. Destaca por su imponente Castillo o Templo del Sol, una estructura elíptica única construida sobre cimientos sagrados Kañari.',
    details: 'Antes de la llegada de los incas, Ingapirca era conocida como "Hatun Cañar", el centro ceremonial del pueblo Kañari, quienes adoraban a la Luna. Tras la invasión inca, el emperador Huayna Cápac mandó a edificar el templo solar con piedras labradas sin argamasa en un gesto de sincretismo político-religioso con los vencidos.',
    features: [
      'El Templo del Sol o Castillo (Edificación elíptica única)',
      'La Condamine (Zona residencial y de depósitos / colcas)',
      'La Pilaloma (Cementerio y templo más antiguo Kañari)',
      'La Cara del Inca (Formación rocosa natural sagrada)'
    ],
    imageUrl: '/images/ingapirca.jpg'
  },
  {
    id: 'cojitambo',
    name: 'Complejo Arqueológico de Cojitambo',
    culture: 'Kañari - Inca',
    period: '500 d.C. a 1532 d.C.',
    description: 'Una fortaleza y centro ritual ubicado en los flancos del cerro Cojitambo. Servía como puesto de vigilancia militar y ceremonial sobre el valle de Azogues.',
    details: 'Cojitambo consta de terrazas habitacionales, escalinatas de piedra y una gran plaza ceremonial. El cerro de andesita en sí era una huaca (sitio sagrado) y hoy en día es también un importante destino para la escalada en roca en el Ecuador.',
    features: [
      'Pucará militar (Muros de contención y defensa)',
      'Plaza ceremonial alta con vista de 360 grados',
      'Piedra de sacrificios e hitos astronómicos',
      'Secciones del Qhapaq Ñan (Camino del Inca) conectadas'
    ],
    imageUrl: '/images/cojitambo.jpg'
  },
  {
    id: 'coyoctor',
    name: 'Baños del Inca en Coyoctor',
    culture: 'Kañari - Inca',
    period: 'Periodo de Integración (500-1500 d.C.)',
    description: 'Un sitio arqueológico sagrado ubicado en El Tambo. Presenta altares tallados directamente sobre roca andesita, piscinas rituales y canales de agua.',
    details: 'Utilizado por sacerdotes Kañari e Inca para la observación astronómica, ritos de purificación del agua y predicción de ciclos agrícolas. Los cortes geométricos y depósitos tallados en la roca son de un alto nivel estético.',
    features: [
      'El Altar Sagrado tallado en piedra viva',
      'La Silla del Inca (Trono ceremonial tallado)',
      'Canales de agua rituales labrados en la roca',
      'Reservorios de agua para purificación'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800'
  }
];

export const FESTIVITIES_DATA: Festivity[] = [
  {
    id: 'inti-raymi',
    name: 'Inti Raymi (Fiesta del Sol y la Cosecha)',
    date: '17 al 23 de Junio (Solsticio de Verano)',
    origin: 'Kañari - Inca',
    description: 'La festividad andina más grande en honor al Taita Inti (Padre Sol) y a la Pachamama (Madre Tierra) por los frutos recibidos en las cosechas.',
    ritual: 'Celebrado principalmente en Ingapirca. Incluye rituales de purificación con agua en sitios sagrados, la danza de los Curiquingues (hombres vestidos simulando al ave sagrada andina), música con pífanos y tambores, pampamesas (comidas comunitarias compartidas en el suelo) y la elección de la Ñusta (reina de la festividad).'
  },
  {
    id: 'lalay-kanari',
    name: 'El Lalay Kañari (Taita Carnaval)',
    date: 'Febrero / Marzo (Movible, época de Carnaval)',
    origin: 'Pueblo Kañari prehispánico',
    description: 'Una celebración que fusiona el agradecimiento por la maduración de los primeros frutos (Pawkar Raymi) con el carnaval mestizo.',
    ritual: 'Liderado por el "Taita Carnaval", un personaje mítico de la montaña que baja a visitar los hogares. Las comunidades Kichwa Kañari recorren los senderos cantando coplas rítmicas en Kichwa y Español (Lalay), tocando charangos, pingullos y bombos. Se comparte abundante chicha, mote, cuy y dulces tradicionales.'
  },
  {
    id: 'virgen-rocio',
    name: 'Fiesta del Santuario del Rocío',
    date: '8 de Septiembre',
    origin: 'Fe Católica y Mestizaje',
    description: 'Gran peregrinación y festividad en honor a la Virgen del Rocío en el cantón Biblián, congregando a miles de fieles locales y migrantes.',
    ritual: 'Los devotos suben en procesión nocturna y diurna por las empinadas laderas del cerro Zhalao portando antorchas y cantando himnos. La colina se ilumina de forma espectacular. Se realizan castillos de fuegos artificiales, ferias folclóricas y bandas de pueblo.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'El Castillo de Ingapirca',
    category: 'arqueologia',
    description: 'La estructura elíptica del Templo del Sol levantada sobre cimientos sagrados Kañari en Hatun Cañar.',
    colorPreset: 'from-amber-800 to-stone-900',
    imageUrl: '/images/ingapirca.jpg'
  },
  {
    id: 'gal-2',
    title: 'Tejedora Kañari de Paja Toquilla',
    category: 'pueblos',
    description: 'Manos hábiles entrelazando las fibras de paja toquilla para elaborar sombreros tradicionales declarados Patrimonio Inmaterial.',
    colorPreset: 'from-orange-700 to-amber-900',
    imageUrl: '/images/tejedora.jpg'
  },
  {
    id: 'gal-3',
    title: 'Laguna Sagrada de Culebrillas',
    category: 'paisajes',
    description: 'Espejo de agua ubicado en los páramos a 3800m de altura, sitio de origen mítico de la serpiente sagrada Kañari.',
    colorPreset: 'from-cyan-900 to-emerald-950',
    imageUrl: '/images/culebrillas.jpg'
  },
  {
    id: 'gal-4',
    title: 'Danzante Curiquingue del Inti Raymi',
    category: 'pueblos',
    description: 'Joven danzante con alas y máscaras de colores emulando el vuelo del halcón andino (Curiquingue) en honor al sol.',
    colorPreset: 'from-red-800 to-amber-700',
    imageUrl: '/images/danzante.jpg'
  },
  {
    id: 'gal-5',
    title: 'Fortaleza y Terrazas de Cojitambo',
    category: 'arqueologia',
    description: 'Vista de los bloques de andesita encajados perfectamente y las terrazas agrícolas con vistas al valle de Azogues.',
    colorPreset: 'from-stone-700 to-stone-900',
    imageUrl: '/images/cojitambo.jpg'
  },
  {
    id: 'gal-6',
    title: 'Santuario de la Virgen del Rocío',
    category: 'paisajes',
    description: 'Majestuosa estructura gótica incrustada de manera inverosímil en el acantilado del cerro Zhalao, en Biblián.',
    colorPreset: 'from-sky-900 to-emerald-900',
    imageUrl: '/images/santuario.jpg'
  },
  {
    id: 'gal-7',
    title: 'Tejido en Telar de Cintura Kañari',
    category: 'artesanias',
    description: 'Faja (Chumbi) con iconografía geométrica y zoomorfa que relata la cosmología Kañari e Inca.',
    colorPreset: 'from-rose-800 to-amber-950',
    imageUrl: '/images/telar.jpg'
  },
  {
    id: 'gal-8',
    title: 'Cerámica Ancestral Cerro Narrío',
    category: 'arqueologia',
    description: 'Vaso cerámico del período Formativo Tardío con acabados pulidos y decoraciones de pintura roja sobre arcilla.',
    colorPreset: 'from-amber-900 to-stone-850',
    imageUrl: '/images/narrio.jpg'
  }
];
