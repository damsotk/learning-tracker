"use client";
import ProgressDashboard from "./ProgressDashboard/ProgressDashboard";
import ProgressDetails from "./ProgressDetails/ProgressDetails";
import ProgressInfo from "./ProgressInfo/ProgressInfo";
import { Topic, Subtopic } from "@/types/user-learn-progress";
import { useState } from "react";

type LearnedSubtopic = {
  slug: Subtopic["slug"];
  name: Subtopic["name"];
  learnedAt: Date;
  comment: string | null;
};

export type TopicProgress = {
  slug: Topic["slug"];
  name: Topic["name"];
  icon: Topic["icon"];
  learned: LearnedSubtopic[];
  notLearned: { slug: Subtopic["slug"]; name: Subtopic["name"] }[];
  learnedCount: number;
  total: number;
};

type UserLearnProgressProps = {
  topics: TopicProgress[];
};

export default function UserLearnProgress({ topics }: UserLearnProgressProps) {
  const [selectedSlugs, setSelectedSlugs] = useState<Topic["slug"][]>([]);

  const toggleTopic = (slug: Topic["slug"]) => {
    setSelectedSlugs([slug]);
  };

  const selectedTopic = topics.find((t) => selectedSlugs.includes(t.slug));

  return (
    <>
      <ProgressDashboard
        topics={topics}
        selectedSlugs={selectedSlugs}
        onToggleTopic={toggleTopic}
      />

      {selectedTopic && <ProgressInfo topicSlug={selectedTopic.slug} />}

      <ProgressDetails topic={selectedTopic} />
    </>
  );
}
