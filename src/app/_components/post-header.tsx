import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags?: string[]; // Tags are now optional
};

const PostHeader = ({ title, date, tags }: Props) => {
  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800 mb-8 text-center md:text-left">
          {title}
        </h1>
        <div className="text-lg text-gray-600 mb-4">
          <DateFormatter dateString={date} />
        </div>
        {tags && tags.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PostHeader;