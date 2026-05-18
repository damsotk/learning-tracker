import { TopicProgress } from "../UserLearnProgress";
import styles from "./progress-details.module.css";

type ProgressDetailsProps = {
  topics: TopicProgress[];
};

export default function ProgressDetails({ topics }: ProgressDetailsProps) {
  if (topics.length === 0) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyTitle}>Nothing selected</p>
        <p className={styles.emptyText}>
          Choose a topic above to see learned subtopics.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {topics.map((topic) => (
        <section key={topic.slug} className={styles.section}>
          <div className={styles.header}>
            <div>
              <p className={styles.label}>Topic</p>
              <h3 className={styles.title}>{topic.name}</h3>
            </div>
            <span className={styles.counter}>
              {topic.learnedCount} / {topic.total}
            </span>
          </div>

          {topic.learned.length > 0 ? (
            <ul className={styles.list}>
              {topic.learned.map((sub) => (
                <li key={sub.slug} className={styles.item}>
                  <span className={styles.dot} />
                  {sub.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.sectionEmpty}>Nothing learned yet.</p>
          )}
        </section>
      ))}
    </div>
  );
}
