import { TopicProgress } from "../UserLearnProgress";

type ProgressDetailsProps = {
  topics: TopicProgress[];
};

export default function ProgressDetails({ topics }: ProgressDetailsProps) {
  if (topics.length === 0) {
    return <p>choose something</p>;
  }
  return (
    <div>
      {topics.map((topic) => (
        <section key={topic.slug}>
          <h3>{topic.name}</h3>
          <p>
            learned: {topic.learnedCount} / {topic.total}
          </p>
          {topic.learned.length > 0 ? (
            <ul>
              {topic.learned.map((sub) => (
                <li key={sub.slug}>{sub.name}</li>
              ))}
            </ul>
          ) : (
            <p>nothing learded</p>
          )}
        </section>
      ))}
    </div>
  );
}
