/** 
 * interface
    var tom = {
        name: 'Tom',
        age: 18
    };
    console.log(tom);
 * 可选属性
    interface Person {
        name: string;
        age?: number;
    }

    let tom: Person = {
        name: 'Tom'
    };
 * 任意属性
    interface Person {
        name: string;
        age?: number;
        [propName: string]: any;
    }

    let tom: Person = {
        name: 'Tom',
        gender: 'male'
    };
 * 只读属性
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

*/