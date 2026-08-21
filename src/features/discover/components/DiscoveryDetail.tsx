import {
  useEffect,
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

import styles from './DiscoveryDetail.module.css';

export type DiscoveryLearningMode =
  | 'choice'
  | 'quick'
  | 'standard'
  | 'deep';

type DiscoveryDetailProps = {
  discovery: Discovery;

  onClose: () => void;

  initialMode?: DiscoveryLearningMode;
};

const categoryLabels: Record<
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

export function DiscoveryDetail({
  discovery,
  onClose,
  initialMode = 'choice',
}: DiscoveryDetailProps) {
  const [
    mode,
    setMode,
  ] =
    useState<DiscoveryLearningMode>(
      initialMode,
    );

  const [
    standardStep,
    setStandardStep,
  ] = useState(0);

  const {
    savedIds,
    markViewed,
    toggleSaved,
  } = useDiscoveryStore();

  const isSaved =
    savedIds.includes(
      discovery.id,
    );

  const totalStandardSteps =
    discovery.standard
      .sections.length;

  const currentStandardSection =
    discovery.standard
      .sections[
        standardStep
      ];

  const standardProgress =
    useMemo(() => {
      if (
        totalStandardSteps ===
        0
      ) {
        return 0;
      }

      return (
        ((standardStep + 1) /
          totalStandardSteps) *
        100
      );
    }, [
      standardStep,
      totalStandardSteps,
    ]);

  useEffect(() => {
    markViewed(
      discovery.id,
    );
  }, [
    discovery.id,
    markViewed,
  ]);

  useEffect(() => {
    setMode(
      initialMode,
    );

    setStandardStep(0);
  }, [
    discovery.id,
    initialMode,
  ]);

  function goBack() {
    if (
      mode === 'choice'
    ) {
      onClose();

      return;
    }

    if (
      mode === 'standard' &&
      standardStep > 0
    ) {
      setStandardStep(
        (current) =>
          current - 1,
      );

      return;
    }

    setMode('choice');

    setStandardStep(0);
  }

  function nextStandardStep() {
    const isLast =
      standardStep ===
      totalStandardSteps - 1;

    if (isLast) {
      setMode('choice');

      setStandardStep(0);

      return;
    }

    setStandardStep(
      (current) =>
        current + 1,
    );
  }

  if (mode === 'deep') {
    const deepDive =
      discovery.deepDive;

    if (!deepDive) {
      return (
        <section
          className={
            styles.choicePage
          }
        >
          <main
            className={
              styles.choiceContent
            }
          >
            <p
              className={
                styles.eyebrow
              }
            >
              SIN ARTÍCULO LARGO
            </p>

            <h1>
              Este descubrimiento
              todavía no tiene una
              versión para profundizar.
            </h1>

            <div
              className={
                styles.learningChoices
              }
            >
              <button
                type="button"
                className={
                  styles.learningChoice
                }
                onClick={() =>
                  setMode(
                    'standard',
                  )
                }
              >
                <span
                  className={
                    styles.choiceDuration
                  }
                >
                  {
                    discovery.duration
                  }
                </span>

                <div>
                  <strong>
                    Aprender
                  </strong>

                  <small>
                    Volver a la
                    explicación
                  </small>
                </div>

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            </div>
          </main>
        </section>
      );
    }

    return (
      <section
        className={
          styles.deepPage
        }
      >
        <header
          className={
            styles.deepTopbar
          }
        >
          <button
            type="button"
            className={
              styles.iconButton
            }
            onClick={
              goBack
            }
            aria-label="Volver"
          >
            ←
          </button>

          <span>
            {
              deepDive.duration
            }{' '}
            min de lectura
          </span>

          <button
            type="button"
            className={[
              styles.iconButton,

              isSaved
                ? styles.savedButton
                : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() =>
              toggleSaved(
                discovery.id,
              )
            }
            aria-label={
              isSaved
                ? 'Quitar de guardados'
                : 'Guardar descubrimiento'
            }
          >
            {isSaved
              ? '★'
              : '☆'}
          </button>
        </header>

        <article
          className={
            styles.deepArticle
          }
        >
          <header
            className={
              styles.deepHeader
            }
          >
            <p
              className={
                styles.eyebrow
              }
            >
              PROFUNDIZAR ·{' '}
              {
                categoryLabels[
                  discovery.category
                ]
              }
            </p>

            <h1>
              {
                discovery.title
              }
            </h1>

            <p
              className={
                styles.deepIntro
              }
            >
              {
                deepDive.intro
              }
            </p>
          </header>

          <div
            className={
              styles.deepDivider
            }
          />

          <div
            className={
              styles.deepSections
            }
          >
            {deepDive.sections.map(
              (
                section,
                index,
              ) => (
                <section
                  key={`${index}-${section.title}`}
                  className={
                    styles.deepSection
                  }
                >
                  <span
                    className={
                      styles.deepNumber
                    }
                  >
                    {String(
                      index + 1,
                    ).padStart(
                      2,
                      '0',
                    )}
                  </span>

                  <h2>
                    {
                      section.title
                    }
                  </h2>

                  <p>
                    {
                      section.body
                    }
                  </p>
                </section>
              ),
            )}
          </div>

          <blockquote
            className={
              styles.deepClosing
            }
          >
            {
              deepDive.closing
            }
          </blockquote>

          <section
            className={
              styles.sources
            }
          >
            <p>
              FUENTES
            </p>

            <div
              className={
                styles.sourceList
              }
            >
              {discovery.sources.map(
                (
                  source,
                ) => (
                  <a
                    key={
                      source.url
                    }
                    href={
                      source.url
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      {
                        source.label
                      }
                    </span>

                    <span
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>
                ),
              )}
            </div>
          </section>

          <button
            type="button"
            className={
              styles.articleFinish
            }
            onClick={
              onClose
            }
          >
            <span>
              Terminar
            </span>

            <span
              aria-hidden="true"
            >
              →
            </span>
          </button>

          <p
            className={
              styles.articleClosing
            }
          >
            Llegaste al final.
            Nada más que cargar.
          </p>
        </article>
      </section>
    );
  }

  if (mode === 'quick') {
    return (
      <section
        className={
          styles.quickPage
        }
      >
        <header
          className={
            styles.topbar
          }
        >
          <button
            type="button"
            className={
              styles.iconButton
            }
            onClick={
              goBack
            }
            aria-label="Volver"
          >
            ←
          </button>

          <span
            className={
              styles.modeLabel
            }
          >
            EN 1 MINUTO
          </span>

          <button
            type="button"
            className={[
              styles.iconButton,

              isSaved
                ? styles.savedButton
                : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() =>
              toggleSaved(
                discovery.id,
              )
            }
            aria-label={
              isSaved
                ? 'Quitar de guardados'
                : 'Guardar descubrimiento'
            }
          >
            {isSaved
              ? '★'
              : '☆'}
          </button>
        </header>

        <main
          className={
            styles.quickContent
          }
        >
          <p
            className={
              styles.eyebrow
            }
          >
            {
              categoryLabels[
                discovery.category
              ]
            }
          </p>

          <h1>
            {
              discovery.title
            }
          </h1>

          <div
            className={
              styles.quickCard
            }
          >
            <span>
              LA IDEA
            </span>

            <p>
              {
                discovery.quick
                  .summary
              }
            </p>
          </div>

          <div
            className={
              styles.takeawayCard
            }
          >
            <span
              aria-hidden="true"
            >
              ✦
            </span>

            <div>
              <small>
                QUEDATE CON ESTO
              </small>

              <p>
                {
                  discovery.quick
                    .takeaway
                }
              </p>
            </div>
          </div>
        </main>

        <footer
          className={
            styles.quickActions
          }
        >
          <button
            type="button"
            className={
              styles.deepAction
            }
            onClick={() =>
              setMode(
                'standard',
              )
            }
          >
            <span>
              Quiero entenderlo
              mejor
            </span>

            <small>
              Aprender ·{' '}
              {
                discovery.duration
              }{' '}
              min
            </small>

            <span
              aria-hidden="true"
            >
              →
            </span>
          </button>

          {discovery.deepDive && (
            <button
              type="button"
              className={
                styles.secondaryDeepAction
              }
              onClick={() =>
                setMode(
                  'deep',
                )
              }
            >
              <span>
                Profundizar
              </span>

              <span>
                {
                  discovery.deepDive
                    .duration
                }{' '}
                min →
              </span>
            </button>
          )}

          <button
            type="button"
            className={
              styles.finishAction
            }
            onClick={
              onClose
            }
          >
            Listo por ahora
          </button>
        </footer>
      </section>
    );
  }

  if (mode === 'standard') {
    return (
      <section
        className={
          styles.page
        }
      >
        <header
          className={
            styles.topbar
          }
        >
          <button
            type="button"
            className={
              styles.iconButton
            }
            onClick={
              goBack
            }
            aria-label="Volver"
          >
            ←
          </button>

          <div
            className={
              styles.progressMeta
            }
          >
            <span>
              {
                standardStep + 1
              }
            </span>

            <span>
              de
            </span>

            <span>
              {
                totalStandardSteps
              }
            </span>
          </div>

          <button
            type="button"
            className={[
              styles.iconButton,

              isSaved
                ? styles.savedButton
                : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() =>
              toggleSaved(
                discovery.id,
              )
            }
            aria-label={
              isSaved
                ? 'Quitar de guardados'
                : 'Guardar descubrimiento'
            }
          >
            {isSaved
              ? '★'
              : '☆'}
          </button>
        </header>

        <div
          className={
            styles.progressTrack
          }
        >
          <span
            style={{
              width:
                `${standardProgress}%`,
            }}
          />
        </div>

        <main
          className={
            styles.standardContent
          }
        >
          <div
            className={
              styles.contextHeader
            }
          >
            <p>
              {
                categoryLabels[
                  discovery.category
                ]
              }
            </p>

            <h1>
              {
                discovery.title
              }
            </h1>
          </div>

          <article
            className={
              styles.sectionCard
            }
          >
            <div
              className={
                styles.sectionTop
              }
            >
              <span
                className={
                  styles.sectionNumber
                }
              >
                {String(
                  standardStep + 1,
                ).padStart(
                  2,
                  '0',
                )}
              </span>

              <span
                className={
                  styles.sectionCount
                }
              >
                {
                  standardStep + 1
                }
                /
                {
                  totalStandardSteps
                }
              </span>
            </div>

            <h2
              className={
                styles.sectionLabel
              }
            >
              {
                currentStandardSection
                  .title
              }
            </h2>

            <p
              className={
                styles.sectionBody
              }
            >
              {
                currentStandardSection
                  .body
              }
            </p>
          </article>
        </main>

        <footer
          className={
            styles.navigation
          }
        >
          <span
            className={
              styles.navigationHint
            }
          >
            {standardStep + 1 ===
            totalStandardSteps
              ? 'Última parte'
              : 'Seguí cuando quieras'}
          </span>

          <button
            type="button"
            className={
              styles.nextButton
            }
            onClick={
              nextStandardStep
            }
          >
            <span>
              {standardStep + 1 ===
              totalStandardSteps
                ? 'Terminar'
                : 'Continuar'}
            </span>

            <span
              aria-hidden="true"
            >
              →
            </span>
          </button>
        </footer>
      </section>
    );
  }

  return (
    <section
      className={
        styles.choicePage
      }
    >
      <header
        className={
          styles.topbar
        }
      >
        <button
          type="button"
          className={
            styles.iconButton
          }
          onClick={
            onClose
          }
          aria-label="Volver"
        >
          ←
        </button>

        <span
          className={
            styles.modeLabel
          }
        >
          DESCUBRIMIENTO
        </span>

        <button
          type="button"
          className={[
            styles.iconButton,

            isSaved
              ? styles.savedButton
              : '',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={() =>
            toggleSaved(
              discovery.id,
            )
          }
          aria-label={
            isSaved
              ? 'Quitar de guardados'
              : 'Guardar descubrimiento'
          }
        >
          {isSaved
            ? '★'
            : '☆'}
        </button>
      </header>

      <main
        className={
          styles.choiceContent
        }
      >
        <div
          className={
            styles.choiceHeading
          }
        >
          <p
            className={
              styles.eyebrow
            }
          >
            {
              discovery.eyebrow
            }
          </p>

          <h1>
            {
              discovery.title
            }
          </h1>

          <p
            className={
              styles.hook
            }
          >
            {
              discovery.hook
            }
          </p>
        </div>

        <div
          className={
            styles.learningChoices
          }
        >
          <button
            type="button"
            className={
              styles.learningChoice
            }
            onClick={() =>
              setMode(
                'quick',
              )
            }
          >
            <span
              className={
                styles.choiceDuration
              }
            >
              1
            </span>

            <div>
              <strong>
                Entender rápido
              </strong>

              <small>
                La idea esencial
                en un minuto
              </small>
            </div>

            <span
              aria-hidden="true"
            >
              →
            </span>
          </button>

          <button
            type="button"
            className={
              styles.learningChoice
            }
            onClick={() =>
              setMode(
                'standard',
              )
            }
          >
            <span
              className={
                styles.choiceDuration
              }
            >
              {
                discovery.duration
              }
            </span>

            <div>
              <strong>
                Aprender
              </strong>

              <small>
                Entenderlo con
                un poco más de
                contexto
              </small>
            </div>

            <span
              aria-hidden="true"
            >
              →
            </span>
          </button>

          {discovery.deepDive && (
            <button
              type="button"
              className={[
                styles.learningChoice,
                styles.learningChoiceDeep,
              ].join(' ')}
              onClick={() =>
                setMode(
                  'deep',
                )
              }
            >
              <span
                className={
                  styles.choiceDuration
                }
              >
                {
                  discovery.deepDive
                    .duration
                }
              </span>

              <div>
                <strong>
                  Profundizar
                </strong>

                <small>
                  Artículo
                  completo
                </small>
              </div>

              <span
                aria-hidden="true"
              >
                →
              </span>
            </button>
          )}
        </div>

        <p
          className={
            styles.choiceHint
          }
        >
          Vos decidís cuánto
          querés saber.
        </p>
      </main>
    </section>
  );
}