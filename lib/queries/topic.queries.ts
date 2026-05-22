import { prisma } from "@/lib/prisma";

export function getAllTopics() {
  const allTopics = prisma.topic.findMany({
    select: {
      slug: true,
      name: true,
      icon: true,
      subtopics: {
        select: {
          slug: true,
          name: true,
        },
      },
      _count: { select: { subtopics: true } },
    },
    orderBy: { order: "asc" },
  });

  return allTopics;
}

export function getUserProgressById(userId: number) {
  const userProgress = prisma.userProgress.findMany({
    where: { userId: userId },
    select: {
      learnedAt: true,
      comment: true,
      subtopic: {
        select: {
          slug: true,
          name: true,
          topic: { select: { slug: true, name: true, icon: true } },
        },
      },
    },
  });

  return userProgress;
}
