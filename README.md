# React boilerplate

a.k.a getting ready for development with React without the `create-react-app` command.

---

## Install modules

Start by running

```shell
npm install
```

or

```shell
yarn install
```

---

## Start the server

For frontend-only development, you can use the webpack-dev-server:

```shell
webpack-dev-server --mode development
```

If you have another server set up (e.g. some kind of *X*AMP package) or you need something more than just Http serving, then don't.

---

## Watching the files with webpack

To start watching the files for development:

```shell
webpack --watch --mode development
```

---

## Using livereload

If you are utilizing some other server and you want livereload, add the following code to the `<head>` of your document:

```html
<script src="http://localhost:35729/livereload.js"></script>
```

The exact port to use in the URL (e.g. `35729`) can be found in the console after starting the watcher.

---

## Bundling for production

To bundle for production use:

```shell
webpack --mode production
```