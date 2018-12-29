/** 
 * 公有属性public
    class Animal {
        public name;
        public constructor(name) {
            this.name = name;
        }
    }

    let a = new Animal('Jack');
    console.log(a.name); // Jack
    a.name = 'Tom';
    console.log(a.name); // Tom
 * 私有属性private
    class Animal {
        private name;
        public constructor(name) {
            this.name = name;
        }
    }
    
    let a = new Animal('Jack');
    console.log(a.name); // 报错，无法访问
 * protected

    class Animal {
        protected name;
        public constructor(name) {
            this.name = name;
        }
    }

    class Cat extends Animal {
        constructor(name) {
            super(name);
            this.name = '1321'
        }
    }
    let cat = new Cat('cat')
    // console.log(cat.name) //报错，只能在Cat中访问
 * 实现implements接口
    interface Alarm {
        alert();
    }

    class Door {
    }

    class SecurityDoor extends Door implements Alarm {
        alert() {
            console.log('SecurityDoor alert');
        }
    }

    class Car implements Alarm {
        alert() {
            console.log('Car alert');
        }
    }
*/