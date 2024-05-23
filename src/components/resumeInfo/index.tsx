import { useMemo } from "react";
import InfoBox from "../infoBox";
import styles from "./styles.module.css";
import resumeInformation from "@/constants/resumeInfo.json";

type ResumeInfoProps = {
  search: string;
  techFilter: string[];
  typeFilter: string[];
};

export default function ResumeInfo({ search }: ResumeInfoProps) {
  const filteredResumeInformation = useMemo(() => {
    const searchTerm = search.toLowerCase();

    const filteredInformation = resumeInformation.map((section) => {
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

    return filteredInformation;
  }, [search]);

  return (
    <div>
      {filteredResumeInformation.map((section, i) => {
        return section.points.map((sectionPoint) => {
          return <InfoBox type={section.section} point={sectionPoint} />;
        });
      })}
    </div>
  );
}
