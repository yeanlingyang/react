// 成员：属性和方法
// 实例成员：成员是给实例对象添加的， 实例.属性  实例.方法
// 静态成员：成员是直接给类（构造函数）添加的  类.属性  类型.方法

// Person: 类
// p: 实例对象
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHi() {
    console.log(`大家好，我是 ${this.name}`)
  }

  // static
  static eat() {
    console.log('吃饭')
  }

  static state = {
    msg: '嘻嘻'
  }
}

const p = new Person('zs', 18)
console.log(p.name)
// console.log(p.age)
// p.sayHi()
// p.eat()
// Person.eat()
// console.log(p)
// console.log(Person.state.msg)
