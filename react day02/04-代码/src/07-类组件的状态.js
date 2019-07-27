import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  // 通过给对象添加state属性来提供状态
  constructor() {
    super()
    // 给创建出来的对象添加
    this.state = {
      msg: 'hello react',
      money: 100
    }
  }
  render() {
    return (
      <div>
        <h1>组件的状态</h1>
        <p>消息：{this.state.msg}</p>
        <p>钱：{this.state.money}</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
