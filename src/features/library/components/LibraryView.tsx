import {
  useMemo,
} from 'react';

import {
  useDiscoveryStore,
} from '../../../store/useDiscoveryStore';

import type {
  Discovery,
} from '../../../types/discovery';

import styles from './LibraryView.module.css';

type LibraryViewProps = {
  discoveries: Discovery[];
  onOpen: (
    discovery: Discovery,
  ) => void;
};

export function LibraryView({
  discoveries,
  onOpen,
}: LibraryViewProps) {
  const {
    viewedIds,
    savedIds,
  } = useDiscoveryStore();

  const viewedDiscoveries =
    useMemo(
      () =>
        discoveries.filter((item) =>
          viewedIds.includes(item.id),
        ),
      [discoveries, viewedIds],
    );

  const savedDiscoveries =
    useMemo(
      () =>
        discoveries.filter((item) =>
          savedIds.includes(item.id),
        ),
      [discoveries, savedIds],
    );

  return (
    <section className={styles.page}>
      <header>
        <p className={styles.eyebrow}>
          TU RECORRIDO
        </p>

        <h1>
          Biblioteca
        </h1>

        <div className={styles.stats}>
          <div>
            <strong>
              {viewedDiscoveries.length}
            </strong>
            <span>
              descubrimientos
            </span>
          </div>

          <div>
            <strong>
              {savedDiscoveries.length}
            </strong>
            <span>
              guardados
            </span>
          </div>
        </div>
      </header>

      <div className={styles.section}>
        <div
          className={
            styles.sectionHeader
          }
        >
          <h2>Guardados</h2>
          <span>
            {savedDiscoveries.length}
          </span>
        </div>

        {savedDiscoveries.length ===
        0 ? (
          <div
            className={styles.empty}
          >
            Todavía no guardaste ningún
            descubrimiento.
          </div>
        ) : (
          <div className={styles.list}>
            {savedDiscoveries.map(
              (item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() =>
                    onOpen(item)
                  }
                >
                  <span
                    className={
                      styles.category
                    }
                  >
                    {item.category}
                  </span>

                  <strong>
                    {item.title}
                  </strong>

                  <small>
                    {item.duration} min
                  </small>
                </button>
              ),
            )}
          </div>
        )}
      </div>

      <div className={styles.section}>
        <div
          className={
            styles.sectionHeader
          }
        >
          <h2>Vistos</h2>
          <span>
            {viewedDiscoveries.length}
          </span>
        </div>

        <div className={styles.list}>
          {viewedDiscoveries.map(
            (item) => (
              <button
                type="button"
                key={item.id}
                onClick={() =>
                  onOpen(item)
                }
              >
                <span
                  className={
                    styles.category
                  }
                >
                  {item.category}
                </span>

                <strong>
                  {item.title}
                </strong>

                <small>
                  {item.duration} min
                </small>
              </button>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
