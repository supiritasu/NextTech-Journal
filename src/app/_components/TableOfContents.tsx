"use client";

import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents: React.FC = () => {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const article = document.querySelector('article');
    if (article) {
      const headings = article.querySelectorAll('h1, h2, h3, h4');
      const tocItems: TOCItem[] = Array.from(headings).map((heading) => ({
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1)),
      }));
      setToc(tocItems);
    }

    const handleScroll = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4');
      const scrollPosition = window.scrollY;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i] as HTMLElement;
        if (heading.offsetTop <= scrollPosition + 100) {
          setActiveId(heading.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="table-of-contents bg-white p-6 rounded-lg shadow-md mt-10"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">目次</h2>
      <ul className="space-y-2">
        {toc.map((item) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ marginLeft: `${(item.level - 2) * 16}px` }}
          >
            <ScrollLink
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70}
              href={`#${item.id}`}
              className={`flex items-center text-gray-700 hover:text-blue-500 transition-colors duration-200 ${
                activeId === item.id ? 'text-blue-500 font-semibold' : ''
              }`}
            >
              <ChevronRight
                className={`mr-2 transition-transform duration-200 ${
                  activeId === item.id ? 'text-blue-500 transform rotate-90' : ''
                }`}
                size={16}
              />
              {item.text}
            </ScrollLink>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default TableOfContents;