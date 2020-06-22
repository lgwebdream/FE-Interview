# 每日一题汇总

### Day1:请写出下面代码执行的的结果

```js
console.log(1);
setTimeout(() => {
  console.log(2);
  process.nextTick(() => {
    console.log(3);
  });
  new Promise((resolve) => {
    console.log(4);
    resolve();
  }).then(() => {
    console.log(5);
  });
});
new Promise((resolve) => {
  console.log(7);
  resolve();
}).then(() => {
  console.log(8);
});
process.nextTick(() => {
  console.log(6);
});
setTimeout(() => {
  console.log(9);
  process.nextTick(() => {
    console.log(10);
  });
  new Promise((resolve) => {
    console.log(11);
    resolve();
  }).then(() => {
    console.log(12);
  });
});
```
```js
// 答案
node <11:1 7 6 8 2 4 9 11 3 10 5 12
node>=11:1 7 6 8 2 4 3 5 9 11 10 12

// 解析
1.宏任务和微任务

宏任务：macrotask,包括setTimeout、setInerVal、setImmediate(node独有)、requestAnimationFrame(浏览器独有)、I/O、UI rendering(浏览器独有)

微任务：microtask,包括process.nextTick(Node独有)、Promise.then()、Object.observe、MutationObserver

2.Promise构造函数中的代码是同步执行的，new Promise()构造函数中的代码是同步代码，并不是微任务

3.Node.js中的EventLoop执行宏队列的回调任务有**6个阶段**

（1）timers阶段：这个阶段执行setTimeout和setInterval预定的callback

（2）I/O callback阶段：执行除了close事件的callbacks、被timers设定的callbacks、setImmediate()设定的callbacks这些之外的callbacks

（3）idle, prepare阶段：仅node内部使用

（4）poll阶段：获取新的I/O事件，适当的条件下node将阻塞在这里

（5）check阶段：执行setImmediate()设定的callbacks

（6）close callbacks阶段：执行socket.on('close', ....)这些callbacks

4.NodeJs中宏队列主要有4个

（1）Timers Queue

（2）IO Callbacks Queue

（3）Check Queue

（4）Close Callbacks Queue

这4个都属于宏队列，但是在浏览器中，可以认为只有一个宏队列，所有的macrotask都会被加到这一个宏队列中，但是在NodeJS中，不同的macrotask会被放置在不同的宏队列中。

5.NodeJS中微队列主要有2个

（1）Next Tick Queue：是放置process.nextTick(callback)的回调任务的

（2）Other Micro Queue：放置其他microtask，比如Promise等

在浏览器中，也可以认为只有一个微队列，所有的microtask都会被加到这一个微队列中，但是在NodeJS中，不同的microtask会被放置在不同的微队列中。

6.Node.js中的EventLoop过程

（1）执行全局Script的同步代码

（2）执行microtask微任务，先执行所有Next Tick Queue中的所有任务，再执行Other Microtask Queue中的所有任务

（3）开始执行macrotask宏任务，共6个阶段，从第1个阶段开始执行相应每一个阶段macrotask中的所有任务，注意，这里是所有每个阶段宏任务队列的所有任务，在浏览器的Event Loop中是只取宏队列的第一个任务出来执行，每一个阶段的macrotask任务执行完毕后，开始执行微任务，也就是步骤2

（4）Timers Queue -> 步骤2 -> I/O Queue -> 步骤2 -> Check Queue -> 步骤2 -> Close Callback Queue -> 步骤2 -> Timers Queue ......

（5）这就是Node的Event Loop

7.Node 11.x新变化

现在node11在timer阶段的setTimeout,setInterval...和在check阶段的immediate都在node11里面都修改为一旦执行一个阶段里的一个任务就立刻执行微任务队列。为了和浏览器更加趋同.
```

分类：JavaScript

[答案&解析]()

<br/>

### Day2:写出执行结果

```js
function side(arr) {
  arr[0] = arr[2];
}
function a(a, b, c = 3) {
  c = 10;
  side(arguments);
  return a + b + c;
}
a(1, 1, 1);
```

```js
// 答案
12

// 解析
arguments 中 c 的值还是 1 不会变成 10，  
因为 a 函数加了默认值，就按 ES 的方式解析，ES6 是有块级作用域的，所以 c 的值是不会改变的
```

分类：JavaScript

[答案&解析]()

<br/>

### Day3:写出执行结果

```js
var min = Math.min();
max = Math.max();
console.log(min < max);
```

```js
// 答案
false

// 解析
按常规的思路，这段代码应该输出 true，毕竟最小值小于最大值。但是却输出 false  
MDN 相关文档是这样解释的  
Math.min 的参数是 0 个或者多个，如果多个参数很容易理解，返回参数中最小的。如果没有参数，则返回 Infinity，无穷大。  
而 Math.max 没有传递参数时返回的是-Infinity.所以输出 false  

```

分类：JavaScript

[答案&解析]()

<br/>



### Day4:写出执行结果,并解释原因

```js
var a = 1;
(function a () {
    a = 2;
    console.log(a);
})();

```

```js
// 答案
ƒ a () {
    a = 2;
    console.log(a);
}

// 解析
立即调用的函数表达式（IIFE） 有一个 自己独立的 作用域，如果函数名称与内部变量名称冲突，就会永远执行函数本身；所以上面的结果输出是函数本身；
```

分类：JavaScript

[答案&解析]()

<br/>

### Day5:写出执行结果,并解释原因

```js
var a = [0];
if (a) {
  console.log(a == true);
} else {
  console.log(a);
}
```

```js
// 答案
false

// 解析
1）当 a 出现在 if 的条件中时，被转成布尔值，而 Boolean([0])为 true,所以就进行下一步判断 a == true,在进行比较时，[0]被转换成了 0，所以 0==true 为 false
数组从非 primitive 转为 primitive 的时候会先隐式调用 join 变成“0”，string 和 boolean 比较的时候，两个都先转为 number 类型再比较，最后就是 0==1 的比较了

var a = [1];
if (a) {
  console.log(a == true);
} else {
  console.log(a);
}
// true

!![] //true 空数组转换为布尔值是 true,  
!![0]//true 数组转换为布尔值是 true  
[0] == true;//false 数组与布尔值比较时却变成了 false  
Number([])//0  
Number(false)//0  
Number(['1'])//1

2）所以当 a 出现在 if 的条件中时，被转成布尔值，而 Boolean([0])为 true,所以就进行下一步判断 a == true,在进行比较时，js 的规则是：
①如果比较的是原始类型的值，原始类型的值会转成数值再进行比较
1 == true  //true   1 === Number(true)
'true' == true //false Number('true')->NaN  Number(true)->1
'' = 0//true
'1' == true//true  Number('1')->1
②对象与原始类型值比较，对象会转换成原始类型的值再进行比较。
③undefined和null与其它类型进行比较时，结果都为false，他们相互比较时结果为true。
```

### Day6:写出执行结果,并解释原因

```js
(function () {
  var a = (b = 5);
})();

console.log(b);
console.log(a);
```

```js
// 答案
5 Error, a is not defined

// 解析
在这个立即执行函数表达式（IIFE）中包括两个赋值操作，其中`a`使用`var`关键字进行声明，因此其属于函数内部的局部变量（仅存在于函数中），相反，`b`被分配到全局命名空间。
另一个需要注意的是，这里没有在函数内部使用[严格模式](http://cjihrig.com/blog/javascripts-strict-mode-and-why-you-should-use-it/)(`use strict`;)。如果启用了严格模式，代码会在输出 b 时报错`Uncaught ReferenceError: b is not defined`,需要记住的是，严格模式要求你显式的引用全局作用域。因此，你需要写成：
(function () {
  "use strict";
  var a = (window.b = 5);
})();
console.log(b);

再看一个

(function() {
   'use strict';
   var a = b = 5;
})();
 
console.log(b);  //Uncaught ReferenceError: b is not defined

//---------------------------
  (function() {
   'use strict';
   var a = window.b = 5;
})();
 
console.log(b);  // 5
```

分类：JavaScript

[答案&解析]()

<br/>

### Day7:写出执行结果,并解释原因

```js
var fullname = 'a';
var obj = {
   fullname: 'b',
   prop: {
      fullname: 'c',
      getFullname: function() {
         return this.fullname;
      }
   }
};
 
console.log(obj.prop.getFullname()); // c
var test = obj.prop.getFullname;
console.log(test());  // a
```

```js
// 答案
c a

// 解析
原因在于`this`指向的是函数的执行环境，`this`取决于其被谁调用了，而不是被谁定义了。
对第一个`console.log()`语句而言，`getFullName()`是作为`obj.prop`对象的一个方法被调用的，因此此时的执行环境应该是这个对象。另一方面，但`getFullName()`被分配给`test`变量时，此时的执行环境变成全局对象（`window`），原因是`test`是在全局作用域中定义的。因此，此时的`this`指向的是全局作用域的`fullname`变量，即a。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day8:写出执行结果,并解释原因

```js
var company = {
    address: 'beijing'
}
var yideng = Object.create(company);
delete yideng.address
console.log(yideng.address);
```

```js
// 答案
beijing

// 解析
这里的 yideng 通过 prototype 继承了 company的 address。yideng自己并没有address属性。所以delete操作符的作用是无效的。

// 知识点
1.delete使用原则：delete 操作符用来删除一个对象的属性。
2.delete在删除一个不可配置的属性时在严格模式和非严格模式下的区别:
（1）在严格模式中，如果属性是一个不可配置（non-configurable）属性，删除时会抛出异常;
（2）非严格模式下返回 false。
3.delete能删除隐式声明的全局变量：这个全局变量其实是global对象(window)的属性
4.delete能删除的：
（1）可配置对象的属性（2）隐式声明的全局变量 （3）用户定义的属性 （4）在ECMAScript 6中，通过 const 或 let 声明指定的 "temporal dead zone" (TDZ) 对 delete 操作符也会起作用
delete不能删除的：
（1）显式声明的全局变量 （2）内置对象的内置属性 （3）一个对象从原型继承而来的属性
5.delete删除数组元素：
（1）当你删除一个数组元素时，数组的 length 属性并不会变小，数组元素变成undefined
（2）当用 delete 操作符删除一个数组元素时，被删除的元素已经完全不属于该数组。
（3）如果你想让一个数组元素的值变为 undefined 而不是删除它，可以使用 undefined 给其赋值而不是使用 delete 操作符。此时数组元素是在数组中的
6.delete 操作符与直接释放内存（只能通过解除引用来间接释放）没有关系。

// 其它例子
// 下面代码输出什么？
var output = (function(x){
    delete x;
    return x;
})(0);
console.log(output);
// 答案：0，`delete` 操作符是将object的属性删去的操作。但是这里的 `x` 是并不是对象的属性， `delete` 操作符并不能作用。

// 下面代码输出什么？
var x = 1;
var output = (function(){
    delete x;
    return x;
})();
console.log(output);
// 答案：输出是 1。delete 操作符是将object的属性删去的操作。但是这里的 x 是并不是对象的属性， delete 操作符并不能作用。

// 下面代码输出什么?
x = 1;
var output = (function(){
    delete x;
    return x;
})();
console.log(output);
// 答案：报错 VM548:1 Uncaught ReferenceError: x is not defined,

// 下面代码输出什么？
var x = { foo : 1};
var output = (function(){
    delete x.foo;
    return x.foo;
})();
console.log(output);
// 答案：输出是 undefined。x虽然是全局变量，但是它是一个object。delete作用在x.foo上，成功的将x.foo删去。所以返回undefined
```

分类：JavaScript

[答案&解析]()

<br/>

### Day9:写出执行结果,并解释原因

```js
var foo = function bar(){ return 12; };
console.log(typeof bar());  
```

```js
// 答案
输出是抛出异常，bar is not defined。

// 解析
这种命名函数表达式函数只能在函数体内有效
var foo = function bar(){ 
    // foo is visible here 
    // bar is visible here
    console.log(typeof bar()); // Work here :)
};
// foo is visible here
// bar is undefined here
```

分类：JavaScript

[答案&解析]()

<br/>

### Day10:写出执行结果,并解释原因

```js
var x=1;
if(function f(){}){
    x += typeof f;
}
console.log(x)
```

```js
// 答案
1 undefined

// 解析
条件判断为假的情况有：0，false，''，null，undefined，未定义对象。函数声明写在运算符中，其为true，但放在运算符中的函数声明在执行阶段是找不到的。另外，对未声明的变量执行typeOf不会报错，会返回undefined
```

分类：JavaScript

[答案&解析]()

<br/>

### Day11:写出执行结果,并解释原因

```js
function f(){
      return f;
 }
 console.log(new f() instanceof f);
```

```js
// 答案
false

// 解析
a instanceof b 用于检测a是不是b的实例。如果题目f中没有return f,则答案明显为true;而在本题中new f()其返回的结果为f的函数对象，其并不是f的一个实例。
function f(){
     
 }
 console.log(new f() instanceof f);
// 答案：true
```

分类：JavaScript

[答案&解析]()

<br/>

### Day12:写出执行结果,并解释原因

```js
var foo = {
        bar: function(){
            return this.baz;
        },
         baz:1
    }
console.log(typeof (f=foo.bar)());
```

```js
// 答案
undefined

// 解析
将foo.bar赋值给f,相当于f(),故其this指向window
```

分类：JavaScript

[答案&解析]()

<br/>

### Day13:关于AMD、CMD规范区别说法正确的是？（多选）

```js
关于AMD、CMD规范区别说法正确的是？（多选）

A.AMD规范：是 RequireJS在推广过程中对模块定义的规范化产出的
B.CMD规范：是SeaJS 在推广过程中对模块定义的规范化产出的
C.CMD 推崇依赖前置;AMD 推崇依赖就近
D.CMD 是提前执行;AMD 是延迟执行
E.AMD性能好,因为只有用户需要的时候才执行;CMD用户体验好,因为没有延迟,依赖模块提前执行了
```

```js
// 答案
A B 

// 解析
C.CMD 推崇依赖就近;AMD 推崇依赖前置
D.CMD 是延迟执行;AMD 是提前执行
E.CMD性能好,因为只有用户需要的时候才执行;AMD用户体验好,因为没有延迟,依赖模块提前执行了
```

分类：JavaScript

[答案&解析]()

<br/>

### Day14:关于SPA单页页面的理解正确的是?

```js
关于SPA单页页面的理解正确的是?

