export type Post = {
  author: {
    name: string;
    picture: string;
    bio: string;
    twitter?: string;
    github?: string;
  };
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  tags: string[];
  preview?: boolean;
};