// <h1>hello react</h1>
// 1. 引入两个文件
import React from 'react'
import ReactDOM from 'react-dom'

// 2. 创建react元素
const element = React.createElement('h1', null, 'hello react')

// 3. 渲染到页面中
ReactDOM.render(element, document.getElementById('root'))