A.用户体验好、快，但是内容的改变需要重新加载整个页面，会造成不必要的跳转和重复渲染；
B.前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；
C.初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；
D.前进后退路由管理需要使用浏览器的前进后退功能
E.SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。
```

```js
// 答案
B C  E

// 解析
SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。

// SPA优点
- 用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；
- 基于上面一点，SPA 相对对服务器压力小；
- 前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；

// SPA缺点
- 初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；
- 前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；
- SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。
```

分类：Vue、React

[答案&解析]()

<br/>

### Day15:下面对Vue.js中keep-alive的理解正确的是？（多选）

```js
下面对Vue.js中keep-alive的理解正确的是？（多选）

A.一般结合路由和动态组件一起使用，用于缓存组件；
B.提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 include  的优先级比 exclude 高；
C.对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。
D.keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，但是不能避免重新渲染

```

```js
// 答案
A C

// 解析
B: include的优先级比 exclude 低；
D：能避免重新渲染
```

分类：Vue

[答案&解析]()

<br/>

### Day16:关于Vue.js虚拟DOM的优缺点说法正确的是？（多选）

```js
关于Vue.js虚拟DOM的优缺点说法正确的是？（多选）

A.可以保证性能下限，比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；
B.无需手动操作DOM，不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；
C.可以进行极致优化： 虚拟 DOM + 合理的优化，可以使性能达到极致
D.可以跨平台，虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。
```

```js
// 答案
A B D

// 解析
1）优点
- **保证性能下限：** 框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；
- **无需手动操作 DOM：** 我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；
- **跨平台：** 虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。

2）缺点
**无法进行极致优化：** 虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。比如VScode采用直接手动操作DOM的方式进行极端的性能优化
```

分类：Vue

[答案&解析]()

<br/>

### Day17:下面代码输出什么？

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

```js
// 答案
0 1 2

// 解析
使用`let`关键字声明变量`i`：使用`let`（和`const`）关键字声明的变量是具有块作用域的（块是`{}`之间的任何东西）。 在每次迭代期间，`i`将被创建为一个新值，并且每个值都会存在于循环内的块级作用域。

// 下面代码输出什么
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
// 答案：3 3 3，由于JavaScript中的事件执行机制，setTimeout函数真正被执行时，循环已经走完。 由于第一个循环中的变量i是使用var关键字声明的，因此该值是全局的。 在循环期间，我们每次使用一元运算符++都会将i的值增加1。 因此在第一个例子中，当调用setTimeout函数时，i已经被赋值为3。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day18:写出执行结果,并解释原因

```js
const num = {
  a: 10,
  add() {
    return this.a + 2;
  },
  reduce: () => this.a -2;
};
console.log(num.add());
console.log(num.reduce());
```

```js
// 答案
12 NaN

// 解析
注意，add是普通函数，而reduce是箭头函数。对于箭头函数，`this`关键字指向是它所在上下文（定义时的位置）的环境，与普通函数不同！ 这意味着当我们调用reduce时，它不是指向num对象，而是指其定义时的环境（window）。没有值a属性，返回`undefined`。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day19:写出执行结果,并解释原因

```js
const person = { name: "yideng" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}
console.log(sayHi.call(person, 5));
console.log(sayHi.bind(person, 5));
```

```js
// 答案
yideng is 21     ƒ sayHi(age) {return `${this.name} is ${age}`;}

// 解析
使用两者，我们可以传递我们想要`this`关键字引用的对象。 但是，`.call`方法会立即执行！

`.bind`方法会返回函数的拷贝值，但带有绑定的上下文！ 它不会立即执行。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day20:写出执行结果,并解释原因

```js
["1", "2", "3"].map(parseInt);
```

```js
// 答案
[1,NaN,NaN]

// 解析
Array.prototype.map()
array.map(callback[, thisArg])
callback函数的执行规则
参数：自动传入三个参数
currentValue（当前被传递的元素）；
index（当前被传递的元素的索引）；
array（调用map方法的数组）

parseInt方法接收两个参数
第三个参数["1", "2", "3"]将被忽略。parseInt方法将会通过以下方式被调用
parseInt("1", 0)
parseInt("2", 1)
parseInt("3", 2)

parseInt的第二个参数radix为0时，ECMAScript5将string作为十进制数字的字符串解析；
parseInt的第二个参数radix为1时，解析结果为NaN；
parseInt的第二个参数radix在2—36之间时，如果string参数的第一个字符（除空白以外），不属于radix指定进制下的字符，解析结果为NaN。
parseInt("3", 2)执行时，由于"3"不属于二进制字符，解析结果为NaN。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day21:写出执行结果,并解释原因

```js
[typeof null, null instanceof Object]
```

```js
// 答案
 [object, false]
 
// 解析
typeof 返回一个表示类型的字符串.
typeof 的结果列表
}Undefined   "undefined" 
Null        "object" 
Boolean     "boolean" 
Number      "number" 
String      "string"
Symbol      "symbol" 
Function   "function" 
Object      "object"

instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上.
```

分类：JavaScript

[答案&解析]()

<br/>

### Day22:写出执行结果,并解释原因

```js
function f() {}
const a = f.prototype,b = Object.getPrototypeOf(f)
console.log(a === b);
```

```js
// 答案
false

// 解析
f.prototype 是使用使用 new 创建的 f 实例的原型. 而 Object.getPrototypeOf 是 f 函数的原型.
a === Object.getPrototypeOf(new f()) // true 
b === Function.prototype // true
```

分类：JavaScript

[答案&解析]()

<br/>

### Day23:写出执行结果,并解释原因

```js
function showCase(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('undefined');
        break;
    default:
        console.log('Do not know!');
    }
}
showCase(new String('A'));
```

```js
// 答案
 'Do not know!'
 
// 解析
switch 是严格比较, String 实例和 字符串不一样.
var str1 = 'str';
var str2 = new String('str');
console.log(typeof str1); // "string"
console.log(typeof str2); //"object"
```

分类：JavaScript

[答案&解析]()

<br/>

### Day24:选择正确的答案

```js
console.log([2,1,0].reduce(Math.pow));
console.log([].reduce(Math.pow));

/ *
A. 2 报错
B. 2 NaN
C. 1 报错
D. 1 NaN
*/
```

```js
// 答案
C

// 解析
arr.reduce(callback[, initialValue])
reduce接受两个参数, 一个回调, 一个初始值
回调函数接受四个参数 previousValue, currentValue, currentIndex, array
需要注意的是 If the array is empty and no initialValue was provided, TypeError would be thrown.
所以第二个会报异常. 第一个表达式等价于 Math.pow(2, 1) => 2; Math.pow(2, 0) =>1
```

分类：JavaScript

[答案&解析]()

<br/>

### Day25:请问变量a会被GC吗

```js
function test(){
    var a = 1;
    return function(){
        eval("");
    }
}
test();
```

```js
// 答案
不会

