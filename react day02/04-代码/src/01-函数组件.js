// 使用函数创建组件
import React from 'react'
import ReactDOM from 'react-dom'

// 约定1：首字母必须大写,  目的为了和html原本的标签进行区分
// 约定2：组件必须有返回值， 返回值指的就是组件需要渲染的内容
// 约定3：组件也可以返回null，没有实质的意义

//1. 定义函数组件
function Hello() {
  return <div>这是hello组件</div>
}

//2. 使用组件   把定义的组件当成一个标签来使用即可
const element = (
  <div>
    <h1>我是标题</h1>
    <Hello />
    <Hello />
    <Hello />
    <Hello />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
