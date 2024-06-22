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
    <section className="bg-gradient-to-b from-gray-50 to-white text-gray-800 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <aside className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <div className="sticky top-24">
              <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-gray-900">
                Explore<br />Stories
              </h2>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Filter by Tags</h3>
                <div className="flex flex-wrap">
                  {uniqueTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`text-sm mb-2 mr-2 px-3 py-1 rounded-full transition-colors duration-200 ${
                        selectedTags.includes(tag) 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                {selectedTags.length > 0 && (
                  <button
                    onClick={handleClearTags}
                    className="mt-4 text-sm px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
          </aside>
          <div className="w-full md:w-3/4 px-4">
            <div className="space-y-10">
              {filteredPosts.map((post) => (
                <div key={post.slug} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-wrap items-center mb-4">
                    <span className="text-sm text-gray-500 mr-4">{post.date}</span>
                    <div className="flex flex-wrap">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full mr-2 mb-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/posts/${post.slug}`}>
                    <span className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                      Read More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogList;