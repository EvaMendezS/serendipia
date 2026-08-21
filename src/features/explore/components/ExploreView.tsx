import {
  useMemo,
} from 'react';

import type {
  Discovery,
  DiscoveryCategory,
} from '../../../types/discovery';

import styles from './ExploreView.module.css';

type ExploreViewProps = {
  discoveries: Discovery[];

  onOpen: (
    discovery: Discovery,
  ) => void;
};

type CategoryDefinition = {
  id: DiscoveryCategory;

  name: string;

  description: string;

  symbol: string;
};

const categories: CategoryDefinition[] = [
  {
    id: 'history',

    name: 'Historia',

    description:
      'Personas, procesos y momentos que cambiaron el mundo.',

    symbol: 'H',
  },

  {
    id: 'science',

    name: 'Ciencia',

    description:
      'Ideas para entender cómo funciona lo que nos rodea.',

    symbol: 'C',
  },

  {
    id: 'psychology',

    name: 'Psicología',

    description:
      'Atención, memoria, decisiones y comportamiento.',

    symbol: 'P',
  },

  {
    id: 'geography',

    name: 'Mundo',

    description:
      'Mapas, lugares, fronteras y formas de organizar el planeta.',

    symbol: 'M',
  },

  {
    id: 'art',

    name: 'Arte',

    description:
      'Percepción, representación y formas de mirar.',

    symbol: 'A',
  },

  {
    id: 'technology',

    name: 'Tecnología',

    description:
      'Las herramientas y sistemas que modifican nuestra vida.',

    symbol: 'T',
  },

  {
    id: 'nature',

    name: 'Naturaleza',

    description:
      'Vida, evolución y estrategias que parecen imposibles.',

    symbol: 'N',
  },

  {
    id: 'curiosity',

    name: 'Curiosidades',

    description:
      'Preguntas que probablemente nunca se te ocurrió hacer.',

    symbol: '?',
  },
];

function getRandomItem<T>(
  items: T[],
): T | null {
  if (items.length === 0) {
    return null;
  }

  const index = Math.floor(
    Math.random() *
      items.length,
  );

  return items[index];
}

export function ExploreView({
  discoveries,
  onOpen,
}: ExploreViewProps) {
  const counts = useMemo(() => {
    return discoveries.reduce<
      Partial<
        Record<
          DiscoveryCategory,
          number
        >
      >
    >(
      (
        accumulator,
        discovery,
      ) => {
        accumulator[
          discovery.category
        ] =
          (accumulator[
            discovery.category
          ] ?? 0) + 1;

        return accumulator;
      },
      {},
    );
  }, [discoveries]);

  function openCategory(
    category:
      DiscoveryCategory,
  ) {
    const pool =
      discoveries.filter(
        (discovery) =>
          discovery.category ===
          category,
      );

    const selected =
      getRandomItem(pool);

    if (!selected) {
      return;
    }

    onOpen(selected);
  }

  return (
    <section
      className={styles.page}
    >
      <header
        className={styles.header}
      >
        <p
          className={
            styles.eyebrow
          }
        >
          EXPLORAR
        </p>

        <h1>
          Elegí por dónde
          empezar.
        </h1>

        <p
          className={
            styles.description
          }
        >
          Vos elegís el área.
          Serendipia elige la
          pregunta.
        </p>
      </header>

      <div
        className={
          styles.categoryGrid
        }
      >
        {categories.map(
          (category) => {
            const count =
              counts[
                category.id
              ] ?? 0;

            return (
              <button
                key={
                  category.id
                }
                type="button"
                className={
                  styles.categoryCard
                }
                onClick={() =>
                  openCategory(
                    category.id,
                  )
                }
                disabled={
                  count === 0
                }
              >
                <div
                  className={
                    styles.categoryTop
                  }
                >
                  <span
                    className={
                      styles.symbol
                    }
                  >
                    {
                      category.symbol
                    }
                  </span>

                  <span
                    className={
                      styles.count
                    }
                  >
                    {count}
                  </span>
                </div>

                <div
                  className={
                    styles.categoryCopy
                  }
                >
                  <h2>
                    {
                      category.name
                    }
                  </h2>

                  <p>
                    {
                      category.description
                    }
                  </p>
                </div>

                <div
                  className={
                    styles.categoryFooter
                  }
                >
                  <span>
                    Descubrir algo
                  </span>

                  <span
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </button>
            );
          },
        )}
      </div>

      <footer
        className={
          styles.footer
        }
      >
        <span
          aria-hidden="true"
        >
          ✦
        </span>

        <p>
          Elegí un área,
          no una respuesta.
        </p>
      </footer>
    </section>
  );
}