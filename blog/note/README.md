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

 todo 待更新
