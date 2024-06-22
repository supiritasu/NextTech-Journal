import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllTags, getPostsByTag } from "@/lib/api";
import TagPage from "@/app/_components/TagPages";
import { Post } from "@/interfaces/post";

type Props = {
  params: {
    tag: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = params.tag;
  const posts = getPostsByTag(tag);

  if (!posts) {
    return notFound();
  }

  return {
    title: `Tag: ${tag}`,
  };
}

export default async function Tag({ params }: Props) {
  const tag = params.tag;
  const posts = getPostsByTag(tag);

  if (!posts) {
    return notFound();
  }

  return <TagPage posts={posts} tag={tag} />;
}
