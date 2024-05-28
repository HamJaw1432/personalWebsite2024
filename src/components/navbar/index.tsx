import styles from "./styles.module.css";
// import Image from "next/image";
// import logo from "@/assests/signature-png.png";
import NavbarMobile from "./mobileNav";

export default function Navbar() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.logocontainer}>
          <a href="/">
            {/* <Image
              className={styles.logo}
              src={logo}
              alt="Jawad Arshad in cursive"
              width={200}
              priority
            /> */}
            <div className={styles.logo}>JAWAD ARSHAD</div>
          </a>
        </div>
        <div className={styles.navlinks}>
          <a href="/aboutme" className={styles.card} rel="noopener noreferrer">
            <h2>
              About Me <span>-&gt;</span>
            </h2>
          </a>

          <a href="/projects" className={styles.card} rel="noopener noreferrer">
            <h2>
              Projects <span>-&gt;</span>
            </h2>
          </a>

          <a href="/resume" className={styles.card} rel="noopener noreferrer">
            <h2>
              Resume <span>-&gt;</span>
            </h2>
          </a>

          <a href="/blog" className={styles.card} rel="noopener noreferrer">
            <h2>
              Blog <span>-&gt;</span>
            </h2>
          </a>
          <div className={styles.contact}>
            <p>
              <a
                href="/contact"
                className={styles.card}
                rel="noopener noreferrer"
              >
                Contact Me
              </a>
            </p>
          </div>
        </div>
      </main>
      <NavbarMobile />
    </div>
  );
}