// 解析
因为eval会欺骗词法作用域，例如function test(){eval("var a = 1"},创建了一个a变量，不确定eval是否对a进行了引用，所以为了保险，不对其进行优化。相对，try catch,with也不会被回收，with会创建新的作用域。  
```

分类：JavaScript

[答案&解析]()

<br/>

### Day26:写出执行结果,并解释原因

```js
const value  = 'Value is' + !!Number(['0']) ? 'yideng' : 'undefined';
console.log(value);
```

```js
// 答案
yideng

// 解析
+优先级大于？
所以原题等价于 'Value is false' ? 'yideng' : undefined'' 而不是 'Value is' + (false ? 'yideng' : 'undefined')
```

分类：JavaScript

[答案&解析]()

<br/>

### Day27:写出执行结果,并解释原因

```js
var arr = [0,1];
arr[5] = 5;
newArr = arr.filter(function(x) { return x === undefined;});
console.log(newArr.length);
```

```js
// 答案
0

// 解析
`filter` 为数组中的每个元素调用一次 `callback` 函数，并利用所有使得 `callback` 返回 true 或[等价于 true 的值](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)的元素创建一个新数组。`callback` 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。那些没有通过 `callback` 测试的元素会被跳过，不会被包含在新数组中。
也就是说 从 2-4 都是没有初始化的'坑'!, 这些索引并不存在与数组中. 在 array 的函数调用的时候是会跳过这些'坑'的.
```

分类：JavaScript

[答案&解析]()

<br/>

### Day28:写出执行结果,并解释原因(以最新谷歌浏览器为准)

```js
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
	console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');
```

```js
// 答案：
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout

// 解析：
知识点：
考察的是js中的事件循环和回调队列。注意以下几点
1.`Promise`优先于`setTimeout`宏任务。所以，`setTimeout`回调会在最后执行。
2.`Promise`一旦被定义，就会立即执行
3.`Promise`的`reject`和`resolve`是异步执行的回调。所以，`resolve()`会被放到回调队列中，在主函数执行完和`setTimeout`前调用。
4.`await`执行完后，会让出线程。`async`标记的函数会返回一个`Promise`对象

// 迷惑点：
async function async1() {
	console.log('async1 start');
	await async2();
	console.log('async1 end');
}
async function async2() {
	console.log('async2');
}
// 相当于
function async1() {
	return new Promise((resolve,reject)=>{
		console.log('async1 start');
		async1().then((result)=>{
			console.log('async1 end');
		})
       resolve()
	})
}
function async2() {
	return new Promise((resolve)=>{
		console.log('async2');
		resolve()
	})
}

// 执行流程分析
1.首先，事件循环从宏任务(macrotask)队列开始，这个时候，宏任务队列中，只有一个script(整体代码)任务；从宏任务队列中取一个任务出来执行。
a.首先执行console.log('script start') ，输出 'script start' 。
b.遇到setTimeout 把 console.log('setTimeout') 放到macroTask队列中。
c.执行async1()， 输出 'async1 start' 和 'async2' ，把 console.log('async1 end') 放到micro 队列中。
d.执行到promise ， 输出 'promise1' ， 把 console.log('promise2') 放到micro 队列中。
e.执行 console.log('script end') 。输出 'script end'

2.macrotask 执行完会执行microtask ，把 microtask quene 里面的 microtask 全部拿出来一次性执行完，所以会输出 ‘async1 end’ 和 ‘ promise2’

3.开始新一轮事件循环，去除一个macrotask执行，所以会输出 “setTimeout”。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day29:下面代码中 a 在什么情况下会打印 1

```js
var a = ?;
if(a == 1 && a== 2 && a== 3){
 	console.log(1);
}
```

```js
// 答案&解析
比较操作涉及多不同类型的值时候，会涉及到很多隐式转换，其中规则繁多即便是经验老道的程序员也没办法完全记住，特别是用到 `==` 和 `!=` 运算时候。所以一些团队规定禁用 `==` 运算符换用`===` 严格相等。

// 答案一
var aﾠ = 1;
var a = 2;
var ﾠa = 3;
if(aﾠ==1 && a== 2 &&ﾠa==3) {
    console.log("1")
}
/*
	考察你的找茬能力，注意if里面的空格，它是一个Unicode空格字符，不被ECMA脚本解释为空格字符(这意味着它是标识符的有效字符)。所以它可以解释为
  var a_ = 1;
  var a = 2;
  var _a = 3;
  if(a_==1 && a== 2 &&_a==3) {
      console.log("1")
  }
*/

//答案二
var a = {
  i: 1,
  toString: function () {
    return a.i++;
  }
}
if(a == 1 && a == 2 && a == 3) {
  console.log('1');
}
/*
	如果原始类型的值和对象比较，对象会转为原始类型的值，再进行比较。
	对象转换成原始类型的值，算法是先调用valueOf方法；如果返回的还是对象，再接着调用toString方法。
*/

// 答案三
var a = [1,2,3];
a.join = a.shift;
console.log(a == 1 && a == 2 && a == 3);
/*
	比较巧妙的方式，array也属于对象，
	对于数组对象，toString 方法返回一个字符串，该字符串由数组中的每个元素的 toString() 返回值经调用 join() 方法连接（由逗号隔开）组成。
	数组 toString 会调用本身的 join 方法，这里把自己的join方法该写为shift,每次返回第一个元素，而且原数组删除第一个值，正好可以使判断成立
*/


// 答案四
var i = 0;
with({
  get a() {
    return ++i;
  }
}) {
  if (a == 1 && a == 2 && a == 3)
    console.log("1");
}
/*
	with 也是被严重建议不使用的对象，这里也是利用它的特性在代码块里面利用对象的 get 方法动态返回 i.
*/


// 答案五
var val = 0;
Object.defineProperty(window, 'a', {
  get: function() {
    return ++val;
  }
});
if (a == 1 && a == 2 && a == 3) {
  console.log('1');
}
/*
	全局变量也相当于 window 对象上的一个属性，这里用defineProperty 定义了 a的 get 也使得其动态返回值。和with 有一些类似。
*/


// 答案六
let a = {[Symbol.toPrimitive]: ((i) => () => ++i) (0)};
if (a == 1 && a == 2 && a == 3) {
  console.log('1');
}
/*
	ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。我们之前在定义类的内部私有属性时候习惯用 __xxx ,这种命名方式避免别人定义相同的属性名覆盖原来的属性，有了 Symbol  之后我们完全可以用 Symbol值来代替这种方法，而且完全不用担心被覆盖。
	除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。Symbol.toPrimitive就是其中一个，它指向一个方法，表示该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。这里就是改变这个属性，把它的值改为一个 闭包 返回的函数。
*/

// 业务中一般不会写出这种代码,重点还是知识点的考察
```

分类：JavaScript

[答案&解析]()

<br/>

### Day30:写出执行结果,并解释原因

```js
const obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)
```

```js
// 答案
Object(4) [empty × 2, 1, 2, splice: ƒ, push: ƒ]

// 涉及知识点：
1.类数组（ArrayLike）：一组数据，由数组来存，但是如果要对这组数据进行扩展，会影响到数组原型，ArrayLike的出现则提供了一个中间数据桥梁，ArrayLike有数组的特性， 但是对ArrayLike的扩展并不会影响到原生的数组。

2.push方法：push 方法有意具有通用性。该方法和 call() 或 apply() 一起使用时，可应用在类似数组的对象上。push 方法根据 length 属性来决定从哪里开始插入给定的值。如果 length 不能被转成一个数值，则插入的元素索引为 0，包括 length 不存在时。当 length 不存在时，将会创建它。
唯一的原生类数组（array-like）对象是 Strings，尽管如此，它们并不适用该方法，因为字符串是不可改变的。

3.对象转数组的方式：Array.from()、splice()、concat()等

// 解析：
这个obj中定义了两个key值，分别为splice和push分别对应数组原型中的splice和push方法，因此这个obj可以调用数组中的push和splice方法，调用对象的push方法：push(1)，因为此时obj中定义length为2，所以从数组中的第二项开始插入，也就是数组的第三项（下表为2的那一项），因为数组是从第0项开始的，这时已经定义了下标为2和3这两项，所以它会替换第三项也就是下标为2的值，第一次执行push完，此时key为2的属性值为1，同理：第二次执行push方法，key为3的属性值为2。此时的输出结果就是：Object(4) [empty × 2, 1, 2, splice: ƒ, push: ƒ]，因为只是定义了2和3两项，没有定义0和1这两项，所以前面会是empty。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day31:写出执行结果,并解释原因

```js
let a = {n: 1};
let b = a;
a.x = a = {n: 2};
console.log(a.x) 	
console.log(b.x)
```

```js
// 答案
undefined {n:2}

// 注意点
1: 点的优先级大于等号的优先级
2: 对象以指针的形式进行存储，每个新对象都是一份新的存储地址

// 解析
- `var b = a;` b 和 a 都指向同一个地址。
- `.`的优先级高于`=`。所以先执行`a.x`，于是现在的`a`和`b`都是`{n: 1, x: undefined}`。
- `=`是从右向左执行。所以是执行 `a = {n: 2}`，于是`a`指向了`{n: 2}`
- 再执行 `a.x = a`。 这里注意，`a.x` 是最开始执行的，已经是`{n: 1, x: undefined}`这个地址了，而不是一开的的那个`a`，所以也就不是`{n: 2}`了。而且`b`和旧的`a`是指向一个地址的，所以`b`也改变了。
- 但是，`=`右面的a，是已经指向了新地址的新`a`。
- 所以，`a.x = a` 可以看成是`{n: 1, x: undefined}.x = {n: 2}`
- 最终得出
  a = { n: 2 }，
  b = {
    n: 1,
    x: { n: 2 }
  }
```

分类：JavaScript

[答案&解析]()

<br/>

### Day32:写出执行结果,并解释原因

```js
var a1={}, b1='123', c1=123;  
a1[b1]='b';
a1[c1]='c';  
console.log(a1[b1]);
var a2={}, b2=Symbol('123'), c2=Symbol('123');  
a2[b2]='b';
a2[c2]='c';  
console.log(a2[b2]);
var a3={}, b3={key:'123'}, c3={key:'456'};  
a3[b3]='b';
a3[c3]='c';  
console.log(a3[b3]);
```

```js
// 答案
c b c

// 考察知识点
- 对象的键名只能是字符串和 Symbol 类型。
- 其他类型的键名会被转换成字符串类型。
- 对象转字符串默认会调用 toString 方法。

// 解析
var a1={}, b1='123', c1=123;  
a1[b1]='b';
// c1 的键名会被转换成字符串'123'，这里会把 b1 覆盖掉。
a1[c1]='c';  
// 输出 c
console.log(a1[b1]);  


var a2={}, b2=Symbol('123'), c2=Symbol('123');  
// b2 是 Symbol 类型，不需要转换。
a2[b2]='b'; 
// c2 是 Symbol 类型，不需要转换。任何一个 Symbol 类型的值都是不相等的，所以不会覆盖掉 b2。
a2[c2]='c'; 
// 输出b
console.log(a2[b2]);


var a3={}, b3={key:'123'}, c3={key:'456'};  
// b3 不是字符串也不是 Symbol 类型，需要转换成字符串。对象类型会调用 toString 方法转换成字符串 [object Object]
a3[b3]='b'; 
// c3 不是字符串也不是 Symbol 类型，需要转换成字符串。对象类型会调用 toString 方法转换成字符串 [object Object]。这里会把 b3 覆盖掉。
a3[c3]='c';  
// 输出c
console.log(a3[b3]); 

// 扩展
除了前边的Symbol，如果想要不被覆盖 可以使用ES6提供的Map
var a=new Map(), b='123', c=123;
a.set(b,'b');
a.set(c,'c');
a.get(b);  // 'b'
a.get(c);  // 'c'
/*
	Objects 和 Maps 类似的是，它们都允许你按键存取一个值、删除键、检测一个键是否绑定了值。因此（并且也没有其他内建的替代方式了）过去我们一直都把对象当成 Maps 使用。不过 Maps 和 Objects 有一些重要的区别，在下列情况里使用 Map 会是更好的选择：
	1.一个Object的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值，包括函数、对象、基本类型。
	2.Map 中的键值是有序的，而添加到对象中的键则不是。因此，当对它进行遍历时，Map 对象是按插入的顺序返回键值。
*/
```

分类：JavaScript

[答案&解析]()

<br/>

### Day33:写出执行结果,并解释原因

```js
function Foo() {
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
}
Foo.prototype.a = function() {
    console.log(3)
}
Foo.a = function() {
    console.log(4)
}
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();
```

```js
// 答案
421

// 解析
1. `Foo.a()` 这个是调用 Foo 函数的静态方法 a，虽然 Foo 中有优先级更高的属性方法 a，但 Foo 此时没有被调用，所以此时输出 Foo 的静态方法 a 的结果：**4**
2. `let obj = new Foo();` 使用了 new 方法调用了函数，返回了函数实例对象，此时 Foo 函数内部的属性方法初始化，原型方法建立。
3. `obj.a();` 调用 obj 实例上的方法 a，该实例上目前有两个 a 方法：一个是内部属性方法，另一个是原型方法。当这两者重名时，前者的优先级更高，会覆盖后者，所以输出：**2**
4. `Foo.a();` 根据第2步可知 Foo 函数内部的属性方法已初始化，覆盖了同名的静态方法，所以输出：**1**
```

分类：JavaScript

[答案&解析]()

<br/>

### Day34:写出执行结果,并解释原因

```js
function user(obj) {
  obj.name = "京程一灯"
  obj = new Object()
  obj.name = "精英班"
} 
let person = new Object();
user(person);
console.log(person.name);
```

```js
// 答案：
京程一灯

// 解析：
对象作为参数，传递进去的是这个对象的地址，obj.name是给person这个对象赋值;obj = new Object(),把obj指向另一个对象，obj.name现在是给这个新对象赋值，不影响person这个变量指向的对象；两个obj指向的对象的引用地址不同。

ECMAScript中所有函数的参数都是按值传递的。也就是说，把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。不过需要注意的是，基本类型的传递如同基本类型变量的复制一样，传递方式是按值传递，这意味着在函数体内修改参数的值，不会影响到函数外部。而引用类型的值传递，如同引用类型变量的复制一样，传递方式是按引用传递，也就是传入函数的是原始值的地址，因此在函数内部修改参数，将会影响到原始值。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day35:写出执行结果,并解释原因

```js
let x, y;
try {
  throw new Error();
} catch (x) {
  x =1;
  y=2;
  console.log(x);
}
console.log(x);
console.log(y);
```

```js
// 答案
1 undefined 2

// 解析
`catch`块接收参数`x`。当我们传递参数时，这与变量的`x`不同。这个变量`x`是属于`catch`作用域的。需要注意的是catch的作用域，其实并不是常见的块作用域，并不能绑定自己的内部声明的变量。catch创建的块作用域，只对catch的参数有效。对于在内部声明的变量，catch并没有创建一个新的作用域，只是一个普通的代码块。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day36:写出执行结果,并解释原因

```js
function fn() {
    getValue = function () { console.log(1); };
    return this;
}
fn.getValue = function () { console.log(2);};
fn.prototype.getValue = function () {console.log(3);};
var getValue = function () {console.log(4);};
function getValue() {console.log(5);}
 
//请写出以下输出结果：
getValue();
fn().getValue();
getValue();
new fn.getValue();
new fn().getValue();
```

```js
// 答案
4 1 1 2 3 3

// 考察知识点
考察了面试者的JavaScript的综合能力，变量定义提升、this指针指向、运算符优先级、原型、继承、全局变量污染、对象属性及原型属性优先级等知识

// 解析
// 第一问 getValue();
/*
	1.直接调用getValue函数，就是访问当前上文作用域内的叫getName的函数，所以关注点就是在4，5上；
	2.两个坑：
		一是变量声明提升，JavaScript 解释器中存在一种变量声明被提升的机制，也就是说函数声明会被提升到作用域的最前面，即使写代码的时候是写在最后面，也还是会被提升至最前面。
		二是函数表达式和函数声明的区别，函数声明在JS解析时进行函数提升，因此在同一个作用域内，不管函数声明在哪里定义，该函数都可以进行调用。而函数表达式的值是在JS运行时确定，并且在表达式赋值完成后，该函数才能调用。
	3.所以第二问的答案就是4，5的函数声明被4的函数表达式覆盖了
*/

// 第二问 fn().getValue();
/*
	1.fn().getValue()，先执行了fn函数，然后调用fn函数的返回值对象的getValue属性函数；
	2.注意，fn函数中的第一句，getValue = function () { console.log(1); };没有用var进行声明，执行到这时，实际上，将外层作用域的getValue函数修改了；
	3.之后，fn函数返回this,this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，而此处的直接调用方式，this指向window对象，所以此处相当于执行window.getValue(),现在getValue已经被修改成console.log(1),所以输出1
*/

// 第三问 getValue();
/*
	第二问中，执行完fn函数，getValue函数已经被修改了，现在已经是console.log(1),所以这里输出1
*/


// 第四问 new fn.getValue();
/*
 1.这里是考察JS的运算符优先级问题，可以参考MDN的运算符优先级，
 2.点的优先级是18，new 无参数列表优先级是17，点的优先级高，所以这里相当于new (fn.getValue())
 3.当点运算完后又因为有个括号()，此时就是变成new有参数列表，new有参数列列表的优先级是18，所以直接执行new。这是为什么遇到()不先函数调用再new,因为函数调用的优先级是17，优先级低于new 有参数列表的优先级
 4.最终就是相当于将 getValue函数function () { console.log(2);};作为构造函数来执行，所以输出2
*/

// 第五问 new fn().getValue();
/*
	1.与第四问的区别就是有括号无括号，这里带括号是new 有参数列表，new 有参数列表的优先级是18，点的优先级也是18，优先级相同按从左到右的顺序执行。
	2.所以这里是先执行有参数列表，再执行点的优先级，最后再函数调用
	3.这里涉及到一个知识点，fn作为构造函数有返回值，在JS中构造函数可以有返回值也可以没有
		a.没有返回值，返回实例化的对象
		b.有返回值，检查其返回值是否为引用类型。
			非引用类型，如基本类型（String,Number,Boolean,Null,Undefined）则与无返回值相同，实际返回其实例化对象。
			引用类型，实际返回值为这个引用类型
	4.这里fn函数返回的是this,this在构造函数中本来就代表当前实例化对象，最终fn函数返回实例化对象。最终调用，实例化对象的getValue函数，因为在Foo构造函数中没有为实例化对象添加任何属性，当前对象的原型对象(prototype)中寻找getValue函数。所以输出3。	
*/
```

分类：JavaScript

[答案&解析]()

<br/>

### Day37:写出执行结果,并解释原因

```js
let length = 10;
function fn() {
	console.log(this.length);
}
var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};
obj.method(fn,1);
```

```js
// 答案
0  2

// 解析
1）fn()知识点
  ①fn()知识点，任意函数里如果嵌套了 非箭头函数，那这个时候 嵌套函数里的 this 在未指定的情况下，应该指向的是 window 对象，所以这里执行fn会打印window.length,但是let声明的变量会形成块级作用域，且不存在声明提升，而var存在声明提升。所以当使用let声明变量时，不存在声明提升，length属性实际上并没有添加到window对象中。
  // 例如在浏览器控制台
  let a = 1;
  window.a   // undefined
  var b = 1;
  window.b  // 1
  但是这里为什么输出0呢，因为window对象原先上有length属性，所以输出的是原先的值0
  ②arguments[0]()知识点
  在方法调用（如果某个对象的属性是函数，这个属性就叫方法，调用这个属性，就叫方法调用）中，执行函数体的时候，作为属性访问主体的对象和数组便是其调用方法内 this 的指向。（通俗的说，调用谁的方法 this 就指向谁；
  `arguments[0]`指向 `fn`,所以 `arguments[0]()` 是作为 `arguments`对象的属性`[0]`来调用 `fn`的，所以 `fn` 中的 `this` 指向属性访问主体的对象 `arguments`；这里this指向arguments。
  因为fn作为一个参数存储在arg对象里，argumengts的长度为2，所以输出2
  // 例如
  [function fn(){console.log(this.length)}][0]();  // 1
  // 数组也是对象，只不过数组对象的整型属性会计入 length 属性中，并被区别对待，这里就是调用数组对象的0属性，函数作为数组对象的属性调用，函数中的this 当然指向这个数组，所以返回数组的length 
```

分类：JavaScript

[答案&解析]()

<br/>

### Day38:写出执行结果,并解释原因

```js
var a=10;
var foo={
  a:20,
  bar:function(){
      var a=30;
      return this.a;
    }
}
console.log(foo.bar());
console.log((foo.bar)());
console.log((foo.bar=foo.bar)());
console.log((foo.bar,foo.bar)());
```

```js
// 答案
20 20 10 10

// 解析
1）第一问  foo.bar()
/*
	foo调用，this指向foo , 此时的 this 指的是foo，输出20
*/

2）第二问  (foo.bar)()
/*
	给表达式加了括号，而括号的作用是改变表达式的运算顺序，而在这里加与不加括号并无影响；相当于foo.bar(),输出20
*/

3）第三问  (foo.bar=foo.bar)()
/*
	等号运算，
	相当于重新给foo.bar定义，即
	foo.bar = function () {
    var a = 10;
    return this.a;
	}
	就是普通的复制,一个匿名函数赋值给一个全局变量
	所以这个时候foo.bar是在window作用域下而不是foo = {}这一块级作用域，所以这里的this指代的是window,输出10
*/

4）第四问  (foo.bar,foo.bar)()
/*
	1.逗号运算符，
	2.逗号表达式，求解过程是：先计算表达式1的值，再计算表达式2的值，……一直计算到表达式n的值。最后整个逗号表达式的值是表达式n的值。逗号运算符的返回值是最后一个表达式的值。
  3.其实这里主要还是经过逗号运算符后，就是纯粹的函数了，不是对象方法的引用，所以这里this指向的是window，输出10
  4.第三问，第四问，一个是等号运算，一个是逗号运算，可以这么理解，经过赋值，运算符运算后，都是纯粹的函数，不是对象方法的引用。所以函数指向的this都是windows的。
*/

