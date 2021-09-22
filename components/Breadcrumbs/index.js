import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs({ breadcrumbs }) {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.link}>
        {breadcrumbs[0].name}
      </a>
      {breadcrumbs.length > 1 && (
        <a href="/" className={styles.link}>
          {breadcrumbs[1].name}
        </a>
      )}
    </nav>
  );
}
