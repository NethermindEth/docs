// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import redirects from './redirects.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nethermind documentation',
  tagline: 'A robust execution client for Ethereum node operators.',
  favicon: 'images/favicon.svg',

  url: 'https://docs.nethermind.io',
  baseUrl: '/',

  organizationName: 'NethermindEth',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          editUrl: 'https://github.com/NethermindEth/docs/tree/main',
          exclude: ['interacting/json-rpc-ns/eth_*.md']
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        },
        gtag: {
          trackingID: 'G-4JDCNMPQ22'
        }
      })
    ]
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      }
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'crossorigin'
      }
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700&family=Exo:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap'
      }
    }
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image:
        'https://github.com/NethermindEth/docs/assets/35319980/163ba000-69b1-45c6-86eb-e8c53109839f',
      navbar: {
        logo: {
          alt: 'Nethermind',
          src: 'images/logo_dark.svg',
          srcDark: 'images/logo_light.svg',
          href: '/',
          target: '_self'
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true
          },
          {
            'aria-label': 'GitHub',
            className: 'header-social-link header-github-icon',
            href: 'https://github.com/NethermindEth/nethermind',
            position: 'right'
          },
          {
            'aria-label': 'Discord',
            className: 'header-social-link header-discord-icon',
            href: 'https://discord.com/invite/PaCMRFdvWT',
            position: 'right'
          },
          {
            'aria-label': 'X',
            className: 'header-social-link header-x-icon',
            href: 'https://x.com/NethermindEth',
            position: 'right'
          }
        ]
      },
      algolia: {
        appId: '4I20VAM8JS',
        apiKey: 'db0d2f0b1fc0c714f386cd90fd39cbe7',
        indexName: 'nethermind'
      },
      prism: {
        additionalLanguages: ['bash', 'csharp', 'docker', 'ini', 'json', 'powershell'],
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    }),

  plugins: [['@docusaurus/plugin-client-redirects', { ...redirects }]]
};

export default config;
