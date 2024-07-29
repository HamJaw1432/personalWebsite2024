import ContactMeForm from "@/components/contactMeForm";
import styles from "./page.module.css";
import githubLogo from "@/assests/githubLogo.svg";
import linkedinLogo from "@/assests/linkedinLogo.svg";
import Image from "next/image";

export default function Page() {
  return (
    <div className={styles.mainContainer}>
      <h1>Contact Me</h1>
      <div className={styles.externalLinks}>
        <a href="https://github.com/HamJaw1432">
          <div className={styles.externalLink}>
            <Image src={githubLogo} alt="Github Logo" width={32} height={30} />
            GitHub
          </div>
        </a>
        <a href="https://www.linkedin.com/in/jawad-arshad2001/">
          <div className={styles.externalLink}>
            <Image
              src={linkedinLogo}
              alt="Linkedin Logo"
              width={32}
              height={30}
            />
            Linkedin
          </div>
        </a>
      </div>
      <div className={styles.row}>
        <div className={styles.line} />
        <div>OR</div>
        <div className={styles.line} />
      </div>
      <ContactMeForm />
    </div>
  );
}
