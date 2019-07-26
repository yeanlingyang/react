// 在jsx中的条件渲染
import React from 'react'
import ReactDOM from 'react-dom'

const isLoading = true
// 需求：如果isLoading为true, 显示：正在加载中。。。
// 如果isLoading是false 显示： 数据加载完成

function load() {
  // if (isLoading) {
  //   return <div>正在加载中....</div>
  // } else {
  //   return <div>数据加载完成</div>
  // }
  // return isLoading ? <div>正在加载中....</div> : <div>数据加载完成</div>

  // if (isLoading) {
  //   return <div>正在加载中....</div>
  // }
  return isLoading && <div>正在加载中....</div>
}

const element = <div>条件渲染：{load()}</div>

ReactDOM.render(element, document.getElementById('root'))
