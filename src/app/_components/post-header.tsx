import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { ReactNode } from "react";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags?: string[]; // Tags are now optional
};

const PostHeader = ({ title, date, tags }: Props) => {
  const PostTitle = ({ children, className = "" }: { children?: ReactNode; className?: string }) => {
    return (
      <h1 className={`text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight md:leading-none mb-8 text-center md:text-left ${className}`}>
        {children}
      </h1>
    );
  };

  return (
    <header className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <PostTitle className="text-white"> {/* Changed color to white */}
        {title}
      </PostTitle>

      {tags && tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-4"> {/* Adjusted spacing and margin */}
          {tags.map((tag) => (
            <li key={tag} className="text-sm font-semibold bg-gray-700 text-white px-2 py-1 rounded"> {/* Styled tags */}
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className="max-w-2xl mx-auto mt-4">
        <div className="mb-4 text-sm leading-relaxed text-gray-400"> {/* Adjusted font size, line height, and color */}
          <DateFormatter dateString={date} />
        </div>
      </div>
    </header>
  );
};

export default PostHeader;