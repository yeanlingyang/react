// 继承： 子承父业  继承描述的是两个类之间的关系  子类可以继承父类
// 混入

// Animal   Dog 金毛  萨摩耶
// Person   Chinese  Africa

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHi() {
    console.log('大家好', this.name)
  }
}

// Chinese继承了 Person类
class Chinese extends Person {
  constructor(name, age) {
    // 如果在子类的constructor中想要添加内容，必须先调用super()
    // super指的是父类的构造函数
    super(name, age)
    this.skin = 'yellow'
  }
  pingpong() {
    console.log('想要世界冠军很简单，想要区冠军就太难了')
  }
}

class Africa extends Person {
  constructor(name, age) {
    super(name, age)
    this.skin = 'black'
    this.tooth = 'white'
  }

  run() {
    console.log('跑的贼快')
  }

  sayHi() {
    console.log('嘻嘻')
  }
}

const p = new Chinese('pp', 38)
console.log(p)
p.sayHi()

p.pingpong()

const zjj = new Africa('郑俊俊', 18)
console.log(zjj)
zjj.run()
zjj.sayHi()
