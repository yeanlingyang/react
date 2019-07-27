// 在jsx中的列表渲染
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const color = 'red'

// 如果使用style来控制样式，，，，，style的值 得是一个对象
// 使用className属性，来控制类名
const element = (
  <div>
    <p style={{ backgroundColor: color, width: '120px' }}>我是一个p标签</p>
    <span className="box">我是一个span标签</span>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
