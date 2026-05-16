import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

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

  return (
    <div>
      Profile: {userData.name} (@{userData.nickname})
    </div>
  );
}
