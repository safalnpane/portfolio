// TechPill.jsx

import styles from "./techpill.module.css";

export default function TechPill({ name }) {
  return <h4 className={styles.techpill}>{name}</h4>;
}
