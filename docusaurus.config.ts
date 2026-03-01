import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Supply Chain Core Concepts',
  tagline: 'Grocery Business Concepts for Quality Engineers and IT Professionals',
  future: {
    v4: true,
  },
  url: 'https://arvind3.github.io',
  baseUrl: '/supplychain-coreconcepts-for-grocery-business/',
  organizationName: 'arvind3',
  projectName: 'supplychain-coreconcepts-for-grocery-business',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl:
            'https://github.com/arvind3/supplychain-coreconcepts-for-grocery-business/edit/main/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        language: ['en'],
        hashed: true,
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Supply Chain Book',
      items: [
        {
          to: '/docs/book-overview',
          label: 'Book Overview',
          position: 'left',
        },
        {
          to: '/docs/01-grocery-supply-chain-basics',
          label: 'Start Here',
          position: 'left',
        },
        {
          href: 'https://github.com/arvind3/supplychain-coreconcepts-for-grocery-business',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Book',
          items: [
            {label: 'Overview', to: '/docs/book-overview'},
            {
              label: 'End-to-End Lifecycle',
              to: '/docs/10-end-to-end-lifecycle-walkthrough',
            },
          ],
        },
        {
          title: 'Repository',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/arvind3/supplychain-coreconcepts-for-grocery-business',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Supply Chain Core Concepts`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
