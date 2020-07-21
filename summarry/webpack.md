# 工程化题目汇总

- [说下 webpack 的 loader 和 plugin 的区别，都使用过哪些 loader 和 plugin](#说下-webpack-的-loader-和-plugin-的区别都使用过哪些-loader-和-plugin)
- [介绍下 webpack，并说下 Webpack 的构建流程](#介绍下-webpack并说下-webpack-的构建流程)
- [说下 tree-shaking 的原理](#说下-tree-shaking-的原理)
- [讲一下 webpack 原理， loader 和 plugin，你知道哪些模块化标准，说下 cjs 和 esmodule 的区别](#讲一下-webpack-原理-loader-和-plugin你知道哪些模块化标准说下-cjs-和-esmodule-的区别)
- [Import 和 CommonJS 在 webpack 打包过程中有什么不同](#import-和-commonjs-在-webpack-打包过程中有什么不同)
- [说一下 webpack 中 css-loader 和 style-loader 的区别，file-loader 和 url-loader 的区别](#说一下-webpack-中-css-loader-和-style-loader-的区别file-loader-和-url-loader-的区别)
- [脚手架具体都做了哪些事，webpack 具体做了什么配置，怎样优化的打包大小](#脚手架具体都做了哪些事webpack-具体做了什么配置怎样优化的打包大小)
- [介绍下 Webpack 的整个生命周期](#介绍下-webpack-的整个生命周期)
- [webpack 离线缓存静态资源如何做用 localStore](#webpack-离线缓存静态资源如何做用-localstore)
- [说一下 webpack 与 gulp 的区别（源码角度）](#说一下-webpack-与-gulp-的区别源码角度)
- [A、B 两个条件组件，如何做到 webpack 只打包条件为 true 的组件，false 的组件不打包](#ab-两个条件组件如何做到-webpack-只打包条件为-true-的组件false-的组件不打包)
- [webpack 怎么处理内联 css 的](#webpack-怎么处理内联-css-的)
- [webpack 如何做异步加载](#webpack-如何做异步加载)
- [Webpack 里面的插件时怎么实现的](#webpack-里面的插件时怎么实现的)
- [dev-server 是怎么跑起来的](#dev-server-是怎么跑起来的)
- [Webpack 抽取公共文件是怎么配置的](#webpack-抽取公共文件是怎么配置的)
- [import { Button } from 'antd'，打包的时候只打包 button，分模块加载，是怎么做到的](#import--button--from-antd打包的时候只打包-button分模块加载是怎么做到的)
- [使用 import 时，webpack 对 node_modules 里的依赖会做什么](#使用-import-时webpack-对-node_modules-里的依赖会做什么)
- [前端怎么做单元测试](#前端怎么做单元测试)
- [一般怎么组织 CSS（Webpack）](#一般怎么组织-csswebpack)
- [webpack 如何配 sass，需要配哪些 loader，配 css 需要哪些 loader](#webpack-如何配-sass需要配哪些-loader配-css-需要哪些-loader)
- [如何配置把 js、css、html 单独打包成一个文件](#如何配置把-jscsshtml-单独打包成一个文件)
- [webpack 和 gulp 的优缺点](#webpack-和-gulp-的优缺点)
- [如何实现分模块打包（多入口）](#如何实现分模块打包多入口)
- [Webpack 打包时 Hash 码是怎么生成的？随机值存在一样的情况，如何避免？](#webpack-打包时-hash-码是怎么生成的随机值存在一样的情况如何避免)
- [Webpack 做了什么？使用 webpack 构建时有无做一些自定义操作？](#webpack-做了什么使用-webpack-构建时有无做一些自定义操作)
- [为什么用 gulp 打包 node](#为什么用-gulp-打包-node)
- [Webpack 为什么慢，如何进行优化](#webpack-为什么慢如何进行优化)
- [git pull -rebase 和 git pull 的区别是什么？](#git-pull--rebase-和-git-pull-的区别是什么)
- [Webpack 打包出来的体积太大，如何优化体积？](#webpack-打包出来的体积太大如何优化体积)
- [Webpack 热更新的原理](#webpack-热更新的原理)
- [一个活动项目里包含多个活动，Webpack 如何实现单独打包某个活动？](#一个活动项目里包含多个活动webpack-如何实现单独打包某个活动)
- [请说明 JavaScript 进行压缩、合并、打包实现的原理是什么？为什么需要压缩、合并、打包？分别列出一种常用工具或插件](#请说明-javascript-进行压缩合并打包实现的原理是什么为什么需要压缩合并打包分别列出一种常用工具或插件)
- [请说出前端框架设计模式(MVVM 或 MVP 又或 MVC)的含义以及原理](#请说出前端框架设计模式mvvm-或-mvp-又或-mvc的含义以及原理)
- [开发环境热更新的优化方式](#开发环境热更新的优化方式)
- [AMD 和 CMD 有哪些区别？](#amd-和-cmd-有哪些区别)
- [你是怎么配置开发环境的？](#你是怎么配置开发环境的)
- [如何实现 webpack 持久化缓存](#如何实现-webpack-持久化缓存)
- [webpack 做过哪些优化，开发效率方面、打包策略方面等等](#webpack-做过哪些优化开发效率方面打包策略方面等等)

### 说下 webpack 的 loader 和 plugin 的区别，都使用过哪些 loader 和 plugin

公司：阿里、滴滴、挖财

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/229)

<br/>

### 介绍下 webpack，并说下 Webpack 的构建流程

公司：头条、挖财

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/227)

<br/>

### 说下 tree-shaking 的原理

公司：头条

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/226)

<br/>

### 讲一下 webpack 原理， loader 和 plugin，你知道哪些模块化标准，说下 cjs 和 esmodule 的区别

公司：头条

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/216)

<br/>

### Import 和 CommonJS 在 webpack 打包过程中有什么不同

公司：完美世界

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/360)

<br/>

### 说一下 webpack 中 css-loader 和 style-loader 的区别，file-loader 和 url-loader 的区别

公司：网易

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/349)

<br/>

### 脚手架具体都做了哪些事，webpack 具体做了什么配置，怎样优化的打包大小

公司：易车

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/340)

<br/>

### 介绍下 Webpack 的整个生命周期

公司：滴滴、挖财

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/339)

<br/>

### 如何用localStoragewebpack 离线缓存静态资源？

公司：滴滴

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/322)

<br/>

### 说一下 webpack 与 gulp 的区别（源码角度）

公司：自如

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/265)

<br/>

### A、B 两个条件组件，如何做到 webpack 只打包条件为 true 的组件，false 的组件不打包

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/578)

<br/>

### webpack 怎么处理内联 css 的

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/575)

<br/>

### webpack 如何做异步加载

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/574)

<br/>

### Webpack 里面的插件时怎么实现的

公司：阿里

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/543)

<br/>

### dev-server 是怎么跑起来的

公司：阿里

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/542)

<br/>

### Webpack 抽取公共文件是怎么配置的

公司：阿里

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/541)

<br/>

### import { Button } from 'antd'，打包的时候只打包 button，分模块加载，是怎么做到的

公司：滴滴

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/517)

<br/>

### 使用 import 时，webpack 对 node_modules 里的依赖会做什么

公司：滴滴

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/516)

<br/>

### 前端怎么做单元测试

公司：挖财

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/466)

<br/>

### 一般怎么组织 CSS（Webpack）

公司：沪江

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/454)

<br/>

### webpack 如何配 sass，需要配哪些 loader，配 css 需要哪些 loader

公司：饿了么

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/451)

<br/>

### 如何配置把 js、css、html 单独打包成一个文件

公司：饿了么

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/450)

<br/>

### webpack 和 gulp 的优缺点

公司：兑吧

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/424)

<br/>

### 如何实现分模块打包（多入口）

公司：兑吧

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/422)

<br/>

### Webpack 打包时 Hash 码是怎么生成的？随机值存在一样的情况，如何避免？

公司：微医

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/599)

<br/>

### Webpack 做了什么？使用 webpack 构建时有无做一些自定义操作？

公司：微医

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/598)

<br/>

### 为什么用 gulp 打包 node

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/703)

<br/>

### Webpack 为什么慢，如何进行优化

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/701)

<br/>

### git pull -rebase 和 git pull 的区别是什么？

公司：会小二

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/679)

<br/>

### Webpack 打包出来的体积太大，如何优化体积？

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/657)

<br/>

### Webpack 热更新的原理

公司：酷狗

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/616)

<br/>

### 一个活动项目里包含多个活动，Webpack 如何实现单独打包某个活动？

公司：酷狗

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/614)

<br/>

### 请说明 JavaScript 进行压缩、合并、打包实现的原理是什么？为什么需要压缩、合并、打包？分别列出一种常用工具或插件

公司：玄武科技

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/834)

<br/>

### 请说出前端框架设计模式(MVVM 或 MVP 又或 MVC)的含义以及原理

公司：玄武科技

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/833)

<br/>

### 开发环境热更新的优化方式

公司：高思教育

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/823)

<br/>

### AMD 和 CMD 有哪些区别？

公司：58

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/815)

<br/>

### 你是怎么配置开发环境的？

公司：58

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/813)

<br/>

### 如何实现 webpack 持久化缓存

公司：乘法云

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/807)

<br/>

### webpack 做过哪些优化，开发效率方面、打包策略方面等等

公司：滴滴、快手、掌门一对一、高思教育

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/25)

<br/>

