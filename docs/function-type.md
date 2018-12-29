# 函数的类型

## 一、函数的参数与返回值
    有的时候，我们更加希望确定函数的行为，例如纯函数
    所有参数确定，返回值确定
```
function sum(x:number,y:number):number{

}
console.log(sum(1,2))
```
    sum函数必须接收两个参数且必须是数字类型，返回值也必须是数字
## 二、函数表达式
```
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
```
    let mySum: (x: number, y: number) => number中代表的意思是函数接受的参数与返回值
    =代表赋值操作
    与es6箭头函数性质不同
## 三、接口
```
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string): boolean {
    return source.search(subString) !== -1;
}
```
## 四、可选参数
    与接口中的可选属性类似，我们用 ? 表示可选的参数：
```
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```
注意:
**可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了**
## 五、参数默认值
    TypeScript 会将添加了默认值的参数识别为可选参数：
```
function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```
    默认参数后面也可以添加必选参数
```
function buildName(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');
```
## 六、剩余参数
```
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);
```
## 七、重载
    重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
```
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

## 八、类型断言
    在联合类型中,可能会有不同的私有属性或者方法,这个时候用类型断言就可以指定参数是某一个类型
```
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
```

## 九、类型别名
    可以使用某一段字符代替某个类型
```
type Name = string;//这里的Name就等价于string
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
let name:Name = '我是字符串'
let fun:NameResolver = function():string{

}
```
## 十、字符串字面量类型
    使用一个变量代替某些字符串
```
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'
```
## 类
[类](https://github.com/wuhaohao1234/tpescript-docs/#/class)