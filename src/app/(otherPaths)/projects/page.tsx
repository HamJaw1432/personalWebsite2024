import ProjectBox from "@/components/projectBox";
import styles from "./page.module.css";
import resumeInformation from "@/constants/resumeInfo.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Jawad Arshad",
  description:
    "Discover the porjects of Jawad Arshad, showcasing my experience in software engineering.",
  creator: "Jawad Arshad",
};

export default function Page() {
  const filteredResumeInformation = resumeInformation[2].points;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.note}>
        The source code is private on my
        <a href="https://github.com/HamJaw1432" target="_blank">
          GitHub
        </a>
        because some of these are academic works. But feel free to
        <a href="/contact">reach out</a>
        if you want to see the code.
      </div>
      <div className={styles.mainContainer}>
        {filteredResumeInformation.map((point, i) => (
          <ProjectBox key={i} point={point} />
        ))}
      </div>
    </div>
  );
}
