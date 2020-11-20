# Webpack Project

Webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. webpack takes modules with dependencies and generates static assets representing those modules

This project make use of several modules such as style-loader, css-loader, sass-loader, html-loader, babel-loader, file-loader and plugins such as MiniCssExtractPlugin and HtmlWebPackPlugin, added on different config files, dev and production, to make an example of a practical use of it.

In addiction to this, the project also uses SCSS, ITCSS structure and BEM for the semantic CSS classes.

## Steps used on this Project (with explanation of why and what each module/plugin do)

- npm init - this creates a package.json
- npm i -D webpack webpack-cli - to install as dev dependencies
- this adds our node_modules folder as well
- at our package.json change the script "test" to "build": "webpack"
- we need a src folder, because webpack by default is going to look up for a src folder and an index.js file
- if we run npm run build we see that a new dist folder is created with a main.js inside (this is what by default webpack with zero configuration creates)
- we need to create a webpack.config.js file in the project root
- specify an entry point - this indicates which module webpack should use to begin building out its internal dependency graph. webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly). By default its value is ./src/index.js, but you can specify a different (or multiple entry points) by setting an entry property in the webpack configuration
  -specify an output point - this property tells webpack where to emit the bundles it creates and how to name these files. It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file but we can configure this part of the process by specifying an output field in your configuration
- npm i -D html-webpack-plugin
- html-webpack-plugin can be used to allow webpack to insert the generated JS and CSS bundle into the html automatically. If a bundle file name contain "hashes" (e.g. bundle.b88ef660a5aa8442f616.js). We don't want to be doing this by hand. Webpack does this for us
- npm i -D html-webpack-plugin html-loader
- html-loader: if your template contains images? let webpack know about your image dependancies by 'requiring' the images. So instead of `<img src="./img/my-image.jpg">` in the html, you should write `<img src="${require(./img/my-image.jpg)}" />`. BUT changing all your images references to the require version is cumbersome, so that's when you use the html-loader, it will do that automatically for you.
- the previous step may cause an error immediately. The error will be something along the lines of Module parse failed: Unexpected token (1:0) You may need an appropriate loader to handle this file type. All that error means is that webpack doesn't know how to handle images. And to tell webpack how to handle something it doesn't know about, you need to use the appropriate loader. In this case, file-loader
- npm i -D file-loader
- then at our webpackconfig we need to add a new rule for this
- if we run npm run build we will now see that a new img was added to our dist folder
- npm i -D @babel/core babel-loader @babel/preset-env

## webpackconfig for development

- since we want to use sass in our project we need to add the following dependencies
- npm i -D style-loader node-sass css-loader sass-loader
- then we need to add some rules for it on our webpackconfig file
- we also need to import our main.scss file to our index.js
- since we are in development mode, it would be great to have a local dev server, so for this we are going to add webpack-dev-server
- npm i -D webpack-dev-server
- at our package.json we need to add a new script "start": "webpack-dev-server --config webpack.config.dev.js --open"
- if we run npm run start it will open a new window and we may notice that is with hot reload

## webpackconfig for production

- npm i -D mini-css-extract-plugin node-sass css-loader sass-loader
- Rather than injecting CSS into our HTML as style tags, we can use the MiniCssExtractPlugin to generate separate CSS files for us. We'll use this in our production config while still just using style-loader in our development config. With style-loader we can get a Flash of Unstyled Content (FOUC).
  FOUC happens because the browser takes a while to load JavaScript and the styles would be applied only then. And we dont want this. Separating CSS to a file of its own avoids the problem by letting the browser to manage it separately
  MiniCssExtractPlugin is a little different in how to use it, because it actually is both a plugin and a loader, so it goes in the module rules and in the plugins sections.
  Also note that we use the square brackets in our file name to dynamically set the name to the original source file's name
- at our package.json we need to add a new script "build": "webpack --config webpack.config.prod.js"
- if we run npm run build it will create a dist folder

## Setup

Install node modules

```zsh
npm install
```

Start project locally

```zsh
npm run start
```

Build styles for production

```zsh
npm run build
```
