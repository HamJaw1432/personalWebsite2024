import styles from "./page.module.css";

export default function Page() {

  function calculateAge() {
    var ageDifMs = Date.now() - Date.parse('11-01-2001');
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div>Hey Stranger.</div>
        <div>I'm Jawad, It's nice to meet you*</div>
        <div>As you are probably well arware, you are currently on the 'About Me' section of my personal website. Thus, I think it only makes sense that I introduce myself to some capacity, so here are some things you might like to know:</div>
        <div>I'm {calculateAge()} years old, and I graduated with a under graduate degree in computer science from University of Toronto.</div>
        <div>My prusuit in life right now is to become the embodyment of the saying 'A jack of all trades is a master of none, but oftentimes is better than a master of one.', by this I mean to ---hopfully--- in the coming years work on imporving my software development skills to the point that I can work on any part of any project. I want to be the guy that be relied on to get stuff done, on the frontend, backend, or anywhere else. </div>
        <div>In my {calculateAge()} years of life I have worked and interned at many locations, from retail/fast food, the military, to a Full Stack/Blockchain software engineer. You can find more on <a href="/resume">the resume section</a> of this site.</div>
      </div>
    </main>
  );
}
