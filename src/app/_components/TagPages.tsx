import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import TagPage from "@/app/_components/TagPages";
import { getAllTags, getPostsByTag } from "../../lib/api";
import { Post } from "@/interfaces/post";

type Props = {
  posts: Post[];
  tag: string;
};

const Tag = ({ posts, tag }: Props) => {
  return (
    <>
      <Head>
        <title>Tag: {tag}</title>
      </Head>
      <TagPage posts={posts} tag={tag} />
    </>
  );
};

export default Tag;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params?.tag as string;
  const posts = getPostsByTag(tag);

  return {
    props: {
      posts,
      tag,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags();

  return {
    paths: tags.map((tag) => ({
      params: { tag },
    })),
    fallback: false,
  };
};
