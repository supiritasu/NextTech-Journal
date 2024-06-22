// import { remark } from "remark";
// import html from "remark-html";

// export default async function markdownToHtml(markdown: string) {
//   const result = await remark().use(html).process(markdown);
//   return result.toString();
// }

import m2h from 'zenn-markdown-html';

export default async function markdownToHtml(markdown: string): Promise<string> {
  return m2h(markdown);
}