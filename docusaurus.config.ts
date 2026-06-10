import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Systems Operations Hub',
  tagline: 'Docs-as-Ops Engineering Platform',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://sharukalishaik.github.io',
  baseUrl: '/',
  organizationName: 'sharukalishaik',
  projectName: 'action',

  onBrokenLinks: 'throw',
  markdown: {
    format: 'mdx',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false, // Prevents compilation checks on deleted blog folders
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Operations Hub',
      items: [
        {
          to: '/docs/', // Routes directly to your clean docs overview page
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/sharukalishaik/action',
          label: 'GitHub Repository',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation Pillars',
          items: [
            {
              label: 'Systems Overview',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'Version Control',
          items: [
            {
              label: 'GitHub Actions Pipeline',
              href: 'https://github.com/sharukalishaik/action/actions',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Operations Hub. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;