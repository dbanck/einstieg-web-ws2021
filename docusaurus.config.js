module.exports = {
  title: 'Einstieg in die Webentwicklung WS20/21',
  tagline: 'Notizen zum Kursinhalt und -ablauf',
  url: 'https://webentwicklung.dbanck.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'dbanck',
  projectName: 'einstieg-web-ws2021',
  themeConfig: {
    navbar: {
      title: 'Webentwicklung',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Infos',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Made by Daniel. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/dbanck/einstieg-web-ws2021/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
