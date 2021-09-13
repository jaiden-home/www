---
sidebarDepth: 3
sidebar: auto
---

# 学习笔记

记录学习中遇到的知识点

## 高阶函数（Higher order）

什么事高级函数？

* 如果一个函数的参数包含函数
* 函数返回一个函数

满足一项及以上都可以定义为高级函数

### `示例: 函数切片`

```js
function say(word){
	console.log(word)
}

Function.prototype.after = function (cb){
    var that = this
    return function (){
        var arrArg = Array.prototype.slice.call(arguments);
        // apply 也可以接受类数组,但是不建议这样做,因为他不是标椎
        that.apply(that, arguments)
        cb()
    }
}

var helloWorld = say.after(function(){
    console.log('world')
})

helloWorld('hello')
// hello
// world
```

### `示例: 柯里化函数`

```js
function isType (type, value){
    return Object.prototype.toString.call(value) === `[object ${type}]`
}

function currying(fn, arr){
    arr = Array.isArray(arr) ? arr : []
    return function(){
        var arrArg = Array.prototype.slice.call(arguments);
        arr = arr.concat(arrArg)
        if(arr.length < fn.length){
            return currying(fn,arr)
        }else{
            return fn.apply(fn, arr)
        }
    }
}

let isArray = currying(isType)('Array')
let isString = currying(isType)('String')
console.log(isArray([])) // true
console.log(isString([])) // false
```



## 异步编程

 异步编程的解决方式

```js
var fs = require('fs');

var function writeSchoolInfo(data){
    fs.writeFile('./schoolInfo.txt',JSON.stringify(data),function(err){
        console.log('写入完成')
	})
}

function trigger(target, execute){
   var cache = {}
    return function (key,value){
        cache[key] =value
        if(!--target){
            execute(cache)
        }
    }
}

var writeExecute = trigger(2, writeSchoolInfo)

fs.readFile('./name.txt','utf-8',function(err, data){
    writeExecute('name', data)
})

fs.readFile('./location.txt','utf-8',function(err, data){
     writeExecute('location', data)
})

```

## 设计模式

### 发布订阅模式

最简单的发布订阅就是将订阅者集合缓存，当事件触发时调用。

```js
var event = {
    subscribers:[],
    on:function(execute){ // 订阅：订阅事件触发时执行
        this.subscribers.push(execute)
    },
    emit:function(e){ // 发布：当事件触发时发布
        this.subscribers.forEach(function(execute){
            execute(e)
        })
    }
}
```



### 观察者模式

观察者模式本质就是发布订阅模式，但是区别在于观察者模式，将发布订阅解构出来，更富有语义关系。

```js
class Subject{ // 被观察者
    constructor (){
        this.state = state || {}
        this.observers = []
    }
    attach(observer){ // 订阅
        this.observers.push(observer)
    }
    setState(state){ // 发布
        this.state = state
        this.observers.forEach(function(observer){
            obeerver.watcher(this)
        })
    }
}

class Observer{ // 观察者
    watcher(subject){
        
    }
}

var sub = new Subject({});
var obs = new Observer()

sub.attach(obs) // 绑定观察关系
```



## 学习Promise

### 用法介绍

#### 1). Promise.prototype.then() 实例方法

```js
const promise1 = new Promise((resolve, reject) => {
  resolve('Success!');
});

promise1.then((value) => {
  console.log(value);
  // expected output: "Success!"
});
```

#### 2). Promise.prototype.catch() 实例方法

```js
const promise1 = new Promise((resolve, reject) => {
  reject('reason!');
});

promise1.catch((error) => {
  console.log(error);
  // expected output: "reason!"
});
```

#### 3). Promise.prototype.finally() 实例方法

由于无法知道`promise`的最终状态，所以`finally`的回调函数中不接收任何参数，它仅用于无论最终结果如何都要执行的情况。

```js
const promise1 = new Promise((resolve, reject) => {
  resolve('Success!');
});

promise1.then((value) => {
  console.log(value);
}).catch((error) => {
  console.log(error);
}).finally(function() { 
  console.log('finally');
});;
```

#### 4). Promise.reject(reason) 静态方法

reason 表示Promise被拒绝的原因。

```js
Promise.reject(new Error('fail')).then(function(result) {
    console.log('Resolved');
}, function(err) {
    console.error(err);// expected output: Error: fail
});
```

#### 5). Promise.resolve(value) 静态方法

value将被Promise对象解析的参数，也可以是一个Promise对象，或者是一个thenable。

```js
const promise1 = Promise.resolve(123);
promise1.then((value) => {
    console.log(value); // expected output: 123
});
```

#### 6). Promise.race() 静态方法

race 函数返回一个 Promise，取决于最快完成的Promise完成结果, 如果迭代包含一个或多个非Promise值或非等待态的Promise，则将解析为迭代中找到的第一个值。

