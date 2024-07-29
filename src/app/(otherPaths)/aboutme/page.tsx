import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Me - Jawad Arshad",
  description:
    "Learn more about Jawad Arsahd, a dedicated professional with a passion for software engineering. Discover my core values, personal interests, and more!",
  creator: "Jawad Arshad",
};

export default function Page() {
  function calculateAge() {
    var ageDifMs = Date.now() - Date.parse("11-01-2001");
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <div className={styles.mainText}>
      <div className={styles.textSection}>Hey,</div>
      <div className={styles.textSection}>
        I'm Jawad, It's nice to meet you.*
      </div>
      <div className={styles.textSection}>
        As you are probably well aware, you are currently on the 'About Me'
        section of my personal website. Thus, I think it only makes sense that I
        introduce myself to some capacity, so here are some things you might
        like to know:
      </div>
      <div className={styles.textSection}>
        I'm {calculateAge()} years old, and I graduated with a under graduate
        degree in computer science from University of Toronto. I graduated with
        high distinction with a 3.67 GPA (out of 4), and I was on the Dean's
        list in 2019-2020, 2020-2021, 2021-2022, 2022-2023, and 2023-2024.
      </div>
      <div className={styles.textSection}>
        My pursuit in life right now is to become the embodiment of the saying
        'A jack of all trades is a master of none, but oftentimes is better than
        a master of one.', by this I mean to ---hopefully--- in the coming years
        work on improving my software development skills to the point that I can
        work on any part of any project. I want to be the guy that can be relied
        on to get stuff done, on the frontend, backend, or anywhere else.
      </div>
      <div className={styles.textSection}>
        In my {calculateAge()} years of life I have worked and interned at many
        locations, from retail/fast food, the military, as a Full
        Stack/Blockchain software engineer, to a TA for a Machine learning
        course. You can find more on
        <a href="/resume">the resume section</a>of this site.
      </div>
      <div className={styles.textSection}>
        In my downtime I enjoy the following:
        <ul>
          <li>
            Learning programming. Currently I'm looking to learn Rust, and more
            about Machine Learning.
          </li>
          <li>
            Playing games. My favourite game ever is probably The Last of Us,
            for its great story and amazing characters. Other games I enjoy are
            Baldur's Gate 3, Risk of Rain 2, and Overwatch(2).
          </li>
          <li>
            Spending time with family and friends. Even though I consider myself
            to be a introvert spending time with family and friends and keeping
            up with them is a important part of my life. I think people and the
            effects I personally have on others as a individual are one of the
            most important part of living a good, happy and successful life.
          </li>
          <li>
            Learning about different things like Theology, Physics, History, and
            more. I generally like to know stuff, even though ignorance is a
            bliss, and at times very peaceful. I like to learn about the world I
            live in.
          </li>
          <li>Working out. Lift heavy, be happy (*caveman noises*).</li>
          <li>
            I also enjoy food. It keeps me alive which is fairly important.
          </li>
        </ul>
        <div className={styles.textSectionSmall}>
          *I guess it's more 'you meeting me' than 'me meeting you', but I
          digress.
        </div>
      </div>
    </div>
  );
}
