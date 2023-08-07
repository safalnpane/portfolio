// Hero.jsx
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div>
        <Image
          src="/heroImage.jpeg"
          width="400"
          height="500"
          alt="Hero image"
        />
        <div>
          <h1>
            Hi, I&apos;m Safal and I&apos;m a <span>Fullstack developer</span>.
          </h1>
          <p>
            I&apos;m a Full-stack developer based in Sydney, Australia. I have 3
            years of commercial experience and I specialize in creating web
            apps. I&apos;m open for intresting projects and new opportunities.
          </p>
          <div>
            <a href="#">Contact Me</a>
            <a href="#">My Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}
