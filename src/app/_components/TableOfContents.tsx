"use client";
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents: React.FC = () => {
  const [toc, setToc] = useState<TOCItem[]>([]);

  useEffect(() => {
    const article = document.querySelector('article');
    if (article) {
      const headings = article.querySelectorAll('h2, h3, h4');
      const tocItems: TOCItem[] = Array.from(headings).map((heading) => ({
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1)),
      }));
      setToc(tocItems);
    }
  }, []);

  return (
    <nav className="table-of-contents">
      <h2>目次</h2>
      <ul>
        {toc.map((item) => (
          <li key={item.id} style={{ marginLeft: `${(item.level - 2) * 20}px` }}>
            <ScrollLink
              to={item.id}
              smooth={true}
              duration={500}
              offset={-50}
              href={`#${item.id}`}
            >
              {item.text}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
