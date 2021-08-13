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

