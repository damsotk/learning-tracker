import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import InfoAboutUser from "@/app/(components)/profile-page/InfoAboutUser/InfoAboutUser";
import ProgressDashboard from "@/app/(components)/profile-page/UserLearnProgress/ProgressDashboard/ProgressDashboard";

export async function generateStaticParams() {
  const users = await prisma.user.findMany({
    select: { nickname: true },
  });

  return users.map((u) => ({
    nickname: u.nickname,
  }));
}

export const dynamicParams = false;

export default async function UserPublicProgress({
  params,
}: {
  params: Promise<{ nickname: string }>;
}) {
  const { nickname } = await params;

  const userData = await prisma.user.findUnique({
    where: { nickname },
    select: {
      id: true,
      nickname: true,
      name: true,
      updatedAt: true,
    },
  });

  if (!userData) {
    notFound();
  }

  const [progress, topics] = await Promise.all([
    prisma.userProgress.findMany({
      where: { userId: userData.id },
      select: {
        learnedAt: true,
        subtopic: {
          select: {
            slug: true,
            name: true,
            topic: { select: { slug: true, name: true, icon: true } },
          },
        },
      },
    }),
    prisma.topic.findMany({
      select: {
        slug: true,
        name: true,
        icon: true,
        _count: { select: { subtopics: true } },
      },
      orderBy: { order: "asc" },
    }),
  ]);

  const progressByTopic = topics.map((topic) => {
    const learned = progress
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

  return (
    <div>
      <InfoAboutUser nickname={userData.nickname} name={userData.name} />
      <ProgressDashboard topics={progressByTopic} />
    </div>
  );
}
