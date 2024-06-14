"use client"; 
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import TagPage from "@/app/_components/TagPages";
import { getAllTags, getPostsByTag } from "../../lib/api";
import { Post } from "@/interfaces/post";

type Props = {
  posts: Post[];
  tag: string[];
};

const Tag = ({ posts, tag }: Props) => {
  return (
    <>
      <Head>
        <title>Tags: {tag.join(", ")}</title>
      </Head>
      <TagPage posts={posts} tag={tag} />
    </>
  );
};

export default Tag;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const tagParam = params?.tag;

  // params?.tag が文字列であれば配列に変換し、配列であればそのまま使用
  const tag = Array.isArray(tagParam) ? tagParam : [tagParam];
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
