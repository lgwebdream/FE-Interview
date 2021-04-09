# 网络&与安全汇总

- [介绍chrome 浏览器的几个版本](#介绍chrome-浏览器的几个版本)
- [说一下 Http 缓存策略，有什么区别，分别解决了什么问题](#说一下-http-缓存策略有什么区别分别解决了什么问题)
- [前端安全、中间人攻击](#前端安全中间人攻击)
- [V8 机制讲解](#v8-机制讲解)
- [CDN 是什么？描述下 CDN 原理？为什么要用 CDN?](#cdn-是什么描述下-cdn-原理为什么要用-cdn)
- [PWA 是什么？对 PWA 有什么了解](#pwa-是什么对-pwa-有什么了解)
- [说一下浏览器解析 Html 文件的过程](#说一下浏览器解析-html-文件的过程)
- [从输入 URL 到页面加载全过程](#从输入-url-到页面加载全过程)
- [DNS 解析的具体过程](#dns-解析的具体过程)
- [常见的 http 请求头都有哪些，以及它们的作用](#常见的-http-请求头都有哪些以及它们的作用)
- [encoding 头都有哪些编码方式](#encoding-头都有哪些编码方式)
- [utf-8 和 asc 码有什么区别](#utf-8-和-asc-码有什么区别)
- [tcp 和 udp 有什么区别？tcp 怎样确保数据正确性？tcp 头包含什么？tcp 属于那一层？](#tcp-和-udp-有什么区别tcp-怎样确保数据正确性tcp-头包含什么tcp-属于那一层)
- [传输层和网络层分别负责什么，端口在什么层标记](#传输层和网络层分别负责什么端口在什么层标记)
- [介绍下 Https，和 http 的区别是什么？https 为什么比 http 安全？如何进行配置？](#介绍下-https和-http-的区别是什么https-为什么比-http-安全如何进行配置)
- [说一下加密握手的过程](#说一下加密握手的过程)
- [对称加密和非对称加密的区别和用处](#对称加密和非对称加密的区别和用处)
- [浏览器都有哪些进程，渲染进程中都有什么线程](#浏览器都有哪些进程渲染进程中都有什么线程)
- [说说浏览器渲染流程，分层之后在什么时候合成，什么是重排、重绘，怎样避免](#说说浏览器渲染流程分层之后在什么时候合成什么是重排重绘怎样避免)
- [什么是同源策略？什么是跨域？都有哪些方式会造成跨域？解决跨域都有什么手段？](#什么是同源策略什么是跨域都有哪些方式会造成跨域解决跨域都有什么手段)
- [什么是 CORS，CORS 需要前端配置还是后端配置？](#什么是-corscors-需要前端配置还是后端配置)
- [Http1 和 Http2 有什么区别，和 http1.1 相比，http2 都有什么特性](#http1-和-http2-有什么区别和-http11-相比http2-都有什么特性)
- [说一下 etag 和 lastmodify 的区别](#说一下-etag-和-lastmodify-的区别)
- [强缓存都有哪些方法来控制](#强缓存都有哪些方法来控制)
- [协商缓存都有哪些参数](#协商缓存都有哪些参数)
- [请求是异步的为什么会造成阻塞](#请求是异步的为什么会造成阻塞)
- [CDN 有哪些优化静态资源加载速度的机制](#cdn-有哪些优化静态资源加载速度的机制)
- [说一下 Nginx 的缓存策略，强缓存与弱缓存的区别，二者的使用场景](#说一下-nginx-的缓存策略强缓存与弱缓存的区别二者的使用场景)
- [请描述 CSRF、XSS 的基本概念、攻击原理和防御措施？](#请描述-csrfxss-的基本概念攻击原理和防御措施)
- [请描述提升页面性能的方式有哪些，如何进行首页加载优化](#请描述提升页面性能的方式有哪些如何进行首页加载优化)
- [Http 报文的请求会有几个部分？请写出 HTTP 报文的组成部分](#http-报文的请求会有几个部分请写出-http-报文的组成部分)
- [301，302，304 的区别](#301302304-的区别)
- [说一下 https 获取加密秘钥的过程](#说一下-https-获取加密秘钥的过程)
- [localstorage、sessionStorage、indexDB 和 cookie 的区别](#localstoragesessionstorageindexdb-和-cookie-的区别)
- [点击一个按钮，浏览器会做些什么](#点击一个按钮浏览器会做些什么)
- [TCP 三次握手](#tcp-三次握手)
- [LocalStorage 加密原理](#localstorage-加密原理)
- [说一下常见的状态码](#说一下常见的状态码)
- [304 页面的原理](#304-页面的原理)
- [客户端缓存有几种方式？浏览器出现 from disk、from memory 的策略是啥](#客户端缓存有几种方式浏览器出现-from-diskfrom-memory-的策略是啥)
- [什么是 http？什么是 http2？说下 http 与 http2 的工作流程](#什么是-http什么是-http2说下-http-与-http2-的工作流程)
- [客户端如何发送 http 请求](#客户端如何发送-http-请求)
- [http1.1 时如何复用 tcp 连接](#http11-时如何复用-tcp-连接)
- [介绍浏览器事件流向](#介绍浏览器事件流向)
- [cookie 放哪里，cookie 能做的事情和存在的价值](#cookie-放哪里cookie-能做的事情和存在的价值)
- [cookie 和 token 都存放在 header 里面，为什么只劫持前者](#cookie-和-token-都存放在-header-里面为什么只劫持前者)
- [cookie 的引用为了解决什么问题](#cookie-的引用为了解决什么问题)
- [403、301、302 是什么](#403301302-是什么)
- [HTTPS 怎么建立安全通道，Https 的加密过程](#https-怎么建立安全通道https-的加密过程)
- [介绍下数字签名的原理](#介绍下数字签名的原理)
- [介绍一下网络的五层模型](#介绍一下网络的五层模型)
- [介绍 SSL 与 TLS](#介绍-ssl-与-tls)
- [服务端怎么做统一的状态处理](#服务端怎么做统一的状态处理)
- [以下说法中对协议描述不正确的是？(单选题)](#以下说法中对协议描述不正确的是单选题)
- [以下哪些是 HTTP 请求中浏览器缓存机制会用到的协议头？(多选题)](#以下哪些是-http-请求中浏览器缓存机制会用到的协议头单选题)
- [请写下你对协商缓存和强缓存的理解？](#请写下你对协商缓存和强缓存的理解)
- [给出页面的加载顺序](#给出页面的加载顺序)
- [详细描述一个 http 请求从发起请求到收到响应的全部过程(越细越好)](#详细描述一个-http-请求从发起请求到收到响应的全部过程越细越好)
- [简述静态链接和动态链接的区别，并举例说明](#简述静态链接和动态链接的区别并举例说明)
- [缓存有哪些？前端缓存有哪些？怎么用？如何和后台配合](#缓存有哪些前端缓存有哪些怎么用如何和后台配合)
- [Dom tree 和 cssdom 是如何合并成 render tree 的](#dom-tree-和-cssdom-是如何合并成-render-tree-的)
- [CDN 分布式部署，如何处理用户请求最近的资源？](#cdn-分布式部署如果处理用户请求最近的资源)
- [说一下缓存有哪几种，具体都是怎么实现和比较的，缓存优先级，相互之间的对比](#说一下缓存有哪几种具体都是怎么实现和比较的缓存优先级相互之间的对比)
- [说下你对浏览器缓存理解](#说下你对浏览器缓存理解)
- [Http 连接是如何复用的](#http-连接是如何复用的)
- [301、302 的 https 被挟持怎么办？](#301302-的-https-被挟持怎么办)
- [介绍 Http2 特性，Http2 怎么确保文件同时传输不会报错](#介绍-http2-特性http2-怎么确保文件同时传输不会报错)
- [HTTP2.0的多路复⽤和HTTP1.X中的⻓连接复⽤有什么区别？](#http20的多路复和http1x中的连接复有什么区别)
- [HTTP2.0多路复⽤有多好？](#http20多路复有多好)
- [http请求由什么组成？](#http请求由什么组成)
- [列举并解释一下 http 的所有请求方法，](#列举并解释一下-http-的所有请求方法)
- [列举出在浏览器中，页面加载过程中发出了哪些事件？并画出这些事件的执行顺序？](#列举出在浏览器中页面加载过程中发出了哪些事件并画出这些事件的执行顺序)
- [请列出 HTTP/1.1 协议 Response 状态码：20x、30x、40x、50x 等各区间的含义，并说明 Action 在 Restful API 中分别使用哪些 Http 副词(action)表现出 CRUD?](#请列出-http11-协议-response-状态码20x30x40x50x-等各区间的含义并说明-action-在-restful-api-中分别使用哪些-http-副词action表现出-crud)
- [catch-control 有哪些设定值](#catch-control-有哪些设定值)

### 介绍chrome 浏览器的几个版本

公司：滴滴

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/11)

<br/>

### 说一下 Http 缓存策略，有什么区别，分别解决了什么问题

公司：滴滴、头条、网易、易车、脉脉、掌门一对一、虎扑、挖财、爱范儿

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/14)

<br/>

### 前端安全、中间人攻击

公司：滴滴、边锋

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/16)

<br/>

### V8 机制讲解

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/232)

<br/>

### CDN 是什么？描述下 CDN 原理？为什么要用 CDN?

公司：头条、滴滴、网易

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/218)

<br/>

### PWA 是什么？对 PWA 有什么了解

公司：头条、喜马拉雅

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/217)

<br/>

### 说一下浏览器解析 Html 文件的过程

公司：伴鱼

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/193)

<br/>

### 从输入 URL 到页面加载全过程

公司：头条、边锋、菜鸟网络、爱范儿、心娱

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/186)

### DNS 解析的具体过程

公司：边锋、寺库

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/184)

<br/>

### 常见的 http 请求头都有哪些，以及它们的作用

公司：阿里、边锋、喜马拉雅、玄武科技

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/183)

<br/>

### encoding 头都有哪些编码方式

公司：边锋

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/182)

<br/>

### utf-8 和 asc 码有什么区别

公司：边锋

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/181)

<br/>

### tcp 和 udp 有什么区别？tcp 怎样确保数据正确性？tcp 头包含什么？tcp 属于那一层？

公司：头条、边锋

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/180)

<br/>

### 传输层和网络层分别负责什么，端口在什么层标记

公司：边锋

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/179)

<br/>

### 介绍下 Https，和 http 的区别是什么？https 为什么比 http 安全？如何进行配置？

公司：边锋、老虎、脉脉、掌门一对一、喜马拉雅、寺库、腾讯应用宝、快手

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/178)

<br/>

### 说一下加密握手的过程

公司：边锋、老虎

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/177)

<br/>

### 对称加密和非对称加密的区别和用处

公司：边锋

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/176)

<br/>

### 浏览器都有哪些进程，渲染进程中都有什么线程

公司：老虎

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/167)

<br/>

### 说说浏览器渲染流程，分层之后在什么时候合成，什么是重排、重绘，怎样避免

公司：老虎

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/166)

<br/>

### 什么是同源策略？什么是跨域？都有哪些方式会造成跨域？解决跨域都有什么手段？

公司：阿里、滴滴、老虎、完美世界、沪江、喜马拉雅、兑吧、寺库、玄武科技

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/165)

<br/>

### 什么是 CORS，CORS 需要前端配置还是后端配置？

公司：酷狗

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/164)

<br/>

### Http1 和 Http2 有什么区别，和 http1.1 相比，http2 都有什么特性

公司：完美世界、网易、脉脉、高思教育

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/361)

<br/>

### 说一下 etag 和 lastmodify 的区别

公司：网易

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/353)

<br/>

### 强缓存都有哪些方法来控制

公司：网易、易车

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/352)

<br/>

### 协商缓存都有哪些参数

公司：网易、易车

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/351)

<br/>

### 请求是异步的为什么会造成阻塞

公司：易车

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/341)

<br/>

### CDN 有哪些优化静态资源加载速度的机制

公司：头条

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/326)

<br/>

### 说一下 Nginx 的缓存策略，强缓存与弱缓存的区别，二者的使用场景

公司：高德

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/304)

<br/>

### 请描述 CSRF、XSS 的基本概念、攻击原理和防御措施？

公司：自如、挖财、腾讯应用宝、沪江、喜马拉雅

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/274)

<br/>

### 请描述提升页面性能的方式有哪些，如何进行首页加载优化

公司：自如

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/273)

<br/>

### Http 报文的请求会有几个部分？请写出 HTTP 报文的组成部分

公司：自如、滴滴

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/)

<br/>

### 301，302，304 的区别

公司：自如

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/270)

<br/>

### 说一下 https 获取加密秘钥的过程

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/414)

<br/>

### localstorage、sessionStorage、indexDB 和 cookie 的区别

公司：掌门一对一、滴滴、兑吧、寺库

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/409)

<br/>

### 点击一个按钮，浏览器会做些什么

公司：虎扑

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/402)

<br/>

### TCP 三次握手

公司：菜鸟网络、头条

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/394)

<br/>

### LocalStorage 加密原理

公司：腾讯应用宝

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/385)

<br/>

### 说一下常见的状态码

公司：腾讯应用宝、喜马拉雅

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/383)

<br/>

### 304 页面的原理

公司：腾讯应用宝

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/381)

<br/>

### 客户端缓存有几种方式？浏览器出现 from disk、from memory 的策略是啥

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/573)

<br/>

### 什么是 http？什么是 http2？说下 http 与 http2 的工作流程

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/572)

<br/>

### 客户端如何发送 http 请求

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/571)

<br/>

### http1.1 时如何复用 tcp 连接

公司：网易

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/)

<br/>

### 介绍浏览器事件流向

公司：网易

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/527)

<br/>

### cookie 放哪里，cookie 能做的事情和存在的价值

公司：滴滴

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/514)

<br/>

### cookie 和 token 都存放在 header 里面，为什么只劫持前者

公司：滴滴

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/513)

<br/>

### cookie 的引用为了解决什么问题

公司：寺库

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/478)

<br/>

### 403、301、302 是什么

公司：喜马拉雅

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/438)

<br/>

### HTTPS 怎么建立安全通道，Https 的加密过程

公司：喜马拉雅、寺库

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/437)

<br/>

### 介绍下数字签名的原理

公司：喜马拉雅

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/435)

<br/>

### 介绍一下网络的五层模型

公司：寺库

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/781)

<br/>

### 介绍 SSL 与 TLS

公司：寺库

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/780)

<br/>

### 服务端怎么做统一的状态处理

公司：宝宝树

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/774)

<br/>

### 以下说法中对协议描述不正确的是？(单选题)

```js
A.HTTP 协议是在 TCP/IP 协议之上的应用层协议
B.HTTP 1.1 缺省支持 keep-alive
C.WebSocket 是由 Socket 发展而来的新规范
D.WebSocket 可以建立持久连接
```

公司：会小二

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/692)

<br/>

### 以下哪些是 HTTP 请求中浏览器缓存机制会用到的协议头？(多选题)

```js
A.Last-Modified
B.Etag
C.Referer
D.Authorization
```

公司：会小二

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/691)

<br/>

### 请写下你对协商缓存和强缓存的理解？

公司：会小二、58

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/680)

<br/>

### 给出页面的加载顺序

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/677)

<br/>

### 详细描述一个 http 请求从发起请求到收到响应的全部过程(越细越好)

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/669)

<br/>

### 简述静态链接和动态链接的区别，并举例说明

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/668)

<br/>

### 缓存有哪些？前端缓存有哪些？怎么用？如何和后台配合

公司：高思教育

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/656)

<br/>

### Dom tree 和 cssdom 是如何合并成 render tree 的

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/652)

<br/>

### CDN 分布式部署，如何处理用户请求最近的资源？

公司：快手

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/632)

<br/>

### 说一下缓存有哪几种，具体都是怎么实现和比较的，缓存优先级，相互之间的对比

公司：快手

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/631)

<br/>

### 说下你对浏览器缓存理解

公司：头条

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/629)

<br/>

### Http 连接是如何复用的

公司：酷狗

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/623)

<br/>

### 301、302 的 https 被挟持怎么办？

公司：网易

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/857)

<br/>

### 介绍 Http2 特性，Http2 怎么确保文件同时传输不会报错

公司：网易

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/856)

<br/>

### HTTP2.0的多路复⽤和HTTP1.X中的⻓连接复⽤有什么区别？

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/788)

<br/>

### HTTP2.0多路复⽤有多好？

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/787)

<br/>

### http请求由什么组成？

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/868)

<br/>

### 列举并解释一下 http 的所有请求方法，

公司：爱范儿、乘法云

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/851)

<br/>

### 列举出在浏览器中，页面加载过程中发出了哪些事件？并画出这些事件的执行顺序？

公司：玄武科技

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/842)

<br/>

### 请列出 HTTP/1.1 协议 Response 状态码：20x、30x、40x、50x 等各区间的含义，并说明 Action 在 Restful API 中分别使用哪些 Http 副词(action)表现出 CRUD?

公司：玄武科技

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/835)

<br/>

### catch-control 有哪些设定值

公司：58

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/816)

<br/>


