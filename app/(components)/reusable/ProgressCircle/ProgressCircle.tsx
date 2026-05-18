import styles from "./progress-circle.module.css";

interface ProgressCircleProps {
  topic: string;
  learnedSubtopicsCount: number;
  totalSubtopicsCount: number;
  size?: number;
}

export default function ProgressCircle({
  topic,
  learnedSubtopicsCount,
  totalSubtopicsCount,
  size = 96,
}: ProgressCircleProps) {
  const safeTotal = totalSubtopicsCount > 0 ? totalSubtopicsCount : 1;
  const rawPercent = Math.round((learnedSubtopicsCount / safeTotal) * 100);
  const percent = Math.min(100, Math.max(0, rawPercent));

  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className={styles.item}>
      <div
        className={styles.circleWrapper}
        style={{ width: size, height: size }}
        role="img"
        aria-label={`${topic}: ${learnedSubtopicsCount} of ${totalSubtopicsCount} topics learned`}
      >
        <svg width={size} height={size} className={styles.svg}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            className={styles.track}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className={styles.progress}
            fill="none"
          />
        </svg>
        <span className={styles.percent}>{percent}%</span>
      </div>

      <div className={styles.meta}>
        <p className={styles.topic}>{topic}</p>
        <p className={styles.count}>
          {learnedSubtopicsCount} / {totalSubtopicsCount} topics
        </p>
      </div>
    </div>
  );
}
