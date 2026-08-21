import styles from './BottomNav.module.css';

export type AppSection =
  | 'discover'
  | 'library';

type BottomNavProps = {
  activeSection: AppSection;
  onChange: (
    section: AppSection,
  ) => void;
};

export function BottomNav({
  activeSection,
  onChange,
}: BottomNavProps) {
  return (
    <nav
      className={styles.nav}
      aria-label="Navegación principal"
    >
      <button
        type="button"
        className={
          activeSection === 'discover'
            ? styles.active
            : ''
        }
        onClick={() =>
          onChange('discover')
        }
      >
        <span aria-hidden="true">✦</span>
        Descubrir
      </button>

      <button
        type="button"
        className={
          activeSection === 'library'
            ? styles.active
            : ''
        }
        onClick={() =>
          onChange('library')
        }
      >
        <span aria-hidden="true">▤</span>
        Biblioteca
      </button>
    </nav>
  );
}
