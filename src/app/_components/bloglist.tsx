"use client";

import React, { useState } from 'react';
import { Post } from "@/interfaces/post";
import Link from 'next/link';

type Props = {
  posts: Post[];
};

export function BlogList({ posts }: Props) {
  
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setSelectedTags(prevSelectedTags =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter(t => t !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  const handleClearTags = () => {
    setSelectedTags([]);
  };

  const filteredPosts = selectedTags.length > 0
    ? posts.filter(post => selectedTags.some(tag => post.tags.includes(tag)))
    : posts;

  const uniqueTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <aside className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="sticky top-0">
            <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              More<br />Stories
            </h2>
            <div className="mr-10 mb-8 p-4 border border-gray-300 rounded-lg">
              <div className="flex flex-wrap">
                {uniqueTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`text-xs mb-2 mr-2 px-3 py-1 rounded-full ${
                      selectedTags.includes(tag) ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
                <button
                  onClick={handleClearTags}
                  className="text-xs mb-2 mr-2 px-3 py-1 rounded-full bg-red-500 text-white"
                >
                  Clear Tags
                </button>
              </div>
            </div>
          </div>
        </aside>
        <div className="w-full md:w-3/4">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {filteredPosts.map((post) => (
              <div key={post.slug} className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <div className="flex flex-wrap mt-1">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{post.title}</h2>
                  <p className="leading-relaxed">{post.excerpt}</p>
                  <Link href={`/posts/${post.slug}`}>
                    <span className="text-green-500 inline-flex items-center mt-4">
                      Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
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