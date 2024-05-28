"use client";
import styles from "./styles.module.css";
import resumeInformation from "@/constants/resumeInfo.json";
import Filter from "@/components/filter";
import { useState } from "react";

const TechFilters = Array.from(
  new Set(
    resumeInformation
      .map((section) => {
        return section.points.map((point) => point.technology);
      })
      .flat(Infinity)
  )
).sort() as string[];

const TypeFilters = resumeInformation.map((section) => section.section);

export default function FiltersMobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.filterMobileContainer}>
      <div
        className={styles.filterMobileButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        Filters
      </div>
      {isOpen && (
        <div className={styles.mainContainer}>
          <div className={styles.filterTitle}>Section Type</div>
          <Filter type="type" values={TypeFilters} />
          <div className={styles.filterTitle}>Technologies</div>
          <Filter type="tech" values={TechFilters} />
        </div>
      )}
    </div>
  );
}
