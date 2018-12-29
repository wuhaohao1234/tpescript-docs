# typescript数据类型

## 一、原始数据类型

### 1.1布尔值

    true(真) and false(假)
```
let isDone:boolean = true
```
### 1.2数值

    10进制，2进制，8进制，16进制
```
let num: number = 6 //10进制数
let num1: number = 0xf00d //16进制数
let num2: number = 0o77 //8进制数
let num3: number = 0b01 //2进制数
```
### 1.3字符串
    模板字符串可以写表达式
```
let str: string = '我是字符串'
let str1: string = `我是模板字符串，我可以写表达式${str}`
```
### 1.4空值
    JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
```
function alertName(): void {
    alert('My name is Tom');
}
```
    声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
`let unusable: void = undefined;`
### 1.5Null和Undefined
```
let u: undefined = undefined;
let n: null = null;
```
### 1.6任意值any
    变量: any
    变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
```
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
let age //age为任意值
age = 17
age = '字符串'
```
### 1.7类型推广
    如果变量声明没有指定类型,但是在第一次赋值的时候值的类型就是变量的类型，不能再发生改变
```
let num = 17//等价于let num: number = 17
num = '字符串' //报错
```
### 1.8联合类型
    联合类型使用 | 分隔每个类型。
```
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```
    这里的 let myFavoriteNumber: string | number 的含义是
    允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型。
注意:
1. 可以访问上述联合类型变量的公有属性.toString()
2. 但是不能访问私有属性长度
## 对象的类型接口
[对象的类型接口](https://github.com/wuhaohao1234/tpescript-docs/#/Interfaces)
