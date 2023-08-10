// Work.jsx

import styles from "./resume.module.css";

export default function Work({ item }) {
  return (
    <div>
      <h1 className={styles.resumeSectionHeading}>{item.title}</h1>
      <p className={styles.resumeSectionGray}>{item.where}</p>
      <p className={styles.resumeSectionGray}>{item.duration}</p>
    </div>
  );
}
