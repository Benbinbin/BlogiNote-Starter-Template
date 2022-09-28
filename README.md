# BlogiNote Starter Template
This repository is a starter template to build a static website with the BlogiNote theme.

:link: You can follow the steps listed below, or check out [this tutorial](https://bloginote.benbinbin.com/article/tutorial/quick-start) for more details about how to use this template step-by-step.

## Setup

1. clone this template, or download this project to your PC

2. run the command in terminal to install dependents

  ```bash
  yarn install
  ```

:bulb: you should install [Node.js](https://nodejs.org/) first, and add the [yarn](https://yarnpkg.com/) (a package manager) globally in your local PC.

## Write

run the command in terminal to start a development server

```bash
yarn dev
```

Wait a seconds you will see some output in the terminal, like `Local: https://localhost:3000` Then you can visit this url at your browser to preview the web page.

You can create some markdown files inside the :file_folder: `/content/article` folder and start to write your blog posts.

:sparkles: You can refer to the example article at `/content/article/catalogOne/example.md`

Each time you save the change, the preview web page will refresh automatically.

## Deploy

1. run the command in terminal to pre-render the website

  ```bash
  yarn generate
  ```

2. You will get the `dist/` directory (symlink to `.output/public`), then you can deploy this folder to any static hosting server.

  :bulb: [learn more on Nuxt docs](https://v3.nuxtjs.org/guide/deploy/static-hosting).

## Reference

:link: [BlogiNote Homepage](https://bloginote.benbinbin.com/)

:link: [BlogiNote Github Repo](https://github.com/Benbinbin/BlogiNote)

:link: [BlogiNote Starter Template](https://github.com/Benbinbin/BlogiNote)

:link: [Contact the Author of BlogiNote Theme](mailto:benthomsonbin@gmail.com)