// 知识点
1）默认绑定
  ①独立函数调用时，this 指向全局对象（window），如果使用严格模式，那么全局对象无法使用默认绑定， this绑定至 undefined。
  
2）隐式绑定
 ①函数this 是指向调用者 （隐式指向）
 function foo() {
    console.log( this.a);
  }
  var obj = {
    a: 2,
    foo: foo
  };
  obj.foo();  // 2
  obj1.obj2.foo(); // foo 中的 this 与 obj2 绑定
  ②问题：隐式丢失
  描述：隐式丢失指的是函数中的 this 丢失绑定对象，即它会应用第 1 条的默认绑定规则，从而将 this 绑定到全局对象或者 undefined 上，取决于是否在严格模式下运行。
  以下情况会发生隐式丢失
    - 绑定至上下文对象的函数被赋值给一个新的函数，然后调用这个新的函数时
    - 传入回调函数时
3）显示绑定
显式绑定的核心是 JavaScript 内置的 call(..) 和 apply(..) 方法，call 和 apply bind的this第一个参数 （显示指向）

4）new 绑定
构造函数的this 是new 之后的新对象 （构造器）
```

分类：JavaScript

[答案&解析]()

<br/>

### Day39:写出执行结果,并解释原因

```js
function getName(){
  for(let i = 0;i<5;i++){
    setTimeout(function(){
      console.log(i)
    },i*1000);
  }
  return
  {
    name:'京程一灯'
  }
}
console.log(getName());
```

```js
// 答案：
undefined 0 1 2 3 4

// 解析：
1.第一个点：undefined，这是因为return后换行了,JavaScirpt会在return语句后自动插入了分号。
分号自动添加的情况：
（1）如果下一行的开始与本行的结尾连在一起解释，JavaScript就不会自动添加分号；  
（2）只有下一行的开始于本行的结尾无法放在一起解释，JavaScript引擎才会自动添加分号；  
（3）如果一行的起首是++或--运算符，则他们后面自动添加分号；  
（4）如果continue、break、return、throw这四个语句后面，直接跟换行符，则会自动添加分号。 

2.第二个点：let的变量除了作用域是在for区块中，而且会为每次循环执行建立新的词法环境(LexicalEnvironment)，拷贝所有的变量名称与值到下个循环执行。  因为用let声明的，所以每个i一个作用域。这里如果是用var声明，则最后输出的都是5。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day40:写出执行结果,并解释原因

```js
const num = parseInt("2*4",10);
console.log(num);
```

```js
// 答案
2

// 解析
只返回了字符串中第一个字母. 设定了 进制 后 (也就是第二个参数，指定需要解析的数字是什么进制: 十进制、十六机制、八进制、二进制等等……), `parseInt` 检查字符串中的字符是否合法. 一旦遇到一个在指定进制中不合法的字符后，立即停止解析并且忽略后面所有的字符。
`*`就是不合法的数字字符。所以只解析到 2，并将其解析为十进制的2. `num`的值即为 2
```

分类：JavaScript

[答案&解析]()

<br/>

### Day41:选择正确答案，并解释为什么

```js
const company = { name: "京程一灯" };
Object.defineProperty(company, "address", { value: "北京" });
console.log(company);
console.log(Object.keys(company));
/*
A. {name:"京程一灯",address:"北京"},["name","age"]
B. {name:"京程一灯",address:"北京"},["name"]
C. {name:"京程一灯"},["name","age"]
D. {name:"京程一灯"},["name","age"]
*/
```

```js
// 答案
B

// 解析
通过 `defineProperty`方法，我们可以给对象添加一个新属性，或者修改已经存在的属性。而我们使用 `defineProperty`方法给对象添加了一个属性之后，属性默认为 不可枚举(not enumerable). `Object.keys`方法仅返回对象中 可枚举(enumerable) 的属性，因此只剩下了 name
用 `defineProperty`方法添加的属性默认不可变。你可以通过 `writable`, `configurable` 和 `enumerable`属性来改变这一行为。这样的话， 相比于自己添加的属性， `defineProperty`方法添加的属性有了更多的控制权。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day42:写出执行结果,并解释原因

```js
let num = 10;
const increaseNumber = () => num++;
const increasePassedNumber = number => number++;
const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);
console.log(num1);
console.log(num2);
```

```js
// 答案
 10 10
 
// 解析
一元操作符 `++` 先返回 操作值, 再累加 操作值。`num1`的值是 `10`, 因为 `increaseNumber`函数首先返回 `num`的值，也就是 `10`，随后再进行 `num`的累加。
`num2`是 `10`因为我们将 `num1`传入 `increasePassedNumber`. `number`等于 `10`（ `num1`的值。同样道理， `++` 先返回 操作值, 再累加 操作值。） `number`是 `10`，所以 `num2`也是 `10`.
```

分类：JavaScript

[答案&解析]()

<br/>

### Day43:写出执行结果,并解释原因

```js
const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log(x.number *= 2);
};
multiply();
multiply();
multiply(value);
multiply(value);
```

```js
// 答案
20 20 20 40

// 解析
在ES6中，我们可以使用默认值初始化参数。如果没有给函数传参，或者传的参值为 `"undefined"` ，那么参数的值将是默认值。上述例子中，我们将 `value` 对象进行了解构并传到一个新对象中，因此 `x` 的默认值为 `{number：10}` 。
默认参数在调用时才会进行计算，每次调用函数时，都会创建一个新的对象。我们前两次调用 `multiply` 函数且不传递值，那么每一次 `x` 的默认值都为 `{number：10}` ，因此打印出该数字的乘积值为 `20`。
第三次调用 `multiply` 时，我们传递了一个参数，即对象 `value`。`*=`运算符实际上是 `x.number=x.number*2`的简写，我们修改了 `x.number`的值，并打印出值 `20`。
第四次，我们再次传递 `value`对象。`x.number`之前被修改为 `20`，所以 `x.number*=2`打印为 `40`。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day44:写出执行结果,并解释原因

```js
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

```js
// 答案
1 2 undefined 3 undefined 4

// 解析
`reducer` 函数接收4个参数:

1. Accumulator (acc) (累计器)
2. Current Value (cur) (当前值)
3. Current Index (idx) (当前索引)
4. Source Array (src) (源数组)

`reducer` 函数的返回值将会分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。
`reducer` 函数还有一个可选参数 `initialValue`, 该参数将作为第一次调用回调函数时的第一个参数的值。如果没有提供 `initialValue`，则将使用数组中的第一个元素。
在上述例子， `reduce`方法接收的第一个参数(Accumulator)是 `x`, 第二个参数(Current Value)是 `y`。
在第一次调用时，累加器 `x`为 `1`，当前值 `“y”`为 `2`，打印出累加器和当前值：`1`和 `2`。
例子中我们的回调函数没有返回任何值，只是打印累加器的值和当前值。如果函数没有返回值，则默认返回 `undefined`。在下一次调用时，累加器为 `undefined`，当前值为“3”, 因此 `undefined`和 `3`被打印出。
在第四次调用时，回调函数依然没有返回值。累加器再次为 `undefined` ，当前值为“4”。`undefined`和 `4`被打印出。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day45:写出执行结果,并解释原因

```js
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
```

```js
// 答案
running sum.js running index.js  3

// 解析
import命令是编译阶段执行的，在代码运行之前。因此这意味着被导入的模块会先运行，而导入模块的文件会后执行。
这是CommonJS中require（）和 import之间的区别。使用 require()，可以在运行代码时根据需要加载依赖项。如果我们使用 require而不是import，则running index.js、running sum.js、 3会被依次打印。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day46:写出执行结果,并解释原因

```js
function addToList(item, list) {
 return list.push(item);
}
const result = addToList("company", ["yideng"]);
console.log(result);
```

```js
// 答案
2

// 解析
`push()`方法返回新数组的长度。一开始，数组包含一个元素（字符串 `"yideng"`），长度为1。 在数组中添加字符串 `"company"`后，长度变为2，并将从 `addToList`函数返回。
`push`方法修改原始数组，如果你想从函数返回数组而不是数组长度，那么应该在push `item`之后返回 `list`。
开发中一不小心会导致错误的地方
```

分类：JavaScript

[答案&解析]()

<br/>

### Day47:写出执行结果,并解释原因

```js
var a = 0;
if(true){
  a = 10;
  console.log(a,window.a);
  function a(){};
  console.log(a,window.a);
  a = 20;
  console.log(a,window.a);
}
console.log(a);
```

```js
// 答案
10 0
10 10
20 10
10

// 知识点

// 解析
1）变量提升
  变量的提升是以变量作用域来决定的，即全局作用域中声明的变量会提升至全局最顶层，函数内声明的变量只会提升至该函数作用域最顶层。
  console.log(a);
  var a = 10;
  // 等价于
  var a;
  console.log(a);
  a = 10;
  
2）函数提升
  ①函数提升，类似变量提升，但是确有些许不同。
  ②函数表达式
    console.log(a);// undefined
    var a = function(){};
    // 函数表达式不会声明提升，这里输出undefined,是var a变量声明的提升
  ③函数声明
    函数声明覆盖变量声明
    //因为其是一等公民,与其他值地位相同，所以 函数声明会覆盖变量声明
    // 如果存在函数声明和变量声明（注意：仅仅是声明，还没有被赋值），而且变量名跟函数名是相同的，那么，它们都会被提示到外部作用域的开头，但是，函数的优先级更高，所以变量的值会被函数覆盖掉。

    /*************未赋值的情况***************/
    // 变量名与函数名相同
    var company;
    function company () {
    console.log ("yideng");
    }
    console.log(typeof company); // function,函数声明将变量声明覆盖了

    /*************赋值的情况***************/
    // 如果这个变量或者函数其中是赋值了的，那么另外一个将无法覆盖它：
    var company = "yideng"; // 变量声明并赋值
    function company () {
      console.log ("yideng");
    }
    console.log(typeof company); // string
    // 这个其实再次赋值了
    var company;
    function company(){};
    company = 'yideng'; // 被重新赋值
    console.log(typeof company); 
    
3）块级作用域的函数声明
  // 在块级作用域中的函数声明和变量是不同的
  /*********块级作用域中变量声明***************/
  console.log(a); //ReferenceError: a is not defined
  if(true){
    a = 10;
    console.log(a);
  }
  console.log(a);
  // 会报错，

  /****************块级作用域函数声明******************/
  console.log(a); // 这里不报错，是undefined
  if(true){
    console.log(a); // function a
    function a(){};
  }
  // 上边的代码等价于
  var a; // 函数a的声明
  console.log(a); // undefined
  if(true){
    function a(){} // 函数a的定义
    console.log(a); // function a
  }
  /*
    这里其实就是函数function a(){}经过预解析之后:
    将函数声明提到函数级作用域最前面，var a;// 函数a的声明
    然后将函数定义提升到块级作用域最前面， function a(){} 函数a的定义
  */
  
  如果改变了作用域内声明的函数的处理规则，显然会对老代码产生很大影响。为了减轻因此产生的不兼容问题，es6在附录B里面规定，浏览器的实现可以不遵守上面规定，有自己的行为方式
    ①允许在块级作用域内声明函数
    ②函数声明类似于var,即会提升到全局作用域或函数作用域的头部
    ③同时，函数声明还会提升到所在的块级作用域的头部。
  注意，上面三条规则只对ES6的浏览器实现有效，其它环境的实现不用遵守，还是将块级作用域的函数声明当做let处理
  块级作用域函数，就像预先在全局作用域中使用`var`声明了一个变量，且默认值为`undefined`。
  console.log(a,window.a); // undefined undefined
  {
    console.log(a,window.a); // function a(){} undefined
    function a(){}
    console.log(a,window.a); // function a(){} function a(){}
  }
  console.log(a,window.a);	// function a(){} function a(){}
  
  总结：
    ①块级作用域函数在编译阶段将函数声明提升到全局作用域，并且会在全局声明一个变量，值为undefined。同时，也会被提升到对应的块级作用域顶层。
    ②块级作用域函数只有定义声明函数的那行代码执行过后，才会被映射到全局作用域。
    
4）块级作用域中有同名的变量和函数声明
  console.log(window.a,a);//undefined undefined
  {
      console.log(window.a,a);//undefined function a(){}
      function a() {};
      a = 10;
      console.log(window.a,a); //function a(){}  10
  };
  console.log(window.a,a); //function a(){}  function a(){}

  /*
    1.第一个log,块级作用域函数a的声明会被提升到全局作用域，所以不报错，是undefined undefined
    2.第二个log,在块级作用域中，由于声明函数a提升到块级作用域顶端,所以打印a = function a(){}，而window.a由于并没有执行函数定义的那一行代码，所以仍然为undefined。
    3.第三个log,这时已经执行了声明函数定义，所以会把函数a映射到全局作用域中。所以输出function a(){},
    4.第四个log,就是function a(){}  function a(){}，因为在块级作用域中window.a的值已经被改变了，变成了function a(){}
  */
  块级作用域函数只有执行函数声明语句的时候，才会重写对应的全局作用域上的同名变量。
  
  // 解析
  看过上边的知识点，这道题现在已经可以轻松答对了
  var a;// 函数a声明提前，块级作用域函数a的声明会被提升到全局作用域
  var a = 0; // 已经声明了a,这里会忽略变量声明，直接赋值为0
  if(true){ // 块级作用域
    function a(){} // 函数a的定义，提升到块级作用域最前面
    a = 10; // 执行a = 10，此时，在块级作用域中函数声明已经被提升到顶层，那么此时执行a，就是相当于赋值，将函数声明a赋值为数字a，这里就是赋值为10了，
    console.log(a,window.a); // a是块级作用域的function a,所以输出 10,window.a还是0，因为块级作用域函数只有执行函数声明语句的时候，才会重写对应的全局作用域上的同名变量
    function a(){} // 执行到函数声明语句，虽然这一行代码是函数声明语句，但是a，已经为数字10了，所以，执行function a(){}之后，a的值10就会被赋值给全局作用域上的a，所以下面打印的window.a,a都为10
    console.log(a,window.a); // a 还是块级作用域中的function a,前边已经被赋值为10，所以window.a前边已经变为了10
    a = 20; // 仍然是函数定义块级作用域的a,重置为21
    console.log(a,window.a); // 输出为函数提升的块级作用域的a,和window.a,所以这里输出20 10
  }
  console.log(a); // 因为在块级作用域中window.a被改变成了10，所以这里现在是10
  
  
  // 写出打印结果
  var foo = 1;
  function bar() {
      // foo会声明提前 var foo;
    // !foo 等价于!undefined true
      if (!foo) {
          var foo = 10;
      }
    console.log(foo); // 10
  }
  bar();

  // 写出打印结果
  var a = 1;
  function b() {
      // 函数声明提前
      // var a = function a(){};
      a = 10; // 赋值相当于是给函数a进行重新赋值，并且这是函数作用域，不是块级作用域
      return;
      function a() {}
  }
  b();
  console.log(a); // 1
