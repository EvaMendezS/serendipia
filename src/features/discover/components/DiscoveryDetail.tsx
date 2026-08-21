import {
  useEffect,
  useState,
} from 'react';

import {
  useDiscoveryStore,
} from '../../../store/useDiscoveryStore';

import type {
  Discovery,
} from '../../../types/discovery';

import styles from './DiscoveryDetail.module.css';

type DiscoveryDetailProps = {
  discovery: Discovery;
  onClose: () => void;
};

export function DiscoveryDetail({
  discovery,
  onClose,
}: DiscoveryDetailProps) {
  const [step, setStep] =
    useState(0);

  const {
    savedIds,
    markViewed,
    toggleSaved,
  } = useDiscoveryStore();

  const isSaved =
    savedIds.includes(discovery.id);

  const isFinished =
    step >= discovery.sections.length;

  useEffect(() => {
    markViewed(discovery.id);
  }, [
    discovery.id,
    markViewed,
  ]);

  if (isFinished) {
    return (
      <section className={styles.finish}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        <div
          className={styles.finishIcon}
          aria-hidden="true"
        >
          ✦
        </div>

        <p className={styles.eyebrow}>
          TERMINASTE
        </p>

        <h1>
          Ahora sabés algo nuevo.
        </h1>

        <p className={styles.takeaway}>
          {discovery.takeaway}
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={() =>
              toggleSaved(
                discovery.id,
              )
            }
          >
            {isSaved
              ? '✓ Guardado'
              : 'Guardar en mi biblioteca'}
          </button>

          <button
            type="button"
            className={
              styles.secondaryButton
            }
            onClick={onClose}
          >
            Descubrir otra cosa
          </button>
        </div>

        <div
          className={
            styles.relatedCard
          }
        >
          <span>
            Este tema se conecta con:
          </span>

          <div>
            {discovery.relatedTopics.map(
              (topic) => (
                <span key={topic}>
                  {topic}
                </span>
              ),
            )}
          </div>
        </div>
      </section>
    );
  }

  const current =
    discovery.sections[step];

  return (
    <section className={styles.page}>
      <header className={styles.topbar}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Volver"
        >
          ←
        </button>

        <span>
          {step + 1} /{' '}
          {discovery.sections.length}
        </span>

        <button
          type="button"
          onClick={() =>
            toggleSaved(discovery.id)
          }
          aria-label={
            isSaved
              ? 'Quitar de guardados'
              : 'Guardar'
          }
        >
          {isSaved ? '★' : '☆'}
        </button>
      </header>

      <div className={styles.progress}>
        <span
          style={{
            width: `${
              ((step + 1) /
                discovery.sections
                  .length) *
              100
            }%`,
          }}
        />
      </div>

      {step === 0 && (
        <div className={styles.hero}>
          <p className={styles.eyebrow}>
            {discovery.eyebrow}
          </p>

          <h1>
            {discovery.title}
          </h1>

          <p className={styles.hook}>
            {discovery.hook}
          </p>

          <div className={styles.meta}>
            <span>
              {discovery.duration} min
            </span>
            <span>
              {discovery.difficulty}
            </span>
          </div>
        </div>
      )}

      <article
        className={styles.contentCard}
      >
        <p className={styles.stepLabel}>
          {step + 1}. {current.title}
        </p>

        <p className={styles.body}>
          {current.body}
        </p>
      </article>

      <footer className={styles.footer}>
        <button
          type="button"
          className={
            styles.secondaryButton
          }
          onClick={() =>
            setStep((value) =>
              Math.max(0, value - 1),
            )
          }
          disabled={step === 0}
        >
          Atrás
        </button>

        <button
          type="button"
          className={styles.nextButton}
          onClick={() =>
            setStep(
              (value) => value + 1,
            )
          }
        >
          {step ===
          discovery.sections.length -
            1
            ? 'Terminar'
            : 'Seguir'}
        </button>
      </footer>
    </section>
  );
}
