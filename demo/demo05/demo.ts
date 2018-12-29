/** 
 * 函数参数与返回值
    function sum(x: number, y: number): number {
        return x + y
    }
    console.log(sum(1,2))
 * 函数表达式
    let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
        return x + y;
    };
 * 函数接口
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string): boolean {
    return source.search(subString) !== -1;
}