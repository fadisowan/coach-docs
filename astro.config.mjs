import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import fs from 'node:fs';
import tableRegions from './scripts/rehype-tables.mjs';
import { unified } from '@astrojs/markdown-remark';
const nav = JSON.parse(fs.readFileSync(new URL('./data.json', import.meta.url), 'utf8'));
const groups = [...new Set(nav.map(entry => entry.category))];
export default defineConfig({
  site: 'https://fadisowan.github.io',
  base: '/coach-docs',
  trailingSlash: 'always',
  markdown: { processor: unified({ rehypePlugins: [tableRegions] }) },
  integrations: [starlight({
    title: 'دليل كوتش',
    description: 'التوثيق العربي لثيم Coach على منصة سلة — دليل الإعدادات والمكوّنات بالصور.',
    defaultLocale: 'root',
    locales: { root: { label: 'العربية', lang: 'ar', dir: 'rtl' } },
    customCss: ['./src/styles/custom.css'],
    components: { Head: './src/components/Head.astro' },
    sidebar: [
      { label: 'ابدأ هنا', link: '/' },
      { label: 'كل المكوّنات الـ٤٨ بالصور', slug: 'components' },
      { label: 'دليل الإعدادات العامة', slug: 'settings' },
      ...groups.map(label => ({label, collapsed: label === 'مكوّنات الصفحة الرئيسية', items: nav.filter(entry => entry.category === label).map(entry => ({label: entry.title.split(' — ')[0], slug: 'docs/' + entry.slug}))}))
    ],
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
    pagination: true,
    editLink: { baseUrl: 'https://github.com/fadisowan/coach-docs/edit/main/' },
    social: [{icon:'github',label:'المستودع على GitHub',href:'https://github.com/fadisowan/coach-docs'}]
  })]
});
