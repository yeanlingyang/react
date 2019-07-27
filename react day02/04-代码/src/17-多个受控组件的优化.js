// 属性名表达式： ES6的语法

// 在ES6以前，只有属性值可以是一个表达式
// 表达式： 字面量  变量   运算符拼接起来的式子

// ES6中允许对象的属性名可以是一个表达式，前提使用[]把属性名给包裹起来
const temp = 'aaaa'
const obj = {
  name: temp + 18,
  ['age' + 11]: 18,
  [temp + 22]: '11'
}

console.log(obj)
