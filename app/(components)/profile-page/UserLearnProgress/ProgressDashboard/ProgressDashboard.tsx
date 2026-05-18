import { Topic } from "@/types/user-learn-progress";
import ProgressCircle from "@/app/(components)/reusable/ProgressCircle/ProgressCircle";

type TopicProgress = {
  slug: Topic["slug"];
  name: Topic["name"];
  icon: Topic["icon"];
  learnedCount: number;
  total: number;
};

type ProgressDashboardProps = {
  topics: TopicProgress[];
};

export default function ProgressDashboard({ topics }: ProgressDashboardProps) {
  return (
    <div>
      {topics.map((topic) => (
        <ProgressCircle
          key={topic.slug}
          topic={topic.name}
          learnedSubtopicsCount={topic.learnedCount}
          totalSubtopicsCount={topic.total}
        />
      ))}
    </div>
  );
}
