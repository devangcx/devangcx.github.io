import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={`container ${styles.header}`}>
      <Link href="/" className={styles.name}>
        <h1 className={styles.nameLetter}>दे</h1>
        <h1 className={styles.nameLetter}>वां</h1>
        <h1 className={styles.nameLetter}>ग</h1>
      </Link>
      <nav>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/posts" className={styles.link}>
          Blog
        </Link>
      </nav>
    </header>
  );
}
