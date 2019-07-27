import React from 'react'
import ReactDOM from 'react-dom'

// 创建一个类组件
// 约定1：首字母要大写
// 约定2：必须继承 React.Component
// 约定3：必须定义一个render方法
class Hello extends React.Component {
  render() {
    return <div>我是一个类组件-hello</div>
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'))
