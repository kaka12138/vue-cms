# vue-cms

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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 运行npm run build出现的问题：CSS minification error: postcss-svgo: Error in parsing SVG: Unquoted attribute value
原因：静态资源中的css文件中的svg引用必须使用双引号
问题所在：项目中引用了mui
解决：修改mui.css 和 mui.min.css中 background-image: url()将url的引用换成双引号


