import styles from "./styles.module.css";

type InfoBoxProps = {
  type: string;
  point: PointType;
};
type PointType = {
  heading: string;
  subheading: string;
  place: string;
  date: string;
  points: string[];
  technology: string[];
};

export default function InfoBox({ type, point }: InfoBoxProps) {
  const { heading, subheading, place, date, points, technology } = point;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.flexRow}>
        <div className={styles.technology}>{technology.join(", ")}</div>
        <div className={styles.type}>{type}</div>
      </div>
      <div>
        <div className={styles.flexRow}>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.place}>{place}</div>
        </div>
        <div className={styles.flexRow}>
          <div className={styles.subheading}>{subheading}</div>
          <div className={styles.date}>{date}</div>
        </div>
      </div>
      <div className={styles.points}>
        <ul>
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
