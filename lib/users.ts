import { prisma } from "@/lib/prisma";
import { UserListItem } from "@/types/user";

function fetchUsersWithProgress() {
  return prisma.user.findMany({
    select: {
      id: true,
      nickname: true,
      name: true,
      updatedAt: true,
      progress: {
        select: {
          subtopic: {
            select: {
              topic: { select: { slug: true } },
            },
          },
        },
      },
    },
    orderBy: { createdAt: "asc" },
  });
}

type UserWithProgress = Awaited<
  ReturnType<typeof fetchUsersWithProgress>
>[number];

export async function getUsersWithProgress(): Promise<UserListItem[]> {
  const users = await fetchUsersWithProgress();

  const topics = await prisma.topic.findMany({
    select: {
      slug: true,
      _count: { select: { subtopics: true } },
    },
  });

  const totalsBySlug: Record<string, number> = {};
  for (const t of topics) {
    totalsBySlug[t.slug] = t._count.subtopics;
  }

  return users.map((u: UserWithProgress): UserListItem => {
    const learnedBySlug: Record<string, number> = {};
    for (const p of u.progress) {
      const slug = p.subtopic.topic.slug;
      learnedBySlug[slug] = (learnedBySlug[slug] ?? 0) + 1;
    }

    return {
      id: u.id,
      nickname: u.nickname,
      name: u.name,
      updatedAt: u.updatedAt,
      progress: {
        javascript: {
          learned: learnedBySlug["javascript"] ?? 0,
          total: totalsBySlug["javascript"] ?? 0,
        },
        react: {
          learned: learnedBySlug["react"] ?? 0,
          total: totalsBySlug["react"] ?? 0,
        },
        browser: {
          learned: learnedBySlug["browser"] ?? 0,
          total: totalsBySlug["browser"] ?? 0,
        },
      },
    };
  });
}
