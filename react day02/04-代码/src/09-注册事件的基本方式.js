import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    msg: 'hello react'
  }
  render() {
    return (
      <div>
        <h1>注册事件</h1>
        {/* 
          onClick={ this.handleClick }
         */}
        <button onClick={this.handleClick}>点我!!</button>
        <a onClick={this.fn} href="http://www.baidu.com">
          点我一下
        </a>
      </div>
    )
  }

  // 1. 注册事件：onClick={ this.handleClick }
  // 2. 提供方法 handleClick

  // 注意：注册事件的时候，需要提供的函数的名字，而不是函数的调用
  handleClick() {
    console.log('哈哈')
    // console.log(this.state.msg)
    console.log(this)
  }

  fn(e) {
    e.preventDefault()
    console.log(e.pageX)
    console.log('嘻嘻')
    console.log(this)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
