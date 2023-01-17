# build-a-bot

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Environments

npm run build -- --mode=staging
npm run build -- --mode=development

Must have VUE_APP prefix or NODE_ENV

## Vue Inspect to generate webpack.config.js

vue inspect --mode=production > webpack.config.js (CLI not working for some reason at the moment)
