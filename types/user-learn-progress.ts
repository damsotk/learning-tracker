export interface Topic {
  id: number;
  slug: string;
  name: string;
  description: string | null;
  icon: string | null;
  order: number;
  createdAt: Date;
}

export interface Subtopic {
  id: number;
  topicId: number;
  slug: string;
  name: string;
  description: string | null;
  order: number;
}
