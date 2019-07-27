// 类    一类事物的统称
// 对象
// 对象：无序的键值对的集合， 对象用于描述一个事物

// 语法
// class 类 {}

// class语法仅仅是一个语法糖
// Person类
class Person {
  // 类的构造器
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // 提供很多的方法
  sayHi() {
    console.log(`大家好,我是${this.name},今年${this.age}`)
  }

  eat() {
    console.log('吃')
  }
}

const p = new Person('俊俊', 18)
console.log(p)
p.sayHi()
p.eat()
