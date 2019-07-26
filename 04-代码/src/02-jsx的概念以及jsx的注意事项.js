// 演示jsx的使用步骤
import React from 'react'
import ReactDOM from 'react-dom'

// 2. 创建react元素  jsx:  在js中写XML(HTML)代码
function fn () {
  return (
    <div>
      <h1 className="demo">哈哈哈哈</h1>
      <ul id="list">
        <li>相聚</li>
        <li>橘子</li>
        <li>苹果</li>
      </ul>
      <p/>
      <label htmlFor="1"></label>
    </div>
  )
  
}


console.log(fn())



// 3. 渲染react元素
ReactDOM.render(fn(), document.getElementById('root'))
