export default defineNuxtConfig({
  app: {},
  typescript: {
    shim: false
  },
  extends: ['bloginote'],
  content: {
    highlight: {
      preload: [],
    },
  },
  runtimeConfig: {
    rss: {
      title: 'Your Project Name',
      description: 'the introduction about your project.',
      image: 'https://your-project-logo.png',
      favicon: 'https://your-project-favicon.ico',
      copyright: `All rights reserved ${(new Date()).getFullYear()}, Your Name`
    },
    public: {
      hostname: 'https://your.domain.com'
    }
  },
})
