# Webpack5 新特性尝鲜实战 【第二季】🦀🦀

------

标题我们写上了**Webpack** 新特性实战尝鲜的第二季，那么肯定就有第一季了( [Webpack5.0 新特性尝鲜实战 🦀🦀【第一季】](https://mp.weixin.qq.com/s/0aJmmmrQCwylpViRb09rQA))。距离写上一篇文章已经超过了一年的时间，那时候还是**major**版，我们先来总结一下吧：

> * dist打包文件测评
> * 让人揪心的按需加载
> *  moduleIds & chunkIds得已确定
> * 饱受诟病的编译速度
> * minSize&maxSize 更好的方式表达
> *  编译器的优化
> * Node.js polyfills 自动被移除

![cmd-markdown-logo](http://img-static.yidengxuetang.com/wxapp/github-img/demo-webpack-logo.jpg)

老袁写这篇文章的时候现在的版本是 v5.0.0-beta.22，开发进度71%。如果有更多变化和新特性，我也会给大家持续输出第三季。

### 这一年还发生了啥

> 除了以上老袁写的一些新特性以外，这一年最大的新增特性就是 **Module federation** 它的出现为 `微前端`解决了最核心的组件共享的问题，这个的Google上的优秀文章就太多了，大家自行查阅吧。当然这一年老袁也又老了一岁🤤我也学不动了🤒好了接下来天也不早了，人也不少了，我们干点正事吧。

------

## 走进Webpack5 Experiments 

webpack 5中引入了experiments可选选项，以使用户能够激活和试用实验功能。虽是实验属性，可我只能说真香。

### 1. topLevelAwait 支持[顶级Await Stage 3提案](https://github.com/tc39/proposal-top-level-await)

```javascript
//demo/data.js
const data = '京程一灯';
export default data;
//demo/index.js
let output;
async function main() {
  const dynamic = await import('./data');
  output = dynamic + '🏮';
}
main();
export { output };

//执行如下代码
import { output } from './demo';
console.log(output);
// 很遗憾output是undefined
```

遗憾归遗憾，我们似乎丝毫没得办法去让他得到我们最后处理的值。当然你可以用哨兵变量不停的去询问和递归等等，但都不是一个最佳的办法，因为对于前端同学来讲async和await必须是一对。今天这种情况得到了改善。

```shell
yarn add webpack@next
#会让你选择版本 选择最新的beta版本
yarn add webpack-cli@next
```

接下来编写webpack.config.js

```javascript
module.exports = {
  experiments: {
    // 导入异步模块 import webpack会提示你打开这个属性
    importAsync: true,
    // 全靠它了topLevelAwait
    topLevelAwait: true,
  },
};

```

```javascript
//重写demo/index.js
const dynamic = await import('./data');
export const output = dynamic.default + '';
//你也可以这么写
const dynamic = import('./data');
export const output = (await dynamic).default + Math.random() + '🍊';
```

好的，接下来就是见证奇迹的时刻了。

![cmd-markdown-logo](http://img-static.yidengxuetang.com/wxapp/github-img/demo-webpack-1.jpg)
![cmd-markdown-logo](http://img-static.yidengxuetang.com/wxapp/github-img/demo-webpack-2.jpg)

我的内心突然有了丝丝的幸福感，你呢🙃可是你以为结束了，我们可以玩点更劲爆的。

```javascript
//demo02/index.js
const connectToDB = async () => {
  const data = await new Promise((r) => {
    r('京程一灯');
  });
  return data;
};
const result = await connectToDB();
let output = `${result}🍊`;
export { output };

//执行如下代码
import await { output } from './demo02';
console.log(output);
```

调整一下webpack.config.js

```javascript
module.exports = {
  experiments: {
    // 三兄弟聚齐了
    importAsync: true,
    topLevelAwait: true,
    // 支持import await
    importAwait: true,
  },
};
```

我的内心毫无波澜甚至呆滞了很久😧


### 2. 再见了file-loader、url-loader、raw-loader

废话少说还是上硬核代码吧

```css
body {
  background: url('./bg.png');
}
```

```javascript
import './demo03/index.css';
console.log('京程一灯');
```

再继续修改下webpack.config.js

```javascript
module.exports = {
    output: {
      assetModuleFilename: 'images/[name].[hash:5][ext]',
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|svg)$/,
          type: 'asset',
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
  },
  experiments: {
		asset: true,
  },
};
```

大型真香现场无疑了🔮

```shell
yarn dev
```



### 3. 丝丝顺滑的WebAssembly

```c
//一段非常简单的C代码
int add (int x, int y) {
  return x + y;
}
//然后我们把它编译成program.wasm
```
来吧，展示🎙

```javascript
//webpack4只能这样去加载program.wasm
//如果同步去加载 会报错不能把wasm当成主chunk
import('./demo04/program.wasm').then((p) => {
  console.log(p.add(4, 6));
});
//webpack5震撼来袭 
//有人说WebAssembly这玩意也没人用啊？那啥 🛏 晚安
import { add } from './demo03/program';
console.log(add(4, 6));
```

继续修改webpack.config.js，应该不用老袁继续解释了。

```javascript
module.exports = {
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true,
  },
};
```

### 4. 我的mjs能管不？能

![cmd-markdown-logo](http://img-static.yidengxuetang.com/wxapp/github-img/demo-webpack-5.jpg)

```javascript
//demo05/index.mjs
const data = '京程一灯';
export default data;
//运行一下代码
import data from './demo5';
console.log(data);
```
修改webpack.config.js
```
module.exports = {
  experiments: {
     mjs: true,
  },
};
```

### 5. outputModule是啥？

| 属性                 | 值     |
| -------------------- | :----- |
| outputModule         | true   |
| output.libraryTarget | module |

这个属性有什么用呢，我们编写类库的时候会经常使用到它，他可以帮助我们完成生成的代码的模块标准，那么设置outputModule为true以后和不设置的区别在哪呢？看图说话吧（如名字所示丢掉了闭包把自己变成了module）。

![cmd-markdown-logo](http://img-static.yidengxuetang.com/wxapp/github-img/demo-webpck-3.jpg)

### 6. 最后来张全家福吧
![cmd-markdown-logo](http://img-static.yidengxuetang.com/wxapp/github-img/demo-webpack-4.jpg)


---

作者 老袁    
2020 年 07月 15日    
