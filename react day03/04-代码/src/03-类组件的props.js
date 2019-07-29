import React from 'react'
import ReactDOM from 'react-dom'

// 一个组件，数据来源两个地方
// state: 用于提供组件私有的数据           可以随意修改
// props: 用于接收外界传递给当前组件的数据  只能读，不能写
class App extends React.Component {
  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <div>
        <h1>props的说明</h1>
        <p>{this.props.name}</p>
        <p>{this.props.money + 100}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App name="zs" money={100} flag={true} />,
  document.getElementById('root')
)
