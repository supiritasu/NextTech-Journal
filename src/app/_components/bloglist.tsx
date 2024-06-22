"use client"; // クライアントコンポーネントとして指定

import React, { useState } from 'react';
import { Post } from "@/interfaces/post";
import Link from 'next/link';

type Props = {
  posts: Post[];
};

export function BlogList({ posts }: Props) {
  
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;

  const uniqueTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <aside className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="sticky top-0">
            <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              More Stories
            </h2>
            <div className="mb-8 p-4 border border-gray-300 rounded-lg">
              {uniqueTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`block w-full text-left mb-2 px-4 py-2 rounded-full ${
                    selectedTag === tag ? 'bg-black text-white' : 'bg-white text-black border border-black'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </aside>
        <div className="w-full md:w-3/4">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {filteredPosts.map((post) => (
              <div key={post.slug} className="py-8 flex flex-wrap md:flex-nowrap">
                <aside className="w-full md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col hidden md:block">
                  <div className="flex flex-wrap">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-white text-black border border-black px-2 py-1 rounded-full mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-1 text-gray-500 text-sm">{post.date}</span>
                </aside>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{post.title}</h2>
                  <p className="leading-relaxed">{post.excerpt}</p>
                  <Link href={`/posts/${post.slug}`} className="text-green-500 inline-flex items-center mt-4">
                    Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogList;