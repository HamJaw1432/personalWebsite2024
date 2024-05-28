"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import logo from "@/assests/signature-png.png";
import hamburger from "@/assests/hamburger.svg";
import { useState } from "react";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className={styles.mainMobile}>
      <div className={styles.logocontainer}>
        <a href="/">
          <div className={styles.logo}>JAWAD ARSHAD</div>
        </a>
      </div>
      <div className={styles.hamburgerMenu} onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={hamburger}
          width={25}
          height={25}
          alt="Hamburger Menu Icon"
        />
      </div>
      {isOpen && (
        <div className={styles.navlinksMobile}>
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
      )}
    </main>
  );
}
