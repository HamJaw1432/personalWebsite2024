import { useMemo } from "react";
import InfoBox from "../infoBox";
import styles from "./styles.module.css";
import resumeInformation from "@/constants/resumeInfo.json";

type ResumeInfoProps = {
  search: string;
  techFilter: string[];
  typeFilter: string[];
};

export default function ResumeInfo({
  search,
  typeFilter,
  techFilter,
}: ResumeInfoProps) {
  const filteredResumeInformation = useMemo(() => {
    const searchTerm = search.toLowerCase();

    const filteredInformationSearch = resumeInformation.map((section) => {
      return {
        section: section.section,
        points: section.section.toLowerCase().includes(searchTerm)
          ? section.points
          : section.points.filter((sectionPoint) => {
              if (
                sectionPoint.date.toLowerCase().includes(searchTerm) ||
                sectionPoint.heading.toLowerCase().includes(searchTerm) ||
                sectionPoint.place.toLowerCase().includes(searchTerm) ||
                sectionPoint.subheading.toLowerCase().includes(searchTerm) ||
                sectionPoint.points.some((point) =>
                  point.toLowerCase().includes(searchTerm)
                ) ||
                sectionPoint.technology.some((tech) =>
                  tech.toLowerCase().includes(searchTerm)
                )
              ) {
                return true;
              }
            }),
      };
    });

    const filteredInformationTypeFilter = filteredInformationSearch.filter(
      (section) =>
        typeFilter.length >= 1 ? typeFilter.includes(section.section) : true
    );

    const filteredInformationTechFilter = filteredInformationTypeFilter.map(
      (section) => {
        const filtered = section.points.filter((sectionPoint) => {
          return techFilter.length > 0
            ? sectionPoint.technology
                .map((tech) => {
                  return techFilter.length > 0
                    ? techFilter.includes(tech)
                    : true;
                })
                .some((isInTechFilter) => isInTechFilter === true)
            : true;
        });

        return {
          section: section.section,
          points: filtered,
        };
      }
    );

    return filteredInformationTechFilter;
  }, [search]);

  return (
    <div className={styles.resumeInfoContainer}>
      {filteredResumeInformation.map((section, i) => {
        return section.points.map((sectionPoint) => {
          return <InfoBox type={section.section} point={sectionPoint} />;
        });
      })}
    </div>
  );
}
