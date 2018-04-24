const base = '/book/'

module.exports = {
  title: 'SGSE 18',
  description: 'Kursmaterial für das Fach "Spezielle Gebiete der Softwareentwicklung"',
  dest: 'dist',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'SGSE18/book',
    editLinks: true,
    docsDir: 'docs',
    nav: [
      {
        text: 'Kursmaterial',
        link: '/kurs/',
      }
    ],
    sidebar: [
      '/digitalisierung/',
      '/cloud/',
      '/fullstack/',
      '/vr-ai/',
      '/ethik/',
      '/ai-ml/',
      '/reactiv-programming/',
      '/embedded/'
    ]
  }
}
