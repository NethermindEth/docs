// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nethermind documentation',
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
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v1.20.1',
              path: '/'
            }
          },
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/NethermindEth/docs/tree/main/docs/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
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
        href: 'https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Red+Hat+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Red+Hat+Text:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet'
      }
    }
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
                type: 'docsVersionDropdown',
                position: 'left',
                dropdownActiveClassDisabled: true
              },
              {
                'aria-label': 'GitHub',
                className: 'header-github-link',
                href: 'https://github.com/NethermindEth/nethermind',
                position: 'right'
              },
              {
                'aria-label': 'Discord',
                className: 'header-discord-link',
                href: 'https://discord.com/invite/PaCMRFdvWT',
                position: 'right'
              },
              {
                'aria-label': 'X',
                className: 'header-x-link',
                href: 'https://twitter.com/NethermindEth',
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
