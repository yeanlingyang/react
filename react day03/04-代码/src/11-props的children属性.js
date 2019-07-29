import React from 'react'
import ReactDOM from 'react-dom'

class Modal extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>{this.props.title}</h3>
        <div>{this.props.children}</div>
        <button>确定</button>
      </div>
    )
  }
}

// 渲染组件
// 在react中，可以通过props的一个特殊的属性。children
// 通过children可以获取到写在组件标签内部的内容
ReactDOM.render(
  <div>
    <Modal title="提示">我是内容</Modal>
    <Modal title="温馨提示">你确定要退出吗</Modal>
    {/* <Modal>你确定要退出吗</Modal> */}
  </div>,
  document.getElementById('root')
)
