import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="/bootstrap" className={styles.link}>
              Bootstrap
            </a>
          </li>
          <li className={styles.item}>
            <a href="/tailwind" className={styles.link}>
              Tailwind
            </a>
          </li>
          <li className={styles.item}>
            <a href="/" className={styles.link}>
              HOME
            </a>
          </li>
          <li className={styles.item}>
            <a href="/mdl" className={styles.link}>
              Material Design Lite
            </a>
          </li>
          <li className={styles.item}>
            <a href="/antd" className={styles.link}>
              AntD
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
