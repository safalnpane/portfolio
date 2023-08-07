// Navigation.jsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon className={styles.faicon} icon={faGithub} />
        </a>
        <a href="#" className={styles.navLink}>
          <FontAwesomeIcon className={styles.faicon} icon={faLinkedin} />
        </a>
        <a href="#" className={styles.navLink}>
          <FontAwesomeIcon className={styles.faicon} icon={faBlog} />
        </a>
      </div>
    </nav>
  );
}
