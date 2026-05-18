import { Topic } from "@/types/user-learn-progress";
import ProgressCircle from "@/app/(components)/reusable/ProgressCircle/ProgressCircle";
import { TopicProgress } from "../UserLearnProgress";

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
    <div>
      {topics.map((topic) => {
        const isSelected = selectedSlugs.includes(topic.slug);
        return (
          <button
            key={topic.slug}
            type="button"
            onClick={() => onToggleTopic(topic.slug)}
            aria-pressed={isSelected}
          >
            <ProgressCircle
              key={topic.slug}
              topic={topic.name}
              learnedSubtopicsCount={topic.learnedCount}
              totalSubtopicsCount={topic.total}
            />
          </button>
        );
      })}
    </div>
  );
}