```js
var p5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "five");
});
var p6 = new Promise(function(resolve, reject) {
    setTimeout(reject, 100, "six");
    // setTimeout第三个及以后的参数都可以作为回调函数的参数
});
Promise.race([p5, p6]).then(function(value) {
    console.log(value) // 未被调用
}, function(reason) {
    console.log(reason); // p6 更快，所以它失败了
});
```

#### 7). Promise.any() 静态方法

返回第一个 `promise` 成功结果。如果可迭代对象中没有一个 `promise` 成功,就返回一个失败的 `promise `和AggregateError类型的实例.

```js
const pErr = new Promise((resolve, reject) => {
  reject('总是失败');
});

Promise.any([pErr]).catch((err) => {
    console.log(err);
    // "AggregateError: No Promise in Promise.any was resolved"
})

```

#### 8). Promise.all() 静态方法

这个方法和`Promise.any`是相反的,如果传入的 promise 中有一个失败（rejected），结果给失败状态的回调函数，而不管其它 promise 是否完成。否则返回所有promise 成功的结果。

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
   setTimeout(resolve, 100, 'foo');
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // expected output: Array [3, 42, "foo"]
});
```

####  Promise.allSettled() 静态方法

每一个 promise 已经完成以后，返回promise的`结果对象` 。每个`结果对象`，都有一个 `status` 字符串。

如果它的值为 `fulfilled`，则结果对象上存在一个 `value` 。

如果值为 `rejected`，则存在一个 `reason` 。

```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) => {
    console.log(results)
    // [{"status":"fulfilled","value":3},{"status":"rejected","reason":"foo"}]
});
```



### 源码解析

Promise的polyfill源码解析遵守：[Promise A+ 规范 ](https://promisesaplus.com/ )

###### 简版Promise

```js
class Promise {
    constructor(executor) {
        this.status = 'PENDING';
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        const resolve = (value) => {
            if (this.status !== 'PENDING') return;
            this.status = 'RESOLVED';
            this.value = value;
            this.onFulfilledCallbacks.forEach(fn => fn(this.value))
        };
        const reject = (reason) => {
            if (this.status !== 'PENDING') return;
            this.status = 'REJECTED';
            this.reason = reason;
            this.onRejectedCallbacks.forEach(fn => fn(this.reason))
        };
        executor(resolve, reject);
    }

    then(onFulfilled, onRejected) {
        if (this.status === 'RESOLVED') {
            onFulfilled(this.value)
        } else if (this.status === 'REJECTED') {
            onRejected(this.reason)
        } else {
            this.onFulfilledCallbacks.push(onFulfilled);
            this.onRejectedCallbacks.push(onRejected);
        }
    }
}
```



###### 符合Promise A+规范：

```js
//  成功
const RESOLVED = 'RESOLVED';
//  失败
const REJECTED = 'REJECTED';
// 等待
const PENDING = 'PENDING';


const resolvePromise = (newPromise, x, resolve, reject) => {
    let flag
    if (newPromise === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(
                    x,
                    y => {
                        /*
                        * 是promise则只能改变一次状态
                        * 所以只能防止多次被调用加一个状态值
                        * */
                        if (flag) return;
                        flag = true;
                        resolvePromise(newPromise, y, resolve, reject)
                    },
                    e => {
                        if (flag) return;
                        flag = true
                        reject(e)
                    }
                )
            } else {
                resolve(x)
            }
        } catch (e) {
            if (flag) return;
            flag = true
            reject(e)
        }
    } else {
        resolve(x)
    }
}

class Promise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        const resolve = (value) => {
            if (this.status === PENDING) {
                this.status = RESOLVED;
                this.value = value;
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        };
        const reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        };
        try {
            executor(resolve, reject); // 执行
        } catch (err) {
            reject(err);
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
        onRejected = typeof onRejected === 'function'
            ? onRejected
            : e => {
                throw e
            };
        // then之后需要一个新的promise
        const newPromise = new Promise((resolve, reject) => {
            if (this.status === RESOLVED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value);
                        resolvePromise(newPromise, x, resolve, reject);
                    } catch (err) {
                        reject(err)
                    }
                })
            }

            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(newPromise, x, resolve, reject);
                    } catch (err) {
                        reject(err)
                    }
                })
            }

            if (this.status === PENDING) {
                // 收集 onFulfilled
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value)
                            resolvePromise(newPromise, x, resolve, reject);
                        } catch (err) {
                            reject(err)
                        }
                    })
                });
                // 收集 onRejected
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason)
                            resolvePromise(newPromise, x, resolve, reject);
                        } catch (err) {
                            reject(err)
                        }
                    })
                });
            }
        })
        return newPromise
    }
}
```

