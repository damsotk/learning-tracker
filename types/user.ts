export interface TopicProgress {
  total: number;
  learned: number;
}

export interface UserProgress {
  javascript: TopicProgress;
  react: TopicProgress;
  browser: TopicProgress;
}

export interface User {
  id: number;
  progress: UserProgress;
  slug: string;
  name: string;
  email: string;
  accessTokenHash: string;
  emailReportsEnabled: boolean;
  timezone: string;
  createdAt: Date;
  updatedAt: Date;
}
