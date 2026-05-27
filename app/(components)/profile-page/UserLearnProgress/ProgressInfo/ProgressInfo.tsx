import { Topic } from "@/types/user-learn-progress";
import styles from "./progress-info.module.css";

const topicSources: Partial<Record<Topic["slug"], string>> = {
  javascript: "https://javascript.info/",
  browser: "https://developer.mozilla.org/",
  react: "https://react.dev/",
};

type ProgressInfoProps = {
  topicSlug: Topic["slug"];
};

export default function ProgressInfo({ topicSlug }: ProgressInfoProps) {
  const source = topicSources[topicSlug];

  return (
    <div className={styles.wrapper}>
      <p className={styles.hint}>
        You can click on subtopics to see how this person understands each
        topic.
      </p>

      {source && (
        <p className={styles.source}>
          Subtopics are based on{" "}
          <a
            className={styles.link}
            href={source}
            target="_blank"
            rel="noopener noreferrer"
          >
            {source}
          </a>
        </p>
      )}
    </div>
  );
}
