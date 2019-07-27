import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     msg: 'hello react'
  //   }
  // }
  state = {
    msg: 'hello react'
  }
  render() {
    return (
      <div>
        <h1>注册事件</h1>
        <button onClick={this.handleClick}>点我!!</button>
      </div>
    )
  }

  // 实例方法的方式
  // 比较新的语法，必须要有babel的支持
  handleClick = () => {
    console.log('哈哈')
    console.log(this.state.msg)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
