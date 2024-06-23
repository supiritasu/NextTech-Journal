import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import Container from "@/app/_components/container";
import PostHeader from "@/app/_components/post-header";
import Author from "@/app/_components/author";
import markdownToHtml from 'zenn-markdown-html';
import PostBody from "@/app/_components/post-body";
import TableOfContents from "@/app/_components/TableOfContents";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <Container>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <aside className="hidden md:block w-full md:w-1/4 mb-8 md:mb-0">
            <div className="sticky top-8">
              <Author
                name="Supiritasu"
                picture="/favicon/twitter_icon.jpeg"
                bio="そこら辺の一般大学生です.趣味で当ブログを作成しました．技術系の内容をメインに不定期更新の予定です！"
                twitter="your_twitter_handle"
                github="your_github_username"
              />
              <TableOfContents />
            </div>
          </aside>
          <div className="w-full md:w-3/4">
            <article className="bg-white shadow-lg rounded-lg overflow-hidden">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                tags={post.tags}
              />
              <div className="p-6 znc">
                <PostBody content={content} />
              </div>
            </article>
          </div>
        </div>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}