import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags: string[];  // tags をオプショナルにする
};



const PostHeader = ({ title, coverImage, date, tags }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
      </div>
      <ul className="flex gap-x-2">
        {
          tags.map((tag) => <li className="font-bold mb-12"><a href={`/tags/${tag}`}>{tag}</a></li>)
        }
      </ul>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader