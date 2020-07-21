# Vue题目汇总

- [按要求完成题目](#按要求完成题目)
- [Redux 和 Vuex 有什么区别，说下一它们的共同思想](#redux-和-vuex-有什么区别说下一它们的共同思想)
- [说一下对 React 和 Vue 的理解，它们的异同](#说一下对-react-和-vue-的理解它们的异同)
- [对虚拟 DOM 的理解？虚拟 DOM 主要做了什么？虚拟 DOM 本身是什么？](#对虚拟-dom-的理解虚拟-dom-主要做了什么虚拟-dom-本身是什么)
- [介绍单页应用和多页应用？](#介绍单页应用和多页应用)
- [说一下 Vue3 与 Vue2 的对比](#说一下-vue3-与-vue2-的对比)
- [vue 对数组的方法做了重写的操作，如何实现对 vue2 中对数组操作的 push()方法](#vue-对数组的方法做了重写的操作如何实现对-vue2-中对数组操作的-push方法)
- [简述 Vue 的基本原理](#简述-vue-的基本原理)
- [简述 Vue 的生命周期以及每个阶段做的事](#简述-vue-的生命周期以及每个阶段做的事)
- [说一下 Vue 组件的通信方式都有哪些？(父子组件，兄弟组件，多级嵌套组件等等)](#说一下-vue-组件的通信方式都有哪些父子组件兄弟组件多级嵌套组件等等)
- [说一下 Vuex 的原理以及自己的理解](#说一下-vuex-的原理以及自己的理解)
- [Vue v-model 是如何实现的，语法糖实际是什么](#vue-v-model-是如何实现的语法糖实际是什么)
- [说一下 Vue dom diff 算法](#说一下-vue-dom-diff-算法)
- [说一下 Vue 的$nextTick 原理](#说一下-vue-的nexttick-原理)
- [说一下 vue-router 的原理](#说一下-vue-router-的原理)
- [Vue 是如何收集依赖的](#vue-是如何收集依赖的)
- [说一下 Vue 单页与多页的区别](#说一下-vue-单页与多页的区别)
- [说一下 Vue 路由实现原理](#说一下-vue-路由实现原理)
- [Vue3.0 为什么要用 proxy？是怎么用 proxy 实现数据监听的?](#vue30-为什么要用-proxy是怎么用-proxy-实现数据监听的)
- [说一下对 vue3.0 的了解，vue3.0 为什么要用代理](#说一下对-vue30-的了解vue30-为什么要用代理)
- [子组件可以直接改变父组件的数据么，说明原因](#子组件可以直接改变父组件的数据么说明原因)
- [Vue 中一次性 200 条弹幕怎么处理](#vue-中一次性-200-条弹幕怎么处理)
- [vue hooks 有哪些](#vue-hooks-有哪些)
- [介绍 Vue template 到 render 的过程](#介绍-vue-template-到-render-的过程)
- [怎么定义 vue-router 的动态路由？怎么获取传过来的动态参数？](#怎么定义-vue-router-的动态路由怎么获取传过来的动态参数)
- [下面关于 Vue 说法正确的是？(单选题)](#下面关于-vue-说法正确的是单选题)
- [为什么要用 Vuex 或者 Redux，不要说为了保存状态](#为什么要用-vuex-或者-redux不要说为了保存状态)
- [为什么 Vue data 必须是函数](#为什么-vue-data-必须是函数)
- [Vue data 中某一个属性的值发生改变后，视图会立即同步执行重新渲染吗？](#vue-data-中某一个属性的值发生改变后视图会立即同步执行重新渲染吗)
- [简述 mixin、extends 的覆盖逻辑](#简述-mixinextends-的覆盖逻辑)
- [Vue 子组件和父组件执行顺序](#vue-子组件和父组件执行顺序)
- [Vuex 和 localStorage 的区别](#vuex-和-localstorage-的区别)
- [Vue 双向绑定原理](#vue-双向绑定原理)
- [说一下路由钩子在 Vue 生命周期的体现？](#说一下路由钩子在-vue-生命周期的体现)
- [计算属性和普通属性的区别](#计算属性和普通属性的区别)
- [描述下自定义指令(你是怎么用自定义指令的)](#描述下自定义指令你是怎么用自定义指令的)
- [说一下 Vue 中所有带$的方法](#说一下-vue-中所有带的方法)
- [Vue-router 除了 router-link 怎么实现跳转](#vue-router-除了-router-link-怎么实现跳转)
- [说一下 Vue 的 keep-alive 是如何实现的，具体缓存的是什么？](#说一下-vue-的-keep-alive-是如何实现的具体缓存的是什么)

### 按要求完成题目

```js
/* 
  a)在不使用vue、react的前提下写代码解决一下问题
    一个List页面上，含有1000个条目的待办列表，现其中100项在同一时间达到了过期时间，需要在对应项的text-node里添加“已过期”文字。需要尽可能减少dom重绘次数以提升性能。
  b)尝试使用vue或react解决上述问题
*/
```

公司：爱范儿

分类：JavaScript、Vue、React、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/848)

<br/>

### Redux 和 Vuex 有什么区别，说下一它们的共同思想

公司：快手

分类：React、Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/206)

<br/>

### 说一下对 React 和 Vue 的理解，它们的异同

公司：网易、脉脉、快手

分类：React、Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/347)

<br/>

### 对虚拟 DOM 的理解？虚拟 DOM 主要做了什么？虚拟 DOM 本身是什么？

公司：有赞、微医、58

分类：React、Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/479)

<br/>

### 介绍单页应用和多页应用？

公司：寺库、海康威视

分类：React、Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/593)

<br/>

### 说一下 Vue3 与 Vue2 的对比

公司：高德

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/302)

<br/>

### vue 对数组的方法做了重写的操作，如何实现对 vue2 中对数组操作的 push()方法

公司：高德

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/307)

<br/>

### 简述 Vue 的基本原理

公司：脉脉

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/290)

<br/>

### 简述 Vue 的生命周期以及每个阶段做的事

公司：脉脉、58

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/289)

<br/>

### 说一下 Vue 组件的通信方式都有哪些？(父子组件，兄弟组件，多级嵌套组件等等)

公司：脉脉、58

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/288)

<br/>

### 说一下 Vuex 的原理以及自己的理解

公司：脉脉

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/287)

<br/>

### Vue v-model 是如何实现的，语法糖实际是什么

公司：脉脉

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/286)

<br/>

### 说一下 Vue dom diff 算法

公司：网易

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/281)

<br/>

### 说一下 Vue 的\$nextTick 原理

公司：自如

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/263)

<br/>

### 说一下 vue-router 的原理

公司：自如

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/262)

<br/>

### Vue 是如何收集依赖的

公司：自如

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/259)

<br/>

### 说一下 Vue 单页与多页的区别

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/412)

<br/>

### 说一下 Vue 路由实现原理

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/411)

<br/>

### Vue3.0 为什么要用 proxy？是怎么用 proxy 实现数据监听的?

公司：虎扑、CVTE

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/396)

<br/>

### 说一下对 vue3.0 的了解，vue3.0 为什么要用代理

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/577)

<br/>

### 子组件可以直接改变父组件的数据么，说明原因

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/576)

<br/>

### Vue 中一次性 200 条弹幕怎么处理

公司：58

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/458)

<br/>

### vue hooks 有哪些

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/705)

<br/>

### 介绍 Vue template 到 render 的过程

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/704)

<br/>

### 怎么定义 vue-router 的动态路由？怎么获取传过来的动态参数？

公司：会小二

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/690)

<br/>

### 下面关于 Vue 说法正确的是？(单选题)

```js
A.data 中某一属性的值发生改变后，视图会立即同步进行重新渲染
B.Vue 实例创建后再添加的属性，该属性改动将不会触发视图更新
C.计算属性只有在它的相关依赖发生改变时才会重新求值
D.Vue 组件的 data 选项必须是函数
```

公司：会小二

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/684)

<br/>

### 为什么要用 Vuex 或者 Redux，不要说为了保存状态

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/663)

<br/>

### 为什么 Vue data 必须是函数

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/662)

<br/>

### Vue data 中某一个属性的值发生改变后，视图会立即同步执行重新渲染吗？

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/658)

<br/>

### 简述 mixin、extends 的覆盖逻辑

公司：58

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/654)

<br/>

### Vue 子组件和父组件执行顺序

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/653)

<br/>

### Vuex 和 localStorage 的区别

公司：高思教育

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/827)

<br/>

### Vue 双向绑定原理

公司：高思教育、安居客

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/824)

<br/>

### 说一下路由钩子在 Vue 生命周期的体现？

公司：58

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/820)

<br/>

### 计算属性和普通属性的区别

公司：58

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/819)

<br/>

### 描述下自定义指令(你是怎么用自定义指令的)

公司：58

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/818)

<br/>

### 说一下 Vue 中所有带\$的方法

公司：58

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/817)

<br/>

### Vue-router 除了 router-link 怎么实现跳转

公司：安居客

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/810)

<br/>

### 说一下 Vue 的 keep-alive 是如何实现的，具体缓存的是什么？

公司：快手

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/207)

<br/>

