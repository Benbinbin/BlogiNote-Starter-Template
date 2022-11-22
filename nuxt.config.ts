/**
 *
 * copy asset files to public folder
 *
 */
// Refer to: https://github.com/nuxt/content/issues/106#issuecomment-1002820342
const fs = require('fs')
const path = require('path')

// clean the "article" folder (copy from the "content" folder) first
const cleanContentFiles = (...folderPathArr) => {
  folderPathArr.forEach((folderPath) => {
    const exists = fs.existsSync(folderPath)
    if (exists) {
      fs.rmSync(folderPath, { recursive: true })
    }
  })
}

// then copy all other type of files except .md from "content" folder to public folder
// so all the assets can link to inside the markdown file by relative path
const copyContentFiles = (src, destFolderName, ignore = []) => {
  // url isn't case-sensitive but folder name is case-sensitive
  // change all the folders name to lowercase when copy them to public
  const dest = destFolderName.toLowerCase()

  const exists = fs.existsSync(src)
  const stats = exists && fs.statSync(src)
  const isDirectory = exists && stats.isDirectory()
  if (isDirectory) {
    if (!fs.existsSync(dest) || !fs.statSync(src).isDirectory()) {
      fs.mkdirSync(dest)
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyContentFiles(
        path.join(src, childItemName),
        path.join(dest, childItemName),
        ignore
      )
    })
  } else {
    const ext = path.extname(src)
    if (!ignore.includes(ext)) {
      fs.copyFileSync(src, dest)
    }
  }
}

cleanContentFiles('public/article')
copyContentFiles('content', 'public', ['.md', '.json', '.csv'])

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
