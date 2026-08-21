import {
  useMemo,
  useState,
} from 'react';

import {
  useDiscoveryStore,
} from '../../../store/useDiscoveryStore';

import type {
  Discovery,
  DiscoveryCategory,
} from '../../../types/discovery';

import type {
  DiscoveryLearningMode,
} from './DiscoveryDetail';

import styles from './DiscoveryWheel.module.css';

type DiscoveryWheelProps = {
  discoveries: Discovery[];

  allDiscoveries: Discovery[];

  onDiscover: (
    discovery: Discovery,
    mode?: DiscoveryLearningMode,
  ) => void;

  onExplore: () => void;
};

const categoryNames: Record<
  DiscoveryCategory,
  string
> = {
  history: 'Historia',
  science: 'Ciencia',
  geography: 'Mundo',
  psychology: 'Psicología',
  art: 'Arte',
  technology: 'Tecnología',
  nature: 'Naturaleza',
  curiosity: 'Curiosidades',
};

const categorySymbols: Record<
  DiscoveryCategory,
  string
> = {
  history: 'H',
  science: 'C',
  geography: 'M',
  psychology: 'P',
  art: 'A',
  technology: 'T',
  nature: 'N',
  curiosity: '?',
};

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

export function DiscoveryWheel({
  discoveries,
  allDiscoveries,
  onDiscover,
  onExplore,
}: DiscoveryWheelProps) {
  const [
    isChoosing,
    setIsChoosing,
  ] = useState(false);

  const viewedIds =
    useDiscoveryStore(
      (state) =>
        state.viewedIds,
    );

  const viewedDiscoveries =
    useMemo(() => {
      return viewedIds
        .map((id) =>
          allDiscoveries.find(
            (item) =>
              item.id === id,
          ),
        )
        .filter(
          (
            item,
          ): item is Discovery =>
            item !==
            undefined,
        );
    }, [
      allDiscoveries,
      viewedIds,
    ]);

  const dominantCategory =
    useMemo(() => {
      const recent =
        viewedDiscoveries.slice(
          -8,
        );

      if (
        recent.length < 4
      ) {
        return null;
      }

      const counts =
        recent.reduce<
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

      const sorted =
        Object.entries(
          counts,
        )
          .map(
            ([
              category,
              count,
            ]) => ({
              category:
                category as DiscoveryCategory,

              count,
            }),
          )
          .sort(
            (a, b) =>
              b.count -
              a.count,
          );

      const first =
        sorted[0];

      if (!first) {
        return null;
      }

      const ratio =
        first.count /
        recent.length;

      if (
        first.count < 3 ||
        ratio < 0.5
      ) {
        return null;
      }

      return first.category;
    }, [
      viewedDiscoveries,
    ]);

  function reveal(
    pool: Discovery[],
    mode:
      DiscoveryLearningMode =
      'choice',
  ) {
    if (
      isChoosing ||
      pool.length === 0
    ) {
      return;
    }

    setIsChoosing(true);

    const selected =
      getRandomItem(pool);

    if (!selected) {
      setIsChoosing(false);

      return;
    }

    window.setTimeout(() => {
      setIsChoosing(false);

      onDiscover(
        selected,
        mode,
      );
    }, 420);
  }

  function surpriseMe() {
    reveal(
      discoveries,
      'choice',
    );
  }

  function oneMinute() {
    reveal(
      discoveries,
      'quick',
    );
  }

  function fiveMinutes() {
    const pool =
      discoveries.filter(
        (item) =>
          item.standard.sections
            .length > 0,
      );

    reveal(
      pool.length > 0
        ? pool
        : discoveries,
      'standard',
    );
  }

  function leaveBubble() {
    if (!dominantCategory) {
      surpriseMe();

      return;
    }

    const different =
      discoveries.filter(
        (item) =>
          item.category !==
          dominantCategory,
      );

    reveal(
      different.length > 0
        ? different
        : discoveries,
      'choice',
    );
  }

  return (
    <section
      className={
        styles.page
      }
    >
      <header
        className={
          styles.brandHeader
        }
      >
        <div
          className={
            styles.brand
          }
        >
          <span
            className={
              styles.brandMark
            }
            aria-hidden="true"
          >
            ✦
          </span>

          <span>
            Serendipia
          </span>
        </div>

        <p>
          CONOCIMIENTO SIN FEED
        </p>
      </header>

      <section
        className={
          styles.intro
        }
      >
        <h1>
          ¿Qué vas a
          descubrir hoy?
        </h1>

        <p>
          Elegí un camino o
          dejá que algo
          inesperado te
          encuentre.
        </p>
      </section>

      <button
        type="button"
        className={
          styles.surpriseCard
        }
        onClick={
          surpriseMe
        }
        disabled={
          isChoosing
        }
      >
        <div
          className={
            styles.surpriseTop
          }
        >
          <span
            className={
              styles.surpriseMark
            }
            aria-hidden="true"
          >
            ✦
          </span>

          <span
            className={
              styles.randomLabel
            }
          >
            AZAR
          </span>
        </div>

        <div
          className={
            styles.surpriseCopy
          }
        >
          <h2>
            {isChoosing
              ? 'Buscando algo...'
              : 'Sorprendeme'}
          </h2>

          <p>
            No elijas el tema.
            Dejale una parte al
            azar.
          </p>
        </div>

        <div
          className={
            styles.surpriseFooter
          }
        >
          <span>
            Descubrir algo
            inesperado
          </span>

          <span
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </button>

      <div
        className={
          styles.actionGrid
        }
      >
        <button
          type="button"
          className={
            styles.actionCard
          }
          onClick={
            onExplore
          }
        >
          <span
            className={
              styles.actionSymbol
            }
            aria-hidden="true"
          >
            ◫
          </span>

          <div>
            <strong>
              Elegir un área
            </strong>

            <small>
              Historia, ciencia,
              arte y más
            </small>
          </div>

          <span
            className={
              styles.actionArrow
            }
            aria-hidden="true"
          >
            →
          </span>
        </button>

        <button
          type="button"
          className={
            styles.actionCard
          }
          onClick={
            oneMinute
          }
          disabled={
            isChoosing
          }
        >
          <span
            className={
              styles.timeSymbol
            }
            aria-hidden="true"
          >
            1
          </span>

          <div>
            <strong>
              Tengo 1 minuto
            </strong>

            <small>
              La idea esencial
            </small>
          </div>

          <span
            className={
              styles.actionArrow
            }
            aria-hidden="true"
          >
            →
          </span>
        </button>

        <button
          type="button"
          className={
            styles.actionCard
          }
          onClick={
            fiveMinutes
          }
          disabled={
            isChoosing
          }
        >
          <span
            className={
              styles.timeSymbol
            }
            aria-hidden="true"
          >
            5
          </span>

          <div>
            <strong>
              Tengo 5 minutos
            </strong>

            <small>
              Quiero aprender
              algo
            </small>
          </div>

          <span
            className={
              styles.actionArrow
            }
            aria-hidden="true"
          >
            →
          </span>
        </button>
      </div>

      {dominantCategory && (
        <section
          className={
            styles.diversityCard
          }
        >
          <div
            className={
              styles.diversityTop
            }
          >
            <span
              className={
                styles.categorySymbol
              }
            >
              {
                categorySymbols[
                  dominantCategory
                ]
              }
            </span>

            <span
              className={
                styles.diversityLabel
              }
            >
              SALÍ DE TU BURBUJA
            </span>
          </div>

          <p>
            Últimamente
            estuviste explorando
            bastante{' '}
            <strong>
              {
                categoryNames[
                  dominantCategory
                ]
              }
            </strong>
            .
          </p>

          <button
            type="button"
            onClick={
              leaveBubble
            }
            disabled={
              isChoosing
            }
          >
            Mostrame algo
            completamente
            distinto

            <span
              aria-hidden="true"
            >
              →
            </span>
          </button>
        </section>
      )}

      <footer
        className={
          styles.closing
        }
      >
        <span
          aria-hidden="true"
        >
          ✦
        </span>

        <p>
          Entrá. Aprendé algo.
          Seguí con tu día.
        </p>
      </footer>
    </section>
  );
}