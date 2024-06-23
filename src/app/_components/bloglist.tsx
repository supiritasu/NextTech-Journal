"use client";

import React, { useState } from 'react';
import { Post } from "@/interfaces/post";
import Link from 'next/link';
import Author from './author';

type Props = {
  posts: Post[];
};

const POSTS_PER_PAGE = 5; // 1ページあたりのポスト数を定義

export function BlogList({ posts }: Props) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleTagClick = (tag: string) => {
    setSelectedTags(prevSelectedTags =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter(t => t !== tag)
        : [...prevSelectedTags, tag]
    );
    setCurrentPage(1); // タグが変更されたら1ページ目に戻す
  };

  const handleClearTags = () => {
    setSelectedTags([]);
    setCurrentPage(1);
  };

  const filteredPosts = selectedTags.length > 0
    ? posts.filter(post => selectedTags.some(tag => post.tags.includes(tag)))
    : posts;

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const uniqueTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
              <Author
                name="Supiritasu"
                picture="/favicon/twitter_icon.jpeg"
                bio="そこら辺の一般大学生です.趣味で当ブログを作成しました．技術系の内容をメインに不定期更新の予定です！"
                twitter="your_twitter_handle"
                github="your_github_username"
              />
            </div>
            </aside>
          <div className="w-full md:w-3/4 px-4">
            <div className="space-y-10">
              {paginatedPosts.map((post) => (
                <div key={post.slug} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-sm text-gray-500 mb-1 mr-4">{post.date}</div>
                  <div className="flex flex-wrap">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs mb-1 bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full mr-2">
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
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-8 ">
      <ul className="flex space-x-2">
        {currentPage > 1 && (
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              Previous
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`px-3 py-2 rounded transition-colors ${
                currentPage === number
                  ? 'bg-indigo-100 text-indigo-800'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default BlogList;