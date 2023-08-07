// Navigation.jsx

import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.brand}>SN</h1>
      <div>
        <a href="#" className={styles.navLink}>
          Home
        </a>
        <a href="#" className={styles.navLink}>
          Resume
        </a>
        <a href="#" className={styles.navLink}>
          Contact
        </a>
      </div>
      <div>
        <a href="#" className={styles.navLink}>
          GitHub
        </a>
        <a href="#" className={styles.navLink}>
          Linkedin
        </a>
        <a href="#" className={styles.navLink}>
          Blog
        </a>
      </div>
    </nav>
  );
}
