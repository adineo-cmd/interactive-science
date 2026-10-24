import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// GitHub Pages project site: https://adineo-cmd.github.io/interactive-science/
// All internal links build off import.meta.env.BASE_URL; set base to '/' if
// this ever moves to a user site or custom domain.
export default defineConfig({
  site: 'https://adineo-cmd.github.io',
  base: '/interactive-science',
  output: 'static',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
