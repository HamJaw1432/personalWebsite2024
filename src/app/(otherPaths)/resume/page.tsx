import type { Metadata } from "next";
import styles from "./page.module.css";
import Search from "@/components/search";
import ResumeInfo from "@/components/resumeInfo";
import Filters from "@/components/filters";
import PdfIcon from "@/assests/pdfIcon.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me - Jawad Arshad",
  description: "A little bit about who I am",
};

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    tech?: string[];
    type?: string[];
  };
}) {
  const query = searchParams?.query || "";
  const techFilter = searchParams?.tech
    ? searchParams.tech.length > 1
      ? (searchParams.tech as string[])
      : ([searchParams.tech] as unknown as string[])
    : [];
  const typeFilter = searchParams?.type
    ? searchParams.type.length > 1
      ? (searchParams.type as string[])
      : ([searchParams.type] as unknown as string[])
    : [];

  return (
    <div className={styles.mainRow}>
      <Filters />
      <div className={styles.mainResumeBody}>
        <div className={styles.flexRow}>
          <div className={styles.resumeLinks}>
            <a
              href="/resumes/Jawad_s_Resume_All.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeLink}
            >
              <Image src={PdfIcon} alt="Pdf Logo" width={32} height={30} />
              Complete/Full
            </a>
            <a
              href="/resumes/Jawad_s_Resume_ML.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeLink}
            >
              <Image src={PdfIcon} alt="Pdf Logo" width={32} height={30} />
              Machine Learning
            </a>
            <a
              href="/resumes/Jawad_s_Resume_Software_Eng.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeLink}
            >
              <Image src={PdfIcon} alt="Pdf Logo" width={32} height={30} />
              Software Engineer
            </a>
          </div>
          <Search placeholder="Type your search here" />
        </div>
        <ResumeInfo
          search={query}
          techFilter={techFilter}
          typeFilter={typeFilter}
        />
      </div>
    </div>
  );
}
