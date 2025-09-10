# 学堂

## arkts 语法

### class

arkts中 class 的实现可以通过 {} 的形式来创建，也可以调用class实例的方法。

```ts
class Person { 
    name: string;
    age: number; 

    constructor(name: string, age: number) { 
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

const person: Person = {name: "John", age: 30};
person.printInfo(); // John is 30 years old
```

### interface

interface 可以用来定义对象的结构，也可以用来定义函数的类型。

interface 中存在方法，那么这个接口就必须通过class来实现。

```ts
interface Person { 
    name: string;
    age: number;
    printInfo(): void;
}

class Employee implements Person {
    name: string;
    age: number; 

    constructor(name: string, age: number) { 
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
```

## stage 模型

## 生命周期

