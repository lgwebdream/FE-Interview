# React题目汇总

- [如何配置 React-Router 实现路由切换](#如何配置-react-router-实现路由切换)
- [介绍 Redux 数据流的流程](#介绍-redux-数据流的流程)
- [Redux 如何实现多个组件之间的通信，多个组件使用相同状态如何进行管理](#redux-如何实现多个组件之间的通信多个组件使用相同状态如何进行管理)
- [React 路由的动态加载模块](#react-路由的动态加载模块)
- [多个组件之间如何拆分各自的 state，每块小的组件有自己的状态，它们之间还有一些公共的状态需要维护，这如何思考](#多个组件之间如何拆分各自的-state每块小的组件有自己的状态它们之间还有一些公共的状态需要维护这如何思考)
- [使用过的 Redux 中间件](#使用过的-redux-中间件)
- [redux 的设计思想](#redux-的设计思想)
- [React 项目中有哪些细节可以优化？实际开发中都做过哪些性能优化](#react-项目中有哪些细节可以优化实际开发中都做过哪些性能优化)
- [react 最新版本解决了什么问题 加了哪些东西](#react-最新版本解决了什么问题-加了哪些东西)
- [React 事件绑定原理](#react-事件绑定原理)
- [React 组件通信方式](#react-组件通信方式)
- [redux-saga 和 mobx 的比较](#redux-saga-和-mobx-的比较)
- [说一下 react-fiber](#说一下-react-fiber)
- [react 实现一个全局的 dialog](#react-实现一个全局的-dialog)
- [React 数据持久化有什么实践吗？](#react-数据持久化有什么实践吗)
- [使用过 mobox 吗？mobox 和 redux 有什么区别？](#使用过-mobox-吗mobox-和-redux-有什么区别)
- [React 高阶组件 renderprops hooks 有什么区别，为什么要不断迭代](#react-高阶组件-renderprops-hooks-有什么区别为什么要不断迭代)
- [说一下 React setState 原理](#说一下-react-setstate-原理)
- [说一下 React diff 算法](#说一下-react-diff-算法)
- [说一下 React 生命周期，以及都有哪些改变，为什么去掉了那几个旧的生命周期](#说一下-react-生命周期以及都有哪些改变为什么去掉了那几个旧的生命周期)
- [React key 是干嘛用的 为什么要加？key 主要是解决哪一类问题的](#react-key-是干嘛用的-为什么要加key-主要是解决哪一类问题的)
- [Redux 中异步的请求怎么处理](#redux-中异步的请求怎么处理)
- [Redux 和 Vuex 有什么区别，说下一它们的共同思想](#redux-和-vuex-有什么区别说下一它们的共同思想)
- [为什么 useState 要使用数组而不是对象](#为什么-usestate-要使用数组而不是对象)
- [说一下单向数据流有什么好处](#说一下单向数据流有什么好处)
- [说一下对 React 和 Vue 的理解，它们的异同](#说一下对-react-和-vue-的理解它们的异同)
- [说一下 React.Component 和 Ract.PureComponent 的区别](#说一下-reactcomponent-和-ractpurecomponent-的区别)
- [说一下对 React Hook 的理解，它的实现原理，和生命周期有哪些区别？](#说一下对-react-hook-的理解它的实现原理和生命周期有哪些区别)
- [说一下 React 有状态组件与无状态组件区别，以及为什么要用，它的优缺点](#说一下-react-有状态组件与无状态组件区别以及为什么要用它的优缺点)
- [说一下对 React context 的理解](#说一下对-react-context-的理解)
- [说一下对 React-redux 的理解以及它的原理，主要解决什么问题](#说一下对-react-redux-的理解以及它的原理主要解决什么问题)
- [说一下 Redux 的原理，介绍下整体的一个工作流程](#说一下-redux-的原理介绍下整体的一个工作流程)
- [React 如何避免 renderd 的触发](#react-如何避免-renderd-的触发)
- [说一下对 vnode 的理解，vnode 的引入与直接操作原生 dom 相比，哪一个相率更高，为什么](#说一下对-vnode-的理解vnode-的引入与直接操作原生-dom-相比哪一个相率更高为什么)
- [React15/16.x 的区别](#react1516x-的区别)
- [redux 请求中间件如何处理并发](#redux-请求中间件如何处理并发)
- [React 组件中怎么做事件代理？它的原理是什么？](#react-组件中怎么做事件代理它的原理是什么)
- [React 怎么做数据的检查和变化](#react-怎么做数据的检查和变化)
- [react-router 里的 Link 标签和 a 标签有什么区别](#react-router-里的-link-标签和-a-标签有什么区别)
- [React 中 Dom 结构发生变化后内部经历了哪些变化](#react-中-dom-结构发生变化后内部经历了哪些变化)
- [React 挂载的时候有 3 个组件，textComponent、composeComponent、domComponent，区别和关系，Dom 结构发生变化时怎么区分 data 的变化，怎么更新，更新怎么调度，如果更新的时候还有其他任务存在怎么处理](#react-挂载的时候有-3-个组件textcomponentcomposecomponentdomcomponent区别和关系dom-结构发生变化时怎么区分-data-的变化怎么更新更新怎么调度如果更新的时候还有其他任务存在怎么处理)
- [React 子父组件之间如何传值](#react-子父组件之间如何传值)
- [Redux 中间件是什么东西？接受几个参数？柯里化函数两端的参数具体是什么东西？](#redux-中间件是什么东西接受几个参数柯里化函数两端的参数具体是什么东西)
- [Redux 中间件· 中间件是怎么拿到 store 和 action？然后怎么处理？](#redux-中间件-中间件是怎么拿到-store-和-action然后怎么处理)
- [state 是怎么注入到组件的，从 reducer 到组件经历了什么样的过程](#state-是怎么注入到组件的从-reducer-到组件经历了什么样的过程)
- [接入 Redux 过程？绑定 connect 的过程？connect 的原理](#接入-redux-过程绑定-connect-的过程connect-的原理)
- [RN 如何调用原生的一些功能、如何和原生进行通信](#rn-如何调用原生的一些功能如何和原生进行通信)
- [react 异步渲染的概念,介绍 Time Slicing 和 Suspense](#react-异步渲染的概念介绍-time-slicing-和-suspense)
- [16.X 中 props 改变后在哪个生命周期中处理](#16x-中-props-改变后在哪个生命周期中处理)
- [如何做 RN 在安卓和 IOS 端的适配](#如何做-rn-在安卓和-ios-端的适配)
- [RN 为什么能在原生中绘制成原生组件](#rn-为什么能在原生中绘制成原生组件)
- [介绍下 React 高阶组件，和普通组件有什么区别，适用什么场景](#介绍下-react-高阶组件和普通组件有什么区别适用什么场景)
- [native 提供了什么能力给 RN](#native-提供了什么能力给-rn)
- [shouldComponentUpdate 是为了解决什么问题](#shouldcomponentupdate-是为了解决什么问题)
- [如何解决 props 层级过深的问题](#如何解决-props-层级过深的问题)
- [React 遇到性能问题一般在哪个生命周期里解决](#react-遇到性能问题一般在哪个生命周期里解决)
- [React/Redux 中哪些功能用到了哪些设计模式](#reactredux-中哪些功能用到了哪些设计模式)
- [一个对象数组，每个子对象包含一个 id 和 name，React 如何渲染出全部的 name？在哪个生命周期里写？其中有几个 name 不存在，通过异步接口获取，如何做？渲染的时候 key 给什么值？可以使用 index 吗？用 id 好还是 index 好？](#一个对象数组每个子对象包含一个-id-和-namereact-如何渲染出全部的-name在哪个生命周期里写其中有几个-name-不存在通过异步接口获取如何做渲染的时候-key-给什么值可以使用-index-吗用-id-好还是-index-好)
- [componentWillReceiveProps 的触发条件是什么](#componentwillreceiveprops-的触发条件是什么)
- [Redux 怎么实现属性传递，介绍下原理](#redux-怎么实现属性传递介绍下原理)
- [Redux 状态管理器和变量挂载到 window 中有什么区别](#redux-状态管理器和变量挂载到-window-中有什么区别)
- [React 中 setState 后发生了什么？setState 为什么默认是异步？setState 什么时候是同步？](#react-中-setstate-后发生了什么setstate-为什么默认是异步setstate-什么时候是同步)
- [为什么 3 大框架出现以后就出现很多 native（RN）框架（虚拟 DOM）](#为什么-3-大框架出现以后就出现很多-nativern框架虚拟-dom)
- [RN 有没有做热加载？RN 遇到的兼容性问题？](#rn-有没有做热加载rn-遇到的兼容性问题)
- [RN 如何实现一个原生的组件？](#rn-如何实现一个原生的组件)
- [RN 混原生和原生混 RN 有什么不同？](#rn-混原生和原生混-rn-有什么不同)
- [RN 的原理，为什么可以同时在安卓和 IOS 端运行](#rn-的原理为什么可以同时在安卓和-ios-端运行)
- [rudex 和全局管理有什么区别](#rudex-和全局管理有什么区别)
- [介绍 React 设计思路，它的理念是什么？](#介绍-react-设计思路它的理念是什么)
- [props 和 state 的区别](#props-和-state-的区别)
- [哪些方法会触发 react 重新渲染？重新渲染 render 会做些什么？](#哪些方法会触发-react-重新渲染重新渲染-render-会做些什么)
- [state 和 props 触发更新的生命周期分别有什么区别？](#state-和-props-触发更新的生命周期分别有什么区别)
- [React setState 是同步还是异步？](#react-setstate-是同步还是异步)
- [对无状态组件的理解](#对无状态组件的理解)
- [介绍箭头函数的 this](#介绍箭头函数的-this)
- [对 React 的看法，它的优缺点，使用过程中遇到的问题，如何解决的](#对-react-的看法它的优缺点使用过程中遇到的问题如何解决的)
- [React兄弟组件的通信方式？(需回答两种以上)](#react兄弟组件的通信方式需回答两种以上)
- [Fiber算法原理，相比之前的stack算法哪些方面做了优化？](#fiber算法原理相比之前的stack算法哪些方面做了优化)
- [如何实现双向绑定，并抽象成公共组件](#如何实现双向绑定并抽象成公共组件)

### 如何配置 React-Router 实现路由切换

公司：阿里、滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/553)

<br/>

### 介绍 Redux 数据流的流程

公司：阿里

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/551)

<br/>

### Redux 如何实现多个组件之间的通信，多个组件使用相同状态如何进行管理

公司：阿里

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/550)

<br/>

### React 路由的动态加载模块

公司：阿里

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/549)

<br/>

### 多个组件之间如何拆分各自的 state，每块小的组件有自己的状态，它们之间还有一些公共的状态需要维护，这如何思考

公司：阿里

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/548)

<br/>

### 使用过的 Redux 中间件

公司：阿里

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/547)

<br/>

### redux 的设计思想

公司：头条

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/546)

<br/>

### React 项目中有哪些细节可以优化？实际开发中都做过哪些性能优化

公司：滴滴、掌门一对一、网易、有赞、沪江、喜马拉雅、酷家乐、快手

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/12)

<br/>

### react 最新版本解决了什么问题 加了哪些东西

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/13)

<br/>

### React 事件绑定原理

公司：滴滴、沪江

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/23)

<br/>

### React 组件通信方式

公司：滴滴、掌门一对一、喜马拉雅、蘑菇街

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/31)

<br/>

### redux-saga 和 mobx 的比较

公司：掌门一对一

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/32)

<br/>

### 说一下 react-fiber

公司：头条、滴滴、菜鸟网络、挖财、喜马拉雅

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/33)

<br/>

### react 实现一个全局的 dialog

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/241)

<br/>

### React 数据持久化有什么实践吗？

公司：洋葱学院

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/238)

<br/>

### 使用过 mobox 吗？mobox 和 redux 有什么区别？

公司：洋葱学院

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/237)

<br/>

### React 高阶组件 renderprops hooks 有什么区别，为什么要不断迭代

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/224)

<br/>

### 说一下 React setState 原理

公司：网易

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/223)

<br/>

### 说一下 React diff 算法

公司：脉脉

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/222)

<br/>

### 说一下 React 生命周期，以及都有哪些改变，为什么去掉了那几个旧的生命周期

公司：完美世界、高德、脉脉、有赞、挖财、沪江、携程、喜马拉雅、酷家乐

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/221)

<br/>

### React key 是干嘛用的 为什么要加？key 主要是解决哪一类问题的

公司：滴滴、挖财

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/220)

<br/>

### Redux 中异步的请求怎么处理

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/219)

<br/>

### Redux 和 Vuex 有什么区别，说下一它们的共同思想

公司：快手

分类：React、Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/206)

<br/>

### 为什么 useState 要使用数组而不是对象

公司：伴鱼

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/187)

<br/>

### 说一下单向数据流有什么好处

公司：完美世界、酷家乐

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/358)

<br/>

### 说一下对 React 和 Vue 的理解，它们的异同

公司：网易、脉脉、快手

分类：React、Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/347)

<br/>

### 说一下 React.Component 和 Ract.PureComponent 的区别

公司：高德、有赞、酷家乐

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/312)

<br/>

### 说一下对 React Hook 的理解，它的实现原理，和生命周期有哪些区别？

公司：高德

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/311)

<br/>

### 说一下 React 有状态组件与无状态组件区别，以及为什么要用，它的优缺点

公司：高德

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/305)

<br/>

### 说一下对 React context 的理解

公司：脉脉、酷家乐

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/285)

<br/>

### 说一下对 React-redux 的理解以及它的原理，主要解决什么问题

公司：阿里、脉脉

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/284)

<br/>

### 说一下 Redux 的原理，介绍下整体的一个工作流程

公司：脉脉、兑吧、寺库、蘑菇街、百分点

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/283)

<br/>

### React 如何避免 renderd 的触发

公司：脉脉

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/282)

<br/>

### 说一下对 vnode 的理解，vnode 的引入与直接操作原生 dom 相比，哪一个相率更高，为什么

公司：脉脉、菜鸟网络、蘑菇街

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/280)

<br/>

### React15/16.x 的区别

公司：百分点

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/400)

<br/>

### redux 请求中间件如何处理并发

公司：网易

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/528)

<br/>

### React 组件中怎么做事件代理？它的原理是什么？

公司：网易

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/525)

<br/>

### React 怎么做数据的检查和变化

公司：网易

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/521)

<br/>

### react-router 里的 Link 标签和 a 标签有什么区别

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/520)

<br/>

### React 中 Dom 结构发生变化后内部经历了哪些变化

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/511)

<br/>

### React 挂载的时候有 3 个组件，textComponent、composeComponent、domComponent，区别和关系，Dom 结构发生变化时怎么区分 data 的变化，怎么更新，更新怎么调度，如果更新的时候还有其他任务存在怎么处理

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/510)

<br/>

### React 子父组件之间如何传值

公司：饿了么

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/509)

<br/>

### Redux 中间件是什么东西？接受几个参数？柯里化函数两端的参数具体是什么东西？

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/508)

<br/>

### Redux 中间件· 中间件是怎么拿到 store 和 action？然后怎么处理？

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/507)

<br/>

### state 是怎么注入到组件的，从 reducer 到组件经历了什么样的过程

公司：滴滴

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/506)

<br/>

### 接入 Redux 过程？绑定 connect 的过程？connect 的原理

公司：头条、宝宝树

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/497)

<br/>

### RN 如何调用原生的一些功能、如何和原生进行通信

公司：寺库、宝宝树

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/486)

<br/>

### react 异步渲染的概念,介绍 Time Slicing 和 Suspense

公司：有赞

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/485)

<br/>

### 16.X 中 props 改变后在哪个生命周期中处理

公司：有赞

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/484)

<br/>

### 如何做 RN 在安卓和 IOS 端的适配

公司：有赞

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/481)

<br/>

### RN 为什么能在原生中绘制成原生组件

公司：有赞

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/480)

<br/>

### 介绍下 React 高阶组件，和普通组件有什么区别，适用什么场景

公司：有赞、饿了么、喜马拉雅、乘法云

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/476)

<br/>

### native 提供了什么能力给 RN

公司：挖财

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/470)

<br/>

### shouldComponentUpdate 是为了解决什么问题

公司：挖财

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/468)

<br/>

### 如何解决 props 层级过深的问题

公司：挖财

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/467)

<br/>

### React 遇到性能问题一般在哪个生命周期里解决

公司：沪江

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/459)

<br/>

### React/Redux 中哪些功能用到了哪些设计模式

公司：沪江

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/457)

<br/>

### 一个对象数组，每个子对象包含一个 id 和 name，React 如何渲染出全部的 name？在哪个生命周期里写？其中有几个 name 不存在，通过异步接口获取，如何做？渲染的时候 key 给什么值？可以使用 index 吗？用 id 好还是 index 好？

公司：饿了么

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/452)

<br/>

### componentWillReceiveProps 的触发条件是什么

公司：喜马拉雅

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/441)

<br/>

### Redux 怎么实现属性传递，介绍下原理

公司：喜马拉雅

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/440)

<br/>

### Redux 状态管理器和变量挂载到 window 中有什么区别

公司：兑吧、蘑菇街

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/425)

<br/>

### React 中 setState 后发生了什么？setState 为什么默认是异步？setState 什么时候是同步？

公司：微医

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/601)

<br/>

### 为什么 3 大框架出现以后就出现很多 native（RN）框架（虚拟 DOM）

公司：微医

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/600)

<br/>

### RN 有没有做热加载？RN 遇到的兼容性问题？

公司：寺库

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/596)

<br/>

### RN 如何实现一个原生的组件？

公司：寺库

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/595)

<br/>

### RN 混原生和原生混 RN 有什么不同？

公司：寺库

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/594)

<br/>

### RN 的原理，为什么可以同时在安卓和 IOS 端运行

公司：寺库

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/782)

<br/>

### rudex 和全局管理有什么区别

公司：宝宝树

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/777)

<br/>

### 介绍 React 设计思路，它的理念是什么？

公司：蘑菇街、海风教育

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/764)

<br/>

### props 和 state 的区别

公司：酷家乐

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/756)

<br/>

### 哪些方法会触发 react 重新渲染？重新渲染 render 会做些什么？

公司：百分点

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/751)

<br/>

### state 和 props 触发更新的生命周期分别有什么区别？

公司：百分点

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/750)

<br/>

### React setState 是同步还是异步？

公司：百分点

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/749)

<br/>

### 对无状态组件的理解

公司：百分点

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/748)

<br/>

### 对 React 的看法，它的优缺点，使用过程中遇到的问题，如何解决的

公司：海风教育

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/744)

<br/>

### React兄弟组件的通信方式？(需回答两种以上)

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/786)

<br/>

### Fiber算法原理，相比之前的stack算法哪些方面做了优化？

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/785)

<br/>

### 如何实现双向绑定，并抽象成公共组件

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/784)

<br/>

