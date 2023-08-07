// Hero.jsx
import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className="section">
      <div className={styles.container}>
        <Image
          src="/heroImage.jpeg"
          width="400"
          height="500"
          alt="Hero image"
          className={styles.heroImage}
        />
        <div className={styles.heroText}>
          <h1 className={styles.heroHeading}>
            Hi, I&apos;m Safal and I&apos;m a{" "}
            <span className={styles.highlight}>Fullstack developer</span>.
          </h1>
          <p className={styles.heroSubtitle}>
            I&apos;m a Full-stack developer based in Sydney, Australia. I have 3
            years of commercial experience and I specialize in creating web
            apps. I&apos;m open for intresting projects and new opportunities.
          </p>
          <div className={styles.buttons}>
            <a href="#" className="button">
              Contact Me
            </a>
            <a href="#" className={"button " + styles.resumeButton}>
              My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
