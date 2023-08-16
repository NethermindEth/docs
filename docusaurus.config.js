// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nethermind Documentation',
  tagline: 'Welcome to Nethermind: Your High-Performance Gateway to the Ethereum Network',
  url: 'https://nethermind.github.io/',
  baseUrl: '/docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NethermindEth',
  projectName: 'docs',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
                        'https://github.com/NethermindEth/docs/tree/main/docs/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
          navbar: {
            logo: {
              alt: 'Nethermind',
              src: 'img/logo_dark.svg',
              srcDark: 'img/logo_light.svg',
              href: '/',
              target: '_self'
            },
            items: [
              {
                'aria-label': 'Discord',
                className: 'header-discord-link',
                href: 'https://discord.com/invite/PaCMRFdvWT',
                position: 'right'
              },
              {
                'aria-label': 'GitHub',
                className: 'header-github-link',
                href: 'https://github.com/NethermindEth/nethermind',
                position: 'right'
              }
            ]
          },
          algolia: {
            appId: '0',
            apiKey: 'YOUR_SEARCH_API_KEY',
            indexName: 'YOUR_INDEX_NAME'
          },
          prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme
          }
        })
}

module.exports = config
