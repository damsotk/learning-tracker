import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import InfoAboutUser from "@/app/(components)/profile-page/InfoAboutUser/InfoAboutUser";
import UserLearnProgress from "@/app/(components)/profile-page/UserLearnProgress/UserLearnProgress";
import { getAllTopics, getUserProgressById } from "@/lib/queries/topic.queries";
import { getPublicUserDataByNickname } from "@/lib/queries/user.querires";
import { buildProgressByTopics } from "@/utils/buildProgressByTopics";

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

  const userData = await getPublicUserDataByNickname(nickname);

  if (!userData) {
    notFound();
  }

  const [progressInSubtopics, topics] = await Promise.all([
    getUserProgressById(userData.id),
    getAllTopics(),
  ]);

  const progressByTopic = await buildProgressByTopics(
    topics,
    progressInSubtopics,
  );

  return (
    <div>
      <InfoAboutUser nickname={userData.nickname} name={userData.name} />
      <UserLearnProgress topics={progressByTopic} />
    </div>
  );
}
