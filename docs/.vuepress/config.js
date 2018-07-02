const base = process.env["SGSE_BUILD"] == 'local' ? '/' : '/book/'

module.exports = {
  title: 'SGSE 18',
  description: 'Kursmaterial für das Fach "Spezielle Gebiete zum Software Engineering"',
  dest: 'dist',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  markdown: {
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  },
  serviceWorker: false,
  themeConfig: {
    repo: 'SGSE18/book',
    editLinks: false,
    docsDir: 'docs',
	  sidebarDepth: 2,
    nav: [
      {
        text: 'Kursmaterial',
        link: '/',
      }
    ],
    sidebar: [
      {
        title: 'Grundlagen',
        children: [
		  '/digitalisierung/',
          '/cloud/',
          '/dezentralisierung/'
        ]
      },
      {
        title: 'Distributed Ledger',
        children: [
          '/smartcontract/',
		      '/hyperledger/'
        ]
      },
      {
        title: 'Continuous Software Engineering',
        children: [
	      '/continuous-software-engineering/'
        ]
      },
      {
        title: 'Architekturen',
        children: [
          '/microservices/',
          '/streaming-architectures/'
        ]
      },
	    {
        title: 'Fullstack Development',
        children: [
          '/fullstack/frontend/',
          '/reactive-programming/',
		  '/fullstack/backend/',
        ]
      },
      {
        title: 'AI - machine learning',
        children: [
          '/ai-ml/ai/',
          '/ai-ml/ml/',
          '/ai-ml/nn/',
          '/ai-ml/dl/',
          '/ai-ml/gan/',
          '/ethik/'
        ]
      },
      {
        title: 'Embedded',
        children: [
          '/embedded/',
          '/iot/'
        ]
      },
      {
        title: 'Blockchain',
        children: [
          '/blockchain/grundlagen/',
		  '/blockchain/technologie/',
		  '/blockchain/usecases/',
		  '/blockchain/plattformen/'
        ]
      }
    ],
  }
}
