import styles from "./home-intro.module.css";

export default function HomeIntro() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.label}>About</p>
        <h1 className={styles.title}>Learning Tracker</h1>
      </div>

      <div className={styles.body}>
        <p className={styles.paragraph}>
          This is Denys Piiak's website. I created it to make it easier for me
          to track the technologies I'm learning — a list that keeps growing
          every day.
        </p>
        <p className={styles.paragraph}>
          Anyone who's interested in taking a detailed look at my knowledge can
          visit and see exactly what I know.
        </p>
        <p className={styles.paragraph}>
          For each topic I've studied, I leave my own comment, which is sent to
          an AI daily — so that the next day it can send me a report by email:
          describing whether I was productive yesterday, analyzing my notes, and
          flagging anything I may have misunderstood.
        </p>
      </div>

      <div className={styles.footer}>
        <div className={styles.pill}>
          <span className={styles.pillDot} />
          <span className={styles.pillText}>Daily AI review</span>
        </div>
        <div className={styles.pill}>
          <span className={styles.pillDot} />
          <span className={styles.pillText}>Public progress</span>
        </div>
        <div className={styles.pill}>
          <span className={styles.pillDot} />
          <span className={styles.pillText}>Personal notes</span>
        </div>
      </div>
    </section>
  );
}
