export interface TopicProgress {
  total: number;
  learned: number;
}

export interface UserProgress {
  javascript: TopicProgress;
  react: TopicProgress;
  browser: TopicProgress;
}

// full type of user. for session, not public.
export interface User {
  id: number;
  slug: string;
  name: string;
  email: string;
  accessTokenHash: string;
  emailReportsEnabled: boolean;
  timezone: string;
  createdAt: Date;
  updatedAt: Date;
  progress: UserProgress;
}

// type for show public info about users
export interface UserListItem {
  id: number;
  slug: string;
  name: string;
  updatedAt: Date;
  progress: UserProgress;
}
