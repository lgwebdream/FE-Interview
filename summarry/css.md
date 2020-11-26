# Css题目汇总

- [css 伪类与伪元素区别](#css-伪类与伪元素区别)
- [说一下盒子模型，以及标准情况和 IE 下的区别](#说一下盒子模型以及标准情况和-ie-下的区别)
- [Css 如何画出一个扇形，动手实现下](#css-如何画出一个扇形动手实现下)
- [iPhone 里面 Safari 上如果一个输入框 fixed 绝对定位在底部，当软键盘弹出的时候会有什么问题，如何解决](#iphone-里面-safari-上如果一个输入框-fixed-绝对定位在底部当软键盘弹出的时候会有什么问题如何解决)
- [BFC 是什么？触发 BFC 的条件是什么？有哪些应用场景？](#bfc-是什么触发-bfc-的条件是什么有哪些应用场景)
- [说一下什么是重绘重排，哪些操作会造成重绘重排](#说一下什么是重绘重排哪些操作会造成重绘重排)
- [什么情况会出现浏览器分层](#什么情况会出现浏览器分层)
- [通过 link 进来的 css 会阻塞页面渲染嘛，Js 会阻塞吗，如果会如何解决？](#通过-link-进来的-css-会阻塞页面渲染嘛js-会阻塞吗如果会如何解决)
- [使用 Css 实现一个水波纹效果](#使用-css-实现一个水波纹效果)
- [position 定位都有什么属性（不仅仅是绝对定位和相对定位/fix 定位）](#position-定位都有什么属性不仅仅是绝对定位和相对定位fix-定位)
- [说一下 Css 预处理器，Less 带来的好处？](#说一下-css-预处理器less-带来的好处)
- [Css 选择器都有什么，权重是怎么计算的](#css-选择器都有什么权重是怎么计算的)
- [布局都有什么方式，float 和 position 有什么区别](#布局都有什么方式float-和-position-有什么区别)
- [nth-child和nth-of-type 有什么区别](#nth-child和nth-type-of-有什么区别)
- [&lt;img&gt;是什么元素](#img是什么元素)
- [flex 布局，如何实现把八个元素分两行摆放](#flex-布局如何实现把八个元素分两行摆放)
- [Css 方式实现一个不知道宽高的 div 居中都有哪几种方法](#css-方式实现一个不知道宽高的-div-居中都有哪几种方法)
- [以下 css 最后是什么颜色](#以下-css-最后是什么颜色)
- [简述 Grid 布局](#简述-grid-布局)
- [动手实现一个左右固定100px，中间自适应的三列布局？(至少三种)](#动手实现一个左右固定100px中间自适应的三列布局至少三种)
- [屏幕占满和未占满的情况下，使 footer 固定在底部，尽量多种方法](#屏幕占满和未占满的情况下使-footer-固定在底部尽量多种方法)
- [Css 画一个三角形](#css-画一个三角形)
- [Css 超出省略怎么写，三行超出省略怎么写](#css-超出省略怎么写三行超出省略怎么写)
- [Css inherit、initial、unset 三者的区别](#css-inheritinitialunset-三者的区别)
- [介绍下 Flex 布局，属性都有哪些，都是干啥的](#介绍下-flex-布局属性都有哪些都是干啥的)
- [响应式布局用到的技术，移动端需要注意什么](#响应式布局用到的技术移动端需要注意什么)
- [移动端适配 1px 的问题](#移动端适配-1px-的问题)
- [居中为什么要使用 transform（为什么不使用 marginLeft/marginTop）](#居中为什么要使用-transform为什么不使用-marginleftmargintop)
- [介绍 css3 中 position:sticky](#介绍-css3-中-positionsticky)
- [清除浮动的方式](#清除浮动的方式)
- [transform 动画和直接使用 left、top 改变位置有什么优缺点](#transform-动画和直接使用-lefttop-改变位置有什么优缺点)
- [上下固定，中间滚动布局如何实现](#上下固定中间滚动布局如何实现)
- [如何实现高度自适应](#如何实现高度自适应)
- [em 和 px 的区别](#em-和-px-的区别)
- [以下选项为 css 盒模型属性有哪些？(多选题)](#以下选项为-css-盒模型属性有哪些多选题)
- [说下盒模型的区别？介绍一下标准的 CSS 盒模型？border-box 和 content-box 有什么区别？](#说下盒模型的区别介绍一下标准的-css-盒模型border-box-和-content-box-有什么区别)
- [Css 单位都有哪些？](#css-单位都有哪些)
- [Css 实现多列等高布局，要求元素实际占用的高度以多列中较高的为准](#css-实现多列等高布局要求元素实际占用的高度以多列中较高的为准)
- [一个标签的 class 样式的渲染顺序，id、class、标签、伪类的优先级](#一个标签的-class-样式的渲染顺序idclass标签伪类的优先级)
- [css 如何实现动画](#css-如何实现动画)
- [Css 如何实现一个半圆](#css-如何实现一个半圆)
- [请画出 css 盒模型，基于盒模型的原理，说明相对定位、绝对定位、浮动实现样式是如何实现的？](#请画出-css-盒模型基于盒模型的原理说明相对定位绝对定位浮动实现样式是如何实现的)
- [列举出 css 选择器有哪些分类，并至少写出三个 css 选择器之间的区别，适用场景](#列举出-css-选择器有哪些分类并至少写出三个-css-选择器之间的区别适用场景)
- [Css 实现 div 宽度自适应，宽高保持等比缩放](#css-实现-div-宽度自适应宽高保持等比缩放)
- [ul 内部除最后一个 li 以外设置右边框效果](#ul-内部除最后一个-li-以外设置右边框效果)
- [flex:1 的完整写法是？分别是什么意思？](#flex1-的完整写法是分别是什么意思)
- [行内元素和块级元素有什么区别](#行内元素和块级元素有什么区别)
- [link 和@inmport 区别](#link-和inmport-区别)
- [屏幕正中间有个元素A，元素A中有文字A，随着屏幕宽度的增加，始终需要满足下列条件](#屏幕正中间有个元素a元素a中有文字a随着屏幕宽度的增加始终需要满足下列条件)
- [怎样用 css 实现一个弹幕的效果，动手实现一下](#怎样用-css-实现一个弹幕的效果动手实现一下)

### css 伪类与伪元素区别

公司：滴滴、网易

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/18)

<br/>

### 说一下盒子模型，以及标准情况和 IE 下的区别

公司：兑吧

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/231)

<br/>

### Css 如何画出一个扇形，动手实现下

公司：头条

分类：Css、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/228)

<br/>

### iPhone 里面 Safari 上如果一个输入框 fixed 绝对定位在底部，当软键盘弹出的时候会有什么问题，如何解决

公司：快手

分类：JavaScript、Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/201)

<br/>

### BFC 是什么？触发 BFC 的条件是什么？有哪些应用场景？

公司：快手、伴鱼、网易

分类：CSS

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/194)

<br/>

### 说一下什么是重绘重排，哪些操作会造成重绘重排

公司：滴滴、伴鱼、菜鸟网络、58

分类：CSS

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/192)

<br/>

### 什么情况会出现浏览器分层

公司：伴鱼

分类：CSS

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/191)

<br/>

### 通过 link 进来的 css 会阻塞页面渲染嘛，Js 会阻塞吗，如果会如何解决？

公司：伴鱼

分类：CSS

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/190)

<br/>

### 使用 Css 实现一个水波纹效果

参考：[第二屏中的水波纹效果](https://mp.toutiao.com/auth/page/login/?redirect_url=JTJG#/?_k=1hjyly)

公司：头条

分类：Css、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/151)

<br/>

### position 定位都有什么属性（不仅仅是绝对定位和相对定位/fix 定位）

公司：头条

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/150)

<br/>

### 说一下 Css 预处理器，Less 带来的好处？

公司：头条

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/143)

<br/>

### Css 选择器都有什么，权重是怎么计算的

公司：完美世界

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/363)

<br/>

### 布局都有什么方式，float 和 position 有什么区别

公司：完美世界

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/362)

<br/>

### `nth-child`和`nth-of-type` 有什么区别

公司：网易

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/357)

<br/>

### `<img>`是什么元素

公司：网易

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/356)

<br/>

### flex 布局，如何实现把八个元素分两行摆放

公司：网易

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/355)

<br/>

### Css 方式实现一个不知道宽高的 div 居中都有哪几种方法

公司：阿里、滴滴、易车、新东方、虎扑、饿了么、爱范儿、心娱、58

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/335)

<br/>

### 以下 css 最后是什么颜色

```html
<style>
  div {
    color: red;
  }
  #title {
    color: yellow;
  }
  div.title {
    color: bule;
  }
</style>
<div class="title" id="title">abc</div>
```

公司：快手

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/296)

<br/>

### 简述 Grid 布局

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/278)

<br/>

### 动手实现一个左右固定100px，中间自适应的三列布局？(至少三种)

公司：自如、头条

分类：Css、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/275)

<br/>

### 屏幕占满和未占满的情况下，使 footer 固定在底部，尽量多种方法

分类：Css、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/256)

<br/>

### Css 画一个三角形

公司：会小二、高思教育、58

分类：Css、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/413)

<br/>

### Css 超出省略怎么写，三行超出省略怎么写

公司：虎扑

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/405)

<br/>

### Css inherit、initial、unset 三者的区别

公司：虎扑

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/404)

<br/>

### 介绍下 Flex 布局，属性都有哪些，都是干啥的

公司：阿里、虎扑、快手

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/403)

<br/>

### 响应式布局用到的技术，移动端需要注意什么

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/377)

<br/>

### 移动端适配 1px 的问题

公司：阿里

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/545)

<br/>

### 居中为什么要使用 transform（为什么不使用 marginLeft/marginTop）

公司：阿里

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/544)

<br/>

### 介绍 css3 中 position:sticky

公司：网易

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/529)

<br/>

### 清除浮动的方式

公司：头条

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/498)

<br/>

### transform 动画和直接使用 left、top 改变位置有什么优缺点

公司：有赞、腾讯应用宝

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/491)

<br/>

### 上下固定，中间滚动布局如何实现

公司：饿了么

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/449)

<br/>

### 如何实现高度自适应

公司：兑吧

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/430)

<br/>

### em 和 px 的区别

公司：兑吧

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/426)

<br/>

### 以下选项为 css 盒模型属性有哪些？(多选题)

```js
A.font
B.margin
C.padding
D.visible
E.border
```

公司：会小二

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/694)

<br/>

### 说下盒模型的区别？介绍一下标准的 CSS 盒模型？border-box 和 content-box 有什么区别？

公司：快手、会小二

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/678)

<br/>

### Css 单位都有哪些？

公司：快手

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/646)

<br/>

### Css 实现多列等高布局，要求元素实际占用的高度以多列中较高的为准

公司：快手

分类：Css、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/645)

<br/>

### 一个标签的 class 样式的渲染顺序，id、class、标签、伪类的优先级

公司：快手

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/644)

<br/>

### css 如何实现动画

公司：头条

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/628)

<br/>

### Css 如何实现一个半圆

公司：酷狗

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/615)

<br/>

### 请画出 css 盒模型，基于盒模型的原理，说明相对定位、绝对定位、浮动实现样式是如何实现的？

公司：玄武科技

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/840)

<br/>

### 列举出 css 选择器有哪些分类，并至少写出三个 css 选择器之间的区别，适用场景

公司：玄武科技

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/839)

<br/>

### Css 实现 div 宽度自适应，宽高保持等比缩放

公司：快手

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/805)

<br/>

### ul 内部除最后一个 li 以外设置右边框效果

公司：快手

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/804)

<br/>

### flex:1 的完整写法是？分别是什么意思？

公司：快手

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/803)

<br/>

### 行内元素和块级元素有什么区别

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/797)

<br/>

### link 和@inmport 区别

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/796)

<br/>

### 屏幕正中间有个元素A，元素A中有文字A，随着屏幕宽度的增加，始终需要满足下列条件

```js
/* 
  A元素垂直居中于屏幕中央
  A元素距离屏幕左右边距各10px
  A元素里面的文字A的font-size:20px；水平垂直居中
  A元素的高度始终是A元素宽度的50%；(如果搞不定可以实现为A元素的高度固定为200px)
  
  请用html及css实现
*/
```

公司：头条

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/867)

<br/>

### 怎样用 css 实现一个弹幕的效果，动手实现一下

公司：头条

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/145)

<br/>

### justify-content:space-between around 有什么区别

公司：快手

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/169)

<br/>