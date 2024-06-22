import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[]
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  tags,
}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {Array.isArray(tags) && tags.length > 0 && (
          <ul className="flex gap-x-2">
          {tags.map((tag) => (
            <li key={tag} className="font-bold mb-12">
            {tag}
            </li>
            ))}
          </ul>)}
        </div>
      </div>
    </section>
  );
}
