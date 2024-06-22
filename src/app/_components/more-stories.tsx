"use client";

import React, { useState } from 'react';
import { Post } from "@/interfaces/post";
import Link from 'next/link';
import Image from 'next/image';
import Pagination from "./pagination";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
          Explore More Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentPosts.map((post) => (
            <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <Link href={`/posts/${post.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={post.coverImage}
                    alt={`Cover image for ${post.title}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3 line-clamp-2 hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="text-sm text-gray-500 mb-4">{post.date}</div>
                  <div className="flex flex-wrap">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mt-4 line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
}

export default MoreStories;



