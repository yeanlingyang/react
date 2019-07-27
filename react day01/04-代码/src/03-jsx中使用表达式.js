// 在jsx中如何嵌入表达式
import React from 'react'
import ReactDOM from 'react-dom'

const name = 'hcc'
const age = 24
const car = {
  brand: '新大洲'
}
const friends = ['月月鸟', '俊俊']
// jsx中可以使用 {} 插入表达式
// 1. 表达式的值可以是变量
// 2. 可以是对象的属性
// 3. 数组的某个元素
// 4. 三元运算符
// 5. 也可以调用方法
// 6. 可以是jsx本身


// 不能出现语句  if else for switch
function fn() {
  return '嘻嘻'
}

const link = <a href="http://www.baidu.com">点我</a>
const element = (
  <div>
    <h1>表达式</h1>
    <p>姓名：{name}</p>
    <p>年龄：{age}</p>
    <p>车：{car.brand}</p>
    {
      /* 
        这是多行注释
      */
    }
    {
      // 单行注释
      // ctrl + /
    }
    <p>朋友：{friends[0]}</p>
    <p>是否成年:{age >= 18 ? '是':'否'}</p>
    <p>全部的朋友：{friends.join('-')}</p>
    <p>消息：{fn()}</p>
    <p>连接：{link}</p>
    <p>{1+1}</p>

    {/* <p>{ for (age > 10) {} }</p> */}
  </div>
)

ReactDOM.render(element, document.getElementById('root'))