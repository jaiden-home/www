# TypeScript

### 什么是 TypeScript？

#### 官方定义

> TypeScript is JavaScript with syntax for types.
> TypeScript是一种基于JavaScript的强类型编程语言，可以在任何规模上为您提供更好的工具。

以上描述是官网[[1\]](https://www.typescriptlang.org)对于 TypeScript 的定义。

#### 鸭子泛型

​	“鸭子泛型” 在TypeScript 是一个类型的概念。鸭子泛型它源自于一个编程原则，即“如果它看起来像鸭子，游起来像鸭子，叫起来像鸭子，那么它可能就是一只鸭子”。在编程中，这个原则指的是我们不关心对象的类是什么，而只关心对象是否具有我们需要的属性或方法。也就是说在TypeScript中，类型关心的是数据之间的关系(相同,多少,结构)。不关心它派生与那个实际的类。

#### 优缺点

* 优点：提高了代码的健壮性，增强提示使得编码更安全高效，使得编码更有约束力。
* 缺点：额外的类型声明，降低了代码可读性，增加了维护成本，提高了心智负担。

​	所有我们知道，TypeScript 只在你的编辑器里有效。它给你更早发现bug的能力，这方面和你的eslint类似；很显然 TypeScript 并不是适合任何JavaScript的项目。在考虑是否使用TypeScript 时，要考虑`健壮性`和`安全约束`是不是首选项；我们建议你回答项目三个问题，来判断是不是要使用TypeScript。

> * 你的项目是不是基类项目，被多个项目共享，例如：工具库等？
>
>   * TypeScript 更适合公共项目。
>
> * 你的项目迭代进度是不是主线任务？
>
>   * TypeScript 会降低开发速度。
>
> * 效率 和 可控性 二选一你更关心哪一个？
>
>   * TypeScript 增强代码的: 可用性、健壮性、安全性；
>   * TypeScript 降低代码的: 可读性，维护性?、开发效率；
>

​	TypeScript 本意就是为了更好的维护性，但是由于往往项目开发人员，大量的使用不规范，不合理，使得项目维护性更差。当代码语言的某项能力依赖于人，而不是代码。我觉得造成的结果是代码带来的。所以不要盲目的给你项目中使用TypeScript ，使得你的项目使用了AnyScript 编写完成。





### 类型总结

我们来回顾一下，JavaScript中有哪些数据类型；

**原有基础类型**

* boolean
* string
* number
* symbol
* bigInt
* undefined
* null

**类型新增源始类型**

* any

  > 任意类型：它允许对数据进行任何类型操作， 放弃了TypeScript 提供的类型检查。更适合叫它：没有类型。

* unknown

  > 未知类型：它派生于any，是更安全的替代 `any` 的类型。要求是TypeScript 任意类型的一种。更适合叫它：任意类型。

* never

  > 不存在类型：类似与javascript里的undefined的定义；不存在的值，根本不会有的值。

* void

  > 不关心类型：表示没有任何操作，不关心后续内容。通常用作那些没有返回值的函数的返回类型。

**数据描述类型**

* 对象

  > * **Object** (大写)：`Object` 是一个全局类型。准确地说它表示所有对象的父类型，包括包装类( Boolean、String、Number、Symbol、BigInt ) 。或者说它表示除了 `null`、`undefined`的父类型。
  >
  > * **object** (小写)：`object` 是一个对象类型。表示任何非原始类型的值。包括由 `Object` 构造函数创建的对象，以及由其他构造函数（如 `Array`、`Function` 等）创建的对象。
  >
  > * 包装类型：`String`、`Number` 、`Boolean` 是原始包装类型，有对象特性, 通常可以理解成基础类型的子类型。而 `string`、`number`、 `boolean` 是基本数据类型。 通常可以理解成包装类的父类。
  >
  
* 数组

  > TypeScript中数组更像集合，每一项的类型，都要满足数组类型的定义。通常可以理解成每一项的类型是数组类型的子类。

* 函数

  > 在 TypeScript 中，函数类型是一种用来定义函数的类型的方式。它允许你为函数的参数和返回值指定类型，以确保代码的类型安全性。
  >
  > * 函数类型：你可以为函数的参数和返回值指定类型。函数类型任然是一个javascript的函数，只是增强了，参数 ，返回值类型检查。
  >
  >   ```typescript
  >   // 箭头函数
  >   const add = (x: number, y: number): number => {
  >       return x + y
  >   }
  >                                               
  >   // 表达式箭头函数
  >   const sub: (x: number, y: number) => number = (x, y) => {
  >       return x - y
  >   }
  >                                               
  >   // 声明函数
  >   function mult(x: number, y: number): number {
  >       return x * y
  >   }
  >   ```
  >
  >   * 类型函数：你可以指定一个函数类型为一个类型，可以叫它类型函数。它是TypeScript一个类型，这个类型的结构是函数。
  >
  >   ```typescript
  >    type MathFunction = { (x: number, y: number) : number }
  >                           
  >   const subtract: MathFunction = (x, y) => x / y;
  >   ```
  > 
  
* class类

  > ​	class类在 JavaScript 中特性，在TypeScript 中都存在，并且用法相似。但在 TypeScript 中，它有一些额外的类型检查和语法支持。
  >
  > 如用 abstract 来声明抽象类；用 `private`、`protected` 类型标识符；当类中存在类型标识符，则该类就不依赖鸭子泛型继承，没有兼容性。
  >
  > 还可以使用修饰符  `public`、`private`、`protected`、`redadonly` 来控制成员的访问权限。例如：
  >
  > * private 私有的，只有我可以访问，也是`类型标识符`；
  > * protected 受保护的，我的属性，我的子类 可以访问，也是`类型标识符`；
  >
  > * public 公开的，我的属性，我的子类，或者实例都可以访问，默认声明；
  > * redadonly 修饰成只读；
  >
  > 还有类的装饰器（Decorators）是TypeScript中的一个实验性特性，它允许你通过在类声明的前面添加一个特殊的表达式来“装饰”类。装饰器可以用来修改类的行为，或者为类添加额外的功能，而不需要更改类的原始代码。装饰器的概念类似于Java中的注解（Annotations），但它们在TypeScript中是一等公民，可以用于执行更复杂的操作。

**描述数据类型**

* 元组

  > 元组（Tuple）是一种特殊的数组类型，它允许你定义一个固定长度和固定类型的数组。元组可以包含不同类型的元素，但元素的数量和类型在声明时需要保持一致。元组中的元素是固定的，一旦声明就不能更改数量或类型。但是可以通过索引来更新元素的值。
  >
  > ```typescript
  > const tuple: [number, string, boolean] = [10, "hello", true];
  > ```

* 枚举

  > 枚举（Enum）是一种用来定义命名常量集合的数据类型。用于标识一组相关的常量，提高代码的可读性和可维护性，使用枚举成员替代硬编码的常量值，使得代码更易于理解和修改。
  >
  > * 使用 `enum` 关键字来定义枚举类型。
  > * 枚举中的每个成员都有一个与之关联的数字值，默认从 `0` 开始，依次递增。
  > * 除了数字枚举外，可以为枚举成员指定具体的值，还可以使用字符串枚举。在枚举类型中，枚举值到枚举名的映射是双向的。

* 联合类型

  > 联合类型是一种用于表示一个类型，可以具有多种不同类型的方式。通过使用 `|` 符号将多个类型连接在一起，形成一个联合类型。通常可以理解成`并集`。

* 交叉类型

  > 交叉类型是一种用于组合多个类型的方式，它产生的结果类型将包含所有输入类型的成员。换句话说，如果你有多个类型，并且希望将它们合并为一个类型，可以使用交叉类型。通常可以理解成`交集`。当交叉类型是复杂类型时：这里的交集结果就是子集，符合: 多个集合(每项复杂类型)的共有集(子类型)。

* interface接口

  > 接口是一种用来定义对象的结构或类的形状的类型。接口可以包含属性和方法的声明，但不提供具体的实现。接口在开发中常用于描述对象的形状，以及类应该具有哪些属性和方法。

**泛型数据类型**

* 泛型

  > 泛型是 TypeScript 中的一种特性，它允许我们在定义函数、类或接口时使用参数化类型。通过使用泛型，我们可以在定义时不指定具体的类型，而是在使用时动态地指定类型。



### 语法(操作符与操作词)

#### type (声明类型操作词)

可以使用 `type` 关键字来声明类型别名，用来给一个类型起一个新的名字。

```typescript
type Age = number;

let age: Age = 30;
console.log(age); // 输出：30
```

#### <> 泛型标记符

泛型是一种提供类型复用的技术，可以通过尖括号 <> 包含一个或多个类型参数。

```typescript
type  genericType<T> =  T;

let variant: genericType<string> = 'str'
```

#### ? 可选操作符

```typescript
// 表示greet是可选的
interface Person {
  name: string;
  greet?: () => void;
}

const person: Person = {
  name: "Bob"
};

// javascript 安全地调用可选方法：可选链
person.greet?.(); // 这个是javascript用法，要和typescript区分
```

#### extends 约束关键字(条件类型)

`extends` 在条件类型中作为关键字使用，用于约束一个依赖于类型符合某个条件的新类型。条件类型是一种高级类型：它不是像javascript的中`extends` 关键字 一样，定义建立继承关系。而是在进行类型推断或定义复杂类型条件约束。

```typescript
// 1） 'str' 是否能扩展  string ，能返回新类型 true ，不能返回新类型 false
type IsString = 'str' extends string ? true : false; // IsString = true


// 2）泛型 T 被联合类型要求; number | undefined 约束,T 必须符合联合类型要求;
type SafeDivide<T extends number | undefined> = T extends number ? T : never;
type isSafeDivide = SafeDivide<null> // 类型“null”不满足约束“number | undefined”
```

#### typeof 运算符

在 JavaScript 中，`typeof` 用于在表达式上下文中获取一个值的类型，它返回一个表示类型的字符串。

在TypeScript中，限制了 `typeof` 运算符的使用范围，它只能在标识符或其属性上使用。 扩展了 `typeof` 的用法，允许在类型上下文中引用变量或属性的类型。

```typescript
//  1) 类型上下文的 typeof
let s = "hello";
let n: typeof s; // n 的类型被推断为 string


// 2) typeof 可以与 ReturnType 预定义类型结合使用，ReturnType<T> 接受一个函数类型，并产生该函数的返回类型。
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>; // K 的类型被推断为 boolean

// 3) 引用函数的类型
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>; // P 的类型被推断为 { x: number; y: number; }                    
```

#### keyof 运算符

```typescript
// 1) 基本用法
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;  // "name" | "age"

// 2) 获取对象 key 键类型
type KeyType = keyof any; // string | number | symbol
```

#### in 循环运算符

```typescript
// 1) 取出接口的每个类型
type Compute<T> = {[P in keyof T]:T[P]}
```

#### - 移除属性操作符

```typescript
// 定义一个泛型，去掉属性中有的只读属性
type Required<T> = { [P in keyof T]-?: T[P] };

interface Product {
    id?: number;
    name?: string;
}
type ProductInput = Required<Product>;
```

#### as 关键字(类型断言)

类型断言是一种在编译时告诉 TypeScript 编译器“我确信这是真的”的方式，来覆盖编译器的类型推断。

```typescript
// 1) 断言变量的确切类型：当你知道一个变量的具体类型比编译器推断的类型更具体时，可以使用类型断言来指定一个更确切的类型。
let content: any = "It's text, I promise!";
let text: string = content as string;


// 2) 在联合类型中断言更具体的类型：当处理联合类型时，如果需要将变量当作联合类型中的一个更具体的类型来使用，可以使用类型断言。
function getStringValue(arg: string | number): string {
  return arg as string; // 断言 arg 是 string 类型
}


// 3) 断言对象的特定属性：当需要访问一个对象的属性，而这个属性可能不存在时，可以使用类型断言来确保属性的存在。
interface Person {
  name: string;
  age?: number;
}

let person: Person = { name: "Alice" };
let age: number = person.age as number; // 断言 age 属性存在并是 number 类型


// 4) 循环断言：通过值查出键 
type PickKeyByValue<T extends object, V> = {
    [K in keyof T as T[K] extends V ? K : never ]: T[K]
}
interface Product {
    id: number;
    name: string;
    price: number;
}

type ProductInput = PickKeyByValue<Product, number>
```

#### is 关键字(类型守卫)

`is` 是一个用来缩小类型的类型谓词。它通常与自定义类型守卫函数一起使用，以确保在特定的代码块中变量具有更具体的类型。

```typescript
function isString(value: any): value is string {
    return typeof value === 'string';
}

let myValue!: string | number;

if (isString(myValue)) {
   console.log(myValue); //  myValue: string
}
```

#### ! 非空断言操作符

非空断言操作符。当你使用非空断言操作符时，告诉 TypeScript 你确信某个变量不会是 `null` 或 `undefined`。这个操作符可以用于类型断言，以覆盖 TypeScript 的严格空值检查。

```typescript
// 1) 断言变量不为 null 或 undefined
let value: string | null = null;
let definitelyString: string = value!; // 断言 value 不为 null 或 undefined

// 2) 断言一定能获取到document节点，不为null
const element = document.getElementById('ID')!;// tS不能确定类型，使用非空断言,确定不会有null
element?.innerHTML = 'Hello, TypeScript!';
```

#### infer 类型推断

* **简单类型推断**

```typescript
// 推断返回值
type ExtractReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
```

* **条件类型的递归**

```typescript
// 取递归Promise的返回值
type PromiseResult<T>  = T extends Promise<infer R> ? PromiseResult <R> : T;

type PromiseValueResult = PromiseResult< Promise< Promise< Promise<null> > > >; // null
```



#### \`${}\` 模板字符串

TypeScript 提供了字符串模板的泛型方法有四个

* Uppercase 全部大写
* Lowercase 全部小写
* Capitalize 首字母大写
* Uncapitalize 首字母小写

```typescript
interface Greeting {
    'title name': 'hello world';
}

// 保留空格前面字符串并全部大写
type UppercaseFirstTemplateLiteralUnion<T extends string | number | bigint | boolean | null | undefined> = T extends `${infer K} ${any}` ? Uppercase<K> : 'never';

// 字符串的泛型方法
type UppercaseGreeting = Uppercase<Greeting['title name']>; // "HELLO WORLD"
type LowercaseGreeting = Lowercase<Greeting['title name']>; // "hello world"
type CapitalizedGreeting = Capitalize<Greeting['title name']>; // "Hello world"
type UncapitalizedGreeting = Uncapitalize<'Hello World'>; // "hello World"


type Example = UppercaseFirstTemplateLiteralUnion<Greeting['title name']>;  // "Hello"

// 改写对象key名：将key 保留空格前面字符串并全部大写
type RenameGreeting<T> = {
    [K in keyof T as UppercaseFirstTemplateLiteralUnion<K & string>]: Uppercase<T[K] & string>
}

type ResultRenameGreeting = RenameGreeting<Greeting>
// 输出： type ResultRenameGreeting = {
//          TITLE: "HELLO WORLD";
//        }
```





### 数据增强描述类型

#### 复杂类型

```typescript
type Point = { x: number; y: string };

const point: Point = { x: 10, y: 'str' };
console.log(point); // 输出：{ x: 10, y: 'str' }
```

#### 数组类型

```typescript
// javascript中定义的数组
const array: any[] = ['符合javascript定义的数组', { name: '名字' }, 88, true] 

// 数字数组
const numbers: number[] = [1, 2, 3, 4, 5];

// 字符串数组
const strings: string[] = ["apple", "banana", "orange"];

// 布尔值数组
const booleans: boolean[] = [true, false, true, true];
```

#### 函数类型

##### 函数类型

```typescript
// 1) 箭头函数
const add = (x: number, y: number): number => {
    return x + y
}

// 2) 表达式：使用类型别名
type MathFunction = (x: number, y: number) => number;
const sub: MathFunction = (x, y) => {
    return x - y
}

// 3) 声明函数
function mult(x: number, y: number): number {
    return x * y
}

// 4) 可选参数
type ReturnValue = (x: number, y?: number) => number;
const reslut: ReturnValue = (x) => {
    return x 
}

// 5) 剩余参数
type SurplusFunction = (arg1: string, ...rest: number[]) => number[];
const surplusToArray: SurplusFunction = (str, n1, n2) => {
    return [n1, n2]
}

// 6) this 参数,在定义函数类型时，指定this的类型，这在处理对象的方法时非常有用。
interface MyObject {
    name: string;
    introduce: (this: MyObject) => void;
}
const person: MyObject = {
    name: "Alice",
    introduce: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};
const fn = person.introduce; //改变this
fn() // 使用 introduce 方法 报错
// The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyObject'.
```

##### 类型函数

```typescript
// 接口式：类型函数
interface  MathFunction { (x: number, y: number) : number }

const subtract: MathFunction = (x, y) => x / y;
```

##### 构造函数类型

```typescript
// 用于定义构造函数的类型，所有class的类型。
type ConstructorFunction =  new (...anys: any) => void;
```

##### 函数重载

函数重载是指在 TypeScript 中为同一个函数有：多个参数，对应这多种输出结果；提供同名类型定义的重载能力；通过函数重载，可以为同一个函数提供多个签名（即参数类型和返回类型），以覆盖不同的调用情况；

```typescript
// 函数重载
function getValue (v:string):string;
function getValue (v:number):number;
function getValue (value:any){
    return value
};

getType(true) // 报错，因为重载中没有出现boolean类型
```

##### 泛型函数

```typescript
// 1) 是个函数,支持了泛型
type FunctionGenerics = <T>(array: any) => T;

const identity: FunctionGenerics = (arg) => arg;

let output = identity<string>('str');


// 2) 声明式
function identityFunction<T>(arg: any): T {
    return arg;
}

let outputNumber = identityFunction<number>(123);
```

##### 函数泛型

```typescript
// 是个函数类型，参数等类型来自于泛型传入
type F<T> = (arg: any) => T;

const printLog: F<number> = (num) => {
    return num
};

const valueType = printLog(88); // const valueType: number
```





#### class类的类型

##### 类的类型

类的类型本身是内置的，通过 typeof 获取。本身class的类型，是类实例的类型, 就是`构造函数类型`；

```typescript
class MyClass {
}

type ClassType = typeof MyClass // 类的类型，通过 typeof 获取

const c: ClassType = MyClass; // class类的类型
const m: MyClass = new MyClass(); // 构造函数类型
```

##### `private`、`protected` 类型标识符

```typescript
// 1) 可以通过检查
class MyName {
    public name:string = '我的名字'
}

class YourName {
     public name:string = '你的名字'
}

let my:MyName = new MyName();
let your:YourName = new MyName();

my = your // 鸭子泛型，可以通过检测


// 2) 不可以通过检查
class MyName { // 用 `private`、`protected` 类型标识符；则该类就不依赖鸭子泛型继承，没有兼容性。
    private name:string = '我的名字'
}

class YourName {
     private name:string = '你的名字'
}

let my:MyName = new MyName();
let your:YourName = new MyName();

my = your // 没有兼容性，不可以通过检测
```

##### 类型注解

```typescript
class Person {
    name: string; // 需要先声明成员
    age: number;

    constructor(name: string, age: number) { // 类型注解
        this.name = name;
        this.age = age;
    }
}

```

##### 访问修饰符

```typescript
class Person {
    public gender: string; // 公开的，我的属性，我的子类，或者实例都可以访问。(默认)
    protected age: number; // 受保护的，我的属性，我的子类 可以访问。
    private name: string;  // 私有的，只有我可以访问

    constructor(name: string, age: number,/* public */  gender:string) { // 可以直接类型注解 public gender: string;不建议;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
```

##### readonly 修饰符

```typescript
class Circle {
    public readonly PI: number = 3.14; // public不是必须的
}

const circle = new Circle();
// circle.PI = 3.14159; // 编译错误，无法修改只读属性

```

##### 抽象类

```typescript
abstract class Animal {
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}
```

##### 类实现多接口

```typescript
interface Printable { // 接口
    print(): void;
}

interface Preview {
	preview(): void;
}

class Document implements Printable, Preview { // 多接口继承
    print() {
        console.log("Printing document...");
    }
	preview() {
        console.log("In preview...")
	}
}
```

##### 实例方法与原型方法

```typescript
// 1) 实例方法
class MessageLogger {
    // 描述性的名称
    sayHello:() => void;
    
    // "描述性的名称即属性"需要在构造函数中明确赋值 -> sayHello:() => void;
    constructor() {
        this.sayHello = () => {
            console.log("Hello");
        };
    }
}



// 2） 原型方法
class MessageLogger {
    logMessage(): void; // 描述性的方法名

    logMessage()  { // logMessage方法的实现
    };
}
class MessageLogger { // 实例方法，不能用原型方法实现
    sayHello:() => void; // // 描述性的名称
    
	sayHello(){ // 编译错误：没有初始值设定，并且在构造函数中没有明确赋值。
	}
}
```

##### 类的装饰器 

* 要启用装饰器支持，你需要在`tsconfig.json`文件中设置`experimentalDecorators`选项为 true;(ps: 装饰器是实验性特性，可能会在未来的TypeScript版本中更改或移除)
* 装饰器的执行顺序如下：
  - 参数装饰器
  - 方法装饰器
  - 属性装饰器
  - 类装饰器

```typescript
// 1) 参数装饰器：用于修改构造函数参数的行为。
function logParam(target: any, propertyName: string, index: number) {
    console.log(`Parameter name: ${propertyName}, index: ${index}`);
}

class MyClass {
    constructor(@logParam "param1", @logParam "param2") {
        // ...
    }
}


// 2) 方法装饰器：用于修改方法的行为。
function logMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`Calling ${propertyName}`);
        return method.apply(this, args);
    };
    return descriptor;
}

class MyClass {
    @logMethod
    myMethod() {
    }
}



// 3) 属性装饰器：用于修改属性的行为。
function configurable(target: any, propertyName: string) {
    // 修改属性描述符
    let value = target[propertyName];
    const getter = () => value;
    const setter = (val: any) => value = val;
    return {
        get() {
            return getter();
        },
        set(val) {
            setter(val);
        }
    };
}
class MyClass {
    @configurable
    myProperty: string;
}




// 4) 类装饰器: 基础用法
function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        public newProperty: string = 'newProperty'; // 装饰添加额外的属性或方法
    };
}

@classDecorator
class MyClass {}


```



### 描述数据格式类型

#### interface 接口的类型

在 TypeScript 中，`interface` 是一种用于描述对象的形状（即属性和方法）的语法结构。它可以用来定义对象的类型，使得 TypeScript 能够对对象的结构进行类型检查。

##### 定义函数类型

```typescript
interface Greeter {
    (name: string): string;
}

const sayHello: Greeter = (name) => `Hello, ${name}!`;
console.log(sayHello("Alice")); // 输出：Hello, Alice!

```

##### 混合类型

```typescript
interface Counter {
    count: number;
    increment(): void;
}

function createCounter(): Counter {
    let count = 0;

    const counter: Counter = {
        count,
        increment() {
            count++;
        }
    };

    return counter;
}

const myCounter = createCounter();
myCounter.increment();
console.log(myCounter.count); // 输出：1

```

##### 定义对象的形状

```typescript
interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "Alice",
    age: 30
};

```

##### 可选属性

```typescript
interface Config {
    title: string;
    description?: string; // 可选属性
}

const config1: Config = { title: "Title" }; // description 属性是可选的
const config2: Config = { title: "Title", description: "Description" }; // description 属性是可选的

```

##### 只读属性

```typescript
interface Point {
    readonly x: number;
    readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 5; // 错误，只读属性不能被修改
```

##### 接口间的互相继承

```typescript
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

const dog: Dog = { name: "Buddy", breed: "Labrador" };

```

##### 接口合并

```typescript
// 因此如果你定义了两个具有相同名称的接口，它们会自动合并成一个接口。
interface Person {
    name: string;
}

interface Person {
    age: number;
}

const person: Person = {
    name: "Alice",
    age: 30
};

console.log(person.name); // 输出：Alice
console.log(person.age); // 输出：30

```

##### 可索引类型(数组)

```typescript
interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = ["Alice", "Bob"];
console.log(myArray[0]); // 输出：Alice

```





#### tuple 元组类型

* 一种特殊的数组类型，一个固定长度和固定类型的数组。
* 可以通过索引来访问原则成员。
* 可以解构元组, 扩展元组，单不能访问扩展内容。
* 元组可以包含不同类型的元素，但元素的数量和类型在声明时需要保持一致。
* 元组中的元素是固定的，一旦声明就不能更改数量或类型。

```typescript
// 1) 定义一个元组
type ProductSummary = [name: string, price: number, state: boolean];
let phone: ProductSummary = ['iphone', 888, false];

// 2) 访问元组中的元素
type phoneNameType = ProductSummary[0]; // phoneNameType: string

// 3) 可以: 元组解构
type Iphone = [...ProductSummary, string]

// 4) 可以：只能更新类容；
phone = ['华为', 999, true];

// 5) 不可以：修改元组的元素类型。
phone =  ['iphone', '888', false]; // 报错: 元组定义后不可以改变元素类型

// 6) 不应该扩展，即使扩展也不可以访问扩展的内容；
const iphone =  ['iphone', '888', false, '附加信息'];
phone = iphone as ProductSummary;
const price =  phone[1]  // price: number 类型出错误，不应该修改
const attach = phone[3]; // 报错: 元组可以扩展，但是不能获取
```





#### enum 枚举类型

在TypeScript中，枚举（Enum）是一种特殊的类型，允许我们为一组值定义有意义的名称。枚举使代码更具可读性和可维护性，特别是在需要处理一组相关常量的情况下。TypeScript支持数字枚举和字符串枚举两种类型。

```typescript
// 1) 数字枚举
enum Direction {
    Up,    // 默认值为0
    Down,  // 默认值为1
    Left,  // 默认值为2
    Right  // 默认值为3
}


// 2) 可以手动指定枚举成员的值
enum Direction {
    Up = 2,
    Down,  // 3
    Left,  // 4
    Right  // 5
}

// 3) 可以为枚举成员赋予字符串值或数字
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = 3,
    Right // 4
}

// 4) 反向映射
enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Up);         // 输出: 0
console.log(Direction[0]);         // 输出: Up

// 5) 枚举合并
enum Fruit {
    Apple = "Apple",
    Banana = "Banana"
}

enum Fruit {
    Orange = "Orange",
    Mango = "Mango"
}
console.log(Fruit.Apple);  // 输出: Apple
console.log(Fruit.Orange); // 输出: Orange
```





#### 联合类型

联合类型是一种允许一个数据可以是几种类型之一的类型。表示一个值可以是几种类型之一。

- 当你使用联合类型时，只有所有联合类型已有的成员才被认为是安全的。
- 联合类型与交叉类型相反，后者是取多个类型的共有部分。
- 通常认为联合类型是一个`并集关系`。

```typescript
type ButtonType =  'primary' | 'dashed' | 'link' | 'text' | 'default';

const button:ButtonType = 'default';
```





#### 交叉类型

交叉类型用于组合多个类型，多个类型合并为一个类型。表示一个值同时具备多种类型的特质。

* 当你使用交叉类型时，要符合交叉类型中共有的特征才被认为是安全的。
* 联合类型与交叉类型相反，前者是取多个类型其中之一。
* 常认为交叉类型是一个`交集关系`。

```typescript
// 1) 要符合交叉类型中共有的特征
type AB = 'A' | 'B' | 'C';
type BC = 'B' | 'C' | 'D';
type CD = 'C' | 'D' | 'A';

type IntersectionType  = AB & BC & CD;  // C

// 2) 当'集合'成员是复杂类型,要符合交叉类型中共有的特征，推断是子类。
type A = { a: number };
type B = { b: string };
type C = { c: boolean };

type D = A & B & C;

const d: D = { a: 1, b: 'hello', c: true };

```





### 泛型

在TypeScript中，泛型是一种提供类型复用的技术。它允许你编写可复用的、函数类型、class类型、 接口类型、 等。这些类型可以用于各种类型组合。

#### 别名泛型

```typescript
// 泛型
type Itype<T = number> = T;

// 使用方式
const numberType:Itype = 1;

const stringType:Itype<string> = 'str';
```

#### “泛型函数”与“函数泛型”的区别

* 泛型函数：是一种特殊的泛型，用来定义函数的参数或者返回值。
* 函数泛型：是一个普通别名泛型，将泛型类型传给了一个函数类型；

```typescript
type GenericFunction<T> = (item: T, index: number) => void; // 函数泛型

type FunctionGenerics = <T>(array: T[], callback: GenericFunction<T>) => void; // 泛型函数 

const forEach: FunctionGenerics = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

forEach(['a', 'b', 'c'], (item, index) => {
    console.log(item, index);
});
```

#### 类泛型

```typescript
class Box<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
}

// 使用方式
let box = new Box<number>(10);
```

#### 接口泛型

```typescript
interface Pair<T, U> {
    first: T;
    second: U;
}

// 使用方式
let pair: Pair<number, string> = { first: 1, second: "two" };
```

#### 泛型约束

* **约束类型**

```typescript
function identity<T extends string | number >(arg: T): T {
    return arg;
}

// 使用方式
const outputString = identity("hello"); // const outputString: "hello"
const outputNumber = identity(123); //  const outputNumber: 123
const output = identity(true); // 报错: 约束了只能有 string 或 number，不能有 boolean 
```

* **约束属性**

```typescript
function getLen<T extends {length: number}>(value:T) {
    return value.length
}

// 使用方式
const arrLenght = getLen([1,2]) // const arrLenght: number
```

* **约束多属性**

```typescript
function getValue<T extends object, U extends keyof T>(obj:T, key:U):T[U] {
    return obj[key]
}

// 使用方式
const val = getValue({a: 1, b: 'str', c: true }, 'c') // const val: boolean
```

* **条件类型**

```typescript
type IsString<T> = T extends string ? true : false;
type IsNumber<T> = T extends number ? true : false;

// 使用示例
type TestString = IsString<"hello">; // 类型为 true
type TestNumber = IsNumber<42>; // 类型为 true
type TestBoolean = IsString<boolean>; // 类型为 false
```

#### 分发机制

* **联合类型分发**

```typescript
type Fish = 'Fish';
type Bird = 'Bird';

type Swim = 'Swim';
type Fly = 'Fly';

type Action<T> = T extends Fish
    ? Swim
    : T extends Bird
    ? Fly
    : never;

type action = Action<'Bird' | 'Fish' | 'Cat'>
```

* **泛型中never的分发** 

```typescript
type IsNever<T> = T extends never ? true : false;

// never经过泛型就会返回 never
type is = IsNever<never> // type is = never
```

* **阻止分发机制**

```typescript
// 阻止分发机制，当类型变换成交叉类型时，则没有分发功能
type NoDistrubte<T> = T & {}
type IsNever<T> = NoDistrubte<T> extends never ? true : false;

// never经过泛型就会返回 never
type is = IsNever<never> // type is = true
```





### 类型关系

回顾一下类型:

| 源类型   | any       | unknown | never | void     | undefined    | null       | boolean    | string  | number   | symbol | bigInt |
| :------- | --------- | ------- | ----- | -------- | ------------ | ---------- | ---------- | ------- | -------- | ------ | ------ |
| 类类型   | Object    | object  | 函数  | Classes  | 构造函数类型 | ...        | Boolean    | String  | Number   | Symbol | BigInt |
| 描述类型 | interface | tuple   | enum  | 联合类型 | 交叉类型     | 模块       | 命名空间   |         |          |        |        |
| 泛型     | Extract   | Exclude | Pick  | Omit     | NonNullable  | Parameters | ReturnType | Partial | Required | ...    | ...    |

**总结:**

#### any 类型

* any 是比较特殊，无法约束。

* unknown 派生于 any；
* any 可以作为任何类型的父类型；
* any 可以作为子类型时，将丧失安全检测；

```typescript
// 1) any 可以作为任何类型的父类型；
type Subtype = any; // 任何类型
type T = Subtype extends any ? true : false; // 都会返回 true


// 2）any 可以作为子类型时，将丧失安全检测;
type Parent = 'any,unknown除外的任何类型';
type x = any extends Parent ? true : false; // 都会返回 boolean,(除外:any,unknown)
```

#### unknown 类型

* 派生于 any ，是any的安全型。

* unknown 派生于 any，成为小any；
* any 可以作为任何类型的父类型，与any 一样；
* unknown 不是任何类型的子类型。any、unknown除外；

```typescript
// 1) unknown 可以作为任何类型的父类型；
type Subtype = unknown; // 任何类型
type T = Subtype extends unknown ? true : false; // 都会返回 true


// unknown 不是任何类型的子类型,any,unknown除外;
type Parent = '除外:any,unknown都返回false';
type x = unknown extends Parent ? true : false; // 都会返回 false,(除外:unknown、any)
```

#### never 类型

* 除自身外不是任何类型的父类型；
* 是任何类型的子类型；

```typescript
// 1) never不是任何类型的父类型,never除外；
type Subtype = unknown; // 任何类型
type T = Subtype extends never ? true : false; // 都会返回 false (除外:never、any)


// 2) never 是任何类型的子类型;
type Parent = '任何类型';
type x = never extends Parent ? true : false; // 都会返回 true
```

#### void 类型

* undefined 派生于 void ;
*  void 除 undefined 外，不是任何类型的父类型;
*  void 除 any、unknown外，不是任何类型的子类型;

```typescript
// 1) void 是 undefined 的父类型，其他它都不是。
type Subtype = undefined; 
type T = Subtype extends void ? true : false;  // 都会返回 false (除外:void、undefined、any)


// 2) void 不是任何类型子类，any、unknown、除外
type Parent = undefined;
type x = void extends Parent ? true : false; // 都会返回 false (除外: void、any、unknown)
```

#### undefined 类型

* undefined 派生于 void ;
*  undefined  是 void 的子类型;
* undefined 不是任何类型的父类型；

```typescript
// 1) undefined 不是任何类型的父类型。
type Subtype = void; 
type T = Subtype extends undefined ? true : false;  // 都会返回 false (除外:undefined、any)


// 2) undefined 是 void 的子类型;
type Parent = undefined;
type x = undefined extends Parent ? true : false; // 都会返回 false (除外:undefined、any、unknown、void)
```

#### null 类型

* 不是任何类型的父类型;
* null 除 any、unknown外，不是任何类型的子类型;

```typescript
// 1) null 不是任何类型的父类型。
type Subtype = unknown; 
type T = Subtype extends null ? true : false;  // 都会返回 false (除外:null、any)


// 2) null 不是 任何类型的子类型，除外:any、unknown;
type Parent = undefined;
type x = null extends Parent ? true : false; // 都会返回 false (除外:null、any、unknown)
```

#### 包装类

* 包装类：Boolean  String  Number  Symbol  BigInt

* 字面量类：boolean  string  number  symbol  bigInt

* 大写字母开头是包装类，子小写的父类型；
* 包装类有构造函数。字面量类型没有构造函数；

```typescript
// 包装类是父类型
type T = string extends String ? true : false;  // 返回 true

// String - 包装类
const wrapped_string: String = "Hello";
const wrappedString: String = new String("Hello");
// string - 字面类
const literal_string: string = "Hello";
const literalString: string = new String("Hello"); // 报错
// Type 'String' is not assignable to type 'string'. 'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.

//---------------//
// Number - 包装类
const wrapped_number: Number = 88;
const wrappedNumber: Number = new Number(88);
// number - 字面类
const literal_number: number = 88;
const literalNumber: number = new Number(88); // 报错
// Type 'Number' is not assignable to type 'number'. 'number' is a primitive, but 'Number' is a wrapper object. Prefer using 'number' when possible.

//---------------//
// Boolean - 包装类
const wrapped_boolean: Boolean = true;
const wrappedBoolean: Boolean = new Boolean(true);
// boolean - 字面类
const literal_boolean: boolean = true;
const literalBoolean: boolean = new Boolean(true); // 报错
// Type 'Number' is not assignable to type 'number'. 'number' is a primitive, but 'Number' is a wrapper object. Prefer using 'number' when possible.
```





### 兼容性

​	类型兼容性是 TypeScript 类型系统的核心概念之一，它决定了两个类型是否可以互相替换。在 TypeScript 中，兼容性规则保证了类型安全：采用鸭子类型兼容原则：会根据对象的成员来判断类型的兼容性，而不是基于标记类型。就是说如果两个对象具有相同的属性，那么它们就是兼容的，即使它们的类型声明不同。

- **结构兼容性**：两个类型在结构上相似，即它们具有相同的成员，则它们是兼容的。

  ```typescript
  let a: string = "hello";
  let b: string = a; // 兼容
  ```

- **赋值兼容性**：一个类型可以赋值给另一个类型，如果它们是相同的类型，或者一个类型是另一个类型的子类型。

  ```typescript
  interface Base {}
  interface Derived extends Base {}
  
  let base: Base = {};
  let derived: Derived = { };
  
  base = derived; // 兼容，子类型 可以满足 父类型
  ```



#### 结构性兼容

基于它们的结构，而不是基于它们的显式声明。

```typescript
type Dog = {
    name: string,
    age: number,
}
type Person = {
    name: string,
    age: number,
}
let teddy: Dog = {
    name: '泰迪',
    age: 3,
}
let dahuang: Person = {
    name: '大黄',
    age: 18,
}

// 基于它们的结构,可以赋值: 互相替换
teddy = dahuang;
dahuang = teddy;
```

#### 子父类兼容

一个类型是另一个类型的子类型时，子类型可以替换父类型。相反父类型不可以替换子类型。

```typescript
class Parent {
    constructor(public address: string) {
        console.log(this.address)
    }
    public callTitle() {
        console.log(this.address)
    }
}

class Child extends Parent {
    public money: number = 100
}

class Grandson extends Child {
    public work() { }
}

let grandpa: Parent = new Parent('爷爷');
let father: Child = new Child('爸爸');
let oneself: Grandson = new Grandson('孙子');

// 子可以赋与父
father = oneself
// 父不可以赋与子
father = grandpa // ERROR: Property 'money' is missing in type 'Parent' but required in type 'Child'.
```

#### 鸭子类型兼容

基于它们的结构，而不是基于它们的显式声明。这意味着在`结构兼容性`基础上有个`赋值兼容性`规则：

* 逆变：如果两个类型可以替换时，那么可以定义它们的超集或基类型。在定义类型时更宽泛的类型。
  * 逆变主要用于定于函数参数类型，使的我们在定义参数时，更宽泛的类型。
  * 总结：对应函数参数来说，我们是定父传子。
* 协变：如果两个类型可以替换时，那么可以传递给它们的子集或派生类型。传递数据时更具体的类型。
  * 对应协变来说：我们在传递数据时，可以赋予更加具体类型。
  * 总结：传子定父。使我们在传递数据时，更具体的类型。

逆变与协变区别：

* 相同点：都是为了满足：在定于时更加宽泛，在传递数据时更具体。
* 不同点：逆变强调在定义时更加宽泛，协变强调传递数据时更具体。

##### 逆变

逆变主要用于函数参数类型：当处理多参数时，允许一个函数接受一个比它声明的参数类型更具体的类型。

* 函数逆变: 函数参数类型

  ```typescript
  // 定义的多
  type CallbackType = (first: number, second: number, third: number, fourth: number) => void
  
  
  // 使用的少
  const callback:CallbackType = (first) => {
      console.log(first);
  }
  ```

* 接口逆变: 子父类类型

  ```typescript
  interface Animal {
      name: string;
  }
  
  interface Dog extends Animal {
      call: string;
  }
  
  let animal:Animal = {
      name:'动物'
  };
  
  let dog:Dog = {
      name: '狗',
      call: '叫'
  };
  
  const  Call= (animal:Animal)=>{};
  
  Call(dog);  // 逆变：定义的Animal，使用时传入了Dog
  ```

* 逆变过程

  ```typescript
  class Parent {
      public house: string = '房子'
  }
  
  class Child extends Parent {
      public money: number = 100
  }
  
  type Contravariancy<T> = (arg: T) => void;
  
  // 逆变了：Parent在前Child在后
  type isChild = Parent extends Child ? true : false; // false
  type isContravariancy = Contravariancy<Parent> extends Contravariancy<Child> ? true : false; // true
  ```

* 泛型逆变

  ```typescript
  interface Breed<T> {
      breed: (ins: T) => void; // 由于逆变，无法通过：
      // breed(arg: T): void; // 类型函数,本质不是一个真正意义的函数。所以没有，逆变过程
  }
  
  class Animal {
      public name: string = '动物';
      breed(){}
  }
  
  class Dog extends Animal {
      public call: string = '汪汪汪';
  
  }
  
  class Puppy extends Dog {
      public shape: string = '小狗';
  }
  
  let canidae:Breed<Dog> = new Dog();
  
  let teddy:Breed<Puppy> = new Puppy();
  
  canidae = teddy 
  // 等于 (arg: Puppy)=>{}  去赋值  (arg: Dog)=>{}；
  // 逆变要求Dog是Puppy的子类 
  // 所以不满足要求: 报错
  ```

* class逆变与禁止逆变

  * 逆变

    ```typescript
    class Animal {
        public name: string = '动物';
    }
    
    class Dog extends Animal {
        public age: number = 0;
    }
    const Call = (animal: Animal) => { };
    
    Call(new Dog()) // 逆变：定义的Animal，使用时传入了Dog
    ```

  * 禁止逆变: 同时有 `private`、`protected` 相同标识符;当类中存在类型标识符，则该类就不依赖鸭子类型你继承，没有兼容性。

    ```typescript
    class Animal {
        private id: string = 'DNA';
        public name: string = '动物';
    }
    
    class Dog extends Animal {
        private id: string = 'DNA';
        public age: number = 0;
    }
    const Call = (animal: Animal) => { };
    
    Call(new Dog()) // 报错:同时有 private id 相同标识符,没有兼容性。
    ```




##### 协变

协变主要用于，一个类型赋值或推断另一个类型时，那么可以传递给它们的子集或派生类型。

* 函数协变: 协变过程

  ```typescript
  class Animal {
      public name: string = '动物';
  }
  
  class Dog extends Animal {
      public age: number = 0;
  }
  
  const getAnima = () => new Animal();
  const getDog = () => new Dog();
  
  //  协变了: getAnima 是 getDog 的子类
  type isCovariance = typeof getDog extends typeof getAnima ? true : false; // true
  ```

* 类型协变: 子父类型

  ```typescript
  class Animal {
      public name: string = '动物';
  }
  
  class Dog extends Animal {
      public age: number = 0;
  }
  
  type ReturnAnima = (...args: any[]) => Animal;
  
  function getDog(): Dog {
      return new Dog();
  }
  
  // 协变允许 getDog 赋值给 ReturnAnima
  let animalGetter: ReturnAnima = getDog;
  ```

* 接口协变：类型推断。

  ```typescript
  interface Person {
      name: string,
      age: number,
  }
  
  let jerry: Person = {
      name: 'jerry',
      age: 18,
      // talk: '', // 'talk' does not exist in type 'Person'.
  }
  let jack = {
      name: 'jack',
      age: 19,
      talk: 'Shut up',
  }
  
  jerry = jack //  可以赋值，发生了协变
  ```

* 数组协变

  ```typescript
  class Animal {
      public name: string = '动物';
  }
  
  class Dog extends Animal {
      public age: number = 0;
  }
  
  const dogs: Dog[] = [{ name: "teddy", age: 3 }];
  
  // 协变允许 Dog[] 赋值给 Animal[]
  let animals: Animal[] = dogs; 
  ```

* 类型断言协变

  ```typescript
  interface Animal {
      name: string;
  }
  
  // 协变允许将 { name: "teddy", age: 3 } 断言为 Animal
  let animal: Animal = { name: "teddy", age: 3 } as Animal
  ```

* class协变与禁止协变

  * 协变

    ```typescript
    class Animal {
        public name: string = '动物';
    }
    
    class Dog extends Animal {
        public age: number = 0;
    }
    
    // 类型要求返回父类型
    type ReturnAnima = () => Animal;
    // 协变返回了子类型
    const getDog: ReturnAnima = () => new Dog();
    ```

  * 禁止协变: 同时有 `private`、`protected` 相同标识符;当类中存在类型标识符，则该类就不依赖鸭子类型你继承，没有兼容性。

    ```typescript
    class Animal {
        private id: string = 'DNA';
        public name: string = '动物';
    }
    
    class Dog extends Animal {
        private id: string = 'DNA';
        public age: number = 0;
    }
    
    type ReturnAnima = () => Animal;
    
    const getDog: ReturnAnima = () => new Dog();
    // 报错:同时有 private id 相同标识符,没有兼容性。
    ```

    



### 类型推断与类型守卫

* 类型推断:TypeScript 根据变量的赋值自动确定其类型的过程。如果开发者没有显式指定类型，则会尝试根据赋值的值来推断变量的类型。
* 类型守卫: TypeScript 通过一些检查来细化变量的类型，从而让 TypeScript 能够进行更精确的类型推断。

#### 类型推断

* 变量赋值推断

  ```typescript
  // 1) 
  let x = 10; // TypeScript 推断 x 的类型为 number
  ```

* 函数返回值推断

  ```typescript
  function getUserName(userId: number) {
      if (userId === 1) {
          return "Alice";
      } else {
          return "Bob";
      }
  }
  
  let r = getUserName(888) // TypeScript 推断返回类型为 string
  ```

* 上下文推断

  ```typescript
  // 1) 从右往左
  const names = ["Alice", "Bob", "Charlie"]; // TypeScript 推断 names 为 string[]
  names.forEach(name => {
      console.log(name); // name 被推断为 string
  });
  
  // 2) 从左往右
  type GetUser = (id: number, name: string) => object
  const getUserInfor: GetUser = (id, name) => {
      return { id, name }  // id被推断为number , name被推断为string
  }
  ```

* 泛型委托推断

  ```typescript
  function callback<F, S, T>(f: F, s: S, t: T, cb: (first: F, second: S, third: T) => void) {
  }
  
  callback('str', 123, true, (f, s, t) => {
      console.log(f); // (parameter) f: string
      console.log(s); // (parameter) s: number
  	console.log(t); // (parameter) t: boolean
  })
  ```

#### 类型守卫

通过 `typeof ` 、`instanceof`、 `in`  `is` 等来确定变量的类型。这样处理联合类型或在类型不明确的情况下就可以更好的由TypeScript 推断类型。

* type守卫

  ```typescript
  function Guards(UnionTypes: string | boolean) {
      if (typeof UnionTypes === 'string') {
          console.log(UnionTypes); // UnionTypes 被推断为 string
      } else {
          console.log(UnionTypes); // UnionTypes 被推断为 boolean
      }
  }
  ```

* instanceof守卫

  ```typescript
  function getCall(classInstance: Person | Dog) {
      if (classInstance instanceof Person) {
          classInstance.talk(); // 被推断为 Person 有 talk
      } else {
         classInstance.barking();  // 被推断为 Dog 有 barking
      }
  }
  ```

* in守卫

  ```typescript
  type Fish = { swim: () => void };
  type Bird = { fly: () => void };
  type Pet = Fish | Bird;
  
  function move(pet: Pet) {
    if ("swim" in pet) {
      pet.swim(); // pet 被推断为 Fish 类型
    } else {
      pet.fly(); // pet 被推断为 Bird 类型
    }
  }
  ```

* `is`类型谓词: TypeScript 自定义类型守卫

  ```typescript
  function isString(value: any): value is string {
    return typeof value === 'string'; // 必须返回boolean值，配合is ，定义断言类型守卫
  }
  
  function printValue(value: string | number) {
    if (isString(value)) {
      console.log(`String: ${value}`); // value 被推断为 string 类型
    } else {
      console.log(`Number: ${value}`); // value 被推断为 number 类型
    }
  }
  ```





### 模块化与配置

TypeScript 支持多种模块化系统，这使得开发者可以根据项目需求和个人偏好选择最适合的模块化方案。以下是 TypeScript 支持的一些主要模块化系统：

* **ES6 Modules**: TypeScript 支持 ES6 模块系统，它使用 `import` 和 `export` 关键字来导入和导出模块。
* **CommonJS**: 这是 Node.js 使用的模块系统。在这种系统中，模块通过 `require` 函数进行导入，并通过 `module.exports` 导出。
* **AMD (Asynchronous Module Definition)**: AMD 是一种异步模块加载系统，它允许模块在运行时被加载。这在需要异步加载模块的浏览器环境中非常有用。
* **UMD (Universal Module Definition)**: 这种模块系统旨在兼容多种模块加载器，包括 CommonJS 和 AMD。它允许开发者编写可以在不同环境中运行的代码。
* **SystemJS**: 这是一个动态模块加载器，它支持 ES6 模块以及其他模块格式。

在 TypeScript 中，你可以通过配置 `tsconfig.json` 文件中的 `module` 选项来指定你想要使用的模块系统。例如：

```json
{
  "compilerOptions": {
    "module": "es6" // "commonjs","es6", "esnext","amd", "umd", "system", "none"
  }
}
```

#### ES6 Modules

ES6 模块是现代 JavaScript 的标准模块系统。在 TypeScript 中，默认就是使用 ES6 模块。

**导入模块**:

```typescript
// 导入整个模块
import module from 'module-name';

// 导入模块中的特定部分
import { exportName } from 'module-name';

// 重命名导入
import { exportName as localName } from 'module-name';
```

**导出模块**:

```typescript
// 导出单个变量或函数
export const exportName = exportValue;

// 导出多个
export const exportName1 = exportValue1, exportName2 = exportValue2;

// 导出模块
export * from 'module-name';
```



#### CommonJS模块

CommonJS 是 Node.js 的模块系统。在 TypeScript 中使用 CommonJS 模块，你需要在 `tsconfig.json` 中设置 `module` 为 `"commonjs"`。

**导入模块**:

```typescript
// 导入整个模块
const module = require('module-name');

// 导入模块中的特定部分
const { exportName } = require('module-name');
```

**导出模块**:

```typescript
// 导出单个变量或函数
exports.exportName = exportValue;

// 或者导出多个
exports = {
  exportName1: exportValue1,
  exportName2: exportValue2
};

// 或者使用 module.exports
module.exports = {
  exportName1: exportValue1,
  exportName2: exportValue2
};
```



#### AMD 模块

AMD 是一种用于浏览器的模块化规范，通常与 RequireJS 一起使用。TypeScript 也支持这种模块化规范。

**导入模块**:

```typescript
define(['require', 'exports'], function (require, exports) {
  exports.myVar = 42;
  function myFunction() {
    console.log('Hello, World!');
  }
  exports.myFunction = myFunction;
});
```

**导出模块**:

```typescript
require(['./myModule'], function (myModule) {
  myModule.myFunction(); // Hello, World!
});
```



#### UMD 模块

UMD 是一种同时支持 AMD 和 CommonJS 的模块化规范，旨在创建可以在浏览器和 Node.js 环境中运行的模块。TypeScript 支持 UMD 模块。

* 导入模块（UMD 允许在 AMD, CommonJS 和全局变量三种环境下使用）
* AMD, CommonJS模块直接不兼容

**导入模块**:

```typescript
import myVar = require('module-name');
```

**导出模块**:

```typescript
// 导出模块
export const myVar = 42;
export function myFunction() {
  console.log('Hello, World!');
}
```



#### SystemJS模块

SystemJS 是一个动态模块加载器，支持 ES6 模块、AMD、CommonJS 等多种模块格式。

**导入模块**:

```typescript
// SystemJS 加载模块
System.import('./myModule').then(function (myModule) {
  myModule.myFunction(); // Hello, World!
});
```

**导出模块**:

```typescript
// 导出模块
export const myVar = 42;
export function myFunction() {
  console.log('Hello, World!');
}
```





#### 内部模块

##### 命名空间（Namespaces）

```typescript
// 定义
namespace MyNamespace {
    function sayHello() {
        console.log('Hello from MyNamespace!');
    }

    class Greeter {
        sayGoodbye() {
            console.log('Goodbye from MyNamespace!');
        }
    }
}

// 使用
MyNamespace.sayHello(); // 调用命名空间中的函数
let greeter = new MyNamespace.Greeter();
greeter.sayGoodbye(); // 使用命名空间中的类
```



##### 合并命名空间

**file1.ts**

```typescript
namespace MyNamespace {
    export function foo() {
        console.log('foo');
    }
}
```

**file2.ts**

```typescript
namespace MyNamespace {
    export function bar() {
        console.log('bar');
    }
}
```

**其他文件中导入**

```typescript
import { MyNamespace } from './path-to-file';
MyNamespace.sayHello();
```



##### 别名

```typescript
// 当命名空间名称过长时，可以使用别名简化访问：
namespace LongNamespaceName {
    export class SomeClass {
        public static doWork() {
            console.log("Working in SomeClass");
        }
    }
}

import LNN = LongNamespaceName;

LNN.SomeClass.doWork();
```



##### 命名空间的嵌套

```typescript
namespace OuterNamespace {
    export namespace InnerNamespace {
        export class InnerClass {
            public static greet() {
                console.log("Hello from InnerNamespace");
            }
        }
    }
}

OuterNamespace.InnerNamespace.InnerClass.greet();
```



##### 三斜线指令

它们通常用于引用其他文件、声明路径或者定义全局类型信息。三斜线指令总是位于文件的最顶端，仅在注释中有效。常见的三斜线指令包括 

* 三斜线指令必须出现在文件的最顶端，在任何非三斜线指令之前。用于在编译过程中提供额外的信息。
* 使用 `/// <reference path="..." />` 三斜线指令来引用其他文件。在编译时，可以将这些文件一起编译。以确保编译器正确地解析依赖关系。

* 在现代 TypeScript 项目中，使用三斜线指令的需求已减少，因为 TypeScript 支持基于模块的构建系统，如 Webpack、Rollup 等，能够自动处理文件依赖。
* 当使用模块系统（如 ES 模块或 CommonJS）时，通常不需要使用 `/// <reference path="..." />`，而是使用模块导入语句 (`import`/`export`) 来管理依赖关系。
* **用法1：** 用于引用其他 TypeScript 文件。这种指令在多文件项目中非常有用，可以确保编译器知道这些文件之间的依赖关系。

```typescript
/// <reference path="file1.ts" />
namespace MyNamespace {
    export class ClassTwo {
        public static methodTwo() {
            console.log("Method Two from ClassTwo");
        }
    }
}
```

* **用法2：**用于声明对类型定义文件的依赖。这种指令通常用于引入从 `@types` 包中获取的类型定义文件，如 `@types/jquery` 或 `@types/node`。

```typescript
/// <reference types="jquery" />
$(document).ready(() => {
    console.log("Document is ready");
});
```

* **用法3：** 用于告诉编译器不要包含默认的库文件。编写自定义的运行时库，或者在一些非常特殊的环境中，避免加载默认的 TypeScript 标准库。

```typescript
/// <reference no-default-lib="true"/>
```



#### 声明文件

* 声明文件的主要作用是提供类型定义，这些类型定义描述了库的结构和 API，使得 TypeScript 编译器可以进行类型检查和代码补全。

```typescript
// index.d.ts
declare function greet(name: string): string;  // declare 关键字用于告诉 TypeScript 这是一个外部函数
```

* TypeScript 社区在 DefinitelyTyped 上维护了大量的声明文件。这些声明文件可以通过 `@types` 作用域安装，例如：

```shell
npm install @types/jquery --save-dev
```

* 不同类型的声明文件和引用指令在项目中的作用范围和优先级有所不同。下面是TypeScript 查找声明文件的顺序通常如下简单总结:
  1. **从`tsconfig.json`配置的`include`字段开始查找**：TypeScript编译器会根据`tsconfig.json`文件中`include`字段指定的路径来查找声明文件。
  2. **查找项目中的`.d.ts`文件**：编译器会在项目目录中搜索以`.d.ts`为后缀的文件，并使用这些文件中的类型声明。
  3. **使用`@types`包**：对于第三方库，通常通过npm安装相应的`@types`包来提供类型声明。例如，安装`@types/jquery`来为jQuery库提供类型声明。
  4. **三斜线指令**：虽然在`.ts`文件中不再推荐使用，但在`.d.ts`文件中，三斜线指令（如`/// <reference path="..."/>`）仍然用于显式地包含其他声明文件。
  5. **全局类声明文件**：如果一个声明文件的顶层作用域中没有`import`和`export`，那么这个声明文件被视为全局类声明文件，其声明会在全局生效。
  6. **模块类声明文件**：如果声明文件的顶层作用域中有`import`或`export`，那么这个声明文件被视为模块类声明文件，其声明不会在全局生效，需要按照模块的方式导入才能使用。
  7. **声明合并**：TypeScript允许通过声明合并来扩展现有的类型声明，例如，可以通过扩展接口来为现有类型添加新的属性或方法。
  8. **使用`declare module`扩展模块**：可以使用`declare module 'module-name'`来为现有的模块添加额外的类型声明，这通常用于为没有类型声明的第三方库提供类型信息。
  9. **`node_modules/@types`目录**：TypeScript编译器会特别处理`node_modules/@types`目录下的包，每个包被视为一个模块，并且会寻找入口文件（通常是`index.d.ts`）以及通过三斜线指令或`import`引入的其他声明文件。



#### 配置

```json
{
    "compilerOptions": {
        /* 访问 https://aka.ms/tsconfig 以了解更多关于此文件的信息 */

        /* 项目 */
        // "incremental": true,                              /* 保存 .tsbuildinfo 文件以允许项目的增量编译。 */
        // "composite": true,                                /* 启用约束，允许 TypeScript 项目与项目引用一起使用。 */
        // "tsBuildInfoFile": "./.tsbuildinfo",              /* 指定 .tsbuildinfo 增量编译文件的路径。 */
        // "disableSourceOfProjectReferenceRedirect": true,  /* 禁用在引用复合项目时优先使用源文件而不是声明文件。 */
        // "disableSolutionSearching": true,                 /* 在编辑时，将项目排除在多项目引用检查之外。 */
        // "disableReferencedProjectLoad": true,             /* 减少 TypeScript 自动加载的项目数量。 */

        /* 语言和环境 */
        "target": "es2016",                                  /* 设置发出的 JavaScript 的语言版本，并包含兼容的库声明。 */
        // "lib": [],                                        /* 指定一组捆绑的库声明文件，这些文件描述目标运行时环境。 */
        // "jsx": "preserve",                                /* 指定生成的 JSX 代码。 */
        "experimentalDecorators": true,                      /* 启用对旧版实验性装饰器的实验性支持。 */
        // "emitDecoratorMetadata": true,                    /* 为源文件中装饰的声明发出设计类型元数据。 */
        // "jsxFactory": "",                                 /* 指定在目标为 React JSX 发射时使用的 JSX 工厂函数，例如 'React.createElement' 或 'h'。 */
        // "jsxFragmentFactory": "",                         /* 指定在目标为 React JSX 发射时用于片段的 JSX 片段引用，例如 'React.Fragment' 或 'Fragment'。 */
        // "jsxImportSource": "",                            /* 指定使用 'jsx: react-jsx*' 时用于导入 JSX 工厂函数的模块说明符。 */
        // "reactNamespace": "",                             /* 指定为 'createElement' 调用的对象。这仅适用于目标为 'react' JSX 发射。 */
        // "noLib": true,                                    /* 禁用包含任何库文件，包括默认的 lib.d.ts。 */
        // "useDefineForClassFields": true,                  /* 发出符合 ECMAScript 标准的类字段。 */
        // "moduleDetection": "auto",                        /* 控制用于检测模块格式 JS 文件的方法。 */

        /* 模块 */
        "module": "ESNext",                                  /* 指定生成的模块代码。 */
        // "rootDir": "./",                                  /* 指定源文件所在的根文件夹。 */
        // "moduleResolution": "node10",                     /* 指定 TypeScript 如何从给定的模块说明符中查找文件。 */
        // "baseUrl": "./",                                  /* 指定解析非相对模块名称的基本目录。 */
        // "paths": {},                                      /* 指定将导入重新映射到其他查找位置的一组条目。 */
        // "rootDirs": [],                                   /* 允许将多个文件夹视为一个文件夹来解析模块。 */
        // "typeRoots": [],                                  /* 指定充当 './node_modules/@types' 的多个文件夹。 */
        // "types": [],                                      /* 指定在不在源文件中引用的情况下包含的类型包名称。 */
        // "allowUmdGlobalAccess": true,                     /* 允许从模块访问 UMD 全局变量。 */
        // "moduleSuffixes": [],                             /* 在解析模块时搜索的文件名后缀列表。 */
        // "allowImportingTsExtensions": true,               /* 允许导入包含 TypeScript 文件扩展名的文件。需要设置 '--moduleResolution bundler' 和 '--noEmit' 或 '--emitDeclarationOnly'。 */
        // "resolvePackageJsonExports": true,                /* 在解析包导入时使用 package.json 的 'exports' 字段。 */
        // "resolvePackageJsonImports": true,                /* 在解析导入时使用 package.json 的 'imports' 字段。 */
        // "customConditions": [],                           /* 在解析导入时，除解析器特定的默认值之外设置的条件。 */
        // "resolveJsonModule": true,                        /* 启用导入 .json 文件。 */
        // "allowArbitraryExtensions": true,                 /* 启用导入具有任意扩展名的文件，前提是存在声明文件。 */
        // "noResolve": true,                                /* 禁止通过 'import'、'require' 或 '<reference>' 扩展 TypeScript 应添加到项目中的文件数量。 */

        /* JavaScript 支持 */
        // "allowJs": true,                                  /* 允许 JavaScript 文件成为程序的一部分。使用 'checkJS' 选项从这些文件中获取错误。 */
        // "checkJs": true,                                  /* 启用类型检查的 JavaScript 文件中的错误报告。 */
        // "maxNodeModuleJsDepth": 1,                        /* 指定从 'node_modules' 中检查 JavaScript 文件的最大文件夹深度。仅在 'allowJs' 时适用。 */

        /* 发射 */
        // "declaration": true,                              /* 从项目中的 TypeScript 和 JavaScript 文件生成 .d.ts 文件。 */
        // "declarationMap": true,                           /* 为 d.ts 文件创建源映射。 */
        // "emitDeclarationOnly": true,                      /* 仅输出 .d.ts 文件而不是 JavaScript 文件。 */
        "sourceMap": true,                                /* 为发出的 JavaScript 文件创建源映射文件。 */
        // "inlineSourceMap": true,                          /* 将源映射文件包含在发出的 JavaScript 中。 */
        // "outFile": "./",                                  /* 指定将所有输出捆绑到一个 JavaScript 文件中的文件。如果 'declaration' 为 true，还指定将所有 .d.ts 输出捆绑到一个文件中的文件。 */
        // "outDir": "./",                                   /* 指定所有发出文件的输出文件夹。 */
        // "removeComments": true,                           /* 禁用发出注释。 */
        // "noEmit": true,                                   /* 禁用从编译中发出文件。 */
        // "importHelpers": true,                            /* 允许从 tslib 中导入辅助函数，每个项目一次，而不是每个文件都包含它们。 */
        // "importsNotUsedAsValues": "remove",               /* 指定仅用于类型的导入的发出/检查行为。 */
        // "downlevelIteration": true,                       /* 为迭代发出更符合规范的，但冗长且性能较差的 JavaScript。 */
        // "sourceRoot": "",                                 /* 指定调试器查找引用源代码的根路径。 */
        // "mapRoot": "",                                    /* 指定调试器定位映射文件的位置，而不是生成的位置。 */
        // "inlineSources": true,                            /* 将源代码包含在发出的 JavaScript 的源映射中。 */
        // "emitBOM": true,                                  /* 在输出文件的开头发出 UTF-8 字节顺序标记 (BOM)。 */
        // "newLine": "crlf",                                /* 设置发出文件的换行符。 */
        // "stripInternal": true,                            /* 禁用发出在 JSDoc 注释中有 '@internal' 的声明。 */
        // "noEmitHelpers": true,                            /* 禁用在编译输出中生成自定义辅助函数（如 '__extends'）。 */
        // "noEmitOnError": true,                            /* 如果报告了任何类型检查错误，则禁用发出文件。 */
        // "preserveConstEnums": true,                       /* 禁用在生成的代码中擦除 'const enum' 声明。 */
        // "declarationDir": "./",                           /* 指定生成的声明文件的输出目录。 */
        // "preserveValueImports": true,                     /* 在 JavaScript 输出中保留未使用的导入值，否则会被删除。 */

        /* 互操作约束 */
        // "isolatedModules": true,                          /* 确保每个文件可以安全地单独转译，而不依赖于其他导入。 */
        // "verbatimModuleSyntax": true,                     /* 不转换或省略未标记为仅类型的任何导入或导出，确保它们按 'module' 设置的格式写入输出文件。 */
        // "allowSyntheticDefaultImports": true,             /* 当模块没有默认导出时，允许 'import x from y'。 */
        "esModuleInterop": true,                             /* 发出额外的 JavaScript，以简化导入 CommonJS 模块的支持。这启用 'allowSyntheticDefaultImports' 以实现类型兼容性。 */
        // "preserveSymlinks": true,                         /* 禁用解析符号链接到它们的真实路径。这与 node 中的同名标志相关。 */
        "forceConsistentCasingInFileNames": true,            /* 确保导入中的大小写正确。 */

        /* 类型检查 */
        "strict": true,                                      /* 启用所有严格的类型检查选项。
      // "noImplicitAny": true,                            /* 启用对具有隐含 'any' 类型的表达式和声明的错误报告。 */
        // "strictNullChecks": true,                         /* 进行类型检查时，考虑 'null' 和 'undefined'。 */
        // "strictFunctionTypes": true,                      /* 在分配函数时，检查参数和返回值是否类型兼容。 */
        // "strictBindCallApply": true,                      /* 检查 'bind'、'call' 和 'apply' 方法的参数是否匹配原始函数。 */
        // "strictPropertyInitialization": true,             /* 检查在构造函数中未设置的类属性。 */
        // "noImplicitThis": true,                           /* 启用当 'this' 被赋予 'any' 类型时的错误报告。 */
        // "useUnknownInCatchVariables": true,               /* 默认将 catch 子句变量设为 'unknown' 而不是 'any'。 */
        // "alwaysStrict": true,                             /* 确保始终发出 'use strict'。 */
        // "noUnusedLocals": true,                           /* 启用对未读取的局部变量的错误报告。 */
        // "noUnusedParameters": true,                       /* 启用对未读取的函数参数的错误报告。 */
        // "exactOptionalPropertyTypes": true,               /* 按照编写的方式解释可选属性类型，而不是添加 'undefined'。 */
        // "noImplicitReturns": true,                        /* 启用对未在函数中明确返回的代码路径的错误报告。 */
        // "noFallthroughCasesInSwitch": true,               /* 启用对 switch 语句中的 fallthrough 情况的错误报告。 */
        // "noUncheckedIndexedAccess": true,                 /* 在使用索引访问时向类型添加 'undefined'。 */
        // "noImplicitOverride": true,                       /* 确保在派生类中覆盖的成员标记有 override 修饰符。 */
        // "noPropertyAccessFromIndexSignature": true,       /* 强制使用索引访问器访问通过索引类型声明的键。 */
        // "allowUnusedLabels": true,                        /* 禁用对未使用的标签的错误报告。 */
        // "allowUnreachableCode": true,                     /* 禁用对不可达代码的错误报告。 */

        /* 完整性 */
        // "skipDefaultLibCheck": true,                      /* 跳过对 TypeScript 包含的 .d.ts 文件的类型检查。 */
        "skipLibCheck": true                                 /* 跳过对所有 .d.ts 文件的类型检查。 */
    }
}
```



### 内置类型

 #### 基础工具类型

##### Partial<T> (可选属性)

* 将类型 `T` 的所有属性变为可选。

  ```typescript
  interface User {
      id: number;
      name: string;
  }
  type PartialUser = Partial<User>; // { id?: number; name?: string; }
  ```

##### Required<T> (必选属性)

* 将类型 `T` 的所有属性变为必选。

  ```typescript
  interface User {
      id?: number;
      name?: string;
  }
  type RequiredUser = Required<User>; // { id: number; name: string; }
  ```

##### Readonly<T> (只读属性)

* 将类型 `T` 的所有属性变为只读。

  ```typescript
  interface User {
      id: number;
      name: string;
  }
  type ReadonlyUser = Readonly<User>; // { readonly id: number; readonly name: string; }
  ```

##### Parameters<T> (参数类型)

```typescript
function getUser(id: number, name: string) {
    return { id, name };
}
type Params = Parameters<typeof getUser>; // [number, string]
```

##### ReturnType<T> (返回类型)

* 获取函数类型 `T` 的返回类型。

  ```typescript
  function getUser() {
      return { id: 1, name: 'John' };
  }
  type User = ReturnType<typeof getUser>; // { id: number; name: string; }
  ```

##### ConstructorParameters<T> (构造函数类型)

* 获取构造函数类型 `T` 的参数类型组成的元组。

  ```typescript
  class User {
      constructor(public id: number, public name: string) {}
  }
  type Params = ConstructorParameters<typeof User>; // [number, string]
  ```

##### InstanceType<T> (实例类型)

* 获取构造函数类型 `T` 的实例类型。

  ```typescript
  class User {
      constructor(public id: number, public name: string) {}
  }
  type UserType = InstanceType<typeof User>; // User
  ```

##### Awaited<T> (解析Promise类型)

* 取一个 Promise 类型 `T` 的解析类型。

  ```typescript
  type P = Promise<string>;
  type P2 = Promise<Promise<number>>;
  type P3 = Promise<Promise<Promise<boolean>>>;
  
  type A = Awaited<P>; // string
  type A2 = Awaited<P2>; // number
  type A3 = Awaited<P3>; // boolean
  ```

##### ThisParameterType<T> (this类型)

* 获取某个函数类型 `T` 中 `this` 的类型。

  ```typescript
  class MyClass {}
  type MyGreetType = (this: MyClass) => void;
  
  // 使用 ThisParameterType 来获取 greet 方法的 this 参数类型
  type GreetThis = ThisParameterType<MyGreetType>; // MyClass
  ```

##### OmitThisParameter<T> (移除this类型)

* 用于从函数类型 `T` 中移除 `this` 参数。

  ```typescript
  type FunctionWithThis = (this: string, a: number, b: number) => void;
  type FunctionWithoutThis = OmitThisParameter<FunctionWithThis>; // (a: number, b: number) => void
  ```

##### NoInfer<T> (禁止推断类型)

* 用于阻止 TypeScript 推断函数参数的类型。

  ```typescript
  function identityWithNoInfer<T>(arg: T): NoInfer<T> {
      return arg;
  }
  // TypeScript 自行推断出result是 "Hello World"类型; 
  // 但是我们希望 result 的类型是 string，而不是 "Hello World"类型。
  const result = identityWithNoInfer("Hello World");  // 使用 NoInfer 禁止TypeScript自行推断
  ```

##### Uppercase<T> (字母大写)

* 用于字符串类型转换为大写。

  ```typescript
  type UppercaseGreeting = Uppercase<"hello world">; // "HELLO WORLD"
  ```

##### Lowercase<T> (字母小写)

* 用于字符串类型转换为小写。

  ```typescript
  type LowercaseGreeting = Lowercase<"HELLO WORLD">; // "hello world"
  ```

##### Capitalize<T> (首字母大写)

* 用于字符串类型转换为首字母大写。

  ```typescript
  type CapitalizedGreeting = Capitalize<"hello World">; // "Hello world"
  ```

##### Uncapitalize<T> (首字母小写)

* 用于字符串类型转换为首字母小写。

  ```typescript
  type UncapitalizedGreeting = Uncapitalize<"Hello world">; // "hello World"
  ```



#### 集合工具类型

##### Extract<T, U> (选取类型)

* 从类型 `T` 中提取出可分配给类型 `U` 的属性。

  ```typescript
  type T = string | number | boolean;
  type U = Extract<T, string | number>; // string | number
  ```

##### Extract<T, U> (排除类型)

* 从类型 `T` 中排除掉可分配给类型 `U` 的属性。

  ```typescript
  type T = string | number | boolean;
  type U = Exclude<T, string | number>; // boolean
  ```

##### NonNullable<T> (排空类型)

* 从类型 `T` 中排除 `null` 和 `undefined`。

  ```
  type T = string | number | null | undefined;
  type U = NonNullable<T>; // string | number
  ```



#### 映射工具类型

##### Pick<T, K> (选取类型)

* 从类型 `T` 中挑选部分属性 `K` 组成新的类型。

  ```typescript
  interface User {
      id: number;
      name: string;
      age: number;
  }
  type UserIdName = Pick<User, 'id' | 'name'>; // { id: number; name: string; }
  ```

##### Omit<T, K> (排除类型)

* 从类型 `T` 中剔除部分属性 `K` 组成新的类型。

  ```typescript
  interface User {
      id: number;
      name: string;
      age: number;
  }
  type UserWithoutAge = Omit<User, 'age'>; // { id: number; name: string; }
  ```

##### Record<K, T> (构造类型)

* 构造一个对象类型，其属性键为 `K`，属性值为 `T`。

  ```typescript
  type Role = 'admin' | 'user' | 'guest';
  type UserRoles = Record<Role, number>; // { admin: number; user: number; guest: number; }
  ```



### 类型体操



### 类型练习
