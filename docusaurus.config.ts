import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

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
    ['./plugins/rapid-training-packs-plugin/index.ts', {
      dir: './training', sidebarPath: './training-sidebars.ts'
    }]
  ],

  //themes:['@docusaurus/theme-search-algolia'],
  themeConfig: {
    // Replace with your project's social card
    image: "img/2d_IconOnly 90x90.png",
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
          to: "docs/Rapid/Rapid Modules/rapidModulesHomepage",
          position: "left",
          label: "Business Modules"
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
              label: "Business Modules Manual"
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
          label: "Training"
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
      ],
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
            },
            {
              label: "Feedback",
              href: "https://rpform.io/grxAZ"
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
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'TAEM52T6XL',

      // Public API key: it is safe to commit it
      apiKey: 'c799de3426928062018193dd160dc3c7',
      //apiKey: 'ed9d305e51ead4343379d983acf35803',

      indexName: 'rapidz8-web-core-windows',

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      /*replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },*/

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: false,

    }
  } as Preset.ThemeConfig,
};

export default config;
