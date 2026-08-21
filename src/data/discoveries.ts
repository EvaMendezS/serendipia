import type {
  Discovery,
} from '../types/discovery';

export const discoveries: Discovery[] = [
  {
    id: 'geo-mercator',
    title:
      '¿Por qué casi todos los mapas del mundo están “equivocados”?',
    eyebrow: 'HOY TE TOCÓ',
    hook:
      'Representar una esfera sobre una superficie plana siempre exige deformar algo.',
    category: 'geography',
    duration: 5,
    difficulty: 'easy',
    sections: [
      {
        title: 'La idea',
        body:
          'La Tierra es aproximadamente esférica, pero un mapa es plano. Para pasar de una superficie curva a una plana se usan proyecciones cartográficas. Cada proyección conserva algunas propiedades y sacrifica otras.',
      },
      {
        title: 'Mercator',
        body:
          'La proyección de Mercator fue creada para facilitar la navegación. Conserva bien los ángulos locales, pero exagera el tamaño de las regiones cercanas a los polos. Por eso Groenlandia parece muchísimo más grande de lo que realmente es en comparación con África.',
      },
      {
        title: 'Lo importante',
        body:
          'No existe un mapa plano completamente fiel a la superficie terrestre. La pregunta correcta no es cuál es el mapa perfecto, sino qué tipo de distorsión resulta más aceptable para el propósito del mapa.',
      },
    ],
    takeaway:
      'Todo mapa es una interpretación matemática del planeta, no una copia exacta.',
    relatedTopics: [
      'Cartografía',
      'Navegación',
      'Geopolítica',
    ],
  },
  {
    id: 'science-tree-network',
    title:
      '¿Los árboles realmente “se comunican” entre sí?',
    eyebrow: 'DESCUBRIMIENTO',
    hook:
      'Bajo el suelo existe una red de raíces, hongos y nutrientes mucho más compleja de lo que parece.',
    category: 'science',
    duration: 5,
    difficulty: 'medium',
    sections: [
      {
        title: 'La idea',
        body:
          'Muchos árboles forman asociaciones con hongos llamadas micorrizas. Los hongos reciben azúcares de las plantas y, a cambio, ayudan a captar agua y nutrientes del suelo.',
      },
      {
        title: 'La red',
        body:
          'Las redes micorrícicas pueden conectar distintas plantas. A través de ellas se han observado transferencias de carbono y otros nutrientes, aunque describir este fenómeno como una “conversación” puede simplificar demasiado lo que sucede biológicamente.',
      },
      {
        title: 'Lo fascinante',
        body:
          'El bosque funciona menos como una colección de individuos aislados y más como un sistema de relaciones entre plantas, hongos, microorganismos, suelo y clima.',
      },
    ],
    takeaway:
      'Un bosque es una red ecológica, no solamente un conjunto de árboles.',
    relatedTopics: [
      'Hongos',
      'Ecología',
      'Bosques',
    ],
  },
  {
    id: 'history-calendar-1582',
    title:
      '¿Por qué hubo diez días de 1582 que nunca existieron?',
    eyebrow: 'UN SALTO EN EL TIEMPO',
    hook:
      'En algunos países, al jueves 4 de octubre de 1582 le siguió directamente el viernes 15.',
    category: 'history',
    duration: 5,
    difficulty: 'easy',
    sections: [
      {
        title: 'El problema',
        body:
          'El calendario juliano calculaba el año con una pequeña diferencia respecto del año solar real. Durante siglos, ese error se fue acumulando.',
      },
      {
        title: 'La corrección',
        body:
          'La reforma impulsada por el papa Gregorio XIII introdujo el calendario gregoriano. Para recuperar el desfase acumulado se omitieron diez fechas del calendario en los territorios que adoptaron inmediatamente la reforma.',
      },
      {
        title: 'No ocurrió en todo el mundo',
        body:
          'Los distintos países adoptaron el calendario gregoriano en momentos diferentes. Por eso la eliminación de fechas no ocurrió simultáneamente en todas partes.',
      },
    ],
    takeaway:
      'Nuestro calendario también es una tecnología: fue ajustado para mantenerse sincronizado con la astronomía.',
    relatedTopics: [
      'Astronomía',
      'Calendarios',
      'Europa',
    ],
  },
  {
    id: 'psych-choice',
    title:
      '¿Por qué tener más opciones puede hacernos elegir peor?',
    eyebrow: 'PARA PENSAR',
    hook:
      'Más alternativas no siempre significan más libertad práctica.',
    category: 'psychology',
    duration: 2,
    difficulty: 'easy',
    sections: [
      {
        title: 'La idea',
        body:
          'Cuando aumenta mucho la cantidad de alternativas, comparar todas las posibilidades exige más esfuerzo mental. Esto puede generar demora, frustración o incluso evitar la elección.',
      },
      {
        title: 'El matiz',
        body:
          'No existe un número mágico de opciones que resulte siempre óptimo. El efecto depende del contexto, de la importancia de la decisión y de cuánto conoce la persona sobre aquello que está eligiendo.',
      },
    ],
    takeaway:
      'A veces reducir posibilidades mejora una decisión más que agregar alternativas.',
    relatedTopics: [
      'Decisiones',
      'Sesgos',
      'Atención',
    ],
  },
  {
    id: 'nature-octopus',
    title:
      '¿Por qué un pulpo tiene neuronas en los brazos?',
    eyebrow: 'NATURALEZA',
    hook:
      'Una gran parte del sistema nervioso del pulpo está distribuida fuera de su cerebro central.',
    category: 'nature',
    duration: 5,
    difficulty: 'easy',
    sections: [
      {
        title: 'Un cuerpo distinto',
        body:
          'Los pulpos poseen un sistema nervioso muy distribuido. Una enorme cantidad de sus neuronas se encuentra en los brazos, donde redes nerviosas locales pueden procesar información sensorial y coordinar movimientos.',
      },
      {
        title: 'Autonomía parcial',
        body:
          'Los brazos no son cerebros independientes, pero pueden resolver parte del control motor local sin que cada detalle tenga que ser dirigido continuamente por el cerebro central.',
      },
      {
        title: 'Otra forma de inteligencia',
        body:
          'La organización nerviosa de los cefalópodos muestra que la evolución puede construir sistemas complejos de control de maneras muy diferentes a la de los vertebrados.',
      },
    ],
    takeaway:
      'La inteligencia biológica no tiene una única arquitectura posible.',
    relatedTopics: [
      'Neurobiología',
      'Evolución',
      'Cefalópodos',
    ],
  },
];
