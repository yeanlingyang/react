class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // 快速的给一个实例添加属性
  state = {
    msg: '哈哈'
  }

  // 解决this的3种方式  箭头函数  bind  实例方法

  // 直接添加给当前的实例
  // sayHi = () => {
  //   console.log('哈哈哈')
  // }

  sayHi() {}
}

const p = new Person('zs', 18)
console.log(p)
p.sayHi()