```

分类：JavaScript

[答案&解析]()

<br/>

### Day48:能否以某种方式为下面的语句使用展开运算而不导致类型错误

```js
var obj = { x: 1, y: 2, z: 3 };
[...obj]; // TypeError
// 能否以某种方式为上面的语句使用展开运算而不导致类型错误
// 如果可以，写出解决方式
```

```js
// 答案
可以

// 解析
展开语法和for-of 语句遍历iterabl对象定义要遍历的数据。Arrary和Map 是具有默认迭代行为的内置迭代器。对象不是可迭代的，但是可以通过使用iterable和iterator协议使它们可迭代。

在Mozilla文档中，如果一个对象实现了@iterator方法，那么它就是可迭代的，这意味着这个对象(或者它原型链上的一个对象)必须有一个带有@iterator键的属性，这个键可以通过常量Symbol.iterator获得。

// 解决方式一
var obj = { x: 1, y: 2, z: 3 };
obj[Symbol.iterator] = function(){
  // iterator 是一个具有 next 方法的对象，
  // 它的返回至少有一个对象
  // 两个属性：value＆done。
   return {
     // 返回一个 iterator 对象
      next: function () {
        if (this._countDown === 3) {
          const lastValue = this._countDown;
          return { value: this._countDown, done: true };
        }
        this._countDown = this._countDown + 1;
        return { value: this._countDown, done: false };
      },
      _countDown: 0,
    };
};
[...obj];

// 解决方式二
// 还可以使用 generator 函数来定制对象的迭代行为：
var obj = { x: 1, y: 2, z: 3 };
obj[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
};
[...obj]; // 打印 [1, 2, 3]

```

分类：JavaScript

[答案&解析]()

<br/>

### Day49:请你完成一个safeGet函数，可以安全的获取无限多层次的数据

```js
// 请你完成一个safeGet函数，可以安全的获取无限多层次的数据，一旦数据不存在不会报错，会返回 undefined，例如
var data = { a: { b: { c: 'yideng' } } }
safeGet(data, 'a.b.c') // => yideng
safeGet(data, 'a.b.c.d') // => undefined
safeGet(data, 'a.b.c.d.e.f.g') // => undefined
```

```js
// 参考答案
const safeGet = (o, path) => {
  try {
    return path.split('.').reduce((o, k) => o[k], o)
  } catch (e) {
    return undefined;
  }
}
```

分类：JavaScript、编程题

[答案&解析]()

<br/>

### Day50:写一个isPrime()函数

```js
写一个isPrime()函数，当其为质数时返回true，否则返回false。
提示：质数是指在大于1的自然数中，除了1和它本身以外不再有其他因数的自然数。
```

```js
// 答案
这是面试中最常见的问题之一。然而，尽管这个问题经常出现并且也很简单，但是从被面试人提供的答案中能很好地看出被面试人的数学和算法水平。

首先， 因为JavaScript不同于C或者Java，因此你不能信任传递来的数据类型。如果面试官没有明确地告诉你`，你应该询问他是否需要做输入检查，还是不进行检查直接写函数。严格上说，应该对函数的输入进行检查。`

第二点要记住：负数不是质数。同样的，1和0也不是，因此，首先测试这些数字。此外，2是质数中唯一的偶数。没有必要用一个循环来验证4,6,8。再则，如果一个数字不能被2整除，那么它不能被4，6，8等整除。因此，你的循环必须跳过这些数字。如果你测试输入偶数，你的算法将慢2倍（你测试双倍数字）。可以采取其他一些更明智的优化手段，我这里采用的是适用于大多数情况的。例如，如果一个数字不能被5整除，它也不会被5的倍数整除。所以，没有必要检测10,15,20等等。如果你深入了解这个问题的解决方案，建议去看相关的Wikipedia介绍。

最后一点，你不需要检查比输入数字的开方还要大的数字。一般会遗漏掉这一点，并且也不会因为此而获得消极的反馈。但是，展示出这一方面的知识会给你额外加分。

现在你具备了这个问题的背景知识，下面是总结以上所有考虑的解决方案：
function isPrime(number) {
   // If your browser doesn't support the method Number.isInteger of ECMAScript 6,
   // you can implement your own pretty easily
   if (typeof number !== 'number' || !Number.isInteger(number)) {
      // Alternatively you can throw an error.
      return false;
   }
   if (number < 2) {
      return false;
   }
   if (number === 2) {
      return true;
   } else if (number % 2 === 0) {
      return false;
   }
   var squareRoot = Math.sqrt(number);
   for(var i = 3; i <= squareRoot; i += 2) {
      if (number % i === 0) {
         return false;
      }
   }
   return true;
}
```

分类：算法

[答案&解析]()

<br/>

### Day51:写出打印结果

```js
var x = 20;
var temp = {
    x: 40,
    foo: function() {
        var x = 10;
      	console.log(this.x);
    }
};
(temp.foo, temp.foo)();
```

```js
// 答案：
20

// 解析：
逗号操作符，逗号操作符会从左到右计算它的操作数，返回最后一个操作数的值。所以(temp.foo, temp.foo)();等价于var fun = temp.foo; fun();，fun调用时this指向window，所以返回20。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day52:请实现一个flattenDeep函数，把嵌套的数组扁平化~~

```js
flattenDeep([1, [2, [3, [4]], 5]]); //[1, 2, 3, 4, 5]
// 请实现一个flattenDeep函数，把嵌套的数组扁平化
```

```js
// 答案&解析

1.参考答案一：利用Array.prototype.flat

ES6 为数组实例新增了 flat方法，用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数组没有影响。

flat默认只会 “拉平” 一层，如果想要 “拉平” 多层的嵌套数组，需要给 `flat` 传递一个整数，表示想要拉平的层数。

function flattenDeep(arr, deepLength) {
    return arr.flat(deepLength);
}
console.log(flattenDeep([1, [2, [3, [4]], 5]], 3));

当传递的整数大于数组嵌套的层数时，会将数组拉平为一维数组，JS能表示的最大数字为 Math.pow(2, 53) - 1，因此我们可以这样定义 flattenDeep 函数

function flattenDeep(arr) {
    //当然，大多时候我们并不会有这么多层级的嵌套
    return arr.flat(Math.pow(2,53) - 1); 
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));

2.参考答案二：利用 reduce 和 concat

function flattenDeep(arr){
    return arr.reduce((acc, val) => Array.isArray(val) ? 
                  acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));

3.参考答案三：使用 stack 无限反嵌套多层嵌套数组

function flattenDeep(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
        // 使用 pop 从 stack 中取出并移除值
        const next = stack.pop();
        if (Array.isArray(next)) {
            // 使用 push 送回内层数组中的元素，不会改动原始输入 original input
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    // 使用 reverse 恢复原数组的顺序
    return res.reverse();
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));
```

分类：JavaScript、编程题

[答案&解析]()

<br/>

### Day53:请实现一个 uniq 函数，实现数组去重~~

```js
uniq([1, 2, 3, 5, 3, 2]);//[1, 2, 3, 5]
// 请实现一个 uniq 函数，实现数组去重
```

```js
// 答案&解析

1.参考答案一：利用ES6新增数据类型 Set

Set类似于数组，但是成员的值都是唯一的，没有重复的值。

function uniq(arry) {
    return [...new Set(arry)];
}

2.参考答案二：利用 indexOf

function uniq(arry) {
    var result = [];
    for (var i = 0; i < arry.length; i++) {
        if (result.indexOf(arry[i]) === -1) {
            //如 result 中没有 arry[i],则添加到数组中
            result.push(arry[i])
        }
    }
    return result;
}

3.参考答案三：利用 includes

function uniq(arry) {
    var result = [];
    for (var i = 0; i < arry.length; i++) {
        if (!result.includes(arry[i])) {
            //如 result 中没有 arry[i],则添加到数组中
            result.push(arry[i])
        }
    }
    return result;
}

4.参考答案四：利用 reduce

function uniq(arry) {
    return arry.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
}

5.参考答案五：利用 Map

function uniq(arry) {
    let map = new Map();
    let result = new Array();
    for (let i = 0; i < arry.length; i++) {
        if (map.has(arry[i])) {
            map.set(arry[i], true);
        } else {
            map.set(arry[i], false);
            result.push(arry[i]);
        }
    }
    return result;
}
```

分类：算法

[答案&解析]()

<br/>

### Day54:new操作符都做了什么，并手动实现一下

```js
// 答案&解析
1）new操作符做了什么
new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。new 关键字会进行如下的操作：
创建一个空的简单JavaScript对象（即{}）；
链接该对象（即设置该对象的构造函数）到另一个对象 ；
将步骤1新创建的对象作为this的上下文 ；
如果该函数没有返回对象，则返回this。

2）代码实现
// 参考答案：1.简单实现
function newOperator(ctor) {
    if (typeof ctor !== 'function'){
        throw 'newOperator function the first param must be a function';
    }
    var args = Array.prototype.slice.call(arguments, 1);
    // 1.创建一个空的简单JavaScript对象（即{}）
    var obj = {};
    // 2.链接该新创建的对象（即设置该对象的__proto__）到该函数的原型对象prototype上
    obj.__proto__ = ctor.prototype;
    // 3.将步骤1新创建的对象作为this的上下文
    var result = ctor.apply(obj, args);
    // 4.如果该函数没有返回对象，则返回新创建的对象

    var isObject = typeof result === 'object' && result !== null;
    var isFunction = typeof result === 'function';
    return isObject || isFunction ? result : obj;
}

// 测试
function company(name, address) {
    this.name = name;
    this.address = address;
  }
  
var company1 = newOperator(company, 'yideng', 'beijing');
console.log('company1: ', company1);

// 参考答案：2.更完整的实现
/**
 * 模拟实现 new 操作符
 * @param  {Function} ctor [构造函数]
 * @return {Object|Function|Regex|Date|Error}      [返回结果]
 */
function newOperator(ctor){
    if(typeof ctor !== 'function'){
      throw 'newOperator function the first param must be a function';
    }
    // ES6 new.target 是指向构造函数
    newOperator.target = ctor;
    // 1.创建一个全新的对象，
    // 2.并且执行[[Prototype]]链接
    // 4.通过`new`创建的每个对象将最终被`[[Prototype]]`链接到这个函数的`prototype`对象上。
    var newObj = Object.create(ctor.prototype);
    // ES5 arguments转成数组 当然也可以用ES6 [...arguments], Aarry.from(arguments);
    // 除去ctor构造函数的其余参数
    var argsArr = [].slice.call(arguments, 1);
    // 3.生成的新对象会绑定到函数调用的`this`。
    // 获取到ctor函数返回结果
    var ctorReturnResult = ctor.apply(newObj, argsArr);
    // 小结4 这些类型中合并起来只有Object和Function两种类型 typeof null 也是'object'所以要不等于null，排除null
    var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
    var isFunction = typeof ctorReturnResult === 'function';
    if(isObject || isFunction){
        return ctorReturnResult;
    }
    // 5.如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，那么`new`表达式中的函数调用会自动返回这个新的对象。
    return newObj;
}

```

分类：JavaScript、编程题

[答案&解析]()

<br/>

### Day55:实现 (5).add(3).minus(2) 功能

```js
// 实现 (5).add(3).minus(2) 功能
console.log((5).add(3).minus(2)); // 6
```

```js
// 答案与解析
Number.prototype.add = function (number) {
    if (typeof number !== 'number') {
        throw new Error('请输入数字～');
    }
    return this + number;
};
Number.prototype.minus = function (number) {
    if (typeof number !== 'number') {
        throw new Error('请输入数字～');
    }
    return this - number;
};
console.log((5).add(3).minus(2));

// 扩展点有意思的，JS的经典的浮点数陷阱
// 如果是这样呢？
console.log((5).add(3).minus(6.234345));  // 1.7656549999999998
/*
	参考方案：
		大数加减：直接通过 Number 原生的安全极值来进行判断，超出则直接取安全极值
  	超级多位数的小数加减：取JS安全极值位数-2作为最高兼容小数位数
  	JavaScript 浮点数陷阱及解法:https://github.com/camsong/blog/issues/9
*/
Number.MAX_SAFE_DIGITS = Number.MAX_SAFE_INTEGER.toString().length-2
Number.prototype.digits = function(){
	let result = (this.valueOf().toString().split('.')[1] || '').length
	return result > Number.MAX_SAFE_DIGITS ? Number.MAX_SAFE_DIGITS : result
}
Number.prototype.add = function(i=0){
	if (typeof i !== 'number') {
        	throw new Error('请输入正确的数字');
    	}
	const v = this.valueOf();
	const thisDigits = this.digits();
	const iDigits = i.digits();
	const baseNum = Math.pow(10, Math.max(thisDigits, iDigits));
	const result = (v * baseNum + i * baseNum) / baseNum;
	if(result>0){ return result > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : result }
	else{ return result < Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : result }
}
Number.prototype.minus = function(i=0){
	if (typeof i !== 'number') {
        	throw new Error('请输入正确的数字');
    	}
	const v = this.valueOf();
	const thisDigits = this.digits();
	const iDigits = i.digits();
	const baseNum = Math.pow(10, Math.max(thisDigits, iDigits));
	const result = (v * baseNum - i * baseNum) / baseNum;
	if(result>0){ return result > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : result }
	else{ return result < Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : result 	}
}
console.log((5).add(3).minus(6.234345));  // 1.765655
```

分类：JavaScript

[答案&解析]()

<br/>

### Day56:介绍下Set、Map、WeakSet和WeakMap的区别

