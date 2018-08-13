# webpack 打包公司 jquery项目

## webpack 配置

- 安装
```npm
cnpm install webpack -D 
cnpm install webpack-cli -D 
```

- loadsh

```js
npm install --save lodash
```

- 加载css

```js
npm install --save-dev style-loader css-loader

```

- 加载图片
```js
npm install --save-dev file-loader

```

- 加载数据
```js
cnpm install --save-dev csv-loader xml-loader
```


- HtmlWebpackPlugin clean-webpack-plugin
```js
cnpm install --save-dev html-webpack-plugin
cnpm install clean-webpack-plugin --save-dev
```

- 配置文件
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

  module.exports = {
    entry: {
      app: './src/index.js'
    },
     devtool: 'inline-source-map',
     devServer: {
     contentBase: './dist',
     hot: true
    },
    module: {
      rules: [
        {
         test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
        title: 'webpack-jquery'
      }),
     new webpack.NamedModulesPlugin(),
     new webpack.HotModuleReplacementPlugin()
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };

```



# 开发
三种模式：
webpack's Watch Mode
webpack-dev-server
webpack-dev-middleware

# Tree shaking

npm install --save-dev uglifyjs-webpack-plugin


# 生产环境构建
npm install --save-dev webpack-merge

- build
  -  webpack.common.js
  -  webpack.dev.js
  -  webpack.prod.js

## 打包多个html




##path.join 与 path.resolve 的区别
1. 对于以'/'开始的路径片段，path.join只是简单的将该路径片段进行拼接，而path.resolve将以/开始的路径片段作为根目录，在此之前的路径将会被丢弃，就像是在terminal中使用cd命令一样。

```js
path.join('/a', '/b') // 'a/b'
path.resolve('/a', '/b') // '/b'
```
 

2. path.resolve总是返回一个以相对于当前的工作目录（working directory）的绝对路径。
```js
path.join('./a', './b') // 'a/b'
path.resolve('./a', './b') // '/Users/username/Projects/webpack-demo/a/b'
```

```js
__dirname：全局变量，存储的是文件所在的文件目录
__filename：全局变量，存储的是文件名
```

# less theme
