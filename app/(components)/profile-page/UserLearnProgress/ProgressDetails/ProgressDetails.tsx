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
      {topics.map((topic) => {
        const hasAny = topic.learned.length > 0 || topic.notLearned.length > 0;

        return (
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

            {hasAny ? (
              <ul className={styles.list}>
                {topic.learned.map((sub) => (
                  <li
                    key={sub.slug}
                    className={`${styles.item} ${styles.itemLearned}`}
                  >
                    <span className={styles.icon} aria-hidden="true">
                      <svg viewBox="0 0 16 16" width="14" height="14">
                        <path
                          d="M3.5 8.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.itemName}>{sub.name}</span>
                  </li>
                ))}

                {topic.notLearned.map((sub) => (
                  <li
                    key={sub.slug}
                    className={`${styles.item} ${styles.itemMissing}`}
                  >
                    <span className={styles.icon} aria-hidden="true">
                      <svg viewBox="0 0 16 16" width="14" height="14">
                        <path
                          d="M4 4l8 8M12 4l-8 8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.itemName}>{sub.name}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.sectionEmpty}>No subtopics here yet.</p>
            )}
          </section>
        );
      })}
    </div>
  );
}
