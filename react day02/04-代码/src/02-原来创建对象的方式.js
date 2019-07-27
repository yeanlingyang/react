// 类   对象
// 如何创建对象（构造函数）
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayHi = function() {
  console.log(`大家好,我是${this.name},今年${this.age}`)
}

const p = new Person('俊俊', 18)
console.log(p)
p.sayHi()
