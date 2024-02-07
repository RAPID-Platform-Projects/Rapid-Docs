import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from 'path';

const config: Config = {
  title: "Rapid Platform Docs",
  tagline: "Rapid Documentation",
  favicon: "img/r.ico",

  // Set the production url of your site here
  url: "https://docs.rapidplatform.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rapid-platform", // Usually your GitHub org/user name.
  projectName: "public-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts"
        },
        blog: {
          blogTitle: "Changelog",
          blogDescription: "Updates to Rapid Platform",
          routeBasePath: "/changelog/",
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            frontMatter.hide_reading_time ? undefined : defaultReadingTime({ content })
        },
        theme: {
          customCss: "./src/css/custom.css"
        }
      } satisfies Preset.Options
    ]
  ],

  plugins: [
    ['@docusaurus/plugin-content-docs', {
      id: 'training',
      path: 'training',
      routeBasePath: '/training',
    }],
    ['./plugins/rapid-training-packs-plugin/index.ts', { dir: './training' }]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/RPD_logo_STK_2D.png",
    navbar: {
      title: "Rapid Docs",

      logo: { alt: "Rapid Logo", src: "img/logo.svg" },

      items: [
        {
          type: "docSidebar",
          sidebarId: "getting_started",
          label: "Getting Started"
        },
        {
          to: "docs/Rapid/Rapid Standard/rapidStandardHomePage",
          position: "left",
          label: "Base Rapid"
        },
        {
          type: "dropdown",
          position: "left",
          label: "Manuals",
          items: [
            {
              type: "docSidebar",
              sidebarId: "getting_started",
              label: "Introduction"
            },
            {
              type: "docSidebar",
              sidebarId: "user_manual",
              label: "User Manual"
            },
            {
              type: "docSidebar",
              sidebarId: "keyper_manual",
              label: "Keyper Manual"
            },
            {
              type: "docSidebar",
              sidebarId: "rapid_standard",
              label: "Base Rapid Manual"
            },
            {
              type: "docSidebar",
              sidebarId: "developer_manual",
              label: "Developer Manual"
            }
          ],
          dropdownActiveClassDisabled: true
        },
        {
          to: "training",
          position: "left",
          label: "Training Modules"
        },
        {
          to: "changelog",
          position: "right",
          label: "Changelog"
        },
        {
          href: "https://github.com/RAPID-Platform-Projects/Rapid-Docs/issues/new?assignees=MattFranklin-Rapid&labels=bug&projects=&template=bug-form.yml",
          position: "right",
          label: "Feedback"
        }
      ]
    },
    footer: {
      style: "dark",
      logo: {
        src: 'img/rpd_white.svg',
      },
      links: [
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://au.linkedin.com/company/rapid-platform"
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/@rapidplatform"
            },
            {
              label: "Webpage",
              href: "https://rapidplatform.com"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Changelog",
              to: "changelog"
            },
            {
              label: "Github",
              href: "https://github.com/rapid-platform/public-docs"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rapid Platform Pty Ltd, Built with Docusaurus.`,
    },
    customFields: {
      demo: {
        href: 'https://rapidplatform.com/contact-us/',
        text: 'Book a free demo today.'
      }
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    },
    colorMode: {
      respectPrefersColorScheme: true
    }
  } as Preset.ThemeConfig,
};

export default config;
