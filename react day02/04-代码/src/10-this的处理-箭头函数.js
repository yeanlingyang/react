import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    msg: 'hello react'
  }

  // 1. 使用箭头函数的方式
  // onClick={this.handleClick}  问题：this是undefined
  // onClick = { () => this.handleClick() } 解决了this问题
  render() {
    return (
      <div>
        <h1>注册事件</h1>
        <button onClick={() => this.handleClick(1, 'zs')}>点我!!</button>
      </div>
    )
  }

  handleClick(id, name) {
    console.log('哈哈')
    console.log(this, id, name)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
