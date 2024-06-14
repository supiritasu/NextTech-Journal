// pages/tags/[tag].tsx
import React from "react";
import { getAllTags, getPostsByTag } from "../../lib/api";
import TagPage from "../_components/TagPages";

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


export default function Tag({ posts, tag }: Props) {
  return <TagPage posts={posts} tag={tag} />;
}

export const getStaticProps = ({ params }: { params: { tag: string } }) => {
  const posts = getPostsByTag(params.tag);

  return {
    props: {
      posts,
      tag: params.tag,
    },
  };
};

export function getStaticPaths() {
    const tags = getAllTags();
    return {
      paths: tags.map((tag) => ({
        params: {
          tag: tag,
        },
      })),
      fallback: false, 
    };
  }
  