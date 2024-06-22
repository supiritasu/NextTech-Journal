"use client"; // クライアントコンポーネントとして指定

import React, { useState } from 'react';
import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import Tabs from '../_components/Tabs';

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;

  const uniqueTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="mb-8">
        {uniqueTags.map(tag => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`mr-2 mb-2 px-4 py-2 rounded ${
              selectedTag === tag ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {filteredPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            // excerpt={post.excerpt}
            tags={post.tags}
          />
        ))}
      </div>
      <Tabs tabs={['Tab1', 'Tab2', 'Tab3']} />
    </section>
  );
}