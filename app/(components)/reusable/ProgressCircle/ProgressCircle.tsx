import styles from "./progress-circle.module.css";

interface ProgressCircleProps {
  topic: string;
  learned: number;
  total: number;
  size?: number;
}

export default function ProgressCircle({
  topic,
  learned,
  total,
  size = 96,
}: ProgressCircleProps) {
  const safeTotal = total > 0 ? total : 1;
  const rawPercent = Math.round((learned / safeTotal) * 100);
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
        aria-label={`${topic}: ${learned} of ${total} topics learned`}
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
          {learned} / {total} topics
        </p>
      </div>
    </div>
  );
}
