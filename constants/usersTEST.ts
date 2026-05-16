import { User } from "@/types/user";

const today = new Date();

export const testusers: User[] = [
  {
    id: 1,
    slug: `Frontend Roadmap`,
    name: `Denis`,
    email: `denispiyack@gmail.com`,
    accessTokenHash: `asdasdasdassfasf`,
    emailReportsEnabled: true,
    timezone: `UTC`,
    createdAt: today,
    updatedAt: today,
    progress: {
      javascript: { learned: 32, total: 40 },
      react: { learned: 18, total: 30 },
      browser: { learned: 12, total: 20 },
    },
  },
];
