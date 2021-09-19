import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small className={styles.copyright}>
        © 2021 Igor Efimov All rights reserved
      </small>
    </footer>
  );
}
