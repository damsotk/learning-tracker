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
}
