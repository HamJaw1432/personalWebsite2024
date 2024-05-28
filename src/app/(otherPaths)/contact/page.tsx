import ContactMeForm from "@/components/contactMeForm";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.mainContainer}>
      <h1>Contact Me</h1>
      <ContactMeForm />
    </div>
  );
}
