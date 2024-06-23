import React from 'react';
import Header from '../_components/header';
import {BlogList} from '@/app/_components/bloglist';
import { getAllPosts } from '@/lib/api';
import Container from "@/app/_components/container";




export default function Index() {
  const allPosts = getAllPosts();
  const BlogLists = allPosts.slice();
  return (
    <>
    <Container>
    {BlogLists.length > 0 && <BlogList posts={BlogLists} />}
    </Container>
    </>
  );
}
