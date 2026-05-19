"use client";
import ProgressDashboard from "./ProgressDashboard/ProgressDashboard";
import { Topic } from "@/types/user-learn-progress";
import { Subtopic } from "@/types/user-learn-progress";
import ProgressDetails from "./ProgressDetails/ProgressDetails";
import { useState } from "react";

type LearnedSubtopic = {
  slug: Subtopic["slug"];
  name: Subtopic["name"];
  learnedAt: Date;
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
  const selectedTopics = topics.filter((t) => selectedSlugs.includes(t.slug));

  return (
    <>
      <ProgressDashboard
        topics={topics}
        selectedSlugs={selectedSlugs}
        onToggleTopic={toggleTopic}
      />
      <ProgressDetails topics={selectedTopics} />
    </>
  );
}
