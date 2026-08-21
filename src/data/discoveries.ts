import type {
  Discovery,
} from '../types/discovery';

export const discoveries: Discovery[] = [
  {
    id: 'geo-mercator',

    mapLabel: 'Mercator',

    title:
      '¿Por qué casi todos los mapas del mundo están “equivocados”?',

    eyebrow:
      'UNA FORMA DE MIRAR EL MUNDO',

    hook:
      'Representar una esfera sobre una superficie plana siempre exige deformar algo.',

    category: 'geography',

    duration: 5,

    difficulty: 'easy',

    quick: {
      summary:
        'La Tierra es curva y un mapa es plano. Al transformar una superficie curva en una plana siempre hay que deformar tamaño, forma, distancia o dirección. Por eso ningún mapa plano puede representar el planeta perfectamente.',

      takeaway:
        'No existe un mapa plano sin distorsiones.',
    },

    standard: {
      sections: [
        {
          title:
            'El problema',

          body:
            'La Tierra es aproximadamente esférica, mientras que un mapa es plano. Para transformar una superficie curva en una superficie plana se utilizan proyecciones cartográficas.',
        },

        {
          title:
            'Mercator',

          body:
            'La proyección de Mercator fue especialmente útil para la navegación porque conserva bien los ángulos locales. A cambio, exagera mucho el tamaño de las regiones cercanas a los polos.',
        },

        {
          title:
            'No hay un mapa perfecto',

          body:
            'Cada proyección prioriza propiedades distintas. Algunas conservan mejor las áreas, otras las formas, las distancias o las direcciones. Elegir un mapa también significa elegir qué distorsión aceptar.',
        },
      ],

      takeaway:
        'Todo mapa es una interpretación matemática del planeta, no una copia exacta.',
    },

    deepDive: {
      duration: 9,

      intro:
        'Los mapas parecen objetos neutrales, pero cada uno contiene decisiones matemáticas sobre qué conservar y qué deformar. Entender las proyecciones cambia la forma en que miramos el planeta.',

      sections: [
        {
          title:
            'Una esfera no puede desplegarse perfectamente',

          body:
            'Intentá envolver una pelota con una hoja de papel sin doblarla, cortarla o deformarla. El problema cartográfico es parecido. Una superficie curva posee una geometría diferente de una superficie plana, por lo que trasladar todos sus puntos a un plano obliga a modificar alguna propiedad.',
        },

        {
          title:
            'Por qué Mercator fue tan importante',

          body:
            'Gerardus Mercator presentó su famosa proyección en 1569. Su gran ventaja para los navegantes era que una ruta de rumbo constante podía representarse como una línea recta. En una época de expansión de la navegación oceánica, esa característica era extraordinariamente útil.',
        },

        {
          title:
            'El precio de esa ventaja',

          body:
            'La escala aumenta progresivamente hacia los polos. Esto hace que Groenlandia, Canadá, Rusia o Europa septentrional parezcan proporcionalmente mucho mayores de lo que son. África, ubicada en gran parte cerca del ecuador, queda visualmente reducida en comparación.',
        },

        {
          title:
            'Un mapa responde a una pregunta',

          body:
            'Una proyección adecuada para navegar no necesariamente es adecuada para comparar superficies. Para representar áreas con mayor fidelidad pueden utilizarse proyecciones equivalentes. Para otros objetivos, como mostrar distancias desde un punto concreto, existen soluciones diferentes.',
        },

        {
          title:
            'Los mapas también construyen nuestra intuición',

          body:
            'Si una determinada representación se vuelve habitual, podemos terminar confundiendo sus deformaciones con la geografía real. Por eso aprender cartografía no consiste solamente en leer mapas: también implica aprender a desconfiar de ellos de manera inteligente.',
        },
      ],

      closing:
        'La próxima vez que veas un planisferio, la pregunta interesante no será si está equivocado, sino qué decidió preservar y qué decidió deformar.',
    },

    relatedTopics: [
      'Cartografía',
      'Navegación',
      'Geopolítica',
      'Matemática',
      'Representación',
    ],

    relatedDiscoveryIds: [
      'history-calendar-1582',
      'geo-dateline',
      'science-eratosthenes',
    ],

    sources: [
      {
        label:
          'Encyclopaedia Britannica — Mercator projection',

        url:
          'https://www.britannica.com/science/Mercator-projection',
      },
    ],
  },

  {
    id:
      'history-calendar-1582',

    mapLabel:
      'Calendario',

    title:
      '¿Por qué hubo diez días de 1582 que nunca existieron?',

    eyebrow:
      'UN SALTO EN EL TIEMPO',

    hook:
      'En algunos países, al jueves 4 de octubre de 1582 le siguió directamente el viernes 15.',

    category: 'history',

    duration: 5,

    difficulty: 'easy',

    quick: {
      summary:
        'El calendario juliano se había desfasado respecto del año solar. Cuando se introdujo el calendario gregoriano en 1582, algunos territorios eliminaron diez fechas para corregir ese desfase.',

      takeaway:
        'Hubo lugares donde diez fechas de octubre de 1582 nunca ocurrieron.',
    },

    standard: {
      sections: [
        {
          title:
            'El problema',

          body:
            'El calendario juliano calculaba el año con una pequeña diferencia respecto del año solar real. Esa diferencia parecía insignificante, pero durante siglos se fue acumulando.',
        },

        {
          title:
            'La corrección',

          body:
            'La reforma impulsada por el papa Gregorio XIII introdujo el calendario gregoriano. En los territorios que adoptaron inmediatamente la reforma, al 4 de octubre de 1582 le siguió el 15 de octubre.',
        },

        {
          title:
            'No ocurrió en todo el mundo',

          body:
            'Los países fueron adoptando el calendario gregoriano en épocas diferentes. Por eso el salto de fechas no ocurrió simultáneamente en todas partes.',
        },
      ],

      takeaway:
        'Nuestro calendario también es una tecnología diseñada para mantenerse sincronizada con la astronomía.',
    },

    deepDive: {
      duration: 8,

      intro:
        'El calendario parece una estructura natural del tiempo, pero en realidad es una construcción humana que intenta sincronizar ciclos astronómicos que no encajan perfectamente entre sí.',

      sections: [
        {
          title:
            'El problema del año',

          body:
            'La duración del año tropical no es exactamente 365 días y seis horas. El calendario juliano introducía un año bisiesto cada cuatro años, lo que producía una duración media ligeramente superior al año astronómico real.',
        },

        {
          title:
            'Un error diminuto que se acumula',

          body:
            'La diferencia era de apenas unos minutos por año. Pero después de más de un milenio, el calendario se había desplazado aproximadamente diez días respecto de las referencias astronómicas utilizadas por la Iglesia para calcular fechas como la Pascua.',
        },

        {
          title:
            'La reforma gregoriana',

          body:
            'En 1582 se modificó la regla de los años bisiestos. Los años divisibles por 100 dejaron de ser bisiestos salvo que también fueran divisibles por 400. De esta forma, 1600 fue bisiesto, pero 1700, 1800 y 1900 no lo fueron.',
        },

        {
          title:
            'Diez días desaparecen',

          body:
            'Para corregir el desfase ya acumulado, en varios territorios católicos se saltaron diez fechas: después del jueves 4 de octubre de 1582 llegó el viernes 15.',
        },

        {
          title:
            'Un mundo con calendarios distintos',

          body:
            'La adopción fue gradual y estuvo atravesada por cuestiones religiosas y políticas. Algunos países protestantes tardaron décadas o siglos en aceptar el calendario gregoriano. Rusia lo adoptó después de la Revolución de 1917.',
        },
      ],

      closing:
        'El tiempo transcurre independientemente de nosotros. Los calendarios son nuestra forma de intentar organizarlo.',
    },

    relatedTopics: [
      'Astronomía',
      'Calendarios',
      'Europa',
      'Matemática',
      'Navegación',
    ],

    relatedDiscoveryIds: [
      'geo-mercator',
      'science-eratosthenes',
      'history-time-zones',
    ],

    sources: [
      {
        label:
          'Encyclopaedia Britannica — Gregorian calendar',

        url:
          'https://www.britannica.com/topic/Gregorian-calendar',
      },
    ],
  },

  {
    id:
      'science-tree-network',

    mapLabel:
      'Bosques',

    title:
      '¿Los árboles realmente “se comunican” entre sí?',

    eyebrow:
      'BAJO NUESTROS PIES',

    hook:
      'Bajo el suelo existe una red de raíces, hongos y nutrientes mucho más compleja de lo que parece.',

    category: 'science',

    duration: 5,

    difficulty: 'medium',

    quick: {
      summary:
        'Muchos árboles establecen asociaciones con hongos llamados micorrizas. Las redes de hongos pueden conectar raíces de diferentes plantas y participar en intercambios de nutrientes. Pero describir esto como árboles “hablando” entre sí es una simplificación.',

      takeaway:
        'Los bosques funcionan mediante relaciones ecológicas complejas, no como individuos completamente aislados.',
    },

    standard: {
      sections: [
        {
          title:
            'La asociación',

          body:
            'Muchísimas plantas forman asociaciones simbióticas con hongos. La planta aporta carbono producido mediante fotosíntesis y el hongo puede facilitar la adquisición de agua y minerales.',
        },

        {
          title:
            'Redes bajo tierra',

          body:
            'Las hifas de algunos hongos pueden asociarse con distintas plantas. Estas conexiones reciben el nombre de redes micorrícicas comunes y han sido estudiadas por su posible papel en los flujos de nutrientes.',
        },

        {
          title:
            'Cuidado con la metáfora',

          body:
            'La idea de un “internet del bosque” se volvió muy popular. Sin embargo, la evidencia científica es más matizada y algunas afirmaciones sobre cooperación deliberada entre árboles exceden lo que actualmente puede demostrarse.',
        },
      ],

      takeaway:
        'La ecología del bosque es una red de interacciones, pero una red biológica no equivale necesariamente a una conversación.',
    },

    deepDive: {
      duration: 10,

      intro:
        'Pocas metáforas científicas se hicieron tan populares como el llamado “wood wide web”. Pero detrás de esa expresión existe una ciencia fascinante y bastante más compleja.',

      sections: [
        {
          title:
            'Qué es una micorriza',

          body:
            'Las micorrizas son asociaciones entre hongos y raíces de plantas. En términos generales, los hongos obtienen carbono procedente de la fotosíntesis, mientras que sus extensas hifas pueden mejorar el acceso de la planta a nutrientes minerales y agua.',
        },

        {
          title:
            'Cuando un hongo conecta más de una planta',

          body:
            'Una misma red fúngica puede asociarse con raíces de múltiples plantas. Esto hace posible que exista continuidad física entre organismos distintos y ha llevado a investigar transferencias de carbono, nitrógeno, fósforo y señales químicas.',
        },

        {
          title:
            'Lo que sabemos y lo que todavía discutimos',

          body:
            'Experimentos han observado transferencias de recursos entre plantas conectadas por hongos. Sin embargo, demostrar que esas transferencias benefician sistemáticamente a una planta receptora o que representan una forma de cooperación dirigida es mucho más difícil.',
        },

        {
          title:
            'El problema de decir que los árboles hablan',

          body:
            'Las metáforas son útiles para despertar curiosidad, pero también pueden introducir intenciones donde solo existen procesos ecológicos. Un árbol no necesita decidir ayudar a otro para que ocurra un flujo de recursos dentro de un sistema compartido.',
        },

        {
          title:
            'Un bosque es más que sus árboles',

          body:
            'Suelo, bacterias, hongos, raíces, agua, clima, insectos y plantas forman sistemas interdependientes. El verdadero descubrimiento quizás no sea que los árboles hablan, sino que la idea de organismos completamente independientes es insuficiente para describir muchos ecosistemas.',
        },
      ],

      closing:
        'La ciencia del bosque resulta aún más interesante cuando abandonamos la necesidad de convertirla en una historia humana.',
    },

    relatedTopics: [
      'Hongos',
      'Ecología',
      'Bosques',
      'Redes',
      'Evolución',
    ],

    relatedDiscoveryIds: [
      'nature-octopus',
      'nature-slime-mold',
      'science-ant-colony',
    ],

    sources: [
      {
        label:
          'Nature Ecology & Evolution — Common mycorrhizal networks',

        url:
          'https://www.nature.com/articles/s41559-023-01986-1',
      },

      {
        label:
          'Nature Reviews Biodiversity — Mycorrhizal collaboration',

        url:
          'https://www.nature.com/articles/s44358-025-00030-3',
      },
    ],
  },

  {
    id:
      'nature-octopus',

    mapLabel:
      'Pulpos',

    title:
      '¿Por qué un pulpo tiene neuronas en los brazos?',

    eyebrow:
      'OTRA FORMA DE PENSAR',

    hook:
      'Una gran parte del sistema nervioso del pulpo está distribuida fuera de su cerebro central.',

    category: 'nature',

    duration: 5,

    difficulty: 'easy',

    quick: {
      summary:
        'Los pulpos tienen un sistema nervioso muy distribuido. Una gran cantidad de sus neuronas se encuentra en los brazos, que pueden procesar información sensorial y controlar parte de sus movimientos localmente.',

      takeaway:
        'La inteligencia no necesita organizarse exactamente como la nuestra.',
    },

    standard: {
      sections: [
        {
          title:
            'Un sistema distribuido',

          body:
            'Los pulpos poseen cientos de millones de neuronas y una parte muy importante está localizada en los brazos y sus ganglios nerviosos.',
        },

        {
          title:
            'Autonomía parcial',

          body:
            'Los brazos pueden procesar información sensorial y coordinar numerosas acciones localmente. Eso reduce la necesidad de que el cerebro central controle cada detalle del movimiento.',
        },

        {
          title:
            'Otra arquitectura',

          body:
            'La evolución de los cefalópodos produjo una organización nerviosa muy distinta de la de los vertebrados. Es un ejemplo de que pueden existir múltiples soluciones biológicas para comportamientos complejos.',
        },
      ],

      takeaway:
        'La inteligencia biológica no tiene una única arquitectura posible.',
    },

    deepDive: {
      duration: 9,

      intro:
        'El sistema nervioso del pulpo desafía nuestra intuición de que todo comportamiento complejo debe estar centralizado en un gran cerebro.',

      sections: [
        {
          title:
            'Un cerebro y ocho brazos extraordinarios',

          body:
            'Los pulpos poseen un cerebro central, pero una gran proporción de sus neuronas está distribuida en los brazos. Cada brazo contiene estructuras nerviosas capaces de procesar una enorme cantidad de información táctil y química.',
        },

        {
          title:
            'Mover un brazo sin huesos',

          body:
            'Controlar un apéndice flexible es extraordinariamente complejo porque puede adoptar una cantidad enorme de configuraciones. Parte de ese procesamiento se resuelve mediante circuitos nerviosos locales.',
        },

        {
          title:
            '¿Cada brazo piensa por sí mismo?',

          body:
            'No. Es tentador describirlos como pequeños cerebros independientes, pero sigue existiendo coordinación con el sistema nervioso central. La característica interesante es el grado de procesamiento distribuido.',
        },

        {
          title:
            'Una evolución independiente',

          body:
            'La línea evolutiva de los cefalópodos se separó de la de los vertebrados hace cientos de millones de años. Sus capacidades cognitivas complejas evolucionaron a partir de una arquitectura corporal y neural profundamente diferente.',
        },

        {
          title:
            'Qué nos enseña sobre inteligencia',

          body:
            'Si organismos tan alejados evolutivamente pueden producir comportamientos sofisticados mediante diseños nerviosos diferentes, resulta difícil defender que exista una única forma inevitable de construir inteligencia.',
        },
      ],

      closing:
        'El pulpo no es una versión extraña de nosotros. Es una demostración de que la evolución puede llegar a soluciones completamente diferentes.',
    },

    relatedTopics: [
      'Neurobiología',
      'Evolución',
      'Cefalópodos',
      'Redes',
      'Inteligencia',
    ],

    relatedDiscoveryIds: [
      'science-tree-network',
      'nature-slime-mold',
      'science-ant-colony',
    ],

    sources: [
      {
        label:
          'Smithsonian Ocean — Octopuses',

        url:
          'https://ocean.si.edu/ocean-life/invertebrates/octopuses',
      },
    ],
  },

  {
    id:
      'psych-choice',

    mapLabel:
      'Elecciones',

    title:
      '¿Por qué tener más opciones puede hacernos elegir peor?',

    eyebrow:
      'PARA PENSAR',

    hook:
      'Más alternativas no siempre significan más libertad práctica.',

    category: 'psychology',

    duration: 2,

    difficulty: 'easy',

    quick: {
      summary:
        'Cuando tenemos muchas alternativas, comparar cada posibilidad puede requerir más esfuerzo mental y aumentar la incertidumbre. En algunos contextos, demasiadas opciones dificultan decidir.',

      takeaway:
        'Más opciones no siempre producen mejores decisiones.',
    },

    standard: {
      sections: [
        {
          title:
            'La carga de comparar',

          body:
            'Cada alternativa adicional puede sumar atributos, diferencias y consecuencias que necesitamos comparar.',
        },

        {
          title:
            'No ocurre siempre',

          body:
            'El llamado choice overload depende del contexto. Tener muchas opciones puede resultar útil cuando conocemos bien el tema o cuando las diferencias entre alternativas son fáciles de evaluar.',
        },
      ],

      takeaway:
        'A veces reducir posibilidades puede mejorar una decisión más que agregar alternativas.',
    },

    relatedTopics: [
      'Decisiones',
      'Sesgos',
      'Atención',
      'Información',
      'Complejidad',
    ],

    relatedDiscoveryIds: [
      'psych-inattentional-blindness',
      'tech-infinite-scroll',
      'psych-memory-reconstruction',
    ],

    sources: [
      {
        label:
          'American Psychological Association',

        url:
          'https://www.apa.org/',
      },
    ],
  },

  {
    id:
      'psych-inattentional-blindness',

    mapLabel:
      'Atención',

    title:
      '¿Cómo podemos mirar algo y aun así no verlo?',

    eyebrow:
      'TU ATENCIÓN TIENE LÍMITES',

    hook:
      'Concentrarte intensamente en una tarea puede hacerte ignorar cosas evidentes frente a tus ojos.',

    category: 'psychology',

    duration: 5,

    difficulty: 'easy',

    quick: {
      summary:
        'Nuestros ojos reciben mucha más información de la que podemos procesar conscientemente. Cuando concentramos la atención en una tarea, incluso algo visible e inesperado puede pasar desapercibido.',

      takeaway:
        'Mirar y prestar atención no son lo mismo.',
    },

    standard: {
      sections: [
        {
          title:
            'Atención selectiva',

          body:
            'El cerebro selecciona parte de la información disponible para procesarla con mayor profundidad. No podemos prestar atención consciente a todo al mismo tiempo.',
        },

        {
          title:
            'Lo inesperado',

          body:
            'Cuando estamos concentrados en una tarea exigente, estímulos inesperados pueden pasar desapercibidos aunque aparezcan directamente frente a nosotros.',
        },

        {
          title:
            'Ver no alcanza',

          body:
            'La experiencia consciente depende tanto de los estímulos que llegan a nuestros sentidos como de dónde está dirigida nuestra atención.',
        },
      ],

      takeaway:
        'Nuestros ojos pueden recibir información que nunca llega a convertirse en experiencia consciente.',
    },

    deepDive: {
      duration: 8,

      intro:
        'Creemos que nuestra experiencia visual es una representación completa del entorno. La investigación sobre atención demuestra que esa sensación es engañosa.',

      sections: [
        {
          title:
            'El experimento del gorila',

          body:
            'Un conocido experimento pidió a participantes contar pases de pelota entre jugadores. Mientras estaban concentrados en esa tarea, una persona disfrazada de gorila atravesaba la escena. Una proporción importante de participantes no la detectaba.',
        },

        {
          title:
            'No es un problema de los ojos',

          body:
            'La imagen del estímulo llega al sistema visual. El problema es que los recursos de atención estaban orientados hacia otra tarea.',
        },

        {
          title:
            'La ilusión de verlo todo',

          body:
            'Tenemos la sensación subjetiva de experimentar una escena detallada y completa. Sin embargo, gran parte de esa experiencia depende de información seleccionada, expectativas y movimientos continuos de nuestra atención.',
        },

        {
          title:
            'La vida cotidiana',

          body:
            'La ceguera por falta de atención tiene implicancias para conducción, seguridad, interfaces y cualquier situación donde una tarea principal pueda absorber recursos cognitivos.',
        },
      ],

      closing:
        'Nuestra percepción no es una cámara. Es un sistema que decide constantemente qué merece ser procesado.',
    },

    relatedTopics: [
      'Atención',
      'Percepción',
      'Conciencia',
      'Sesgos',
      'Información',
    ],

    relatedDiscoveryIds: [
      'psych-choice',
      'art-perspective',
      'tech-infinite-scroll',
    ],

    sources: [
      {
        label:
          'The Invisible Gorilla — Selective attention research',

        url:
          'https://www.theinvisiblegorilla.com/',
      },
    ],
  },

  {
    id:
      'tech-infinite-scroll',

    mapLabel:
      'Scroll infinito',

    title:
      '¿Por qué el scroll infinito cuesta tanto dejarlo?',

    eyebrow:
      'DISEÑO Y ATENCIÓN',

    hook:
      'Cuando una interfaz elimina los puntos naturales de cierre, también elimina muchos momentos en los que podríamos decidir parar.',

    category: 'technology',

    duration: 5,

    difficulty: 'medium',

    quick: {
      summary:
        'El scroll infinito carga contenido sin mostrar un final. Al eliminar pausas naturales, reduce las oportunidades en las que normalmente decidiríamos si queremos continuar o hacer otra cosa.',

      takeaway:
        'La arquitectura de una interfaz puede cambiar cuánto tiempo permanecemos dentro de ella.',
    },

    standard: {
      sections: [
        {
          title:
            'Sin final visible',

          body:
            'Una página tradicional termina. El scroll infinito puede seguir cargando contenido durante períodos muy largos, por lo que no existe una señal visual clara de finalización.',
        },

        {
          title:
            'Una cosa más',

          body:
            'Cada movimiento puede revelar algo interesante o irrelevante. La incertidumbre sobre qué aparecerá después puede favorecer la repetición de la conducta.',
        },

        {
          title:
            'Diseño intencional',

          body:
            'Las interfaces también pueden introducir pausas, finales y decisiones explícitas. El diseño no es neutral respecto de nuestro comportamiento.',
        },
      ],

      takeaway:
        'Una experiencia digital puede facilitar que sigamos o facilitar que podamos parar.',
    },

    deepDive: {
      duration: 9,

      intro:
        'El scroll no es un problema en sí mismo. El cambio importante aparece cuando el contenido deja de tener límites perceptibles.',

      sections: [
        {
          title:
            'Antes había páginas',

          body:
            'Los primeros sitios web obligaban a realizar una acción explícita para pasar a una página siguiente. Esa pausa pequeña también era una oportunidad para decidir si continuar.',
        },

        {
          title:
            'La fricción desaparece',

          body:
            'El scroll infinito combina la navegación y la solicitud de contenido en un mismo gesto. Cuando nos acercamos al final, nuevo contenido aparece automáticamente.',
        },

        {
          title:
            'Contenido impredecible',

          body:
            'No sabemos exactamente qué aparecerá después. Esa variabilidad hace que cada nueva pieza pueda funcionar como una pequeña oportunidad de encontrar algo especialmente relevante.',
        },

        {
          title:
            'Personalización',

          body:
            'Los sistemas de recomendación pueden ordenar enormes catálogos en función de nuestro comportamiento. Esto reduce todavía más la probabilidad de encontrarnos con una pausa natural causada por falta de contenido relevante.',
        },

        {
          title:
            'Diseñar también puede significar permitir terminar',

          body:
            'Una experiencia digital puede tener contenido abundante y aun así ofrecer finales, tiempos estimados, objetivos concretos o botones explícitos para continuar. La reducción de fricción no siempre tiene que significar eliminar los límites.',
        },
      ],

      closing:
        'Serendipia nace justamente de esa pregunta: ¿qué pasa si una interfaz está diseñada para enseñarte algo y después dejarte ir?',
    },

    relatedTopics: [
      'Atención',
      'Diseño',
      'Hábitos',
      'Información',
      'Decisiones',
    ],

    relatedDiscoveryIds: [
      'psych-choice',
      'psych-inattentional-blindness',
      'tech-notification-design',
    ],

    sources: [
      {
        label:
          'Nielsen Norman Group — Infinite scrolling',

        url:
          'https://www.nngroup.com/',
      },
    ],
  },

  {
    id:
      'tech-notification-design',

    mapLabel:
      'Notificaciones',

    title:
      '¿Por qué casi todas las notificaciones parecen urgentes?',

    eyebrow:
      'UN PEQUEÑO PUNTO ROJO',

    hook:
      'Color, sonido y movimiento pueden convertir información opcional en una sensación de urgencia.',

    category: 'technology',

    duration: 2,

    difficulty: 'easy',

    quick: {
      summary:
        'Las notificaciones utilizan señales visuales, sonidos y vibraciones para competir por nuestra atención. La intensidad de esas señales no siempre coincide con la importancia real del mensaje.',

      takeaway:
        'Urgencia visual y urgencia real no son necesariamente lo mismo.',
    },

    standard: {
      sections: [
        {
          title:
            'Capturar atención',

          body:
            'Una notificación necesita destacar del resto de la interfaz y del entorno para que la detectemos.',
        },

        {
          title:
            'Una decisión de diseño',

          body:
            'Color, sonido, vibración y frecuencia son decisiones de interfaz. Pueden utilizarse de manera proporcional o hacer que información poco importante parezca urgente.',
        },
      ],

      takeaway:
        'Una interfaz también decide qué cosas parecen merecer nuestra atención.',
    },

    relatedTopics: [
      'Atención',
      'Diseño',
      'Hábitos',
      'Interrupciones',
    ],

    relatedDiscoveryIds: [
      'tech-infinite-scroll',
      'psych-inattentional-blindness',
    ],

    sources: [
      {
        label:
          'Apple Human Interface Guidelines — Notifications',

        url:
          'https://developer.apple.com/design/human-interface-guidelines/notifications',
      },
    ],
  },

  {
    id:
      'science-eratosthenes',

    mapLabel:
      'Eratóstenes',

    title:
      '¿Cómo calcularon el tamaño de la Tierra hace más de 2.000 años?',

    eyebrow:
      'UNA SOMBRA Y UNA IDEA',

    hook:
      'Eratóstenes estimó la circunferencia terrestre usando sombras, geometría y la distancia entre dos ciudades.',

    category: 'science',

    duration: 5,

    difficulty: 'medium',

    quick: {
      summary:
        'Eratóstenes comparó el ángulo de las sombras en dos ciudades y utilizó geometría para estimar qué fracción de la circunferencia terrestre representaba la distancia entre ellas.',

      takeaway:
        'Una sombra permitió estimar el tamaño de todo el planeta.',
    },

    standard: {
      sections: [
        {
          title:
            'Dos ciudades',

          body:
            'Eratóstenes sabía que en Siena el Sol podía encontrarse casi directamente sobre la vertical al mediodía del solsticio de verano, mientras que en Alejandría proyectaba una sombra.',
        },

        {
          title:
            'El ángulo',

          body:
            'Midió el ángulo de esa sombra y lo relacionó con una fracción de un círculo completo.',
        },

        {
          title:
            'De una distancia al planeta',

          body:
            'Con una estimación de la distancia entre las ciudades pudo escalar esa fracción y calcular aproximadamente la circunferencia terrestre.',
        },
      ],

      takeaway:
        'Una observación sencilla y geometría pueden revelar una escala imposible de medir directamente.',
    },

    deepDive: {
      duration: 8,

      intro:
        'No hizo falta un satélite, un avión ni siquiera recorrer el planeta. La clave fue convertir una sombra en geometría.',

      sections: [
        {
          title:
            'Una observación conocida',

          body:
            'Según los relatos históricos, Eratóstenes sabía que durante el solsticio de verano el Sol iluminaba profundamente ciertos pozos en Siena, indicando que estaba prácticamente en la vertical.',
        },

        {
          title:
            'Mientras tanto en Alejandría',

          body:
            'En Alejandría, situada más al norte, un objeto vertical sí producía sombra al mismo momento. El ángulo era aproximadamente 7,2 grados.',
        },

        {
          title:
            'Una cincuentava parte',

          body:
            '7,2 grados corresponden a una cincuentava parte de 360 grados. Si la superficie terrestre era curva, la distancia entre ambas ciudades debía representar aproximadamente una cincuentava parte de la circunferencia.',
        },

        {
          title:
            'Multiplicar una distancia',

          body:
            'Estimando la distancia entre Siena y Alejandría y multiplicándola por cincuenta podía obtenerse la circunferencia completa.',
        },

        {
          title:
            'La precisión depende de detalles históricos',

          body:
            'Existen debates sobre la longitud exacta del estadio utilizado por Eratóstenes y sobre algunos detalles del procedimiento. Aun así, el método demuestra de manera extraordinaria cómo la geometría permite inferir magnitudes inaccesibles.',
        },
      ],

      closing:
        'A veces una pregunta gigantesca puede resolverse prestando atención a una cosa diminuta.',
    },

    relatedTopics: [
      'Astronomía',
      'Matemática',
      'Geografía',
      'Medición',
      'Representación',
    ],

    relatedDiscoveryIds: [
      'geo-mercator',
      'history-calendar-1582',
      'geo-dateline',
    ],

    sources: [
      {
        label:
          'Encyclopaedia Britannica — Eratosthenes',

        url:
          'https://www.britannica.com/biography/Eratosthenes',
      },
    ],
  },

  {
    id:
      'geo-dateline',

    mapLabel:
      'Cambio de fecha',

    title:
      '¿Por qué existe un lugar donde cambiar de lado puede cambiarte de día?',

    eyebrow:
      'UNA FRONTERA INVISIBLE',

    hook:
      'La Línea Internacional de Cambio de Fecha permite ordenar los días en un planeta que gira continuamente.',

    category: 'geography',

    duration: 5,

    difficulty: 'easy',

    quick: {
      summary:
        'Las zonas horarias rodean todo el planeta, por lo que en algún lugar la fecha tiene que cambiar. La Línea Internacional de Cambio de Fecha cumple esa función cerca del meridiano 180°.',

      takeaway:
        'Moverte por el espacio puede obligarte a cambiar también de fecha.',
    },

    standard: {
      sections: [
        {
          title:
            'Un planeta con horas diferentes',

          body:
            'Mientras la Tierra gira, distintas regiones atraviesan el mediodía y la medianoche en momentos diferentes.',
        },

        {
          title:
            'Hace falta un corte',

          body:
            'Si seguimos avanzando alrededor del planeta ajustando la hora, necesitamos un lugar donde el calendario cambie de día.',
        },

        {
          title:
            'No es perfectamente recta',

          body:
            'La Línea Internacional de Cambio de Fecha se aproxima al meridiano 180°, pero realiza desviaciones para evitar dividir ciertos territorios y grupos de islas.',
        },
      ],

      takeaway:
        'La fecha que usamos es también una convención geográfica y política.',
    },

    relatedTopics: [
      'Geografía',
      'Tiempo',
      'Navegación',
      'Política',
      'Calendarios',
    ],

    relatedDiscoveryIds: [
      'geo-mercator',
      'history-calendar-1582',
      'history-time-zones',
    ],

    sources: [
      {
        label:
          'Timeanddate — International Date Line',

        url:
          'https://www.timeanddate.com/time/dateline.html',
      },
    ],
  },

  {
    id:
      'history-time-zones',

    mapLabel:
      'Husos horarios',

    title:
      '¿Por qué el mundo no tuvo siempre husos horarios?',

    eyebrow:
      'CUANDO CADA CIUDAD TENÍA SU HORA',

    hook:
      'Antes de los ferrocarriles, cada lugar podía ajustar su hora al mediodía solar local.',

    category: 'history',

    duration: 5,

    difficulty: 'easy',

    quick: {
      summary:
        'Durante siglos, las ciudades podían usar su propio tiempo solar. Los trenes y las comunicaciones rápidas hicieron que esas pequeñas diferencias fueran un problema y aceleraron la adopción de horarios estandarizados.',

      takeaway:
        'Los husos horarios aparecieron porque el mundo empezó a conectarse más rápido.',
    },

    standard: {
      sections: [
        {
          title:
            'Cada ciudad, una hora',

          body:
            'Cuando el transporte era lento, que dos ciudades tuvieran pequeñas diferencias entre sus relojes no generaba grandes dificultades.',
        },

        {
          title:
            'Llegaron los trenes',

          body:
            'Los ferrocarriles necesitaban horarios coordinados. Una red que atravesaba muchas ciudades no podía funcionar eficientemente con numerosos tiempos locales.',
        },

        {
          title:
            'Estandarizar',

          body:
            'Durante el siglo XIX comenzaron a imponerse sistemas estandarizados de tiempo y, progresivamente, los husos horarios modernos.',
        },
      ],

      takeaway:
        'La hora también es una infraestructura que permite coordinar sociedades.',
    },

    relatedTopics: [
      'Tiempo',
      'Tecnología',
      'Ferrocarriles',
      'Navegación',
      'Calendarios',
    ],

    relatedDiscoveryIds: [
      'history-calendar-1582',
      'geo-dateline',
      'tech-notification-design',
    ],

    sources: [
      {
        label:
          'Encyclopaedia Britannica — Standard time',

        url:
          'https://www.britannica.com/science/standard-time',
      },
    ],
  },

  {
    id:
      'nature-slime-mold',

    mapLabel:
      'Moho mucilaginoso',

    title:
      '¿Cómo puede resolver problemas un organismo sin cerebro?',

    eyebrow:
      'INTELIGENCIA SIN NEURONAS',

    hook:
      'Algunos mohos mucilaginosos pueden encontrar rutas eficientes entre fuentes de alimento sin poseer sistema nervioso.',

    category: 'nature',

    duration: 5,

    difficulty: 'medium',

    quick: {
      summary:
        'El moho mucilaginoso Physarum puede explorar diferentes rutas y reforzar aquellas que conectan eficientemente fuentes de alimento, pese a no tener cerebro ni neuronas.',

      takeaway:
        'Resolver un problema no siempre requiere un cerebro.',
    },

    standard: {
      sections: [
        {
          title:
            'Explorar',

          body:
            'Physarum puede extender su cuerpo formando redes que exploran diferentes partes del ambiente.',
        },

        {
          title:
            'Reforzar rutas',

          body:
            'Las conexiones menos eficientes pueden debilitarse mientras otras se mantienen, generando redes sorprendentemente eficaces.',
        },

        {
          title:
            '¿Es inteligencia?',

          body:
            'Depende de cómo definamos inteligencia. El fenómeno muestra que comportamientos adaptativos complejos pueden emerger sin un sistema nervioso.',
        },
      ],

      takeaway:
        'La capacidad de resolver problemas puede aparecer mediante mecanismos biológicos muy diferentes.',
    },

    relatedTopics: [
      'Redes',
      'Inteligencia',
      'Optimización',
      'Evolución',
      'Sistemas',
    ],

    relatedDiscoveryIds: [
      'nature-octopus',
      'science-tree-network',
      'science-ant-colony',
    ],

    sources: [
      {
        label:
          'Nature — Maze-solving by an amoeboid organism',

        url:
          'https://www.nature.com/articles/35035159',
      },
    ],
  },

  {
    id:
      'science-ant-colony',

    mapLabel:
      'Hormigas',

    title:
      '¿Cómo encuentra un hormiguero caminos sin que nadie los dirija?',

    eyebrow:
      'INTELIGENCIA COLECTIVA',

    hook:
      'Muchas decisiones complejas pueden surgir de reglas simples repetidas por miles de individuos.',

    category: 'science',

    duration: 5,

    difficulty: 'medium',

    quick: {
      summary:
        'Cada hormiga sigue reglas locales relativamente simples. Mediante rastros químicos y la interacción entre muchos individuos pueden emerger rutas eficientes sin que ninguna hormiga conozca el plan completo.',

      takeaway:
        'La organización compleja puede surgir sin un director central.',
    },

    standard: {
      sections: [
        {
          title:
            'Reglas locales',

          body:
            'Cada hormiga responde a información cercana. No necesita conocer la estructura completa del hormiguero ni planificar el comportamiento colectivo.',
        },

        {
          title:
            'Feromonas',

          body:
            'Muchas especies utilizan señales químicas. Si una ruta es recorrida frecuentemente puede recibir más feromonas y atraer todavía más individuos.',
        },

        {
          title:
            'Emergencia',

          body:
            'La suma de decisiones locales puede generar patrones colectivos que parecen diseñados desde arriba aunque ningún individuo posea ese plan.',
        },
      ],

      takeaway:
        'Un sistema puede parecer inteligente aunque ninguna de sus partes conozca la solución completa.',
    },

    relatedTopics: [
      'Redes',
      'Inteligencia',
      'Sistemas',
      'Optimización',
      'Evolución',
    ],

    relatedDiscoveryIds: [
      'nature-slime-mold',
      'science-tree-network',
      'nature-octopus',
    ],

    sources: [
      {
        label:
          'Encyclopaedia Britannica — Ant behaviour',

        url:
          'https://www.britannica.com/animal/ant',
      },
    ],
  },

  {
    id:
      'art-perspective',

    mapLabel:
      'Perspectiva',

    title:
      '¿Por qué la perspectiva cambió la forma de pintar el mundo?',

    eyebrow:
      'CUANDO EL ESPACIO ENTRÓ EN EL LIENZO',

    hook:
      'La perspectiva lineal permitió representar profundidad usando reglas geométricas.',

    category: 'art',

    duration: 5,

    difficulty: 'easy',

    quick: {
      summary:
        'La perspectiva lineal utiliza líneas que convergen hacia puntos de fuga para generar sensación de profundidad en una superficie plana.',

      takeaway:
        'La perspectiva no copia el espacio: construye una manera de verlo.',
    },

    standard: {
      sections: [
        {
          title:
            'Una ilusión',

          body:
            'Un lienzo no tiene profundidad física, pero ciertas relaciones geométricas pueden producir una fuerte sensación de espacio tridimensional.',
        },

        {
          title:
            'El punto de fuga',

          body:
            'Líneas que en el mundo son paralelas pueden representarse convergiendo hacia un punto, imitando la manera en que su separación aparente disminuye con la distancia.',
        },

        {
          title:
            'Una nueva forma de representar',

          body:
            'Durante el Renacimiento europeo se desarrollaron métodos cada vez más sistemáticos para utilizar estos principios en pintura y arquitectura.',
        },
      ],

      takeaway:
        'Ver una imagen también implica interpretar convenciones de representación.',
    },

    deepDive: {
      duration: 8,

      intro:
        'Durante el Renacimiento, geometría, arquitectura y arte convergieron en una nueva manera de organizar visualmente el espacio.',

      sections: [
        {
          title:
            'El cuadro como ventana',

          body:
            'La perspectiva lineal permite imaginar la superficie pictórica como una ventana a través de la cual observamos una escena tridimensional.',
        },

        {
          title:
            'Brunelleschi y la experimentación',

          body:
            'Filippo Brunelleschi suele asociarse con experimentos que demostraron principios geométricos de perspectiva a comienzos del siglo XV.',
        },

        {
          title:
            'Alberti convierte la técnica en sistema',

          body:
            'Leon Battista Alberti describió procedimientos para construir espacio perspectivo mediante una cuadrícula y relaciones geométricas.',
        },

        {
          title:
            'No es la única forma posible',

          body:
            'Numerosas tradiciones visuales representan espacio sin utilizar perspectiva lineal central. Su predominio en determinados períodos no significa que sea la forma natural o inevitable de representar la realidad.',
        },

        {
          title:
            'Una imagen también tiene reglas',

          body:
            'Cuando aprendemos esas convenciones desde pequeños dejamos de percibirlas como convenciones. La perspectiva demuestra que incluso algo tan aparentemente directo como “mostrar el espacio” requiere decisiones culturales y matemáticas.',
        },
      ],

      closing:
        'Un cuadro nunca contiene profundidad real. Lo extraordinario es que nuestro cerebro acepte la ilusión.',
    },

    relatedTopics: [
      'Percepción',
      'Representación',
      'Geometría',
      'Arte',
      'Renacimiento',
    ],

    relatedDiscoveryIds: [
      'geo-mercator',
      'psych-inattentional-blindness',
      'art-color-context',
    ],

    sources: [
      {
        label:
          'Encyclopaedia Britannica — Perspective',

        url:
          'https://www.britannica.com/art/perspective-art',
      },
    ],
  },

  {
    id:
      'art-color-context',

    mapLabel:
      'Color',

    title:
      '¿Por qué un mismo color puede parecer distinto según lo que lo rodea?',

    eyebrow:
      'EL COLOR NO ESTÁ SOLO',

    hook:
      'Nuestra percepción de un color depende en parte de los colores que tiene alrededor.',

    category: 'art',

    duration: 2,

    difficulty: 'easy',

    quick: {
      summary:
        'El cerebro interpreta los colores en relación con el contexto. Un mismo tono físico puede parecernos diferente cuando cambia el fondo o los colores que lo rodean.',

      takeaway:
        'Percibir un color también significa compararlo.',
    },

    standard: {
      sections: [
        {
          title:
            'Contraste',

          body:
            'Un mismo tono puede percibirse más claro, oscuro, cálido o frío dependiendo del contexto visual.',
        },

        {
          title:
            'Percepción',

          body:
            'El sistema visual interpreta relaciones entre estímulos en lugar de registrar cada color como un valor completamente independiente.',
        },
      ],

      takeaway:
        'Percibir es interpretar relaciones, no simplemente registrar datos.',
    },

    relatedTopics: [
      'Percepción',
      'Color',
      'Contexto',
      'Arte',
      'Atención',
    ],

    relatedDiscoveryIds: [
      'art-perspective',
      'psych-inattentional-blindness',
    ],

    sources: [
      {
        label:
          'Encyclopaedia Britannica — Colour perception',

        url:
          'https://www.britannica.com/science/color',
      },
    ],
  },

  {
    id:
      'psych-memory-reconstruction',

    mapLabel:
      'Memoria',

    title:
      '¿Por qué recordar no es reproducir una grabación?',

    eyebrow:
      'LA MEMORIA RECONSTRUYE',

    hook:
      'Cada vez que recordamos, reconstruimos una experiencia usando fragmentos, contexto y conocimiento previo.',

    category: 'psychology',

    duration: 5,

    difficulty: 'medium',

    quick: {
      summary:
        'La memoria no funciona como una grabación perfecta. Al recordar reconstruimos una experiencia usando fragmentos almacenados, conocimientos actuales y contexto.',

      takeaway:
        'Un recuerdo puede sentirse completamente real y aun contener errores.',
    },

    standard: {
      sections: [
        {
          title:
            'No es un archivo de video',

          body:
            'Los recuerdos no se almacenan como copias completas e inalterables de nuestras experiencias.',
        },

        {
          title:
            'Reconstrucción',

          body:
            'Al recordar combinamos información conservada con expectativas, conocimientos y elementos del contexto actual.',
        },

        {
          title:
            'Confianza y exactitud',

          body:
            'La sensación de seguridad que acompaña a un recuerdo no garantiza que todos sus detalles sean correctos.',
        },
      ],

      takeaway:
        'Recordar es reconstruir, no reproducir.',
    },

    deepDive: {
      duration: 9,

      intro:
        'Nuestro pasado subjetivo parece estable, pero cada acceso a un recuerdo implica procesos de reconstrucción.',

      sections: [
        {
          title:
            'Por qué no guardamos todo',

          body:
            'Registrar cada detalle de cada experiencia requeriría enormes cantidades de información. El sistema de memoria prioriza, organiza y relaciona elementos relevantes.',
        },

        {
          title:
            'Los esquemas ayudan y también deforman',

          body:
            'El conocimiento previo permite completar información rápidamente. Esa misma capacidad puede introducir detalles plausibles que nunca estuvieron presentes en el evento original.',
        },

        {
          title:
            'Información posterior',

          body:
            'Investigaciones sobre memoria han mostrado que información recibida después de un evento puede modificar la manera en que ese evento es recordado.',
        },

        {
          title:
            'Recuerdo no significa mentira',

          body:
            'Una persona puede describir sinceramente un recuerdo incorrecto. Los errores de memoria no implican necesariamente intención de engañar.',
        },

        {
          title:
            'Una memoria flexible también tiene ventajas',

          body:
            'La capacidad de reorganizar experiencias ayuda a generalizar, aprender y aplicar conocimiento a situaciones nuevas. La reconstrucción no es simplemente un defecto: también forma parte de cómo funciona un sistema adaptativo.',
        },
      ],

      closing:
        'La memoria no es una ventana perfecta al pasado. Es una interpretación que el presente vuelve a construir.',
    },

    relatedTopics: [
      'Memoria',
      'Percepción',
      'Sesgos',
      'Información',
      'Contexto',
    ],

    relatedDiscoveryIds: [
      'psych-choice',
      'psych-inattentional-blindness',
      'curiosity-mandela-effect',
    ],

    sources: [
      {
        label:
          'American Psychological Association',

        url:
          'https://www.apa.org/',
      },
    ],
  },

  {
    id:
      'curiosity-mandela-effect',

    mapLabel:
      'Efecto Mandela',

    title:
      '¿Qué es realmente el llamado “efecto Mandela”?',

    eyebrow:
      'CUANDO MUCHOS RECUERDAN LO MISMO',

    hook:
      'Varias personas pueden compartir recuerdos incorrectos sin que exista una causa misteriosa detrás.',

    category: 'curiosity',

    duration: 5,

    difficulty: 'easy',

    quick: {
      summary:
        'El efecto Mandela describe casos en los que grupos de personas comparten un recuerdo incorrecto. Puede relacionarse con mecanismos normales de memoria, asociaciones culturales y reconstrucción de información.',

      takeaway:
        'Que muchas personas recuerden algo no convierte ese recuerdo automáticamente en un hecho.',
    },

    standard: {
      sections: [
        {
          title:
            'Errores compartidos',

          body:
            'Las personas comparten lenguaje, cultura y expectativas. Por eso algunos errores de memoria también pueden repetirse entre muchas personas.',
        },

        {
          title:
            'La memoria completa huecos',

          body:
            'Cuando falta información, nuestro cerebro puede reconstruir detalles usando asociaciones que resultan plausibles.',
        },

        {
          title:
            'No demuestra universos paralelos',

          body:
            'Las explicaciones populares que apelan a realidades alternativas no cuentan con evidencia científica. El fenómeno es más útil para estudiar cómo funciona la memoria.',
        },
      ],

      takeaway:
        'Una memoria compartida puede ser convincente y seguir siendo incorrecta.',
    },

    deepDive: {
      duration: 7,

      intro:
        'Lo sorprendente del efecto Mandela no es que revele universos paralelos, sino que muestra hasta qué punto nuestras memorias pueden equivocarse de formas parecidas.',

      sections: [
        {
          title:
            'De dónde viene el nombre',

          body:
            'La expresión se popularizó para describir el recuerdo erróneo de algunas personas que creían que Nelson Mandela había muerto durante su encarcelamiento, décadas antes de su muerte real en 2013.',
        },

        {
          title:
            'Recordar implica inferir',

          body:
            'Muchos recuerdos contienen elementos que resultan coherentes con nuestras expectativas. Esa coherencia puede hacernos sentir que un detalle fue realmente experimentado.',
        },

        {
          title:
            'La cultura también genera patrones',

          body:
            'Cuando millones de personas están expuestas a las mismas marcas, películas, frases y símbolos, pueden compartir asociaciones similares y, por lo tanto, cometer errores similares.',
        },

        {
          title:
            'Confianza colectiva',

          body:
            'Encontrar otras personas que recuerdan lo mismo puede aumentar nuestra seguridad subjetiva. Pero consenso y exactitud son propiedades diferentes.',
        },
      ],

      closing:
        'Tal vez lo inquietante no sea que nuestra realidad cambie, sino que nuestra certeza puede ser mucho mayor que nuestra precisión.',
    },

    relatedTopics: [
      'Memoria',
      'Sesgos',
      'Percepción',
      'Cultura',
      'Información',
    ],

    relatedDiscoveryIds: [
      'psych-memory-reconstruction',
      'psych-inattentional-blindness',
    ],

    sources: [
      {
        label:
          'American Psychological Association',

        url:
          'https://www.apa.org/',
      },
    ],
  },

  {
    id:
      'curiosity-silbo',

    mapLabel:
      'Silbo Gomero',

    title:
      '¿Cómo puede existir un idioma que se silba?',

    eyebrow:
      'PALABRAS QUE CRUZAN MONTAÑAS',

    hook:
      'En La Gomera existe una forma silbada de comunicación capaz de transmitir mensajes a grandes distancias.',

    category: 'curiosity',

    duration: 5,

    difficulty: 'easy',

    quick: {
      summary:
        'El Silbo Gomero transforma características del español hablado en silbidos que pueden viajar grandes distancias a través del terreno montañoso de La Gomera.',

      takeaway:
        'El lenguaje humano puede adaptarse radicalmente al entorno.',
    },

    standard: {
      sections: [
        {
          title:
            'Una geografía particular',

          body:
            'Las montañas y barrancos de La Gomera dificultaban la comunicación a distancia mediante la voz normal.',
        },

        {
          title:
            'Convertir habla en silbido',

          body:
            'El Silbo representa rasgos lingüísticos mediante variaciones de tono y continuidad, permitiendo transmitir mensajes complejos.',
        },

        {
          title:
            'Patrimonio vivo',

          body:
            'La práctica fue incorporada a la enseñanza y está reconocida por UNESCO como patrimonio cultural inmaterial.',
        },
      ],

      takeaway:
        'El entorno puede transformar incluso la forma física que adopta el lenguaje.',
    },

    relatedTopics: [
      'Lenguaje',
      'Geografía',
      'Cultura',
      'Sonido',
      'Comunicación',
    ],

    relatedDiscoveryIds: [
      'geo-dateline',
      'history-time-zones',
      'tech-notification-design',
    ],

    sources: [
      {
        label:
          'UNESCO — Whistled language of La Gomera',

        url:
          'https://ich.unesco.org/en/RL/whistled-language-of-the-island-of-la-gomera-canary-islands-the-silbo-gomero-00172',
      },
    ],
  },

  {
    id:
      'history-library-alexandria',

    mapLabel:
      'Alejandría',

    title:
      '¿La Biblioteca de Alejandría desapareció realmente en un solo incendio?',

    eyebrow:
      'UN MITO MUCHO MÁS COMPLEJO',

    hook:
      'La famosa biblioteca probablemente sufrió una decadencia gradual en lugar de desaparecer en un único momento dramático.',

    category: 'history',

    duration: 5,

    difficulty: 'medium',

    quick: {
      summary:
        'No hay evidencia sólida de que toda la Biblioteca de Alejandría desapareciera en un único incendio. Su decadencia probablemente involucró varios episodios de daño, cambios políticos y pérdida gradual de apoyo.',

      takeaway:
        'La destrucción de Alejandría fue probablemente un proceso, no una única noche.',
    },

    standard: {
      sections: [
        {
          title:
            'La historia que conocemos',

          body:
            'La imagen popular muestra un enorme incendio destruyendo de una vez la mayor colección de conocimiento del mundo antiguo.',
        },

        {
          title:
            'Las fuentes son más complicadas',

          body:
            'Existieron incendios y conflictos que pudieron dañar colecciones de libros, pero no contamos con evidencia de un único evento que destruya toda la institución.',
        },

        {
          title:
            'Instituciones también mueren lentamente',

          body:
            'Cambios políticos, pérdida de financiamiento, competencia de otros centros intelectuales y transformaciones institucionales pueden explicar parte de su declive.',
        },
      ],

      takeaway:
        'El conocimiento puede perderse por abandono y fragmentación, no solamente por catástrofes.',
    },

    relatedTopics: [
      'Conocimiento',
      'Historia',
      'Bibliotecas',
      'Información',
      'Cultura',
    ],

    relatedDiscoveryIds: [
      'psych-memory-reconstruction',
      'curiosity-mandela-effect',
      'tech-infinite-scroll',
    ],

    sources: [
      {
        label:
          'Encyclopaedia Britannica — Library of Alexandria',

        url:
          'https://www.britannica.com/topic/Library-of-Alexandria',
      },
    ],
  },

  {
    id:
      'science-tardigrade',

    mapLabel:
      'Tardígrados',

    title:
      '¿Cómo puede sobrevivir un tardígrado a condiciones extremas?',

    eyebrow:
      'CASI APAGAR LA VIDA',

    hook:
      'Estos diminutos animales pueden entrar en estados de actividad extremadamente reducida cuando el entorno se vuelve hostil.',

    category: 'science',

    duration: 5,

    difficulty: 'easy',

    quick: {
      summary:
        'Algunos tardígrados pueden entrar en criptobiosis, un estado en el que reducen enormemente su metabolismo y toleran condiciones que serían letales durante su actividad normal.',

      takeaway:
        'Sobrevivir a condiciones extremas puede significar reducir temporalmente casi toda actividad biológica.',
    },

    standard: {
      sections: [
        {
          title:
            'Criptobiosis',

          body:
            'Ante situaciones como deshidratación extrema, algunas especies pueden adoptar un estado llamado tun y reducir drásticamente su actividad metabólica.',
        },

        {
          title:
            'Protección',

          body:
            'Diversos mecanismos moleculares ayudan a proteger estructuras celulares mientras el organismo permanece en ese estado.',
        },

        {
          title:
            'No son indestructibles',

          body:
            'La popularidad de los tardígrados generó exageraciones. Su resistencia tiene límites y depende de la especie, del estado del organismo y de las condiciones específicas.',
        },
      ],

      takeaway:
        'Los tardígrados son extremadamente resistentes bajo ciertas condiciones, pero no son invulnerables.',
    },

    relatedTopics: [
      'Evolución',
      'Adaptación',
      'Biología',
      'Extremos',
      'Supervivencia',
    ],

    relatedDiscoveryIds: [
      'nature-octopus',
      'nature-slime-mold',
      'science-tree-network',
    ],

    sources: [
      {
        label:
          'NASA — Tardigrades research',

        url:
          'https://www.nasa.gov/',
      },
    ],
  },

  {
    id:
      'curiosity-bananas-radioactive',

    mapLabel:
      'Bananas',

    title:
      '¿Es verdad que las bananas son radiactivas?',

    eyebrow:
      'UNA DOSIS MUY PEQUEÑA',

    hook:
      'Las bananas contienen potasio, y una pequeña fracción de ese elemento es naturalmente radiactiva.',

    category: 'curiosity',

    duration: 2,

    difficulty: 'easy',

    quick: {
      summary:
        'Las bananas contienen potasio. Una pequeña parte del potasio natural corresponde al isótopo radiactivo potasio-40, por lo que técnicamente una banana emite una cantidad minúscula de radiación.',

      takeaway:
        'Radiactivo no significa automáticamente peligroso.',
    },

    standard: {
      sections: [
        {
          title:
            'Potasio-40',

          body:
            'El potasio existe naturalmente en varios isótopos. Una fracción muy pequeña corresponde al potasio-40, que es radiactivo.',
        },

        {
          title:
            'Una cantidad diminuta',

          body:
            'El nivel de radiación asociado a consumir una banana es extremadamente bajo y no representa un riesgo en una dieta normal.',
        },
      ],

      takeaway:
        'La radiactividad también forma parte naturalmente de nuestro entorno y de nuestro propio cuerpo.',
    },

    relatedTopics: [
      'Radiación',
      'Física',
      'Naturaleza',
      'Alimentos',
      'Medición',
    ],

    relatedDiscoveryIds: [
      'science-eratosthenes',
      'science-tardigrade',
    ],

    sources: [
      {
        label:
          'U.S. Environmental Protection Agency — Radiation basics',

        url:
          'https://www.epa.gov/radiation',
      },
    ],
  },
];