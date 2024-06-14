import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  tags: string[];  // tags をオプショナルにする
};

// export function PostHeader({ title, coverImage, date, author, tags}: Props) {  // デフォルト値を空の配列に設定
//   const tagList = tags.map((tag) => (
//     <li className="font-bold mb-12" key={tag}>
//       <a href={`/tags/${tag}`}>{tag}</a>
//     </li>
//   ));

//   return (
//     <>
//       <PostTitle>{title}</PostTitle>
//       <div className="hidden md:block md:mb-12">
//         <Avatar name={author.name} picture={author.picture} />
//       </div>
//       <ul>{tagList}</ul> {/* tagsリストをレンダリングする */}
//       <div className="mb-8 md:mb-16 sm:mx-0">
//         <CoverImage title={title} src={coverImage} />
//       </div>
//       <div className="max-w-2xl mx-auto">
//         <div className="block md:hidden mb-6">
//           <Avatar name={author.name} picture={author.picture} />
//         </div>
//         <div className="mb-6 text-lg">
//           <DateFormatter dateString={date} />
//         </div>
//       </div>
//     </>
//   );
// }




// import Avatar from './avatar'
// import DateFormatter from './date-formatter'
// import CoverImage from './cover-image'
// import PostTitle from './post-title'
// import type Author from '../interfaces/author'

// type Props = {
//   title: string
//   coverImage: string
//   date: string
//   author: Author,
//   tags: string[]
// }

const PostHeader = ({ title, coverImage, date, author, tags }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
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
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader