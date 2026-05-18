import { prisma } from "@/lib/prisma";
import { UserPublic } from "@/types/user";

export function getPublicUserDataByNickname(nickname: UserPublic["nickname"]) {
  const userData = prisma.user.findUnique({
    where: { nickname },
    select: {
      id: true,
      nickname: true,
      name: true,
      updatedAt: true,
    },
  });

  return userData;
}
