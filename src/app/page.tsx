import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <h1>Software Engineer</h1>
        <p>
          In the past, I have been a design technologist, a senior
          sustainability engineer, a senior architect, a project manager, and a
          team leader. This site is currently a work in progress and I plan to
          fully build this over the next year.
        </p>
      </section>
      <section>
        <Image
          src="/profile.png"
          alt="Devang Chauhan Headshot"
          width={200}
          height={200}
        />
      </section>
    </main>
  );
}
