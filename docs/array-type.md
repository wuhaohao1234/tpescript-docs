# 数组的类型
    在 TypeScript 中，数组类型有多种定义方式，比较灵活。
## 1.「类型 + 方括号」表示法
```
let fibonacci: number[] = [1, 1, 2, 3, 5];
```
    数组的子元素必须是数字,如果子元素是其它数据类型必然报错
## 2. 数组泛型
    也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组：
```
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
let arrStr: Array<string> = ['字符串','字符串','字符串','字符串'];
```
## 3. 接口表示数组
    本质上数组也是个对象，所以可以用interface表示数组
```
interface NumArr {
    [index:number]: number;
}
let arrNum: Number = [1,2,3,4,5]
``` 
    因为数组的下标必须是数字，所以index为数字类型
    子元素所有都为数字
## 4.类数组(伪数组)
    这里尤为注意，类数组不是数组
## 5.函数的类型
[函数的类型](https://wuhaohao1234.github.io/tpescript-docs/#/function-type)
