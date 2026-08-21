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

import styles from './LibraryView.module.css';

type LibraryViewProps = {
  discoveries: Discovery[];

  onOpen: (
    discovery: Discovery,
  ) => void;
};

type LibraryTab =
  | 'saved'
  | 'history';

const categoryLabels: Record<
  DiscoveryCategory,
  string
> = {
  history: 'Historia',
  science: 'Ciencia',
  geography: 'Geografía',
  psychology: 'Psicología',
  art: 'Arte',
  technology: 'Tecnología',
  nature: 'Naturaleza',
  curiosity: 'Curiosidad',
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

export function LibraryView({
  discoveries,
  onOpen,
}: LibraryViewProps) {
  const [
    activeTab,
    setActiveTab,
  ] =
    useState<LibraryTab>(
      'saved',
    );

  const {
    viewedIds,
    savedIds,
  } =
    useDiscoveryStore();

  const viewedDiscoveries =
    useMemo(
      () =>
        viewedIds
          .map((id) =>
            discoveries.find(
              (item) =>
                item.id === id,
            ),
          )
          .filter(
            (
              item,
            ): item is Discovery =>
              Boolean(item),
          )
          .reverse(),
      [
        discoveries,
        viewedIds,
      ],
    );

  const savedDiscoveries =
    useMemo(
      () =>
        savedIds
          .map((id) =>
            discoveries.find(
              (item) =>
                item.id === id,
            ),
          )
          .filter(
            (
              item,
            ): item is Discovery =>
              Boolean(item),
          )
          .reverse(),
      [
        discoveries,
        savedIds,
      ],
    );

  const categoryProgress =
    useMemo(() => {
      const counts =
        viewedDiscoveries.reduce<
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
            const category =
              discovery.category;

            accumulator[
              category
            ] =
              (accumulator[
                category
              ] ?? 0) + 1;

            return accumulator;
          },
          {},
        );

      return Object.entries(
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
    }, [
      viewedDiscoveries,
    ]);

  const currentList =
    activeTab === 'saved'
      ? savedDiscoveries
      : viewedDiscoveries;

  const mostExplored =
    categoryProgress[0];

  return (
    <section
      className={
        styles.page
      }
    >
      <header
        className={
          styles.header
        }
      >
        <p
          className={
            styles.eyebrow
          }
        >
          TU SERENDIPIA
        </p>

        <h1>
          Tu biblioteca
          de descubrimientos.
        </h1>

        <p
          className={
            styles.description
          }
        >
          Todo lo que fuiste
          encontrando queda
          acá, sin ruido y sin
          perderse en un feed.
        </p>
      </header>

      <section
        className={
          styles.overview
        }
      >
        <div
          className={
            styles.mainStat
          }
        >
          <span
            className={
              styles.mainStatNumber
            }
          >
            {
              viewedDiscoveries.length
            }
          </span>

          <span
            className={
              styles.mainStatLabel
            }
          >
            cosas
            descubiertas
          </span>
        </div>

        <div
          className={
            styles.secondaryStats
          }
        >
          <div>
            <strong>
              {
                savedDiscoveries.length
              }
            </strong>

            <span>
              guardadas
            </span>
          </div>

          <div>
            <strong>
              {
                categoryProgress.length
              }
            </strong>

            <span>
              áreas
              exploradas
            </span>
          </div>
        </div>
      </section>

      {mostExplored && (
        <section
          className={
            styles.insight
          }
        >
          <div
            className={
              styles.insightSymbol
            }
            aria-hidden="true"
          >
            {
              categorySymbols[
                mostExplored.category
              ]
            }
          </div>

          <div>
            <span
              className={
                styles.insightLabel
              }
            >
              POR AHORA
            </span>

            <p>
              Estás explorando
              más{' '}
              <strong>
                {
                  categoryLabels[
                    mostExplored.category
                  ]
                }
              </strong>
              .
            </p>
          </div>
        </section>
      )}

      <section
        className={
          styles.categories
        }
      >
        <div
          className={
            styles.sectionHeading
          }
        >
          <h2>
            Tus áreas
          </h2>

          <span>
            {
              categoryProgress.length
            }
          </span>
        </div>

        {categoryProgress.length >
        0 ? (
          <div
            className={
              styles.categoryGrid
            }
          >
            {
              categoryProgress.map(
                ({
                  category,
                  count,
                }) => (
                  <div
                    key={
                      category
                    }
                    className={
                      styles.categoryCard
                    }
                  >
                    <span
                      className={
                        styles.categorySymbol
                      }
                    >
                      {
                        categorySymbols[
                          category
                        ]
                      }
                    </span>

                    <div>
                      <strong>
                        {
                          categoryLabels[
                            category
                          ]
                        }
                      </strong>

                      <small>
                        {
                          count
                        }{' '}
                        {count === 1
                          ? 'descubrimiento'
                          : 'descubrimientos'}
                      </small>
                    </div>
                  </div>
                ),
              )
            }
          </div>
        ) : (
          <div
            className={
              styles.emptyArea
            }
          >
            <span
              aria-hidden="true"
            >
              ✦
            </span>

            <p>
              Tu mapa empieza
              con el primer
              descubrimiento.
            </p>
          </div>
        )}
      </section>

      <section
        className={
          styles.collection
        }
      >
        <div
          className={
            styles.tabs
          }
        >
          <button
            type="button"
            className={
              activeTab ===
              'saved'
                ? styles.tabActive
                : ''
            }
            onClick={() =>
              setActiveTab(
                'saved',
              )
            }
          >
            Guardados

            <span>
              {
                savedDiscoveries.length
              }
            </span>
          </button>

          <button
            type="button"
            className={
              activeTab ===
              'history'
                ? styles.tabActive
                : ''
            }
            onClick={() =>
              setActiveTab(
                'history',
              )
            }
          >
            Historial

            <span>
              {
                viewedDiscoveries.length
              }
            </span>
          </button>
        </div>

        {currentList.length ===
        0 ? (
          <div
            className={
              styles.emptyList
            }
          >
            <div
              className={
                styles.emptyMark
              }
              aria-hidden="true"
            >
              ✦
            </div>

            <strong>
              {activeTab ===
              'saved'
                ? 'Todavía no guardaste nada.'
                : 'Todavía no hay historial.'}
            </strong>

            <p>
              {activeTab ===
              'saved'
                ? 'Cuando algo valga la pena recordar, guardalo acá.'
                : 'Cada descubrimiento que abras va a aparecer acá.'}
            </p>
          </div>
        ) : (
          <div
            className={
              styles.discoveryList
            }
          >
            {
              currentList.map(
                (
                  discovery,
                  index,
                ) => (
                  <button
                    type="button"
                    key={
                      discovery.id
                    }
                    className={
                      styles.discoveryItem
                    }
                    onClick={() =>
                      onOpen(
                        discovery,
                      )
                    }
                  >
                    <div
                      className={
                        styles.discoveryTop
                      }
                    >
                      <span
                        className={
                          styles.discoveryCategory
                        }
                      >
                        {
                          categoryLabels[
                            discovery.category
                          ]
                        }
                      </span>

                      <span
                        className={
                          styles.discoveryTime
                        }
                      >
                        {
                          discovery.duration
                        }{' '}
                        min
                      </span>
                    </div>

                    <div
                      className={
                        styles.discoveryMain
                      }
                    >
                      <span
                        className={
                          styles.discoveryIndex
                        }
                      >
                        {String(
                          index +
                            1,
                        ).padStart(
                          2,
                          '0',
                        )}
                      </span>

                      <strong>
                        {
                          discovery.title
                        }
                      </strong>

                      <span
                        className={
                          styles.discoveryArrow
                        }
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>
                  </button>
                ),
              )
            }
          </div>
        )}
      </section>

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
          El conocimiento
          también deja huella.
        </p>
      </footer>
    </section>
  );
}