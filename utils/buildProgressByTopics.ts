import { Topic } from "@/types/user-learn-progress";
import { Subtopic } from "@/types/user-learn-progress";

interface TopicWithCount extends Pick<Topic, "slug" | "name" | "icon"> {
  _count: { subtopics: number };
}

interface ProgressInSubtopic {
  learnedAt: Date;
  subtopic: Pick<Subtopic, "slug" | "name"> & {
    topic: Pick<Topic, "slug" | "name" | "icon">;
  };
}

export interface TopicByProgress extends Pick<Topic, "slug" | "name" | "icon"> {
  learned: (Pick<Subtopic, "slug" | "name"> & { learnedAt: Date })[];
  learnedCount: number;
  total: number;
}

export function buildProgressByTopics(
  topics: TopicWithCount[],
  progressInSubtopics: ProgressInSubtopic[],
): TopicByProgress[] {
  const progressByTopic = topics.map((topic) => {
    const learned = progressInSubtopics
      .filter((p) => p.subtopic.topic.slug === topic.slug)
      .map((p) => ({
        name: p.subtopic.name,
        slug: p.subtopic.slug,
        learnedAt: p.learnedAt,
      }));

    return {
      slug: topic.slug,
      name: topic.name,
      icon: topic.icon,
      learned,
      learnedCount: learned.length,
      total: topic._count.subtopics,
    };
  });

  return progressByTopic;
}
