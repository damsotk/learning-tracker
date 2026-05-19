import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandText}>
            <span className={styles.brandSub}>Learning tracker</span>
          </span>
        </Link>

        <nav className={styles.nav}>
          <a
            href="https://github.com/damsotk/learning-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
            aria-label="GitHub repository"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.73.5.99 5.24.99 11.51c0 4.85 3.14 8.96 7.5 10.41.55.1.75-.24.75-.53 0-.26-.01-.96-.02-1.88-3.05.66-3.7-1.47-3.7-1.47-.5-1.27-1.22-1.61-1.22-1.61-1-.69.08-.68.08-.68 1.1.08 1.68 1.13 1.68 1.13.98 1.69 2.58 1.2 3.21.92.1-.72.39-1.2.71-1.48-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13a10.5 10.5 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.22-2.57 5.15-5.02 5.42.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.05 0 .3.2.64.76.53 4.36-1.45 7.5-5.56 7.5-10.41C23.01 5.24 18.27.5 12 .5z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
