# 对象的类型接口
    在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
## 一、接口(对象具有的属性与方法)
    在面向对象语言中，接口（Interfaces）是一个很重要的概念
    它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implements）。
    TypeScript 中的接口是一个非常灵活的概念
    除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。
### 1.1interface
    interface定义接口，说明该对象具有哪些属性与方法
```
interface Person {
    name:string;
    age:number;
}
let tom:Person = {
    name:'Tom',
    age:18
}
console.log(tom)
```
    上面的tom有且只能有name与age属性，并且类型必须正确，最后编译为
```
var tom = {
    name: 'Tom',
    age: 18
};
console.log(tom);
```
#### 可选属性
```
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom'
};
```
    上面的tom可以没有age,也可以有
#### 任意属性
    有时希望一个接口允许有任意的属性(很少这样做)
```
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    gender: 'male'
};
```
    上面的[propName: string]: any;说明可选属性为任意，但是
    1.age必须存在，且是数字
    2.可选属性的类型必须是字符串
#### 只读属性
    只能在创建的时候被赋值，并且无法改变。
    那么可以用 readonly 定义只读属性：
```
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

tom.id = 9527;

```
## 数组的类型
[数组的类型](https://wuhaohao1234.github.io/tpescript-docs/#/array-type)
