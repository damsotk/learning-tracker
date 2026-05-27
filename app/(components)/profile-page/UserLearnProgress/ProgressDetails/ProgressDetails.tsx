"use client";
import { useState } from "react";
import { TopicProgress } from "../UserLearnProgress";
import LearnedSubtopicModal from "./LearnedSubtopicModal/LearnedSubtopicModal";
import styles from "./progress-details.module.css";

type ProgressDetailsProps = {
  topic: TopicProgress | undefined;
};

type SelectedSubtopic = {
  topicName: string;
  subtopicName: string;
  learnedAt: Date;
  comment: string | null;
};

export default function ProgressDetails({ topic }: ProgressDetailsProps) {
  const [selected, setSelected] = useState<SelectedSubtopic | null>(null);

  if (!topic) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyTitle}>Nothing selected</p>
        <p className={styles.emptyText}>
          Choose a topic above to see learned subtopics.
        </p>
      </div>
    );
  }

  const hasAny = topic.learned.length > 0 || topic.notLearned.length > 0;

  return (
    <>
      <div className={styles.wrapper}>
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
              {topic.learned.map((subtopic) => (
                <li
                  key={subtopic.slug}
                  className={`${styles.item} ${styles.itemLearned}`}
                >
                  <button
                    type="button"
                    className={styles.itemButton}
                    onClick={() =>
                      setSelected({
                        topicName: topic.name,
                        subtopicName: subtopic.name,
                        learnedAt: subtopic.learnedAt,
                        comment: subtopic.comment,
                      })
                    }
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
                    <span className={styles.itemName}>{subtopic.name}</span>
                  </button>
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
      </div>

      {selected && (
        <LearnedSubtopicModal
          open={selected !== null}
          onClose={() => setSelected(null)}
          topicName={selected.topicName}
          subtopicName={selected.subtopicName}
          learnedAt={selected.learnedAt}
          comment={selected.comment}
        />
      )}
    </>
  );
}
