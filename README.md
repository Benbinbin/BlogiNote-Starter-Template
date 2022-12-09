# BlogiNote Starter Template
This repository is a starter template to build a static website with the BlogiNote theme.

You can follow the steps listed below, or check out :sparkles: [this tutorial](https://documentation.bloginote.benbinbin.com/article/tutorial/get-start) for more details about how to use this template step-by-step.

这个仓库是一个使用 BlogiNote 主题的初始化模板。

你可以跟随以下步骤操作，或者查看 :sparkles: [这一篇教程](https://documentation.bloginote.benbinbin.com/article/tutorial/get-start-cn)来了解如何一步一步地使用该模板。

## Setup Environment

1. clone this template, or download this project to your PC

2. run the command in terminal to install dependent packages

  ```bash
  yarn install
  ```

:bulb: you should install [Node.js](https://nodejs.org/) first, and add the [yarn](https://yarnpkg.com/) (a package manager) globally in your local PC.

## Write Articles

run the command in terminal to start a development server

```bash
yarn dev
```

Wait a seconds you will see some output in the terminal, like `Local: https://localhost:3000` Then you can visit this url at your browser to preview the web page.

You can start to write some articles by creating some markdown files inside the :file_folder: `/content/article` folder.

:sparkles: You can refer to the example article at `/content/article/catalogOne/example.md`

Each time you save the change, the preview web page will refresh automatically.

## Deploy

1. run the command in terminal to pre-render the website

  ```bash
  yarn generate
  ```

2. You will get the `dist/` directory (symlink to `.output/public`), then you can deploy this folder to any static hosting server.

:bulb: Recommend to [deploy the project to Vercel](https://documentation.bloginote.benbinbin.com/article/tutorial/get-start#deploy-to-vercel). If you want to deploy to other platform, please check out the [documentation of Nuxt](https://nuxt.com/docs/getting-started/deployment#static-hosting).

## Reference

:link: [BlogiNote Homepage](https://bloginote.benbinbin.com/)

:link: [BlogiNote Documentation](https://documentation.bloginote.benbinbin.com/)

:link: [BlogiNote Github Repo](https://github.com/Benbinbin/BlogiNote)

:link: [Contact Me](mailto:benthomsonbin@gmail.com)