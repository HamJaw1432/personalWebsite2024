import ProjectBox from "@/components/projectBox";
import styles from "./page.module.css";
import resumeInformation from "@/constants/resumeInfo.json";

export default function Page() {
  const filteredResumeInformation = resumeInformation[2].points;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.note}>
        The source code is private on my <a href="/resume">GitHub</a> because
        some of these are academic works. But feel free to reach out if you want
        to see the code.
      </div>
      <div className={styles.mainContainer}>
        {filteredResumeInformation.map((point, i) => (
          <ProjectBox key={i} point={point} />
        ))}
      </div>
    </div>
  );
}
