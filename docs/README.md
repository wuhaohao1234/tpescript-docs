# 简介

## 一、什么是typescript

**TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。TypeScript 是开源的。**

    TypeScript > es6 > javascript

    typescript也可以直接运行在node环境上

## 二、为什么选择 TypeScript

1. 强大的编辑工具支持语法提示

**vscode,sublime,atom,webstrom......**

2. 代码易于读写

typescript的类型声明可以让代码变得更好维护(有的时候也觉得贼麻烦,贼磨叽)

3. 报错能力级强

typescript更加严格,会让代码变得超级严谨(个人不是特喜欢严谨的代码)

## 三、安装typescript

1. 全局安装typescript命令行

`npm install -g typescript`

安装完成后运行tsc -v检查版本

`
tsc -v 
Version 3.1.1
`
2. 采用编辑器

    随意，个人觉得vscode比较好(typescript是微软搞的，vscode也是微软搞得)
## 四、第一个demo
```
function sayHello(person:string) {
    return 'hello'+person
}
let language = 'typescript'
console.log(sayHello(language))
```
1. 这里写了一个函数sayHello，接收一个参数person,类型为字符串类型(person也必须是字符串，不然会报错)
2. 声明一个language变量为typescript
3. 执行sayHello函数并传入language，把执行结果返回
## 编译
* 命令行运行tsc demo.ts
    得到编译文件demo.js文件
```
function sayHello(person) {
    return 'hello' + person;
}
var language = 'typescript';
console.log(sayHello(language));
```
## 运行
`node demo.js`

## 五、正式开始typescript

[数据类型](https://github.com/wuhaohao1234/tpescript-docs/#/data-type)