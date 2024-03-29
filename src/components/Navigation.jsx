// Navigation.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBlog, faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./navigation.module.css";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSetMenuOpen() {
    setMenuOpen(!menuOpen);
  }

  const mobileMenu = (
    <div className={styles.mobileMenu}>
      <Link href="/" className={styles.mobileLink}>
        Home
      </Link>
      <Link href="/resume" className={styles.mobileLink}>
        Resume
      </Link>
      <Link href="/resume/#contact" className={styles.mobileLink}>
        Contact
      </Link>
    </div>
  );

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.brand}>SN</h1>
      <div>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/resume" className={styles.navLink}>
          Resume
        </Link>
        <Link href="/resume/#contact" className={styles.navLink}>
          Contact
        </Link>
      </div>
      <div>
        <a href="https://github.com/safalnpane" className={styles.navLink}>
          <FontAwesomeIcon className={styles.faicon} icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/safal-neupane-83a23a255/"
          className={styles.navLink}
        >
          <FontAwesomeIcon className={styles.faicon} icon={faLinkedin} />
        </a>
        <a href="https://safalneupane.com" className={styles.navLink}>
          <FontAwesomeIcon className={styles.faicon} icon={faBlog} />
        </a>
      </div>
      <FontAwesomeIcon
        className={styles.hamburgerMenu}
        icon={faBars}
        onClick={handleSetMenuOpen}
      />
      {menuOpen ? mobileMenu : ""}
    </nav>
  );
}
