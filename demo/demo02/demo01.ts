/** 
 * 布尔值
    let isDone: boolean = true
    console.log(isDone)
 * 数字 
 
    let num: number = 6 //10进制数
    let num1: number = 0xf00d //16进制数
    let num2: number = 0o77 //8进制数
    let num3: number = 0b01 //2进制数
    console.log(num,num1,num2,num3)
 * 字符串
    let str: string = '我是字符串'
    let str1: string = `我是模板字符串，我可以写表达式${str}`
 * 空值
    function alertName(): void {
        alert('My name is Tom');
    }
    let unusable: void = undefined;
 * Null和Undefined
    let u: undefined = undefined;
    let n: null = null;
 * 任意值
    let myFavoriteNumber: any = 'seven';
    myFavoriteNumber = 7;
    let age //age为任意值
    age = 17
    age = '字符串'
 * 类型推广
    let num = 17//等价于let num: number = 17
    num = '字符串' //报错
 * 联合类型
    let myFavoriteNumber: string | number;
    myFavoriteNumber = 'seven';
    myFavoriteNumber = 7;
  */