```js
// 答案与解析
1)Set
成员唯一、无序且不重复；
[value, value]，键值与键名是一致的（或者说只有键值，没有键名）；
可以遍历，方法有：add、delete、has。

2)WeakSet
成员都是对象；
成员都是弱引用，可以被垃圾回收机制回收，可以用来保存DOM节点，不容易造成内存泄漏；
不能遍历，方法有 add、delete、has。

3)Map
本质上是键值对的集合，类似集合；
可以遍历，方法很多，可以跟各种数据格式转换。

4)WeakMap
只接受对象作为键名（null 除外），不接受其他类型的值作为键名；
键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的；
不能遍历，方法有 get、set、has、delete。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day57:如何在不使用%摸运算符的情况下检查一个数字是否是偶数

```js
// 答案
1）可以对这个问题使用按位&运算符，&对其操作数进行运算，并将其视为二进制值，然后执行与运算
function isEven(num){
  // 位运算不支持浮点数，所以可以利用这一点对小数取整
  const isInteger = (num|0) === num;
  if(num&1 || !isInteger){
    return false;
  }else{
    return true;
  }
}

0 二进制数是 000
1 二进制数是 001
2 二进制数是 010
3 二进制数是 011
4 二进制数是 100
5 二进制数是 101
6 二进制数是 110
7 二进制数是 111

以此类推...
例子： console.log(5&1); // 1
①首先，&运算符将两个数字都转换为二进制，因此5变为101，1变为001。即 101&001
②然后，它使用按位与运算符比较每个位（0和1）
	首先比较最左边的1&0，结果是0。
	然后比较中间的0&0，结果是0。
	然后比较最后1&1，结果是1。
	最后，得到一个二进制数001，对应的十进制数，即1。
  所以可以判断5为奇数
2）还可以递归的方式
function isEven(num){
  // 取绝对值
  const number = Math.abs(num);
  if(number === 1){
    return false;
  }
  if(number == 0 ) {
    return true;
  }
  return isEven(number -2);
}
3）通过Math.round，利用奇数除以2肯定会有小数特点
function isEven(num){
  const isInteger = (num|0) === num;
  if(!isInteger){
    return false;
  }
  const number = num/2;
  return parseInt(number) === Math.round(number);
}
```

分类：JavaScript

[答案&解析]()

<br/>

### Day58:Object.seal和Object.freeze方法之间有什么区别

```js
// 答案
这两种方法之间的区别在于，当我们对一个对象使用Object.freeze方法时，该对象的属性是不可变的，这意味着我们不能更改或编辑这些属性的值。而在Obj.seal方法中，我们可以改变现有的属性。

1）Object.freeze()
Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。

2）Object.seal()
Object.seal()方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要可写就可以改变。

3）相同点：
①ES5新增
②对象不可能扩展，也就是不能再添加新的属性或者方法。
③对象已有属性不允许被删除。
④对象属性特性不可以重新配置。

4）不同点：
①Object.seal方法生成的密封对象，如果属性是可写的，那么可以修改属性值。
②Object.freeze方法生成的冻结对象，属性都是不可写的，也就是属性值无法更改。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day59:完成plus函数，通过全部的测试用例

```js
'use strict';
function plus(n){
  
}
module.exports = plus
// 测试用例如下
'use strict';
var assert = require('assert');
var plus = require('../lib/assign-4');
describe('测试用例',function(){
  it('plus(0) === 0',function(){
    assert.equal(0,plus(0).toString())
  })
  it('plus(1)(1)(2)(3)(5) === 12',function(){
    assert.equal(12,plus(1)(1)(2)(3)(5).toString())
  })
  it('plus(1)(4)(2)(3) === 10',function(){
    assert.equal(10,plus(1)(4)(2)(3).toString())
  })
  it('plus(1,1)(2,2)(3)(4) === 13',function(){
   	assert.equal(13,plus(1,1)(2,2)(3)(4).toString())
  })
})
```

```js
// 答案&解析
参考答案：答案不唯一
"use strict";
function plus(n) {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = [].slice.call(arguments);
  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _adder = function () {
    _args.push(...arguments);
    return _adder;
  };
  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function () {
    return _args.reduce(function (a, b) {
      return a + b;
    });
  };
  return _adder;
}
module.exports = plus;
```

分类：JavaScript

[答案&解析]()

<br/>

### Day60:解释下这段代码的意思以及用到的技术点

```js
[].forEach.call($$("*"),function(a){  
  a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)  
})  
```

```js
// 答案与解析
直观操作：获取页面所有的元素，然后给这些元素加上1px的外边框，并且使用了随机颜色

几个关键点：
1）选择页面中所有的元素
$$函数是现代浏览器提供的一个命令行API，它相当于document.querySelectorAll，可以将当前页面中的CSS选择器作为参数传给该方法，然后它会返回匹配的所有元素。

2）遍历元素
[].forEach.call( $$('*'), function( a ) { /* 具体的操作 */ });  
通过使用函数的call和apply方法，可以实现在类似NodeLists这样的类数组对象上调用数组方法。

3）为元素添加颜色
a.style.outline="1px solid #" + color  
代码中使用outline的CSS属性给元素添加一个边框。由于渲染的outline是不在CSS盒模型中的，所以为元素添加outline并不会影响元素的大小和页面的布局。

4）生成随机颜色
~~(Math.random()*(1<<24))).toString(16)  
①Math.random()*(1<<24) 可以得到 0~2^24 - 1 之间的随机数，使用了位操作
②因为得到的是一个浮点数，但我们只需要整数部分，使用取反操作符 ~ 连续两次取反获得整数部分，使用两个波浪号等价于使用parseInt，
const a =12.34;
~~a == parseInt(a, 10); // true  
③然后再用 toString(16) 的方式，转换为一个十六进制的字符串。toString()方法将数值转换成字符串时，接收一个参数用以指明数值的进制。如果省略了该参数，则默认采用十进制，但你可以指定为其他的进制，
```

分类：JavaScript

[答案&解析]()

<br/>

### Day61:写出执行结果,并解释原因

```js
var yideng_a = Function.length;
var yideng_b = new Function().length;
console.log(yideng_a === yideng_b);
```

```js
// 答案&解析
①每个 JavaScript 函数实际上都是一个 Function 对象。运行 (function(){}).constructor === Function,true 便可以得到这个结论。
②全局的 Function 对象没有自己的属性和方法，但是，因为它本身也是一个函数，所以它也会通过原型链从自己的原型链 Function.prototype 上继承一些属性和方法。
③length是函数对象的一个属性值，指该函数有多少个必须要传入的参数，即形参的个数。与之对比的是，  arguments.length 是函数被调用时实际传参的个数。
④length 是函数对象的一个属性值，指该函数有多少个必须要传入的参数，即形参的个数。
形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数。
Function 构造器本身也是个Function。他的 length 属性值为 1 。该属性 Writable: false, Enumerable: false, Configurable: true.Function  原型对象的 length 属性值为 0 。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day62:不借助中间变量交换两个变量的值

```js
不借助中间变量交换两个变量的值
比如 let a = 1,b = 2;交换a,b的值
```

```js
// 答案&解析
1）利用加法
let a = 1,b = 2;
b = a + b;
a = b - a;
b = b - a;
缺点：利用加法 a+b;有溢出风险

2）利用减法
let a = 1,b = 2;
b = a - b;
a = a - b;
b = a + b;
这样就解决了加法溢出的风险，理论上已经很完美了,继续往下看

3）es6解构赋值
let a = 1,b = 2;
[a,b]=[b,a]

4）按位异或^
这里用到了异或这个位运算的性质，即相同则为 0，不同则为 1
对于两个数字，a 和 b。则有 a ^ a ^ b 就等于 b 。我们可以利用这个性质来完成交换。
let a = 1,b = 2;
b = a ^ b; 
a = a ^ b; // a = a ^ a ^ b
b = a ^ b; // b = a ^ b ^ b

过程解释：
a = 1 -> 01
b = 2 -> 10
a ^ a -> 01 ^ 01 -> 肯定是00，因为相同为0
a ^ a ^ b -> 00 ^ 10 -> 还是 10 -> b
a ^ b ^ b->
	①过程：01 ^ 10 ^ 10 -> 11 ^ 10 -> 01 -> a
	②其实这里涉及到离散数学的异或运算性质：交换律：a ^ b ^ c  <=> a ^ c ^ b
  还有其它性质：任何数于0异或为任何数 0 ^ n => n，相同的数异或为0: n ^ n => 0

5）逗号表达式
逗号表达式是将两个及其以上的式子联接起来，从左往右逐个计算表达式，整个表达式的值为最后一个表达式的值。
利用这个性质，先完成一次赋值操作，然后将赋值操作的返回值变为0. 就可以完成赋值操作
let a = 1,b = 2;
a = b + ((b=a),0);
```

分类：JavaScript

[答案&解析]()

<br/>

### Day63:实现一个isNegtiveZero函数，只检查+0和-0，-0则返回true,+0返回false

```js
// 实现一个isNegtiveZero函数，只检查+0和-0，-0则返回true,+0返回false
function isNegtiveZero(num){
  // 代码实现
}
```

```js
// 答案与解析
在 JavaScript 中, Number 是一种 定义为 64位双精度浮点型（double-precision 64-bit floating point format） (IEEE 754)的数字数据类型，首位是符号位，然后是52位的整数位和11位的小数位。如果符号位为1，其他各位均为0，那么这个数值会被表示成“-0”。
所以JavaScript的“0”值有两个，+0和-0。
1）解题思路
①看到+0和-0，大概想尝试把该数字通过toString()转化成字符串，在使用indexOf('-')判断是否等于0，或者charAt(0)判断是否等于-。很不幸，数值在进行toString()的时候就自动将其转为0了，所以此方法行不通。
②可以尝试另外一个思路，计算机在进行四则及与或模等数值运算时，符号本身也参与运算，JavaScript亦是如此。而使用0对一个数做加减操作对本身是无影响的，乘法虽然得到±0的结果，但是又回到了问题本身对±0的判断了，因此我们可以考虑到除法，加上数值本身有Infinity和-Infinity的区分，分别表示正无穷和负无穷。我们很容易想到使用一个数值来除以±0得到±Infinity。我们使用-1/0或1/-0都得到-Infinity的结果。
③同样的，JavaScript提供很多函数供你使用，但结果不外乎都是借助一个数值进行判断。如：Math.pow(-0, -1) === -Infinity，Math.atan2(-0, -1) === -Math.PI
2）参考答案
①实现方式一
function isNegtiveZero(num) {
  if (num !== 0) {
    throw new RangeError("The argument must be +0 or -0");
  }
  return 1 / num === -Infinity;
}
console.log(isNegtiveZero(+0));
console.log(isNegtiveZero(-0));
②实现方式2
ECMAScript2015添加了一个方法Object.is用于对两数值进行比较，可以用于比较±0
Object.is(+0, 0) === true;
Object.is(-0, 0) === false;

function isNegtiveZero(num) {
  if (num !== 0) {
    throw new RangeError("The argument must be +0 or -0");
  }
  return !Object.is(num, 0);
}
console.log(isNegtiveZero(+0));
console.log(isNegtiveZero(-0));
```

分类：JavaScript、编程题

[答案&解析]()

<br/>

### Day64:补全代码

```js
/*
	说明：该文件名未知，位于当前项目内的dist/scripts文件夹内
	要求：一句话补全代码，获取它的完整位置:http://xx.com/dis/scripts/xx.js
	注：非node环境，node可以使用__dirname
*/
const url = ✍️代码书写处；
export default url;
```

```js
// 答案与解析
const url = import.meta.url
es2020新特性
```

分类：JavaScript

[答案&解析]()

<br/>

### Day65:选择正确的选项

```js
class YiDeng {
  static str = '京程一灯';
	sayStr = ()=>{
    throw new Error('Need to implement');
  }
}
class Student extends YiDeng(){
  constructor(){
    super();
  }
  sayStr(){
    console.log(Student.str);
  }
}
const laoyuan = new Student();
console.log(Student.str);
laoyuan.sayStr();

//A.undefiend， 报错Need to implement
// B. undefiend, 京程一灯
// C. undefined, undefined
// D.京程一灯， 报错Need to implement
// E. 京程一灯，京程一灯
// F.京程一灯，undefined
// G. str is not defined, 京程一灯
```

```js
// 答案与解析
答案：选D
①在ES中类的继承是可以继承静态属性的，不晓得同学可以使用babel编译之后就可以很清晰的看到了
②在 class 里用 = 号声明的变量属于 Field declarations 的语法，下面是TC39规范，也就证明了实际Yideng的sayStr被挂载到了实例属性上，读取优于原型链
https://github.com/tc39/proposal-class-fields#field-declarations
```

分类：JavaScript

[答案&解析]()

<br/>

### Day66:一个简单的算法题目

```js
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，这两个整数可能有多种组合，找出其中一组组合即可，并返回他们的数组下标。

示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

```js
// 答案与解析

// 最容易想到的就是暴力枚举，我们可以利用两层 for 循环来遍历每个元素，并查找满足条件的目标元素。不过这样时间复杂度为 O(N^2)，空间复杂度为 O(1)，时间复杂度较高，我们要想办法进行优化。我们可以增加一个 Map 记录已经遍历过的数字及其对应的索引值。这样当遍历一个新数字的时候去 Map 里查询，target 与该数的差值是否已经在前面的数字中出现过。如果出现过，那么已经得出答案，就不必再往下执行了。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
}

```

分类：JavaScript

[答案&解析]()

<br/>

### Day67:写出执行结果,并解释原因

```js
3.toString()
3..toString()
3...toString()
```

```js
// 答案与解析
报错  "3" 报错
运算符优先级问题
点运算符会被优先识别为数字常量的一部分，然后才是对象属性访问符
在JavaScript中，3.1，3.，.1都是合法的数字
3.toString() 会被JS引擎解析成 (3.)toString() 报错
3..toString() 会被JS引擎解析成 (3.).toString() "3"
3...toString() 会被JS引擎解析成 (3.)..toString() 报错
```

分类：JavaScript

[答案&解析]()

<br/>

### Day68:写出执行结果,并解释原因

```js
function yideng(){}
const a = {}, b = Object.prototype;
console.log(a.prototype === b);
console.log(Object.getPrototypeOf(a) === b);
console.log(yideng.prototype === Object.getPrototypeOf(yideng));
```

