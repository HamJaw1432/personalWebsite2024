import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.contact}>
        <p>
          Contact Me
        </p>
        <div>
          By Jawad Arshad
        </div>
      </div>

      <div className={styles.center}>
        {/* <WelcomeMessage /> */}
      </div>

      <div className={styles.grid}>
        <a
          href="/aboutme"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            About Me <span>-&gt;</span>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur repellendus.</p>
        </a>

        <a
          href="/projects"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Projects <span>-&gt;</span>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur repellendus.</p>
        </a>

        <a
          href="/resume"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Resume <span>-&gt;</span>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur repellendus.</p>
        </a>

        <a
          href="/blog"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Blog <span>-&gt;</span>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur repellendus.</p>
        </a>

      </div>
    </main>
  );
}
