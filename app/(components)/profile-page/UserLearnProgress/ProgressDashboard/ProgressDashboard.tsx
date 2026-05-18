import { Topic } from "@/types/user-learn-progress";
import ProgressCircle from "@/app/(components)/reusable/ProgressCircle/ProgressCircle";
import { TopicProgress } from "../UserLearnProgress";
import styles from "./progress-dashboard.module.css";

type ProgressDashboardProps = {
  topics: TopicProgress[];
  selectedSlugs: Topic["slug"][];
  onToggleTopic: (slug: Topic["slug"]) => void;
};

export default function ProgressDashboard({
  topics,
  selectedSlugs,
  onToggleTopic,
}: ProgressDashboardProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <p className={styles.label}>Overview</p>
          <h2 className={styles.title}>Learning progress</h2>
        </div>
      </div>

      <div className={styles.grid}>
        {topics.map((topic) => {
          const isSelected = selectedSlugs.includes(topic.slug);
          return (
            <button
              key={topic.slug}
              type="button"
              onClick={() => onToggleTopic(topic.slug)}
              aria-pressed={isSelected}
              className={`${styles.tile} ${isSelected ? styles.tileSelected : ""}`}
            >
              <ProgressCircle
                topic={topic.name}
                learnedSubtopicsCount={topic.learnedCount}
                totalSubtopicsCount={topic.total}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