```js
// 答案
false true false

//知识点
__proto__（隐式原型）与prototype（显式原型）
1）是什么？
①显式原型 explicit prototype property：
每一个函数在创建之后都会拥有一个名为prototype的属性，这个属性指向函数的原型对象。(需要注意的是，通过Function.prototype.bind方法构造出来的函数是个例外，它没有prototype属性)
②隐式原型 implicit prototype link：
JavaScript中任意对象都有一个内置属性[[prototype]]，在ES5之前没有标准的方法访问这个内置属性，但是大多数浏览器都支持通过__proto__来访问。ES5中有了对于这个内置属性标准的Get方法Object.getPrototypeOf()。(注意：Object.prototype 这个对象是个例外，它的__proto__值为null)
③二者的关系：
隐式原型指向创建这个对象的函数(constructor)的prototype

2）作用是什么？
①显式原型的作用：用来实现基于原型的继承与属性的共享。
②隐式原型的作用：构成原型链，同样用于实现基于原型的继承。举个例子，当我们访问obj这个对象中的x属性时，如果在obj中找不到，那么就会沿着__proto__依次查找。

3）__proto__的指向：
__proto__的指向到底如何判断呢？根据ECMA定义 'to the value of its constructor’s "prototype" ' ----指向创建这个对象的函数的显式原型。
所以关键的点在于找到创建这个对象的构造函数，接下来就来看一下JS中对象被创建的方式，一眼看过去似乎有三种方式：（1）对象字面量的方式 （2）new 的方式 （3）ES5中的Object.create()。
但是本质上只有一种方式，也就是通过new来创建。为什么这么说呢，首先字面量的方式是一种为了开发人员更方便创建对象的一个语法糖，本质就是 var o = new Object(); o.xx = xx;o.yy=yy; 

//解析：

1）a.prototype === b  =>false
prototype属性是只有函数才特有的属性，当你创建一个函数时，js会自动为这个函数加上prototype属性，值是一个空对象。而实例对象是没有prototype属性的。所以a.prototype是undefined,第一个结果为false。

2）Object.getPrototypeOf(a) === b =>true
首先要明确对象和构造函数的关系，对象在创建的时候，其__proto__会指向其构造函数的prototype属性
Object实际上是一个构造函数（typeof Object的结果为"function"）,使用字面量创建对象和new Object创建对象是一样的，所以a.__proto__也就是Object.prototype，所以Object.getPrototypeOf(a)与a.__proto__是一样的，第二个结果为true

3）yideng.prototype === Object.getPrototypeOf(yideng) =>false
关键点：f.prototype和Object.getPrototypeOf(f)说的不是一回事

①f.prototype 是使用使用 new 创建的 f 实例的原型:
f.prototype === Object.getPrototypeOf(new f()); // true

②Object.getPrototypeOf(f)是 f 函数的原型:
Object.getPrototypeOf(f) === Function.prototype; //true

所以答案是 false
```

分类：JavaScript

[答案&解析]()

<br/>

### Day69:写出执行结果,并解释原因

```js
const lowerCaseOnly =  /^[a-z]+$/;
console.log(lowerCaseOnly.test('yideng'));
console.log(lowerCaseOnly.test(null));
console.log(lowerCaseOnly.test());
```

```js
// 答案
true true true
// 解析
test方法的参数会被调用toString强制转换成字符串
此题转换的字符串是null、undefined
```

分类：JavaScript

[答案&解析]()

<br/>

### Day70:写出执行结果,并解释原因

```js
function captureOne(re, str) {
  var match = re.exec(str);
  return match && match[1];
}
var numRe  = /num=(\d+)/ig,
    wordRe = /yideng=(\w+)/i,
    a1 = captureOne(numRe,  "num=1"),
    a2 = captureOne(wordRe, "yideng=1"),
    a3 = captureOne(numRe,  "NUM=2"),
    a4 = captureOne(wordRe,  "YIDENG=2"),
		a5 = captureOne(numRe,  "Num=3"),
    a6 = captureOne(wordRe,  "YiDeng=3");
console.log(a1 === a2);
console.log(a3 === a4);
console.log(a5 === a6);
```

```js
// 答案
 true false true
// 解析
1）exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。
2）但是在Javascript中使用exec进行正则表达式全局匹配时要注意：
	①在全局模式下，当 exec() 找到了与表达式相匹配的文本时，在匹配后，它将把正则表达式对象的   			②lastIndex 属性设置为匹配文本的最后一个字符的下一个位置。
	③这就是说，您可以通过反复调用 exec() 方法来遍历字符串中的所有匹配文本。
	④当 exec() 再也找不到匹配的文本时，它将返回 null，并把 lastIndex 属性重置为 0。
3）所以在全局模式下，如果在一个字符串中完成了一次模式匹配之后要开始检索新的字符串，就必须手动地把 lastIndex 属性重置为 0。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day71:[手写代码]实现Promise.all方法

```js
// 核心思路
①接收一个 Promise 实例的数组或具有 Iterator 接口的对象作为参数
②这个方法返回一个新的 promise 对象，
③遍历传入的参数，用Promise.resolve()将参数"包一层"，使其变成一个promise对象
④参数所有回调成功才是成功，返回值数组与参数顺序一致
⑤参数数组其中一个失败，则触发失败状态，第一个触发失败的 Promise 错误信息作为 Promise.all 的错误信息。

// 实现代码
一般来说，Promise.all 用来处理多个并发请求，也是为了页面数据构造的方便，将一个页面所用到的在不同接口的数据一起请求过来，不过，如果其中一个接口失败了，多个请求也就失败了，页面可能啥也出不来，这就看当前页面的耦合程度了～

//代码实现
function promiseAll(promises) {
  return new Promise(function(resolve, reject) {
    if(!Array.isArray(promises)){
        throw new TypeError(`argument must be a array`)
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedResult = [];
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(value=>{
        resolvedCounter++;
        resolvedResult[i] = value;
        if (resolvedCounter == promiseNum) {
            return resolve(resolvedResult)
          }
      },error=>{
        return reject(error)
      })
    }
  })
}

// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
promiseAll([p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]
})
```

分类：JavaScript、编程题

[答案&解析]()

<br/>

### Day72:有效括号算法题

```js
/*
	给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效
  有效字符串需满⾜：
 	 	1. 左括号必须⽤相同类型的右括号闭合。
  	2. 左括号必须以正确的顺序闭合。
  注意空字符串可被认为是有效字符串。
  示例1：
  	输⼊: "()"
  	输出: true
  示例2：
  	输⼊: "()[]{}"
  	输出: true
  示例 3:
  	输⼊: "(]"
  	输出: false
  示例 4:
  	输⼊: "([)]"
  	输出: false
  示例 5:
  	输⼊: "{[]}"
  	输出: true
*/
```

```js
// 思路
1）首先，我们通过上边的例子可以分析出什么样子括号匹配是复合物条件的，两种情况。
	①第一种（非嵌套情况）：{} [] ；
	②第二种（嵌套情况）：{ [ ( ) ] } 。
除去这两种情况都不是符合条件的。
2）然后，我们将这些括号自右向左看做栈结构，右侧是栈顶，左侧是栈尾。
3）如果编译器中的括号是左括号，我们就入栈（左括号不用检查匹配）；如果是右括号，就取出栈顶元素检查是否匹配。
4）如果匹配，就出栈。否则，就返回 false；

// 代码实现
var isValid = function(s){
  let stack = [];
  var obj = {
     "[": "]",
     "{": "}",
     "(": ")",
  };
  // 取出字符串中的括号
  for (var i = 0; i < s.length;i++){
    if(s[i] === "[" || s[i] === "{" || s[i] === "("){
      // 如果是左括号，就进栈
      stack.push(s[i]);
    }else{
   		var key = stack.pop();
      // 如果栈顶元素不相同，就返回false
      if(obj[key] !== s[i]){
        return false;
      }
    }
  }
  return stack.length ===  0
}
```

分类：算法

[答案&解析]()

<br/>

### Day73:写出执行结果,并解释原因

```js
function yideng(n,o){
    console.log(o); // ？
    return {
        yideng:function(m){
            return yideng(m,n);
        }
    }
}
const a=yideng(0);a.yideng(1);a.yideng(2);a.yideng(3);
const b=yideng(0).yideng(1).yideng(2).yideng(3);
const c = yideng(0).yideng(1);c.yideng(2);c.yideng(3);
```

```js
// 答案
undefined 0 0 0 
undefined 0 1 2
undefined 0 1 1

// 解析
闭包知识考查
	return返回的对象的fun属性对应一个新建的函数对象，这个函数对象将形成一个闭包作用域，使其	能够访问外层函数的变量n及外层函数fun,
关键点：
	理清执行的是哪个yideng函数，为了不将yideng函数与yideng属性混淆，等价转换下代码
  function _yideng_(n,o){
      console.log(o);
      return {
          yideng:function(m){
              return _yideng_(m,n);
          }
      }
  }
  const a=_yideng_(0);a.yideng(1);a.yideng(2);a.yideng(3);
  const b=_yideng_(0).yideng(1).yideng(2).yideng(3);
  const c = _yideng_(0).yideng(1).yideng(2);c.yideng(3);

1）第一行a代码执行过程解析，
①const a=_yideng_(0);调用最外层的函数，只传入了n,所以打印o是undefined
②a.yideng(1);调用yideng(1)时m为1，此时yideng闭包了外层函数的n，也就是第一次调用的n=0，即m=1，n=0，并在内部调用第一层_yideng_函数_yideng_(1,0);所以o为0；
③a.yideng(2);调用yideng(2)时m为2，但依然是调用a.yideng，所以还是闭包了第一次调用时的n，所以内部调用第一层的_yideng_(2,0);所以o为0
④a.yideng(3);同③
所以是undefined 0 0 0

2）第二行b代码执行过程解析
①第一次调用第一层_yideng_(0)时，o为undefined；
②第二次调用 .yideng(1)时m为1，此时yideng闭包了外层函数的n，也就是第一次调用的n=0，即m=1，n=0，并在内部调用第一层_yideng_函数_yideng_(1,0);所以o为0；
③第三次调用 .yideng(2)时m为2，此时当前的yideng函数不是第一次执行的返回对象，而是第二次执行的返回对象。而在第二次执行第一层_yideng_(1,0)时,n=1,o=0,返回时闭包了第二次的n，遂在第三次调用第三层fun函数时m=2,n=1，即调用第一层_yideng_函数_yideng_(2,1)，所以o为1；
④第四次调用 .yideng(3)时m为3，闭包了第三次调用的n，同理，最终调用第一层_yideng_函数为_yideng_(3,2)；所以o为2；
所以是undefined 0 1 2

3）第三行c代码执行过程解析
①在第一次调用第一层_yideng_(0)时，o为undefined；
②第二次调用 .yideng(1)时m为1，此时yideng闭包了外层函数的n，也就是第一次调用的n=0，即m=1，n=0，并在内部调用第一层_yideng_函数fun(1,0);所以o为0；
③第三次调用 .yideng(2)时m为2，此时yideng闭包的是第二次调用的n=1，即m=2，n=1，并在内部调用第一层_yideng_函数_yideng_(2,1);所以o为1；
④第四次.yideng(3)时同理，但依然是调用的第二次的返回值，遂最终调用第一层fun函数_yideng_(3,1)，所以o还为1
所以是undefined 0 1 1
```

分类：JavaScript

[答案&解析]()

<br/>

### Day74:写出执行结果,并解释原因

```js
var arr1 = "ab".split('');
var arr2 = arr1.reverse(); 
var arr3 = "abc".split('');
arr2.push(arr3);
console.log(arr1.length);
console.log(arr1.slice(-1));
console.log(arr2.length);
console.log(arr2.slice(-1));
```

```js
// 答案
3 ["a","b","c"] 3 ["a","b","c"]

//解析
这个题其实主要就是考察的reverse会返回该数组的引用，但是容易被迷惑，导致答错，如果知道这个点，就不会掉坑里了。

1）reverse
MDN 上对于 reverse() 的描述是酱紫的：
The reverse method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.
reverse 方法颠倒数组中元素的位置，改变了数组，并返回该数组的引用。

2）slice
slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。
```

分类：JavaScript

[答案&解析]()

<br/>

### Day76:写出执行结果,并解释原因

```js
var F = function(){}
Object.prototype.a = function(){
console.log('yideng')
}
Function.prototype.b = function(){
console.log('xuetang')
}
var f = new F()
F.a();
F.b();
f.a();
f.b();
```

```js
// 答案
yideng xuetang yideng 报错
//解析
1）F.a();F.b();
F是个构造函数，而f是构造函数F的一个实例。
因为F instanceof Object == true、F instanceof Function == true
由此我们可以得出结论：F是Object 和 Function两个的实例，即F既能访问到a，也能访问到b。
所以F.a() 输出 yideng F.b() 输出 xuetang

2）f.a();f.b();
对于f，我们先来看下下面的结果：
f并不是Function的实例，因为它本来就不是构造函数，调用的是Function原型链上的相关属性和方法了，只能访问Object原型链。
所以f.a() 输出 yideng 而f.b()就报错了。

3）具体分析下它们是如何按路径查找的：
①f.a的查找路径: f自身: 没有 ---> f.__proto__(Function.prototype),没有--->f.__proto__.__proto__(Object.prototype): 输出yideng
②f.b的查找路径: f自身: 没有 ---> f.__proto__(Function.prototype): 没有 ---> f.__proto__.__proto__ (Object.prototype): 因为找不到，所以报错
③F.a的查找路径: F自身: 没有 ---> F.__proto__(Function.prototype): 没有 ---> F.__proto__.__proto__(Object.prototype): 输出 yideng
④F.b的查找路径: F自身: 没有 ---> F.__proto__(Function.prototype): xuetang
```

分类：JavaScript

[答案&解析]()

<br/>

### Day77:写出执行结果,并解释原因

```js
const a = [1,2,3],
    b = [1,2,3],
    c = [1,2,4],
		d = "2",
		e = "11";
console.log([a == b, a === b, a > c, a < c, d > e]);
```

```js
// 答案
[false,false,false,true,true] 

// 解析
1）JavaScript 有两种比较方式：严格比较运算符和转换类型比较运算符。
	对于严格比较运算符（===）来说，仅当两个操作数的类型相同且值相等为 true，而对于被广泛使用的比较运算符（==）来说，会在进行比较之前，将两个操作数转换成相同的类型。对于关系运算符（比如 <=）来说，会先将操作数转为原始值，使它们类型相同，再进行比较运算。
	当两个操作数都是对象时，JavaScript会比较其内部引用，当且仅当他们的引用指向内存中的相同对象（区域）时才相等，即他们在栈内存中的引用地址相同。
	javascript中Array也是对象，所以这里a,b,c显然引用是不相同的，所以这里a==b,a===b都为false。

2）两个数组进行大小比较，也就是两个对象进行比较
	当两个对象进行比较时，会转为原始类型的值，再进行比较。对象转换成原始类型的值，算法是先调用valueOf方法；如果返回的还是对象，再接着调用toString方法。
