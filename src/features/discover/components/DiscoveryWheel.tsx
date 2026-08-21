import {
  useMemo,
  useState,
  type CSSProperties,
} from 'react';

import type {
  Discovery,
  DiscoveryCategory,
} from '../../../types/discovery';

import styles from './DiscoveryWheel.module.css';

type DiscoveryWheelProps = {
  discoveries: Discovery[];

  onDiscover: (
    discovery: Discovery,
  ) => void;
};

type CategoryOption = {
  key: DiscoveryCategory;
  label: string;
};

const categories: CategoryOption[] = [
  {
    key: 'history',
    label: 'Historia',
  },
  {
    key: 'science',
    label: 'Ciencia',
  },
  {
    key: 'art',
    label: 'Arte',
  },
  {
    key: 'technology',
    label: 'Tecnología',
  },
  {
    key: 'geography',
    label: 'Mundo',
  },
  {
    key: 'psychology',
    label: 'Psicología',
  },
  {
    key: 'nature',
    label: 'Naturaleza',
  },
  {
    key: 'curiosity',
    label: 'Curiosidad',
  },
];

function getRandomItem<T>(
  items: T[],
): T {
  return items[
    Math.floor(
      Math.random() *
        items.length,
    )
  ];
}

function getLabelPosition(
  index: number,
): CSSProperties {
  const angle =
    index *
      (360 /
        categories.length) -
    90;

  return {
    '--angle': `${angle}deg`,
  } as CSSProperties;
}

export function DiscoveryWheel({
  discoveries,
  onDiscover,
}: DiscoveryWheelProps) {
  const [
    isSpinning,
    setIsSpinning,
  ] = useState(false);

  const [
    rotation,
    setRotation,
  ] = useState(0);

  const availableCategories =
    useMemo(
      () =>
        new Set(
          discoveries.map(
            (item) =>
              item.category,
          ),
        ),
      [discoveries],
    );

  function completeDiscovery(
    discovery: Discovery,
  ) {
    window.setTimeout(() => {
      setIsSpinning(false);

      onDiscover(discovery);
    }, 1100);
  }

  function spinRandom() {
    if (
      isSpinning ||
      discoveries.length === 0
    ) {
      return;
    }

    setIsSpinning(true);

    const selected =
      getRandomItem(
        discoveries,
      );

    const categoryIndex =
      categories.findIndex(
        (category) =>
          category.key ===
          selected.category,
      );

    const segmentAngle =
      360 /
      categories.length;

    const targetAngle =
      360 -
      categoryIndex *
        segmentAngle;

    setRotation(
      (previous) =>
        previous +
        1080 +
        targetAngle,
    );

    completeDiscovery(
      selected,
    );
  }

  function discoverCategory(
    category:
      DiscoveryCategory,
  ) {
    if (isSpinning) {
      return;
    }

    const pool =
      discoveries.filter(
        (discovery) =>
          discovery.category ===
          category,
      );

    if (!pool.length) {
      return;
    }

    setIsSpinning(true);

    const selected =
      getRandomItem(pool);

    const categoryIndex =
      categories.findIndex(
        (item) =>
          item.key ===
          category,
      );

    const segmentAngle =
      360 /
      categories.length;

    const targetAngle =
      360 -
      categoryIndex *
        segmentAngle;

    setRotation(
      (previous) =>
        previous +
        720 +
        targetAngle,
    );

    completeDiscovery(
      selected,
    );
  }

  function discoverFiveMinutes() {
    if (isSpinning) {
      return;
    }

    const short =
      discoveries.filter(
        (item) =>
          item.duration <= 5,
      );

    const pool =
      short.length
        ? short
        : discoveries;

    setIsSpinning(true);

    const selected =
      getRandomItem(pool);

    const categoryIndex =
      categories.findIndex(
        (category) =>
          category.key ===
          selected.category,
      );

    const segmentAngle =
      360 /
      categories.length;

    setRotation(
      (previous) =>
        previous +
        720 +
        360 -
        categoryIndex *
          segmentAngle,
    );

    completeDiscovery(
      selected,
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
          styles.header
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

        <div
          className={
            styles.intro
          }
        >
          <p
            className={
              styles.eyebrow
            }
          >
            NO BUSQUES.
            ENCONTRÁ.
          </p>

          <h1>
            ¿Qué vas a
            descubrir hoy?
          </h1>

          <p
            className={
              styles.description
            }
          >
            Girá y dejá que
            algo inesperado
            te encuentre.
          </p>
        </div>
      </header>

      <div
        className={
          styles.wheelArea
        }
      >
        <div
          className={
            styles.pointer
          }
          aria-hidden="true"
        />

        <div
          className={
            styles.wheelFrame
          }
        >
          <div
            className={
              styles.wheel
            }
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <div
              className={
                styles.sectors
              }
            />

            {categories.map(
              (
                category,
                index,
              ) => {
                const available =
                  availableCategories.has(
                    category.key,
                  );

                return (
                  <button
                    key={
                      category.key
                    }
                    type="button"
                    className={`${styles.category} ${
                      available
                        ? ''
                        : styles.categoryUnavailable
                    }`}
                    style={getLabelPosition(
                      index,
                    )}
                    onClick={() =>
                      discoverCategory(
                        category.key,
                      )
                    }
                    disabled={
                      isSpinning ||
                      !available
                    }
                  >
                    <span>
                      {
                        category.label
                      }
                    </span>
                  </button>
                );
              },
            )}

            <div
              className={
                styles.innerRing
              }
            />
          </div>

          <button
            type="button"
            className={
              styles.centerButton
            }
            onClick={
              spinRandom
            }
            disabled={
              isSpinning
            }
          >
            <span
              className={
                styles.randomLabel
              }
            >
              AZAR
            </span>

            <span
              className={
                styles.spark
              }
              aria-hidden="true"
            >
              ✦
            </span>

            <strong>
              {isSpinning
                ? 'Buscando'
                : 'Girar'}
            </strong>
          </button>
        </div>
      </div>

      <div
        className={
          styles.quickAction
        }
      >
        <button
          type="button"
          className={
            styles.timeButton
          }
          onClick={
            discoverFiveMinutes
          }
          disabled={
            isSpinning
          }
        >
          <span
            className={
              styles.timeCircle
            }
          >
            5
          </span>

          <span
            className={
              styles.timeText
            }
          >
            <strong>
              Tengo cinco minutos
            </strong>

            <small>
              Elegí algo breve
              por mí
            </small>
          </span>

          <span
            className={
              styles.timeArrow
            }
            aria-hidden="true"
          >
            →
          </span>
        </button>
      </div>

      <p
        className={
          styles.closing
        }
      >
        Una idea alcanza para
        cambiar hacia dónde
        mirás.
      </p>
    </section>
  );
}