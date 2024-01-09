import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Rapid Platform Docs',
  tagline: 'Rapid Documentation',
  favicon: 'img/r.ico',

  // Set the production url of your site here
  url: 'https://docs.rapidplatform.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rapid-platform', // Usually your GitHub org/user name.
  projectName: 'public-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
        blog: {
          blogTitle: 'Changelog',
          blogDescription: 'Updates to Rapid Platform',
          routeBasePath: '/changelog/',
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            frontMatter.hide_reading_time
              ? undefined
              : defaultReadingTime({content})
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Rapid Docs',
      logo: {
        alt: 'Rapid Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sideBar',
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'doc',
          docId: 'Rapid/Rapid Standard/rapidStandardHomePage',
          position: 'left',
          label: 'Base Rapid',
        },
        {
          to: 'changelog',
          label: 'Changelog',
          position: 'right'
        },
        {
          href: 'https://github.com/rapid-platform',
          label: 'Feedback',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              to: 'https://au.linkedin.com/company/rapid-platform'
            },
            {
              label: 'Youtube',
              to: 'https://www.youtube.com/channel/UCcuPXlHnC2MxKzzDhk3NkQw'
            },
            {
              label: 'Webpage',
              to: 'https://rapidplatform.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Changelog',
              to: '/changelog',
            },
            {
              label: 'Github',
              href: 'https://github.com/rapid-platform/public-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rapid Platform Pty Ltd, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
