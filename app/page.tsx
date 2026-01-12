import styles from "./Home.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          Campers of your dreams
        </h1>

        <p className={styles.subtitle}>
          You can find everything you want in our catalog
        </p>

        <Link href="/catalog" className={styles.button}>
          View Now
        </Link>
      </div>
    </section>
  );
}
