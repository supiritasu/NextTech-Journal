import React from "react";

type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
};

type Props = {
  posts: Post[];
  tag: string;
};

const TagPage = ({ posts, tag }: Props) => {
  return (
    <div>
      <h1>Posts tagged with "{tag}"</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`}>{post.title}</a>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default TagPage;