①valueOf() 方法返回指定对象的原始值。
  JavaScript调用valueOf方法将对象转换为原始值。你很少需要自己调用valueOf方法；当遇到要预期的原始值的对象时，JavaScript会自动调用它。默认情况下，valueOf方法由Object后面的每个对象继承。 每个内置的核心对象都会覆盖此方法以返回适当的值。如果对象没有原始值，则valueOf将返回对象本身。
②toString() 方法返回一个表示该对象的字符串。
  每个对象都有一个 toString() 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。默认情况下，toString() 方法被每个 Object 对象继承。如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中 type 是对象的类型。
③经过valueOf,toString的处理，所以这里a,c最终会被转换为"1,2,3"与"1,2,4";

3）两个字符串进行比较大小
	上边的数组经转换为字符串之后，接着进行大小比较。
	MDN中的描述是这样的：字符串比较则是使用基于标准字典的 Unicode 值来进行比较的。
	字符串按照字典顺序进行比较。JavaScript 引擎内部首先比较首字符的 Unicode 码点。如果相等，再比较第二个字符的 Unicode 码点，以此类推。
	所以这里 "1,2,3" < "1,2,4",输出true,因为前边的字符的unicode码点都相等，所以最后是比较3和4的unicode码点。而3的Unicode码点是51,4的uniCode码点是52，所以a<c。
"2" > "11"也是同理，这个也是开发中有时会遇到的问题，所以在进行运算比较时需要注意一下。

4）关于valueOf，toString的调用顺序
①javascript中对象到字符串的转换经历的过程如下：
	如果对象具有toString()方法，javaScript会优先调用此方法。如果返回的是一个原始值（原始值包括null、undefined、布尔值、字符串、数字），javaScript会将这个原始值转换为字符串，并返回字符串作为结果。
	如果对象不具有toString()方法，或者调用toString()方法返回的不是原始值，则javaScript会判断是否存在valueOf()方法，如若存在则调用此方法，如果返回的是原始值，javaScript会将原始值转换为字符串作为结果。
  如果javaScript无法调用toString()和valueOf()返回原始值的时候，则会报一个类型错误异常的警告。
	比如：String([1,2,3]);将一个对象转换为字符串
	
②javaScript中对象转换为数字的转换过程：
	javaScript优先判断对象是否具有valueOf()方法，如具有则调用，若返回一个原始值，javaScript会将原始值转换为数字并作为结果。
	如果对象不具有valueOf()方法，javaScript则会调用toString()的方法，若返回的是原始值，javaScript会将原始值转换为数字并作为结果。
	如果javaScript无法调用toString()和valueOf()返回原始值的时候，则会报一个类型错误异常的警告。
	比如：Number([1,2,3]);将一个对象转换为字符串
```

分类：JavaScript

[答案&解析]()

<br/>


### Day78:补充代码，使代码可以正确执行

```js
const str = '1234567890';
function formatNumber(str){
  // your code
}
console.log(formatNumber(str)); //1,234,567,890
// 补充代码，使代码可以正确执行
```

```js
//代码实现
/*
	1.普通版
	优点：比for循环，if-else判断的逻辑清晰直白一些
	缺点：太普通
*/
function formatNumber(str){
  let arr = [],
      count = str.length;
  while(count >= 3){
    // 将字符串3个一组存入数组
    arr.unshift(str.slice(count-3,count));
    count -= 3;
  }
  // 如果不是3的倍数就另外追加到数组
  str.length % 3 && arr.unshift(str.slice(0,str.length % 3));
  return arr.toString();
}
console.log(formatNumber('1234567890'));

/*
	2.进阶版
	优点：JS的API玩的了如之掌
	缺点：可能没那么好懂，但是读懂之后就会发出怎么没想到的感觉
*/
function formatNumber(str){
  //str.split('').reverse() => ["0", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
  return str.split('').reverse().reduce((prev,next,index) => {
    return ((index % 3) ? next : (next + ',')) + prev
  })
}
console.log(formatNumber("1234567890"));

/*
	3.正则版
	优点：代码少，浓缩的都是精华
	缺点：需要对正则表达式的位置匹配有一个较深的认识，门槛大一点
*/
function formatNumber(str) {
  /*
  	①/\B(?=(\d{3})+(?!\d))/g：正则匹配非单词边界\B，即除了1之前的位置，其他字符之间的边界，后面必须跟着3N个数字直到字符串末尾
		②(\d{3})+：必须是1个或多个的3个连续数字;
		③(?!\d)：第2步中的3个数字不允许后面跟着数字;
  */
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
console.log(formatNumber("1234567890")) // 1,234,567,890

/*
	4.Api版
	优点：简单粗暴，直接调用 API
	缺点：Intl兼容性不太好，不过 toLocaleString的话 IE6 都支持
*/
 // ①toLocaleString：方法返回这个数字在特定语言环境下的表示字符串，具体可看MDN描述
function formatNumber(str){
  return Number(str).toLocaleString('en-US');
}
console.log(formatNumber("1234567890"));

 // ②还可以使用IntL对象
// Intl 对象是 ECMAScript 国际化 API 的一个命名空间，它提供了精确的字符串对比，数字格式化，日期和时间格式化。Collator，NumberFormat 和 DateTimeFormat 对象的构造函数是 Intl 对象的属性。
function formatNumber(str){
  return new Intl.NumberFormat().format(str);
}
console.log(formatNumber("1234567890"));
```

分类：JavaScript

[答案&解析]()

<br/>

### Day79:Script放在底部还会影响dom的解析和渲染吗？Script内部的代码执行会等待css加载完吗？css加载会影响DOMContentLoaded么？

```html
<!ODCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>京程一灯，每日一题</title>
  </head>
  <body>
    <!--
			1.Script放在底部还会影响dom的解析和渲染吗？
			2.Script内部的代码执行会等待css加载完吗？
			3.css加载会影响DOMContentLoaded么？
		-->
    <link href="https://cdn/css/bootstrap.css" ref="stylesheet">
    <h1>京程一灯</h1>
    <script>
    	console.log("DOMContentLoaded");
    </script>
  </body>
</html>
```

```js
// 答案与解析
1.script放在底部影响dom渲染。不会影响解析
2.script内的代码执行会等待css加载.
3.css代码若无script代码段，就不会影响DOMContentLoaded
也可以借助Permance详细的查看HTML的整体渲染流程。这是你成为高级前端的第一步。
```

### Day80:写出代码执行结果并解释原因

```js
console.log(null == 0);
console.log(null < 0);
console.log(null < 0);
```

```js
// 答案与解析
- 1.在JavaScript中，null不等于零，也不是零。
- 2.null只等于undefined 剩下它俩和谁都不等
- 3.关系运算符，在设计上总是需要运算元尝试转为一个number，而相等运算符在设计上，则没有这方面的考虑。所以 计算null<=0 或者>=0的时候回触发Number(null)，它将被视为0（Number(null)== 0为true）
```

### Day81:写出代码正确打印结果，并解释为什么

```js
const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];
console.log(
  arr1.sort() === arr1,
  arr2.sort() == arr2,
  arr1.sort() === arr2.sort()
);console.log(null == 0);
console.log(null < 0);
console.log(null < 0);
```

```js
// 答案
true, true, false

// 解析
①array 的 sort 方法对原始数组进行排序，并返回对该数组的引用。调用 arr2.sort() 时，arr2 数组内的对象将会被排序。
②当你比较对象时，数组的排序顺序并不重要。由于 arr1.sort() 和 arr1 指向内存中的同一对象，因此第一个相等测试返回 true。第二个比较也是如此：arr2.sort() 和 arr2 指向内存中的同一对象。
③在第三个测试中，arr1.sort() 和 arr2.sort() 的排序顺序相同；但是，它们指向内存中的不同对象。因此，第三个测试的评估结果为 false。
```

### Day82:写出代码正确打印结果，并解释为什么

```js
// 京程一灯，每日一题
const debounce = (fn,delay) => {
  // 介绍防抖函数原理，并实现
  // your code
}
const throttle = (fn,delay = 500) => {
  // 介绍节流函数原理，并实现
   // your code
}
```

```js
// 答案与解析
/*
	1）防抖函数原理：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
	适用场景：
		①按钮提交场景：防止多次提交按钮，只执行最后提交的一次
		②服务端验证场景：表单验证需要服务端配合，只执行一段连续的输入事件的最后一次，还有搜索联想词功能类似
*/
// 手写简化版实现
const debounce = (fn,delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this,args);
    },delay)
  }
}

/*
	2）节流函数原理:规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。防抖是延迟执行，而节流是间隔执行，函数节流即每隔一段时间就执行一次
	适用场景：
		①拖拽场景：固定时间内只执行一次，防止超高频次触发位置变动
		②缩放场景：监控浏览器resize
		③动画场景：避免短时间内多次触发动画引起性能问题
*/
// 手写简化版实现
// ①定时器实现
const throttle = (fn,delay = 500) =>{
  let flag = true;
  return (...args) => {
    if(!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this,args);
      flag = true;
    },delay);
  };
}
// ②时间戳实现
const throttle = (fn,delay = 500) => {
  let preTime = Date.now();
  return (...args) => {
    const nowTime = Date.now();
    if(nowTime - preTime >= delay){
      	preTime = Date.now();
      	fn.apply(this,args);
    }
  }
}
```




### Day83:写出执行结果,并解释原因

```js
let a = [];
let b = "0";
console.log(a == 0);
console.log(a == !a);
console.log(b == 0);
console.log(a == b);
```

```js
// 答案
true true true false

// 解析
1) [] == 0 => true
对象与原始类型值相等比较，对象类型会依照ToPrimitive规则转换成原始类型的值再进行比较。
①[] == 0 =>[].valueOf().toSting() == 0 =>  '' == 0
数组[]是对象类型，所以会进行ToPrimitive操作，即调用valueOf再调用toString,数组被转换为空字符串'',
②'' == 0 => Number('') == 0 => 0 == 0 => true
空字符串再和数字0比较时，比较的是原始类型的值,原始类型的值会转成数值再进行比较,所以最后得到true

2）[] == ![] => true
!的优先级高于==，所以先执行!，将[]转为boolean值，null、undefined、NaN以及空字符串('')取反都为true，其余都为false，所以![]为false
[] == false => 如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值 => [] == 0 => 同第一问 => true

3）"0" == 0 => true
如果比较的是原始类型的值，原始类型的值会转成数值再进行比较
Number('0') => 0 => 0 == 0 => true

4）[] == "0" => false
根据1）可以知道[] 被转换为了 '' , 所以'' == '0'，为false

// 知识点
一、ToString、ToNumber、ToBoolean、ToPrimitive转换规则：
1）ToString
这里所说的ToString可不是对象的toString方法，而是指其他类型的值转换为字符串类型的操作。
看下null、undefined、布尔型、数字、数组、普通对象转换为字符串的规则：
①null：转为"null"
②undefined：转为"undefined"
③布尔类型：true和false分别被转为"true"和"false"
④数字类型：转为数字的字符串形式，如10转为"10"， 1e21转为"1e+21"
⑤数组：转为字符串是将所有元素按照","连接起来，相当于调用数组的Array.prototype.join()方法，如[1, 2, 3]转为"1,2,3"，空数组[]转为空字符串，数组中的null或undefined，会被当做空字符串处理
⑥普通对象：转为字符串相当于直接使用Object.prototype.toString()，返回"[object Object]"

2）ToNumber
ToNumber指其他类型转换为数字类型的操作。
①null： 转为0
②undefined：转为NaN
③字符串：如果是纯数字形式，则转为对应的数字，空字符转为0, 否则一律按转换失败处理，转为NaN
④布尔型：true和false被转为1和0
⑤数组：数组首先会被转为原始类型，也就是ToPrimitive，然后在根据转换后的原始类型按照上面的规则处理，
⑥对象：同数组的处理

3）ToBoolean
ToBoolean指其他类型转换为布尔类型的操作
js中的假值只有false、null、undefined、空字符、0和NaN，其它值转为布尔型都为true。

4）ToPrimitive
ToPrimitive指对象类型类型（如：对象、数组）转换为原始类型的操作。
①当对象类型需要被转为原始类型时，它会先查找对象的valueOf方法，如果valueOf方法返回原始类型的值，则ToPrimitive的结果就是这个值
②如果valueOf不存在或者valueOf方法返回的不是原始类型的值，就会尝试调用对象的toString方法，也就是会遵循对象的ToString规则，然后使用toString的返回值作为ToPrimitive的结果。如果valueOf和toString都没有返回原始类型的值，则会抛出异常。
③注意：对于不同类型的对象来说，ToPrimitive的规则有所不同，比如Date对象会先调用toString，可以参考ECMA规则：https://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
	a.Number([])， 空数组会先调用valueOf，但返回的是数组本身，不是原始类型，所以会继续调用toString，得到空字符串，相当于Number('')，所以转换后的结果为"0"
	b.同理，Number(['10'])相当于Number('10')，得到结果10
  
二、宽松相等(==)比较时的隐士转换规则
宽松相等（==）和严格相等（===）的区别在于宽松相等会在比较中进行隐式转换。
1）布尔类型和其他类型的相等比较，只要布尔类型参与比较，该布尔类型的值首先会被转换为数字类型
2）数字类型和字符串类型的相等比较，当数字类型和字符串类型做相等比较时，字符串类型会被转换为数字类型
3）当对象类型和原始类型做相等比较时，对象类型会依照ToPrimitive规则转换为原始类型
4）当两个操作数都是对象时，JavaScript会比较其内部引用，当且仅当他们的引用指向内存中的相同对象（区域）时才相等，即他们在栈内存中的引用地址相同。
5）ECMAScript规范中规定null和undefined之间互相宽松相等（==），并且也与其自身相等，但和其他所有的值都不宽松相等（==）
```

分类：JavaScript

[答案&解析]()

<br/>

### Day84:请写出如下代码的打印结果

```js
var obj = {};
var x = +obj.yideng?.name ?? '京程一灯';
console.log(x);
```

```js
// 答案鱼解析
- 1.?省去过去判断key的麻烦。所以 obj.yideng?.name 遇到不存在的值返回undefined
- 2.+undefined 强制转化number NaN
- 3.NaN ?? 京程一灯 返回NaN。原因：??为空值合并操作符（是一个逻辑操作符，当左侧的表达式结果为 null 或者 undefined 时，其返回右侧表达式的结果，否则返回左侧表达式的结果。
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
```

### Day85: