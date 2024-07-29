import styles from "./styles.module.css";
import resumeInformation from "@/constants/resumeInfo.json";
import Filter from "@/components/filter";

const TechFilters = Array.from(
  new Set(
    resumeInformation
      .map((section) => {
        return section.points.map((point) => point.technology);
      })
      .flat(Infinity),
  ),
).sort() as string[];

const TypeFilters = resumeInformation.map((section) => section.section);

export default function Filters() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.filterTitle}>Section Type</div>
      <Filter type="type" values={TypeFilters} />
      <div className={styles.filterTitle}>Technologies</div>
      <Filter type="tech" values={TechFilters} />
    </div>
  );
}
