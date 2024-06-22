import markdownStyles from "./markdown-styles.module.css";



interface PostBodyProps {
  content: string;
  className?: string;
}

const PostBody: React.FC<PostBodyProps> = ({ content, className = '' }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default PostBody;


