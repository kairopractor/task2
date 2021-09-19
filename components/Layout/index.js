import styles from "./Layout.module.css";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}
